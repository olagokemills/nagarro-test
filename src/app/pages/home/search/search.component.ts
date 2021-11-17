import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService } from 'src/app/core/services/stories.service';
import PaginationService from  "src/app/core/classes/index";
import { Stories } from 'src/app/core/model/stories.model';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SearchForm:FormGroup;
  p = 0;
  totalCount: any;
  pager:any = {};
  activePage = 1
  Stories:Stories;
  terms:any []
  constructor(
    private fb: FormBuilder,
    private homeService: StoriesService,
    private user: PaginationService,
    private gVars:GlobalsService
  ) { }

  ngOnInit(): void {
    this.SearchForm = this.fb.group({
      searchTerm:['',[]],
      page:[0]
    })
    this.terms = JSON.parse(localStorage.getItem('searchItem'))
  }

  SearchCategory(data)
  {
    this.gVars.spinner.show()
    this.pushTerms(data.searchTerm)
    console.log(data.searchTerm)
    this.homeService.SearchStories(data).subscribe(
      (res:any)=>{
        this.gVars.spinner.hide()
        this.Stories = res.response.docs
        this.totalCount= res.response.meta.hits
        this.pager = this.user.getPager(this.totalCount, this.activePage)
      },
      err=>{
        this.gVars.toastr.error("Unable to fetch items",'Please try again')
      }
    )
  }

  nextPage(data)
  {
    this.SearchForm.get('page').setValue(data)
    this.SearchCategory(this.SearchForm.value)
  }

  setPage(page:number)
  {
    this.activePage = page
    if(page < 1 || page > this.pager.totalPages)
    {
      return
    }
    this.pager = this.user.getPager(this.totalCount, page)
    this.SearchForm.get('page').setValue(page)
    this.SearchCategory(this.SearchForm.value)
   this.scrollTop()
  }

  scrollTop=()=>
  {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }

  returnFullUrl(data:string)
  {
    return 'https://static01.nyt.com/'+data;
  }

  pushTerms(data)
  {
    console.log(typeof(this.terms))
    if(this.terms.length > 5)
    {
      this.terms.shift();
      this.terms.push(data)
      localStorage.setItem('searchItem',JSON.stringify(this.terms))
    }else{
      this.terms.push(data)
      localStorage.setItem('searchItem',JSON.stringify(this.terms))
    }
    
  }
}

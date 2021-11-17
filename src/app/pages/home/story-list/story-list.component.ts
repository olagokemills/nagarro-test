import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
import { Stories } from 'src/app/core/model/stories.model';
import { StoriesService } from 'src/app/core/services/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit, OnChanges{

  @Input()Category:string;
  Stories:Stories[];
  constructor(
    private storyService:StoriesService,
    private gVars:GlobalsService
  ) { }

  ngOnInit(): void {
    
  }
  ngOnChanges()
  {
    this.FetchStories(this.Category)
  }

  FetchStories(data)
  {
    console.log(this.Category)
    this.storyService.FetchTopStories(data).subscribe(
      (res:any)=>{
        this.Stories = res.results
      },
      err=>{
        console.log(err)
      }
    )
  }

  CutString=(string, length)=>{
    return string.length > length ? string.substring(0, length) + '...' :string;
  }

  ReadMore(data)
{
  sessionStorage.setItem('selectedStory',JSON.stringify(data))
  this.gVars.router.navigate(['/home/top-stories/details'])
}


}

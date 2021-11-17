import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/core/services/stories.service';
import { Stories } from 'src/app/core/model/stories.model';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  Stories:Stories[];
  Category: string = 'home';

  constructor(
    private storyService:StoriesService,
    private gVars:GlobalsService
  ) { }

  ngOnInit(): void {
    
  }


ViewCategory(data:string)
{
  this.Category = data
}

}

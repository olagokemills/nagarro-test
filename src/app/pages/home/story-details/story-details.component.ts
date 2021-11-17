import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
import { Comments } from 'src/app/core/model/comments.model';
import { Stories } from 'src/app/core/model/stories.model';
import { StoriesService } from 'src/app/core/services/stories.service';


@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
story:any;
comments:Comments;
  constructor(
    private storyService:StoriesService,
    private gVars:GlobalsService
  ) { }

  ngOnInit(): void {
    this.FetchComments()
  }

  FetchComments()
  {
    const story = JSON.parse(sessionStorage.getItem('selectedStory'))
    if(story)
    {
      this.story = story
      this.storyService.FetchComments(story.url).subscribe(
        (res:any)=>{
          if(res)
          {
           this.comments =res.results.comments
          }
        }
      )
    }
    else{
      this.gVars.location.back()
    }
  }
}

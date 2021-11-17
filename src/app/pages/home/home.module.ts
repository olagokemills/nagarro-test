import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TopStoriesComponent,HomeComponent, StoryDetailsComponent, StoryListComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

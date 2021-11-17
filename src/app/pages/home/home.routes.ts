import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

export const HomeRoutes:Routes = [
    { path:'' , redirectTo:'top-stories', pathMatch:'full' },
    { path:'top-stories', component:TopStoriesComponent},
    { path:'search', component:SearchComponent},
    { path:'top-stories/details', component:StoryDetailsComponent},
]
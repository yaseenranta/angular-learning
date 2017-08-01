import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import {CoursesComponent} from './components/course.component';
import {AuthorComponent} from './components/author.component';
import {AutoGrowDirective} from './directives/auto-grow.directive';
import {FavoriteComponent} from './components/favorite.component';
import {LikeComponent} from './components/like.component';
import {VoteComponent} from './components/vote.component';
import {ChallengeComponent} from './components/challenge.component';
import {SummaryPipe} from './pipes/summary.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    FavoriteComponent,
    AutoGrowDirective,
    LikeComponent,
    VoteComponent,
    ChallengeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {CoursesComponent} from '../components/course.component';


@Component({
  selector: 'app-root',
  templateUrl: '../../../public/html/app.component.html',

})

export class AppComponent {
  title = 'app';
  yr_solve = {
      name : 'Muhammad Yaseen',
      age  : '25'
  };

  post = {
    title : 'this is first title',
    favorite : true,
    like : false,
    total : 30,
    upvote :false,
    downvote : false
  };
  pipePractice = {
    title : 'loreum impsum loreum impsum loreum impsum loreum impsum loreum impsum loreum impsum loreum impsum loreum impsum',
    students : 5543334334,
    rating : 44.444,
    price : 53334333
  };


  yell(e) {

      console.log(e);
  }


}

import {Component, Output, EventEmitter} from '@angular/core';
import {AuthorServices} from '../services/author.services';


@Component({
  selector : 'app-author',
  templateUrl : '../../../public/html/author.component.html',
  providers : [AuthorServices]
})


export class AuthorComponent {
  title  = 'Author\'s list';
  authorList;

  constructor(At: AuthorServices) {
    this.authorList = At.authorList();
  }

}

import {Component} from '@angular/core';

@Component({
  selector : 'app-yrform',
  templateUrl : '../../../public/html/form.component.html'
})


export class YRFormComponent {

  title = 'Form practice';
  data  = {
    name : '',
    email : '',
    message : '',
  }

  save(data) {
    console.log(data);
  }

}

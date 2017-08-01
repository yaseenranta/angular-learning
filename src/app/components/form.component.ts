import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector : 'app-yrform',
  templateUrl : '../../../public/html/form.component.html',
  styles : [`
        .ng-invalid.ng-touched{border-color:red;}
        .ng-valid.ng-touched{border-color:green;}
  `],
  providers: [FormControl]
})


export class YRFormComponent {

  title = 'Form practice';
  data  = {
    name : '',
    email : '',
    message : '',
    selectbox:'',
  }
  options = [
    {id : 1,name: 'test 1'},
    {id : 2,name: 'test 2'},
    {id : 3,name: 'test 3'},
  ];

  form = {
      username : new FormControl('', Validators.required),
  }



  constructor(FormControl: FormControl){

  }

  save(data) {
    console.log(data);
  }



}

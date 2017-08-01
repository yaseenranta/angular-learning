import {Component} from '@angular/core';
import {ChallengeServices} from '../services/challenge.services';
@Component({

  selector : 'app-challenge',
  templateUrl : '../../../public/html/challenge.component.html',
  styles : [``],
  providers : [ChallengeServices]

})

export class ChallengeComponent {

  title = 'Challenge Component';
  posts ;

  constructor(challengeService: ChallengeServices) {
    this.posts = challengeService.List();
  }

  yell(e){
    console.log(e);
  }

}

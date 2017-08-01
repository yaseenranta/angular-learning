import {Component, Input} from '@angular/core';


@Component({
  selector : 'app-vote',
  templateUrl : '../../../public/html/vote.component.html',
  styles : [`
    .orange{color:orange}
  `]
})

export class VoteComponent {

  title = 'Vote Component';
  @Input() Total;
  @Input() upVoted = false;
  downVoted = false;

  onClickUp() {
    if (!this.upVoted) {
        this.Total += 1;
        this.upVoted = !this.upVoted;
        this.downVoted = false;
    }
  }

  onClickDown() {
    if (!this.downVoted) {
      this.Total -= 1;
      this.upVoted = false;
      this.downVoted = !this.downVoted;
    }
  }

}

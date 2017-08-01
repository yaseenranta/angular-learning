import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'app-heart',
    templateUrl : '../../../public/html/like.component.html',
    styles : [
      `.glyphicon-heart{color: deeppink;}
      .glyphicon-heart-empty{color: #ccc;}`
    ]
})


export class LikeComponent {
  title = 'Heart Component';

  @Input() Islike = false;
  @Input() Total ;
  @Output() onYR = new EventEmitter();

  onClick() {
    if(this.Islike) {
      this.Total -= 1;
    }else {
      this.Total += 1;
    }

    this.Islike = !this.Islike;
    this.onYR.emit({newValue : true});
  }

}

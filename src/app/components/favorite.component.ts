import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component ({
  selector : 'app-favorite',
  templateUrl : '../../../public/html/favorite.component.html'
})

export class FavoriteComponent{

  @Input() isFavorite = false;
  @Output() onYR = new EventEmitter();



  changeClass () {
      this.isFavorite = !this.isFavorite;
      this.onYR.emit({newvalue: this.isFavorite});
  }

}

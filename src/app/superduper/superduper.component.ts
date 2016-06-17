import { Input, Output, Component, EventEmitter} from '@angular/core';


@Component({
  selector: 'my-superduper',
  template: require('./superduper.component.html'),
  styles: [require('./superduper.component.css')]
})
export class SuperDuperComponent {
  @Output() clicker = new EventEmitter();
  @Input() lbl: string;
 }

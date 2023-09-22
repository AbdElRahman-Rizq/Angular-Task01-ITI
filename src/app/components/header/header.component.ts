import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  activeComponent = 'home';

  showComponent(component: string) {
    this.activeComponent = component;
    this.myEvent.emit(this.activeComponent);
  }

  @Output() myEvent = new EventEmitter();
}

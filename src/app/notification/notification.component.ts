import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: `<div class="alert alert-success notification" [hidden]="displayNotification">
  <p>This website uses cookies for better user experience</p>
  <button class='btn close-btn' (click)="closeNotification()">X</button>
</div>`,
  styles: [
    ".notification { padding: 15px 20px; position: relative; border-radius: 5px; }",
    "p { font-size: 14px; margin: 0; padding-right: 30px; }",
    ".close-btn { position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 18px; cursor: pointer; }"
  ]
})
export class NotificationComponent {
  
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }

}

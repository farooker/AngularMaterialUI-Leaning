import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}
  notifications = [
    { icon: 'email', title: 'New Email', message: 'You have a new email.' },
    { icon: 'notifications', title: 'New Notification', message: 'You have a new notification.' },
    // Add more notifications as needed
  ];
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

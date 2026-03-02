import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.css'],
})
export class UserStatus {
  
  // ===============================================
  // @Input receives the current online status
  // from the parent component
  // ===============================================
  @Input() isOnline = false;

  // ===============================================
  // @Output sends updated value back to parent
  // EventEmitter is used to emit events upward
  // ===============================================
  @Output() statusChanged = new EventEmitter<boolean>();

  // Toggles status and emits the new value
  toggleStatus() {
    this.statusChanged.emit(!this.isOnline);
  }
}
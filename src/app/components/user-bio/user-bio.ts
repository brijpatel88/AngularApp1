import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,

  // FormsModules is required to use ngModel
  imports: [FormsModule],
  templateUrl: './user-bio.html',
  styleUrls: ['./user-bio.css'],
})
export class UserBio {

  // ===============================================
  // Receives bio text from parent component
  // ===============================================
  @Input() bio = '';

  // ===============================================
  // Emits updated bio back to parent
  // ===============================================
  @Output() bioChanged = new EventEmitter<string>();

  // Temporary variable used for editing
  editedBio = '';

  // Copies current bio into editable field
  startEdit() {
    this.editedBio = this.bio;
  }

  // Sends trimmed updated bio back to parent
  save() {
    this.bioChanged.emit(this.editedBio.trim());
  }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCard {
  
  // ===============================================
  // @Input allows this component to receive
  // data from its parent component (App)
  // ===============================================
  @Input() user!: User;
}
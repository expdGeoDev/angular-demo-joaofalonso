import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee-notification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coffee-notification.component.html',
  styleUrl: './coffee-notification.component.css'
})
export class CoffeeNotificationComponent {

}

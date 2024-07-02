import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Coffee } from '../../data/coffee-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coffee-details.component.html',
  styleUrl: './coffee-details.component.css'
})
export class CoffeeDetailsComponent {

  @Input() coffee! : Coffee ;
  @Output() coffeeAdded = new EventEmitter();

  roastOptions = ['light' , 'medium' , 'dark']

  submitButtonClicked(coffee: Coffee){
    this.coffeeAdded.emit();
  }

}

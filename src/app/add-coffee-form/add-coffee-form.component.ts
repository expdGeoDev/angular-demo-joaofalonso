import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coffee, RoastType, GroundOrBeans } from '../../data/coffee-data';
import { UIRouter } from '@uirouter/angular';
import { CoffeeDataService } from '../coffee-data.service';
import { CommonModule } from '@angular/common';
import { CoffeeNotificationComponent } from '../coffee-notification/coffee-notification.component';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [FormsModule, CommonModule, CoffeeNotificationComponent],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})

export class AddCoffeeFormComponent {
  newCoffee: Coffee = {id : 0, brand:'',groundOrBeans:undefined, 'roast': RoastType.Dark };
  roastOptions = Object.values(RoastType);
  constructor(private router :UIRouter, private coffeeSvc : CoffeeDataService){

  }

  createNewCoffee(){
    this.coffeeSvc.addCoffee(this.newCoffee);
    this.router.stateService.go('services-demo');
  }

}

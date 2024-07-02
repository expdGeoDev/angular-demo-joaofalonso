import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coffee, RoastType, GroundOrBeans } from '../../data/coffee-data';
import { UIRouter } from '@uirouter/angular';
import { CoffeeDataService } from '../coffee-data.service';
import { CommonModule } from '@angular/common';
import { CoffeeDetailsComponent } from '../coffee-details/coffee-details.component';


@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [FormsModule, CommonModule, CoffeeDetailsComponent],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})

export class AddCoffeeFormComponent {
  
  coffee : Coffee ={id : 0, brand:'',groundOrBeans:undefined, 'roast': undefined};
  msg?: string;
  constructor(private router :UIRouter, private coffeeSvc : CoffeeDataService){

  }

  createNewCoffee(coffee : Coffee){
    this.coffeeSvc.addCoffee(coffee);
    // this.router.stateService.go('services-demo');
    this.msg = 'Coffee added: Brand' + coffee.brand + 'Ground or Beans:' + coffee.groundOrBeans + 'Roast:' + coffee.roast;
  }

}

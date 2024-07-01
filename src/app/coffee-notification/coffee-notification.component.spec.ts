import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeNotificationComponent } from './coffee-notification.component';

describe('CoffeeNotificationComponent', () => {
  let component: CoffeeNotificationComponent;
  let fixture: ComponentFixture<CoffeeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

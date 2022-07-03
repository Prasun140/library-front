import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLendingComponent } from './add-lending.component';

describe('AddLendingComponent', () => {
  let component: AddLendingComponent;
  let fixture: ComponentFixture<AddLendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

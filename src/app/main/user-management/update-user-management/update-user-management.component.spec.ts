import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserManagementComponent } from './update-user-management.component';

describe('UpdateUserManagementComponent', () => {
  let component: UpdateUserManagementComponent;
  let fixture: ComponentFixture<UpdateUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

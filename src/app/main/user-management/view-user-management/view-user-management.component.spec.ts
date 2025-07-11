import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserManagementComponent } from './view-user-management.component';

describe('ViewUserManagementComponent', () => {
  let component: ViewUserManagementComponent;
  let fixture: ComponentFixture<ViewUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

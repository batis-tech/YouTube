import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelhomeComponent } from './channelhome.component';

describe('ChannelhomeComponent', () => {
  let component: ChannelhomeComponent;
  let fixture: ComponentFixture<ChannelhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

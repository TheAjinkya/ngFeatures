import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrangAndDropComponent } from './drang-and-drop.component';

describe('DrangAndDropComponent', () => {
  let component: DrangAndDropComponent;
  let fixture: ComponentFixture<DrangAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrangAndDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrangAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

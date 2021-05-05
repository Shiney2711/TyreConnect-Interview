import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTextMatchComponent } from './sub-text-match.component';

describe('SubTextMatchComponent', () => {
  let component: SubTextMatchComponent;
  let fixture: ComponentFixture<SubTextMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTextMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

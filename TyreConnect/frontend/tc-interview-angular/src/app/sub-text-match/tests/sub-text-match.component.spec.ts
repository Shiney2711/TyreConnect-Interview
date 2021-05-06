import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtextMatchComponent } from './sub-text-match.component';

describe('SubtextMatchComponent', () => {
  let component: SubtextMatchComponent;
  let fixture: ComponentFixture<SubtextMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtextMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

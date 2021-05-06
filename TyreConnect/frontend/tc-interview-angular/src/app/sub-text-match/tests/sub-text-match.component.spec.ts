import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

import { SubtextMatchComponent } from '../components/sub-text-match.component';

describe('SubtextMatchComponent', () => {
  let component: SubtextMatchComponent;
  let fixture: ComponentFixture<SubtextMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      declarations: [ SubtextMatchComponent ],
      providers: [ FormBuilder ]
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

  it('should display an error on null values for "Text"', () => {
    component.text = null
    component.subtext = "test"
    component.onSubmit()
    expect(component.gotError).toBeTrue();
  });

  it('should display an error on null values for "Subtext"', () => {
    component.text = "test"
    component.subtext = null
    component.onSubmit()
    expect(component.gotError).toBeTrue();
  });

  it('should display an error when "Subtext" is longer than "Text"', () => {
    component.text = "test"
    component.subtext = "test but longer"
    component.onSubmit()
    expect(component.gotError).toBeTrue();
  });

});

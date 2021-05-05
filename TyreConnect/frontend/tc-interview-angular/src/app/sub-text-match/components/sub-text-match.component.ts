import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SubTextMatchService } from '../services/sub-text-match.service';

@Component({
  selector: 'app-sub-text-match',
  templateUrl: './sub-text-match.component.html',
  styleUrls: ['./sub-text-match.component.css']
})
export class SubTextMatchComponent implements OnInit {
  subTextForm = this.formBuilder.group({
    text: '',
    subtext: ''
  });

  constructor(
    private SubTextMatchService: SubTextMatchService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Values are', this.subTextForm.value);
    console.log("received data")
    this.SubTextMatchService.getMatches(this.subTextForm.value.text, this.subTextForm.value.subtext)
    .subscribe(
      data => console.log("data", data),
      err => console.log("error", err)
    );
    this.subTextForm.reset();
  }

}

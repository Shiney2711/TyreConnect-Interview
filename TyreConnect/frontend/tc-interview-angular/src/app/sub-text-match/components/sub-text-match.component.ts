import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SubtextMatchService } from '../services/sub-text-match.service';

interface SubtextMatch {
  text: string,
  subtext: string,
  indexes: number[]
}

@Component({
  selector: 'app-sub-text-match',
  templateUrl: './sub-text-match.component.html',
  styleUrls: ['./sub-text-match.component.css']
})
export class SubtextMatchComponent implements OnInit {

  gotData: Boolean
  gotError: Boolean
  noMatches: Boolean
  errMessage: string
  text: string
  subtext: string
  indexes: number[]

  subtextForm = this.formBuilder.group({
    text: '',
    subtext: ''
  });

  constructor(
    private SubtextMatchService: SubtextMatchService,
    private formBuilder: FormBuilder) {
      this.gotData = false
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Values are', this.subtextForm.value);
    this.text = this.subtextForm.value.text
    this.subtext = this.subtextForm.value.subtext

    if (this.text === null || this.subtext === null || this.text === '' || this.subtext === '' ) {
      this.errMessage = "Please enter values for Text and Subtext"
      this.gotData = false
      this.gotError = true
      return
    } else if (this.text.length < this.subtext.length) {
      this.errMessage = "Subtext cannot be shorter than Text"
      this.gotData = false
      this.gotError = true
      return
    }

    this.SubtextMatchService.getMatches(this.text, this.subtext)
    .subscribe(
      (data: SubtextMatch) => {
        console.log("data", data)
        this.indexes = data.indexes
        if (this.indexes.length > 0) {
          this.gotData = true
        } else {
          this.noMatches = true
        }
      },
      err => {
        console.log("error", err)
        this.errMessage = err.error.split('at')[0]
        this.gotError = true
        this.gotData = false
      }
    );
    this.subtextForm.reset();
  }

  onChange() {
    this.gotError = false
    this.gotData = false
    this.noMatches = false
  }

}

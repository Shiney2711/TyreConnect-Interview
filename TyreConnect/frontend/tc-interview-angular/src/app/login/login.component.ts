import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.isLoading = true
    setTimeout(() => 
    {
      this.isLoading = false
      this.router.navigateByUrl('/match')
    },
    2000);
  }

}

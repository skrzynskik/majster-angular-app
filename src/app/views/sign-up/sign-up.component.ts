import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(
    public authService: AuthService
    
  ) {}
}

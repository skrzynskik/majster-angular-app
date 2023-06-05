import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent {
  constructor(public authService: AuthService) { }
}

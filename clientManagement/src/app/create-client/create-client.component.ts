import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientDataService } from '../client-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    gender: '',
    password: '',
    rpassword: ''
  };

  pwdMismatch = false;

  constructor(private clientData: ClientDataService, private route: Router){
      
  }

  submitForm(form: any): void {
    this.clientData.setClientList(this.userDetails.name, this.userDetails.email);
    this.route.navigateByUrl('');
  }

  passwordValidator() {
    if (this.userDetails.password === this.userDetails.rpassword) {
      this.pwdMismatch = false;
    }
    else {
      this.pwdMismatch = true;
    }
  }
}

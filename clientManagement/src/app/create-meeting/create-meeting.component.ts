import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-meeting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})
export class CreateMeetingComponent {
  meetingDetails = {
    topic: '',
    people: 0,
    startTime: null

  }
  constructor( private route: Router){
      
  }
  submitForm(form: any): void {
    
    this.route.navigateByUrl('');
  }
}

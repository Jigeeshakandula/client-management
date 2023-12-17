import { Component } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {
  clientList: any;
  constructor(private dataService: ClientDataService){
    this.clientList = this.dataService.getClientsList();
  }

}

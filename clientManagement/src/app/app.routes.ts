import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

export const routes: Routes = [
    { path: '', component: ClientListComponent },
    { path: 'addclient', component: CreateClientComponent},
    { path: 'addmeeting', component: CreateMeetingComponent}
];

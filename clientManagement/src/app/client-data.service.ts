import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  clients = [{name: 'Rakesh', email: 'rakesh@gmail.com'},
  {name: 'Neel', email: 'neel@gmail.com'},
  {name: 'Rakesh', email: 'rakesh@gmail.com'},
  {name: 'Amit', email: 'amit@gmail.com'},
  {name: 'Lisa', email: 'lisa@gmail.com'},
  {name: 'Mona', email: 'mona@gmail.com'},
  {name: 'Kaya', email: 'kayaa@gmail.com'},
  {name: 'Reeta', email: 'reeta@gmail.com'}];

  constructor() { }

  getClientsList(){
    return this.clients;
  }

  setClientList(name: string, email: string){
    this.clients.push({name: name, email: email});
  }
}

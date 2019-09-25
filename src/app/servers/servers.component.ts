import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Initial Message';
  username = '';
  serverCreated = false;
  servers=['TestServer', 'TestServer 2'];
  isSecret = false;
  secrets = [];

  constructor() {
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was create! Name is '+this.serverName;
  }

  onRemoveServer(id:number){
    const position = id;
    this.servers.splice(position, 1);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetUsername(){
    this.username = '';
  }

  displaySecret(){
    this.isSecret = !this.isSecret;
    this.secrets.push(new Date());
  }
}

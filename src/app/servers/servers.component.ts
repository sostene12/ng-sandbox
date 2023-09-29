import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was creates!';
  serverName = '';
  showSecret = true;
  log: number[] = [];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true 
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = `Server Created. Name is ${this.serverName}`
  }
  onUpdateServerName(event:any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleSecret(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }
}

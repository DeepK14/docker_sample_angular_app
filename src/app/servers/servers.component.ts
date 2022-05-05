import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  activationAllowed:boolean=false;
  serverCreated:string="Not Created Yet";
  serverName='';
  serverStatus=false;
  serverList=['TestServer','TeamTanay']

  userName='';
  constructor() {
      setTimeout(()=>{
          this.activationAllowed=true;
      },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverStatus=true;
    this.serverCreated="Server Created and Server Name is : "+this.serverName;
    this.serverList.push(this.serverName);
  }

  clearUserName()
  {
    this.userName='';
  }
  /*onGenerateServerName(event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  */
}

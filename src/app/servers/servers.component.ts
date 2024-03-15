import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload1(){

    // absolute
    // => /servers
    this.router.navigate(['servers']);
  }

  onReload2(){

    // absolute
    // => /servers
    this.router.navigate(['/servers']);
  }

  onReload3(){
   
    // relative
    // => servers/servers
    this.router.navigate(['servers'], {relativeTo:this.route})
  }

  onReload4(){

    // absolute
    // => /servers
    this.router.navigate(['/servers'], {relativeTo:this.route})
  }

}

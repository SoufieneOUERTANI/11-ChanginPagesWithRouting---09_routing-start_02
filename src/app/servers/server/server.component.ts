import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data :Data) => {
        this.server =data['server'];
      }
    )
  }

  onEdit() {
    // // Absolute
    // this.router.navigate(['servers/'+ [this.server.id] +'/edit']);
    // Relative
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling :'preserve'});
  }
}

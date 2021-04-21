import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/interfaces/producto';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  constructor(private title: Title, private log : LoginService) { }

  ngOnInit(): void {
    this.title.setTitle('El colombianito');
  }

}

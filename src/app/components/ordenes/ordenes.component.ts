import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  OrdenesService } from 'src/app/services/ordenes/ordenes.service';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  }
];


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[] = [];

  ordenes : any = [];
  item : number = 0;

  constructor(private _ordenService :  OrdenesService) {
    this.refreshOrdenes();
  }

  refreshOrdenes() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._ordenService.getOrdenes().subscribe(data => {
      this.ordenes = data;
      console.log(this.ordenes);
    })
  }

}

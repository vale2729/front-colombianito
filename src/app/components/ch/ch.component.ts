import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInicioComponent } from '../modal-inicio/modal-inicio.component';


@Component({
  selector: 'app-ch',
  templateUrl: './ch.component.html',
  styleUrls: ['./ch.component.scss']
})
export class ChComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    const modal = this.modalService.open(ModalInicioComponent, { size: 'md'});
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from './../../services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  listas: Lista[] = [];

  @Input() terminada = true;
  constructor(public deseosService: DeseosService, private router: Router) {
    this.listas = deseosService.listas;
  }
  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    console.log(lista);
    if (this.terminada) {
       this.router.navigate([`tabs/tab2/agregar/${lista.id}`]);
    } else {
      this.router.navigate([`tabs/tab1/agregar/${lista.id}`]);
    }
  }

}

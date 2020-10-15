import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { DeseosService } from './../../services/deseos.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList, {static: false}) lista: IonList;
  @Input() terminada = true;
  constructor(public deseosService: DeseosService, private router: Router) {
  }
  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
       this.router.navigate([`tabs/tab2/agregar/${lista.id}`]);
    } else {
      this.router.navigate([`tabs/tab1/agregar/${lista.id}`]);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

}

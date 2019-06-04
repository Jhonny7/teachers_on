import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  //templateUrl: './loader.component.html',
  template: `<div class="contenedorSpinner">
               prueba
             </div>`,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  Educacion : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let educacion1 = {
      Anio: "2014 - 2017",
      Escuela: "Secundaria Técnica Industrial No. 4",
      Localidad: "Orizaba"
    }

    let educacion2 = {
      Anio: "2017 - 2020",
      Escuela: "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 142",
      Localidad: "Orizaba"
    }

    let educacion3 = {
      Anio: "2020 - Actualidad",
      Escuela: "Universidad Veracruzana, Usbi",
      Localidad: "Orizaba"
    }

    let educacion4 = {
      Anio: "2022 - Actualidad",
      Escuela: "Universidad Veracruzana, Centro de Idiomas",
      Localidad: "Orizaba"
    }

    this.Educacion.push(educacion1);
    this.Educacion.push(educacion2);
    this.Educacion.push(educacion3);
    this.Educacion.push(educacion4);
  }

}

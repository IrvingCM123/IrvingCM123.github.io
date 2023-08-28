import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  Certificados : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let Certificado1 = {
      Nombre : "Administrador de Bases de Datos",
      Descripcion: "Manejo intermedio de SQL SERVER y MySQL",
      Experiencia: "1 año"
    }

    let Certificado2 = {
      Nombre: "Certificado de Bachillerato",
      Descripcion: "Finalización de bachillerato",
      Experiencia: "3 años"
    }

    let Certificado3 = {
      Nombre: "Desarrollo Web Front",
      Descripcion: "Manejo de HTML, CSS y JS",
      Experiencia: "1 año"
    }

    let Certificado4 = {
      Nombre: "Desarrollo Web Back",
      Descripcion: "Manejo de NodeJS",
      Experiencia: "1 año"
    }

    let Certificado5 = {
      Nombre: "Curso de Python",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "../../assets/Certificado.png"
    }

    this.Certificados.push(Certificado1);
    this.Certificados.push(Certificado2);
    this.Certificados.push(Certificado3);
    this.Certificados.push(Certificado4);
    this.Certificados.push(Certificado5)
  }

}

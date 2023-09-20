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
      Imagen: "../../assets/Certificado.png",
      link: "https://firebasestorage.googleapis.com/v0/b/pruebas-abcf6.appspot.com/o/irving%2FIrving%20Rafael%20Conde%20Marin%20-%20Python.png?alt=media&token=86aa2e30-411e-40f1-afeb-beb57e72d24f"
    }

    let Certificado6 = {
      Nombre: "Curso de Pandas",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "../../assets/Irving Rafael Conde Marin - Pandas.png",
      link: "https://firebasestorage.googleapis.com/v0/b/pruebas-abcf6.appspot.com/o/irving%2FIrving%20Rafael%20Conde%20Marin%20-%20Pandas.png?alt=media&token=124fba51-b9d5-4976-8ec4-ffc86382ae08"
    }

    let Certificado7 = {
      Nombre: "Curso de intro maching lerning",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "../../assets/Intro to Machine Learning.png",
      link: "https://firebasestorage.googleapis.com/v0/b/pruebas-abcf6.appspot.com/o/irving%2FIntro%20to%20Machine%20Learning.png?alt=media&token=dc0ed52a-922a-46b4-9883-48cd0e007d04"
    }

    let Certificado8 = {
      Nombre: "Curso de intermediate maching lerning",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "../../assets/intermediate Machine Learning.png",
      link: "https://firebasestorage.googleapis.com/v0/b/pruebas-abcf6.appspot.com/o/irving%2Fintermediate%20Machine%20Learning.png?alt=media&token=99bd424a-527b-4764-ac13-d77a40f6d53e"
    }


    this.Certificados.push(Certificado1);
    this.Certificados.push(Certificado2);
    this.Certificados.push(Certificado3);
    this.Certificados.push(Certificado4);
    this.Certificados.push(Certificado5);
    this.Certificados.push(Certificado6);
    this.Certificados.push(Certificado7);
    this.Certificados.push(Certificado8);
  }

}

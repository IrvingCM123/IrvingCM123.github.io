import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { AcademicoComponent } from './academico/academico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    ExperienciaLaboralComponent,
    AcademicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

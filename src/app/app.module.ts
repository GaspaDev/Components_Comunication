import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { PersonajesComponent } from './modulos/personajes/personajes.component';
import { EpisodiosComponent } from './modulos/episodios/episodios.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DetailsCharacterComponent } from './componentes/details-character/details-character.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EpisodiosComponent,
    MenubarComponent,
    DetailsCharacterComponent,
    SidebarComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ImageModule 
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

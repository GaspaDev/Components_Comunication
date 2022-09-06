import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetailsCharacterComponent } from 'src/app/componentes/details-character/details-character.component';
import { ApiService } from 'src/app/servicios/api.service';
import { character } from 'src/app/servicios/modelos/personajes';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers : [DialogService, MessageService]
})
export class PersonajesComponent implements OnInit {
  listCharacters : character[]=[]
  selectedCharacters: character[]=[];
  loading: boolean = true;
  ref! : DynamicDialogRef;
  
  constructor(private api : ApiService, public dialogService: DialogService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  
  async getCharacters(){
    await this.api.getCharacters().then(data => {
      this.listCharacters = data
      this.loading = false
    })
  }

  showDetails(character : character) {
    this.ref = this.dialogService.open(DetailsCharacterComponent, {
        data : character,  
        header: 'Detalles extras de '+character.name,
        width: '50%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

    this.ref.onClose.subscribe((character : character) =>{
        if (character) {
            this.messageService.add({severity:'info', summary: 'Product Selected', detail: character.name});
        }
    });
  }
}

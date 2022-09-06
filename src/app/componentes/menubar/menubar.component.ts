import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items : MenuItem[]=[];
  visibleSidebar1 : boolean = false;

  ngOnInit() {
    this.items = [
    {
    label: 'File',
    items: [
        {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
                {label: 'Project'},
                {label: 'Other'},
            ]
        },
        {label: 'Open'},
        {label: 'Quit'}
    ]},
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    }
    ];
  }

  emitMenu(){
    this.visibleSidebar1 = !this.visibleSidebar1
    //this.eventMenu.emit(!this.visibleSidebar1)
  }

  receiveMessage($event : any) {
    this.visibleSidebar1 = $event
  }
}

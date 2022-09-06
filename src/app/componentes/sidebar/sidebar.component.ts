import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() eventMenu! : boolean;
  @Output() hideMenuEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClose(){
    this.hideMenuEvent.emit(false)
  }
}

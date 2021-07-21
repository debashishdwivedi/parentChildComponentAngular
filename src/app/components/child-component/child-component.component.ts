import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent implements OnInit {
@Input() childdata={id:'',name:"",description:'',price:"",promoPrice:""}
@Output() newItemEvent = new EventEmitter<string>();
  constructor() { }
ngOnInit(){
    if(this.childdata){
      $('#myModal').modal(true)
    }
  }

  closeModal() {
    this.newItemEvent.emit('false');
  }

}

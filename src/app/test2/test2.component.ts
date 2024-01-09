import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() data:string
  @Output() dataEvent = new EventEmitter <string>()

  ngOnInit(): void {
      console.log("data i ", this.data);
  }
   message ="message from child"
   sendToParent(){
  this.dataEvent.emit(this.message);
}
}

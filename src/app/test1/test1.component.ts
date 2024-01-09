import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

constructor(){}

noOfCircle=0
circles=[];

ngOnInit(): void {
    

}

addCircle() {
  this.circles.push({ active: false });
 console.log()
}

changeColor(index: number) {

  this.circles[index].active = !this.circles[index].active;
  this.noOfCircle = this.circles.filter(circle => circle.active).length;
  
}





  datap="message from parent (test1)"
  datac=''
  reciveData($event)
  {
  this.datac=$event;
  }


}

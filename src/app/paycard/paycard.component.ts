import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paycard',
  templateUrl: './paycard.component.html',
  styleUrls: ['./paycard.component.css']
})
export class PaycardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() totale:any;
@Output() backToCartEvent = new EventEmitter;
numbercard:any=""
name:string=""
surname:string=""
address:string=""
msgError:string=""
payCompleted:boolean=false


backToCart(){
  return this.backToCartEvent.emit(true)
}

checkUser(event:any){
 event.preventDefault()
 const user={numbercard:this.numbercard, name:this.name, surname:this.surname, address:this.address } 
 
 if(user.numbercard.length<5){this.msgError="carta non valida"}
  else if(user.name.length<2){this.msgError="nome non valido"}
  else if(user.surname.length<2){this.msgError="cognome non valido"}
  else if(user.address.length<2){this.msgError="indirizzo non valido"}
  else{this.msgError=""; this.payed()}

}
payed(){
  this.payCompleted=true;
  this.msgError="Pagamento eseguito con successo";
  window.setTimeout(()=>{window.location.reload()}, 1000)
  
  
}
}

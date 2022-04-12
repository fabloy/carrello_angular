import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  // @Input() isCartVisible:boolean=true
  @Input() prodotti=[];
  @Input() prodottiAggiunti:any[]=[]
  @Input() nuovoProdotto="";
  

  @Output() eliminazioneEvent= new EventEmitter;
  @Output() aumentaQuantitaEvent= new EventEmitter;
  @Output() diminuisciQuantitaEvent= new EventEmitter;
 

  aumentaQuantita(prodotto:any){
    return this.aumentaQuantitaEvent.emit(prodotto)
  }
  diminuisciQuantita(prodotto:object){
   return this.diminuisciQuantitaEvent.emit(prodotto)
  }
  elimina(prodottoDaEliminare:any){
  return this.eliminazioneEvent.emit(prodottoDaEliminare)
  }
 isNuovoProdottoAdd:boolean=true


}

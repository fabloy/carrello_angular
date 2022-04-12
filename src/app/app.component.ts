import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
   
  }
  title = 'carrello-fabio';
 
  quantita:number=1
  prodotti:any=[
    {name:"Margherita", qty:1, prezzo:5, tot:5, add:false, message:"add"},
    {name:"Romana", qty:1, prezzo:6, tot:6, add:false,  message:"add" },
    {name:"Napoli", qty:1 , prezzo:6, tot:6,  add:false,  message:"add"},
    {name:"Diavola", qty:1 , prezzo:6.50, tot:6.50,  add:false,  message:"add"},
    {name:"Patatosa", qty:1, prezzo:5, tot:5, add:false, message:"add"},
    {name:"Capricciosa", qty:1, prezzo:6, tot:6, add:false,  message:"add" },
    {name:"4 Stagioni", qty:1 , prezzo:6, tot:6,  add:false,  message:"add"},
    {name:"4 Formaggi", qty:1 , prezzo:6, tot:6,  add:false,  message:"add"}
  ];
  prodottiAggiunti:any[]=[];
  totaleCarrello:number=0
  prodotto:any="";
  isCartVisible:boolean=false
  isPayCardVisible:boolean=false
  isPayCardClicked:boolean=false


  
  aggiungiProdotto(pizza:any){
    this.prodotto=pizza
  const existProduct = this.prodottiAggiunti.find((element)=> element.name===this.prodotto.name)
  if(existProduct===undefined){
    pizza.tot=pizza.prezzo*pizza.qty
    pizza.add="pizza aggiunta"
    this.prodottiAggiunti.push({...pizza})
    this.totaleCarrello=this.totaleCarrello+pizza.tot
}else{
 return
}
//  
  }
  
deleteProdotto(prodottoDaEliminare:any){
  prodottoDaEliminare.tot=prodottoDaEliminare.prezzo*prodottoDaEliminare.qty
  this.prodotto=prodottoDaEliminare;
  this.prodottiAggiunti = this.prodottiAggiunti.filter( (item)=>item!=prodottoDaEliminare )
  this.prodotti.map( (item:any)=> item.name===prodottoDaEliminare.name? item.add=false :  item  ) 
  this.totaleCarrello=this.totaleCarrello-prodottoDaEliminare.tot
  this.prodottiAggiunti.length===0?  this.isCartVisible=false : this.isCartVisible=true
}

aumenta(prodottoDaLista:any){
 prodottoDaLista.qty++
 prodottoDaLista.qty<11? prodottoDaLista.tot=prodottoDaLista.prezzo*prodottoDaLista.qty : prodottoDaLista.tot
 this.totaleCarrello+=prodottoDaLista.prezzo
}

diminuisci(prodottoDaLista:any){
 prodottoDaLista.qty--
 prodottoDaLista.qty>0? prodottoDaLista.tot=prodottoDaLista.prezzo*prodottoDaLista.qty : prodottoDaLista.tot=prodottoDaLista.prezzo
 prodottoDaLista.qty<=0 ? this.prodottiAggiunti = this.prodottiAggiunti.filter( (item)=>item!=prodottoDaLista ) :  prodottoDaLista.qty
 prodottoDaLista.qty<=0 ? this.prodotti.map( (item:any)=> item.name===prodottoDaLista.name? item.add=false :  item  ) : prodottoDaLista.qty //da sistemare
 this.totaleCarrello-=prodottoDaLista.prezzo
}

goToCart(){
this.isCartVisible=true
this.isPayCardVisible=true
}
goToMenu(){
  this.isCartVisible=false
  this.isPayCardVisible=false
}
goToPay(){
  this.isCartVisible=false
  this.isPayCardClicked=true
}
backToCart(e:boolean){
  this.isCartVisible=e
  this.isPayCardClicked=false

}

}
 
  


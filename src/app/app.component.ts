import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
 
  esito: string = "OK"

  ngOnInit(): void {}

  onCreaPromise():Promise<string> {
    return new Promise(
      (resolve, reject) => { this.innerFunction(resolve, reject) })

    //this.p.then((msg) => { console.log(msg) });
  }

  innerFunction(resolve: Function, reject:Function) {
    if (this.esito == "OK")
      resolve("esito OK")
    else
      reject("esito KO")
  }

  checkPromise(){
   let p:Promise<string>=this.onCreaPromise()
   p.then((msg) => { console.log("then: ho ricevuto "+msg) })
    .catch((error) => { console.log("catch: ho ricevuto "+error) })
  }
  
 

  onImpostaEsitoOK() { 
    this.esito = "OK" 
    console.log("Impostato esito=", this.esito)
  }
  onImpostaEsitoKO() { 
    this.esito = "KO"
    console.log("Impostato esito=", this.esito) 
  }

}
import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = "Traduza a frase"
  public frases: Frase[] = FRASES
  public resposta: string


  constructor() {
    console.log(this.frases)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

    //console.log(this.resposta)
  }

  public verificarResposta():void{
    console.log("Verificar resposta: " + this.resposta )
  }

}

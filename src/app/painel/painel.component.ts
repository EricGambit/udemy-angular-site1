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
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progressoPai: number = 0

  public tentativasPai: number = 3

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.resposta == this.rodadaFrase.frasePtBr) {
      //Trocar pergunta da rodada
      this.rodada++

      //Progresso da barra
      this.progressoPai = this.progressoPai + (100 / this.frases.length)

      //Atualiza objeto da rodadaFrase
      this.atualizaRodada();

      //limpar a resposta
      this.resposta = ''

    } else {

      //diminuir as tentativas
      this.tentativasPai--

      if (this.tentativasPai === -1) {
        alert("You LOSE")
      }
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase);
  }

}

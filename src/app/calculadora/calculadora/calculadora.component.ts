import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: string = '';
  
  // Método que realiza a operação de cálculo
  calcular(tipo: string, valor: string) {
    if (tipo === 'acao') {
      if (valor === 'C') {
        this.resultado = '';
      } else if (['+', '-', '*', '/', '.'].includes(valor)) {
        this.resultado += valor;
      } else if (valor === '=') {
        try {
          this.resultado = eval(this.resultado);
        } catch {
          this.resultado = 'Erro';
        }
      }
    } else if (tipo === 'valor') {
      this.resultado += valor;
    }
  }
}

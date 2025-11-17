import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ViaCEPResponse {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {

  logradouro = "";
  bairro = "";
  cidade = "";
  estado = "";
  mensagemErro = "";

  async buscarCEP(cep: string) {
    this.mensagemErro = "";
    this.logradouro = "";
    this.bairro = "";
    this.cidade = "";
    this.estado = "";

    const cepLimpo = cep.replace(/\D/g, "");
    const regexCEP = /^[0-9]{8}$/;

    if (!regexCEP.test(cepLimpo)) {
      this.mensagemErro = "CEP inválido! Digite somente números (8 dígitos).";
      return;
    }

    try {
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
      const response = await fetch(url);
      const data: ViaCEPResponse = await response.json();

      if (data.erro) {
        this.mensagemErro = "CEP não encontrado!";
        return;
      }

      this.logradouro = data.logradouro ?? "";
      this.bairro = data.bairro ?? "";
      this.cidade = data.localidade ?? "";
      this.estado = data.uf ?? "";

    } catch (error) {
      this.mensagemErro = "Erro ao consultar o servidor.";
    }
  }
}

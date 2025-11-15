import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('consulta_cep');
}

interface ViaCEPResponse {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

async function buscarCEP(cep: string): Promise<ViaCEPResponse> {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  const data: ViaCEPResponse = await response.json();

  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
}
const inputCep = document.querySelector("#cep") as HTMLInputElement;
const btnBuscar = document.querySelector("#buscar") as HTMLButtonElement;

btnBuscar.addEventListener("click", async () => {
  try {
    const cep = inputCep.value.trim();
    const dados = await buscarCEP(cep);
    console.log("Resultado:", dados);

    // Exemplo de uso no DOM
    document.getElementById("logradouro")!.textContent = dados.logradouro ?? "";
    document.getElementById("cidade")!.textContent = dados.localidade ?? "";
    document.getElementById("estado")!.textContent = dados.uf ?? "";

  } catch (err: any) {
    alert(err.message);
  }
});

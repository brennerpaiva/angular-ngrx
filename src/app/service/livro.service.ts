import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Livro } from "../model/livro.model";

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  private obterLivros(): Livro[] {
    return [
      {
        id: 1,
        nome: 'Harry Potter'
      },
      {
        id: 2,
        nome: 'Senhor dos anéis'
      }
    ]
  }

  public obterLivrosApi(){
    return of (this.obterLivros())
     .pipe(
        delay(2000) // Simulando um delay da api
      );
  }
}

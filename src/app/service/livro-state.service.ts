import { LivroService } from './livro.service';

import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, take } from "rxjs";
import { Livro } from "../model/livro.model";

@Injectable({
  providedIn: 'root',
})
export class LivroStateService {
  private livros$ = new BehaviorSubject<Livro[]>([]);
  private livroService = inject(LivroService);

  carregarLivros() {
    this.livroService.obterLivrosApi()
      .pipe(take(1))
      .subscribe((livros) => this.publicLivrosParaTodosOuvintes(livros))
  }

  adicionarLivro(livro: Livro) {
    const livrosAtuais = this.livros$.value;
    this.livros$.next([...livrosAtuais, livro]);
  }

  escutarMudancasdeLivros(): Observable<Livro[]>{
    return this.livros$.asObservable();
  }

  private publicLivrosParaTodosOuvintes(livros: Livro[]){
    this.livros$.next(livros);
  }
}


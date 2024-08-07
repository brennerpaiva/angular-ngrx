import { Component, OnInit } from '@angular/core';
import { Livro } from './model/livro.model';
import { LivroStateService } from './service/livro-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';
  protected livros$ = this.livroSateService.escutarMudancasdeLivros();
  livroInput = ''

  constructor(private livroSateService: LivroStateService){}

  ngOnInit() {
    this.livroSateService.carregarLivros();
  }

  adicionar() {
    const livro: Livro = {
      id: 10,
      nome: this.livroInput
    }

    this.livroSateService.adicionarLivro(livro);
  }
}

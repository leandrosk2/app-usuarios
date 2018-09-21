import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../services/usuario';
import { Response } from '../../services/response';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
<<<<<<< HEAD
  titulo: String;
  isValid: Boolean = false;
  usuario: Usuario = new Usuario();

  private mensagemUsuario = new Subject<String>();
  staticAlertClosed = false;
  successMessage: String;
=======
>>>>>>> 4c1fecf6ffe08be611c69c9cd55eabcce64361f6

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.inicializaMensagem();
    this.activatedRoute.params.subscribe(parametro => {

      if (parametro['codigoUsuario'] === undefined) {

        this.titulo = 'Novo Cadastro de Usuário';
        this.isValid = true;
      } else {

        this.titulo = 'Editar Cadastro de Usuário';
        this.usuarioService.getUsuario(String(parametro['codigoUsuario'])).subscribe(res => this.usuario = res);
      }


    });
  }

  inicializaMensagem() {
    setTimeout(() => this.staticAlertClosed = true, 10000);

    this.mensagemUsuario.subscribe((message) => this.successMessage = message);
    this.mensagemUsuario.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
  salvar(): void {

    /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
    if (this.usuario.codigoUsuario === undefined) {

      /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
      this.usuarioService.addUsuario(this.usuario).subscribe(response => {

        // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res: Response = <Response>response;

        /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
        E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
        if (res.codigo === 1) {
          this.mensagemUsuario.next(res.mensagem);
          this.usuario = new Usuario();
        } else {
          /*
          ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
          this.mensagemUsuario.next(res.mensagem);
        }
      },
        (erro) => {
          /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
            EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
          this.mensagemUsuario.next(erro);
        });

    } else {

      /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(response => {

        // PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res: Response = <Response>response;

        /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
          E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if (res.codigo === 1) {
          this.mensagemUsuario.next(res.mensagem);
          //   this.router.navigate(['/consulta-usuario']);
        } else {
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
          this.mensagemUsuario.next(res.mensagem);
        }
      },
        (erro) => {
          /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
           EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
          this.mensagemUsuario.next(erro);
        });
    }

  }

}

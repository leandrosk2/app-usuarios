import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Usuario } from '../services/usuario';
import { ConfigService } from './config.service';

@Injectable()
export class UsuarioService {

    private baseUrlService: string = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
        private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/usuario/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**Consulta todos os usuários cadastrados */
    getUsuarios() {
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**Adiciona um novo usuário */
    addUsuario(usuario: Usuario) {

        return this.http.post(this.baseUrlService, JSON.stringify(usuario), this.options)
            .map(res => res.json());
    }
    /**Exclui um usuário */
    excluirUsuario(codigoUsuario: string) {

        return this.http.delete(this.baseUrlService + codigoUsuario).map(res => res.json());
    }

    /**Consulta um usuário pelo codigo */
    getUsuario(codigoUsuario: string) {

        return this.http.get(this.baseUrlService + codigoUsuario).map(res => res.json());
    }

    /**Atualiza dados do usuário */
    atualizarUsuario(usuario: Usuario) {

        return this.http.put(this.baseUrlService, JSON.stringify(usuario), this.options)
            .map(res => res.json());
    }

}
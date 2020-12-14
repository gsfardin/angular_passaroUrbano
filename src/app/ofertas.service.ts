import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Oferta } from './shared/oferta.model'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas(): Promise<void | Oferta[]> {
        // Efetuar uma requisição http e retornar um promisse Oferta[]
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((response: any) => response)
    }
}
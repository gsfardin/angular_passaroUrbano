import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    // Método sincrono para consulta do serviço...
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)

    // Método assincrono para consulta do serviço - Utilização de promises
    this.ofertasService.getOfertas2()
      .then(
        // Com base no primeiro parametro da promise (resolve) executa a função => {this.ofertas = ofertas;}
        (ofertas: Oferta[]) => { 
          console.log('Promise resolved after 30 seconds')
          this.ofertas = ofertas; 
        }
      )
      .catch(
        // Com base no primeiro parametro da promise (reject) executa a função => {console.log(param)}
        (param: any) => { 
          console.log(param) 
        }
      )
  }
}

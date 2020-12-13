import  { Oferta } from './shared/oferta.model'

export class OfertasService {

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public getOfertas(): Array<Oferta> {
        let ofertas = this.ofertas;
        return ofertas;
    }

    public getOfertas2(): Promise<Array<Oferta>> {
        return new Promise((resolve, reject) => {
            // Atributo de retorno para controle da promisse (externo)
            let deuCerto = true;
            // Teste do atributo e retorno conforme retorno do teste. Deu certo retorna resolve, não deu certo retorna reject
            if(deuCerto) {
                setTimeout(() => resolve( this.ofertas ), 3000)
            }
            else {
                reject({codigoErro: 404, mensagemErro: 'Servidor não encotrado'}) 
            }
        })
        .then((ofertas: Oferta[]) => { 
            // fazer alguma tratativa logo após o retorno da função (resolve)
            console.log('Primeiro then da promise')
            return ofertas
        })
        .then((ofertas: Oferta[]) => { 
            // fazer alguma tratativa logo após o retorno da função (resolve)
            console.log('Second then da promise')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => { resolve2( ofertas ) },3000)
            })
        })
        .then((ofertas: Oferta[]) => {
            console.log('Terceiro then executado após mais 3 segundos')
            return ofertas
        })
    }
}
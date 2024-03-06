import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { declaracion } from './declaracion';


@Injectable({
  providedIn: 'root'
})
  
export class nombreService {
  nombreEntrevistas:string[] = ["ENTREVISTA A ANTAURO HUMALA TASSO - BEST CALE TV 01/2023", 
                                "El cuestionado plan de ANTAURO HUMALA: BUKELIZAR el país y retirarnos de la corte IDH | #LR 12/2023",
                                "ANTAURO HUMALA NO SE ARREPIENTE DE NADA Y PROMETE MEDIDAS RADICALES 08/2023",
                                "ENTREVISTA EN LA MIRA GO TV CUSCO 13/11/2023",
                                "DETRAS DE LA VERDAD - PIURA 10/10/2023",
                                "Entrevistas / Invitado: Myr.EP (r) Antauro Humala Tasso | La Noticia Perú 18/07/23"];
     urlEntrevistas:string[] = ["https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo&amp;rel=0&amp;autoplay=1&amp;color=white&amp;start=40",
                                "https://www.youtube.com/embed/6TXE6qFPI7Y?si=-ffjiubZfRxniNeq&start=40",
                                "https://www.youtube.com/embed/ta50OnS7UQo?si=cPlY9EBohYopIEqP",
                                "https://www.youtube.com/embed/zOO7PIKJd5k?si=t5slTL6tQSpWXAiR",
                                "https://www.youtube.com/embed/QEffxGNTHRQ?si=ss40OZepvpDanJjK",
                                "https://www.youtube.com/embed/xoLQeGL8Enw?si=K0z-sclDO5RRIRMM" ];
  urlEntrevistasYts:string[] = ["HfCjXPMj5VA", "6TXE6qFPI7Y", "ta50OnS7UQo", "zOO7PIKJd5k", "QEffxGNTHRQ", "xoLQeGL8Enw"];
  
  
      nombreMitines:string[] = ["ANTAURO HUMALA MITIN DESDE URUBAMBA - CUSCO 09/2022",
                                'Antauro Humala mitin desde Juliaca "todos juntos forjaremos la segunda Republica" 09/2022' ];
         urlMitines:string[] = ["https://www.youtube.com/embed/NAvU6m960CM?si=2WfGkid-FxjRyMuq",
                                "https://www.youtube.com/embed/tYaX9DInKC8?si=Ny_ApypSzr_MwFXB",];
      urlMitinesYts:string[] = ["NAvU6m960CM", "tYaX9DInKC8"];
  
      tipoNombres:string[][] = [this.nombreEntrevistas , this.nombreMitines];
         tipoUrls:string[][] = [this.urlEntrevistas, this.urlMitines];
      tipoUrlsYts:string[][] = [this.urlEntrevistasYts, this.urlMitinesYts];
  
    entrevistas:declaracion[] = [];
        mitines:declaracion[] = [];
  declaraciones:declaracion[][] = [this.entrevistas, this.mitines];

  enlaceYt!:string;
  enlace!:SafeUrl;
   nombre!:string;
  
   fechaEntrevistas:string[] = [];
  tituloEntrevistas:string[] = [];
  
       fechaMitines:string[] = [];
      tituloMitines:string[] = [];
   fechas:string[][] = [this.fechaEntrevistas, this.fechaMitines];
  titulos:string[][] = [this.tituloEntrevistas, this.tituloMitines];
  
  regex:RegExp = RegExp('\d{1,2}\/\d{1,4}');
  constructor() {
   
    for(let e = 0; this.tipoNombres.length > e; e++) {
      
      for( let i = 0; this.tipoNombres[e].length > i; i++) {
         this.declaraciones[e].push({nombre:this.tipoNombres[e][i], url:this.tipoUrls[e][i], urlYt:this.tipoUrlsYts[e][i]});
         this.fechas[e].push(/\d{1,2}\/(\d{1,2}\/)?\d{1,4}/.exec(this.tipoNombres[e][i])![0]);
         this.titulos[e].push(/([a-zA-Z-#|:áéíóú]+\s)+(?=\d{1,2}\/(\d{1,2}\/)?\d{1,4})?/.exec(this.tipoNombres[e][i])![0]);
        
     

    }
      
    }
  }
}

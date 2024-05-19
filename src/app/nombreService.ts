import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { declaracion } from './declaracion';
import { Data } from './Data';


@Injectable({
  providedIn: 'root'
})
  
export class nombreService {
    Data:Data = new Data():
   /*nombre fecha y tiempo de highlights en segundos*/
    nombreEntrevistas:string[] = ["ENTREVISTA A ANTAURO HUMALA TASSO - BEST CALE TV 01/2023 t1800 t2400 t3000 t3600 "  , 
                                  "El cuestionado plan de ANTAURO HUMALA: BUKELIZAR el país y retirarnos de la corte IDH | #LR 12/2023 t1800 t2400 t3000 t3600",
                                  "ANTAURO HUMALA NO SE ARREPIENTE DE NADA Y PROMETE MEDIDAS RADICALES 08/2023 t1800 t2400 t3000 t3600",
                                  "ENTREVISTA EN LA MIRA GO TV CUSCO 13/11/2023 t1800 t2400 t3000 t3600",
                                  "DETRAS DE LA VERDAD - PIURA 10/10/2023 t1800 t2400 t3000 t3600",
                                  "Entrevistas / Invitado: Myr.EP (r) Antauro Humala Tasso | La Noticia Perú 18/07/23 t1800 t2400 t3000 t3600"];
       urlEntrevistas:string[] = ["https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo&amp;rel=0&amp;autoplay=1&amp;color=white&amp;start=40",
                                  "https://www.youtube.com/embed/6TXE6qFPI7Y?si=-ffjiubZfRxniNeq&start=40",
                                  "https://www.youtube.com/embed/ta50OnS7UQo?si=cPlY9EBohYopIEqP",
                                  "https://www.youtube.com/embed/zOO7PIKJd5k?si=t5slTL6tQSpWXAiR",
                                  "https://www.youtube.com/embed/QEffxGNTHRQ?si=ss40OZepvpDanJjK",
                                  "https://www.youtube.com/embed/xoLQeGL8Enw?si=K0z-sclDO5RRIRMM" ];
    urlEntrevistasYts:string[] = ["HfCjXPMj5VA", "6TXE6qFPI7Y", "ta50OnS7UQo", "zOO7PIKJd5k", "QEffxGNTHRQ", "xoLQeGL8Enw"];
  
      nombreMitines:string[] = ["ANTAURO HUMALA MITIN DESDE URUBAMBA - CUSCO 09/2022 t1800 t2400 t3000 t3600",
                                'Antauro Humala mitin desde Juliaca "todos juntos forjaremos la segunda Republica" 09/2022 t1800 t2400 t3000 t3600' ];
         urlMitines:string[] = ["https://www.youtube.com/embed/NAvU6m960CM?si=2WfGkid-FxjRyMuq",
                                "https://www.youtube.com/embed/tYaX9DInKC8?si=Ny_ApypSzr_MwFXB",];
      urlMitinesYts:string[] = ["NAvU6m960CM", "tYaX9DInKC8"];
  
      tipoNombres:string[][] = [this.Data.nombreEntrevistas , this.Data.nombreMitines, this.Data.nombreExposiciones];
         tipoUrls:string[][] = [this.Data.urlEntrevistas, this.Data.urlMitines, this.Data.urlExposiciones];
      tipoUrlsYts:string[][] = [this.Data.urlEntrevistasYts, this.Data.urlMitinesYts, this.Data.urlExposicionesYts];
   
    entrevistas:declaracion[] = [];
        mitines:declaracion[] = [];
   exposiciones:declaracion[] = [];
  
  declaraciones:declaracion[][] = [this.entrevistas, this.mitines, this.exposiciones];

  enlaceYt!:string;
    enlace!:SafeUrl;
    nombre!:string;
    titulo!:string;
  destacado!:Number[];
  
       fechaEntrevistas:string[] = [];
      tituloEntrevistas:string[] = [];
 destacadoEntrevistas:Number[][] = [];
       fechaMitines:string[] = [];
      tituloMitines:string[] = [];
 destacadoMitines:Number[][] = [];
      fechaExposiciones:string[] = [];
     tituloExposiciones:string[] = [];
destacadoExposiciones:Number[][] = [];
  
        fechas:string[][] = [this.fechaEntrevistas, this.fechaMitines, this.fechaExposiciones];
       titulos:string[][] = [this.tituloEntrevistas, this.tituloMitines, this.tituloExposiciones];
  destacados:Number[][][] = [this.destacadoEntrevistas, this.destacadoMitines, this.destacadoExposiciones];
  

        regex:RegExp = RegExp('\d{1,2}\/\d{1,4}');
  tiempoSalto:Number = 0;
  
  constructor() {
    for(let e = 0; this.declaraciones.length > e; e++) {
      for( let i = 0; this.tipoNombres[e].length > i; i++) {
         this.declaraciones[e].push({nombre:this.tipoNombres[e][i], url:this.tipoUrls[e][i], urlYt:this.tipoUrlsYts[e][i]});
         this.fechas[e].push(/\d{1,2}\/(\d{1,2}\/)?\d{1,4}/.exec(this.tipoNombres[e][i])![0]);
         this.titulos[e].push(/([a-zA-Z-#|:áéíóú/.()]+\s)+(?=\d{1,2}\/(\d{1,2}\/)?\d{1,4})?/.exec(this.tipoNombres[e][i])![0]);
         this.destacados[e].push( /t(\d+)\st(\d+)\st(\d+)\st(\d+)/.exec(this.tipoNombres[e][i]).map(this.agregarDestacados) );
       }
      }
    }
   agregarDestacados(str:any){ 
    return Number(str);
  }
}

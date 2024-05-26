import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { declaracion } from './declaracion';
import { Data } from './Data';


@Injectable({
  providedIn: 'root'
})
  
export class nombreService {

     data:Data = new Data();
    
      tipoNombres:string[][];
         tipoUrls:string[][];
      tipoUrlsYts:string[][];
  
       entrevistas:declaracion[] = [];
           mitines:declaracion[] = [];
      exposiciones:declaracion[] = [];
  etnonacionalismo:declaracion[] = [];
  
  declaraciones:declaracion[][] = [this.entrevistas, this.mitines, this.exposiciones, this.etnonacionalismo];

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
       fechasEtnonacionalismo:string[] = [];
      titulosEtnonacionalismo:string[] = [];
  destacadosEtnonacionalismo:Number[][] = [];
  
        fechas:string[][] = [this.fechaEntrevistas, this.fechaMitines, this.fechaExposiciones, this.fechasEtnonacionalismo];
       titulos:string[][] = [this.tituloEntrevistas, this.tituloMitines, this.tituloExposiciones, this.titulosEtnonacionalismo];
  destacados:Number[][][] = [this.destacadoEntrevistas, this.destacadoMitines, this.destacadoExposiciones, this.destacadosEtnonacionalismo];
  

        regex:RegExp = RegExp('\d{1,2}\/\d{1,4}');
  tiempoSalto:Number = 0;
  
  constructor() {
    
       this.tipoNombres = [this.data.nombreEntrevistas , this.data.nombreMitines, this.data.nombreExposiciones, this.data.nombresEtnonacionalismo];
         this.tipoUrls  = [this.data.urlEntrevistas, this.data.urlMitines, this.data.urlExposiciones, this.data.urlsEtnonacionalismo];
      this.tipoUrlsYts  = [this.data.urlEntrevistasYts, this.data.urlMitinesYts, this.data.urlExposicionesYts, this.data.urlsEtnonacionalismoYts];
   
    for(let e = 0; this.declaraciones.length > e; e++) {
      for( let i = 0; this.tipoNombres[e].length > i; i++) {
         this.declaraciones[e].push({nombre:this.tipoNombres[e][i], url:this.tipoUrls[e][i], urlYt:this.tipoUrlsYts[e][i]});
         this.fechas[e].push(/\d{1,2}\/(\d{1,2}\/)?\d{1,4}/.exec(this.tipoNombres[e][i])![0]);
         this.titulos[e].push(/([0-9a-zA-Z-#|:áéíóú/.()]+\s)+(?=(\d{1,2}\/(\d{1,2}\/)?\d{1,4}))?/.exec(this.tipoNombres[e][i])![0]);
         this.destacados[e].push( /t(\d+)\st(\d+)\st(\d+)\st(\d+)/.exec(this.tipoNombres[e][i]).map(this.agregarDestacados) );
       }
      }
    }
   agregarDestacados(str:any){ 
    return Number(str);
  }
}

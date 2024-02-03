import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { declaracion } from './declaracion';


@Injectable({
  providedIn: 'root'
})
  
export class nombreService {

  nombres:string[] = ["ENTREVISTA A ANTAURO HUMALA TASSO - BEST CALE TV 01/2023", 
                      "El cuestionado plan de ANTAURO HUMALA: BUKELIZAR el país y retirarnos de la corte IDH | #LR 12/2023",
                      "ANTAURO HUMALA NO SE ARREPIENTE DE NADA Y PROMETE MEDIDAS RADICALES 08/2023",
                      "ENTREVISTA EN LA MIRA GO TV CUSCO 13/11/2023",
                      "DETRAS DE LA VERDAD - PIURA 10/10/2023",
                      
                      ];
  
  urls:string[] = ["https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo",
                   "https://www.youtube.com/embed/6TXE6qFPI7Y?si=-ffjiubZfRxniNeq",
                   "https://www.youtube.com/embed/ta50OnS7UQo?si=cPlY9EBohYopIEqP",
                   "https://www.youtube.com/embed/zOO7PIKJd5k?si=t5slTL6tQSpWXAiR",
                   "https://www.youtube.com/embed/QEffxGNTHRQ?si=ss40OZepvpDanJjK"
                  ];
  declaraciones:declaracion[] = [];
  enlace!:SafeUrl;
  nombre!:string;
  fechas:string[] = [];
  titulos:string[] = [];
  regex:RegExp = RegExp('\d{1,2}\/\d{1,4}');
  constructor() {
   
    
    for( let i = 0; this.nombres.length > i; i++) {
      this.declaraciones.push({nombre:this.nombres[i], url:this.urls[i]});
      this.fechas.push(/\d{1,2}\/(\d{1,2}\/)?\d{1,4}/.exec(this.nombres[i])![0]);
      this.titulos.push(/([a-zA-Z-|:áéíóú]*\s)*(?:\d{1,2}\/(\d{1,2}\/)?\d{1,4})?/.exec(this.nombres[i])![0]);
     
      
      
      
    }
  }
}

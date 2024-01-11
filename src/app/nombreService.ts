
import { Injectable } from '@angular/core';
import { declaracion } from './declaracion';

@Injectable()
export class nombreService {

  nombres:string[] = ["ENTREVISTA A ANTAURO HUMALA TASSO - BEST CALE TV 01/2023", 
                      "El cuestionado plan de ANTAURO HUMALA: BUKELIZAR el país y retirarnos de la corte IDH | #LR 12/2023",
                      "ANTAURO HUMALA NO SE ARREPIENTE DE NADA Y PROMETE MEDIDAS RADICALES 08/2023",
                      "ENTREVISTA EN LA MIRA GO TV CUSCO 13/11/2023",
                      "aaaaaaaaaaaaaaaa",
                      "bbbbbbbbbbbbbbbbbbb"
                      
                      ];
  urls:string[] = ["https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo",
                   "https://www.youtube.com/embed/6TXE6qFPI7Y?si=-ffjiubZfRxniNeq",
                   "https://www.youtube.com/embed/ta50OnS7UQo?si=cPlY9EBohYopIEqP",
                   "https://www.youtube.com/embed/zOO7PIKJd5k?si=t5slTL6tQSpWXAiR",
                  ];
  declaraciones:declaracion[] = [];
  constructor() {
    for( let i = 0; this.nombres.length > i; i++) {
      this.declaraciones.push({nombre:this.nombres[i], url:this.urls[i]});
    }
  }
}

import { Injectable } from '@angular/core';

export class Data {

   /*nombre fecha y tiempo de highlights en segundos*/
  nombreEntrevistas:string[] = ["ENTREVISTA A ANTAURO HUMALA TASSO - BEST CALE TV  01/2023 t1800 t2400 t3000 t3600 "  , 
                                  "El cuestionado plan de ANTAURO HUMALA: BUKELIZAR el país y retirarnos de la corte IDH | #LR  12/2023 t1800 t2400 t3000 t3600",
                                  "ANTAURO HUMALA NO SE ARREPIENTE DE NADA Y PROMETE MEDIDAS RADICALES  08/2023 t1800 t2400 t3000 t3600",
                                  "ENTREVISTA EN LA MIRA GO TV CUSCO  13/11/2023 t1800 t2400 t3000 t3600",
                                  "DETRAS DE LA VERDAD - PIURA  10/10/2023 t1800 t2400 t3000 t3600",
                                  "Entrevistas / Invitado: Myr.EP (r) Antauro Humala Tasso | La Noticia Perú  18/07/23 t1800 t2400 t3000 t3600"];
       urlEntrevistas:string[] = ["https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo&amp;rel=0&amp;autoplay=1&amp;color=white&amp;start=40",
                                  "https://www.youtube.com/embed/6TXE6qFPI7Y?si=-ffjiubZfRxniNeq&start=40",
                                  "https://www.youtube.com/embed/ta50OnS7UQo?si=cPlY9EBohYopIEqP",
                                  "https://www.youtube.com/embed/zOO7PIKJd5k?si=t5slTL6tQSpWXAiR",
                                  "https://www.youtube.com/embed/QEffxGNTHRQ?si=ss40OZepvpDanJjK",
                                  "https://www.youtube.com/embed/xoLQeGL8Enw?si=K0z-sclDO5RRIRMM" ];
    urlEntrevistasYts:string[] = ["HfCjXPMj5VA", "6TXE6qFPI7Y", "ta50OnS7UQo", "zOO7PIKJd5k", "QEffxGNTHRQ", "xoLQeGL8Enw"];
  
      nombreMitines:string[] = ["ANTAURO HUMALA MITIN DESDE URUBAMBA - CUSCO  09/2022 t1800 t2400 t3000 t3600",
                                'Antauro Humala mitin desde Juliaca "todos juntos forjaremos la segunda Republica"  09/2022 t1800 t2400 t3000 t3600' ];
         urlMitines:string[] = ["https://www.youtube.com/embed/NAvU6m960CM?si=2WfGkid-FxjRyMuq",
                                "https://www.youtube.com/embed/tYaX9DInKC8?si=Ny_ApypSzr_MwFXB",];
      urlMitinesYts:string[] = ["NAvU6m960CM", "tYaX9DInKC8"];

    nombreExposiciones:string[] = ["ANTAURO HUMALA - NACIONALISMO o ETNONACIONALISMO  09/2004 t1800 t2400 t3000 t3600",
                                   "ANTAURO - Guerra de 1879 y postguerra - Rol del Tayta Cáceres  14/09/2023 t1800 t2400 t3000 t3600" ];
       urlExposiciones:string[] = ["https://www.youtube.com/embed/IpQEAhpm_VA?si=PVw_m7r6LaykzuiS",
                                   "https://www.youtube.com/embed/l9Og6Pcrx-M?si=INZ348Q9g18u58gg", ];
    urlExposicionesYts:string[] = ["IpQEAhpm_VA", "l9Og6Pcrx-M"];

  nombresEtnonacionalismo:string[] = ["carlos milla (Cosmovision) Parte 1  09/2003 t1800 t2400 t3000 t3600",
                                      "carlos milla (Cosmovision) Parte 2  09/2003 t1800 t2400 t3000 t3600",
                                      "carlos milla (Cosmovision) Parte 3  09/2003 t1800 t2400 t3000 t3600",
                                      "Fausto Reinaga - Documental  00/2014 t180 t2400 t300 t360",
                                      "Zadir Milla - Simbología y Lenguaje Andino  08/2016 t1800 t2400 t3000 t3600"];
     urlsEtnonacionalismo:string[] = ["https://www.youtube.com/embed/Wd0tujOlw0c?si=EecZzKLYSnr_2IQW",
                                      "https://www.youtube.com/embed/WvqQ8W3ETzc?si=VaygqzGvnmuQiJRA",
                                      "https://www.youtube.com/embed/qpMeOvEtWrI?si=gg3GhM4N29A3RHK1",
                                      "https://www.youtube.com/embed/7Sg3Ynt2KPc?si=jCX4PglubrsEroXs",
                                      "https://www.youtube.com/embed/fCw38gRvvo0?si=lm0lhiXBB0sigbCd" ];
  urlsEtnonacionalismoYts:string[] = ["Wd0tujOlw0c","WvqQ8W3ETzc", "qpMeOvEtWrI", "7Sg3Ynt2KPc", "fCw38gRvvo0"];
      
  constructor(){}  
}

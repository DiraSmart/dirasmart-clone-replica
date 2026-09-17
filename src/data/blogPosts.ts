export type { BlogPost } from "./posts/types";

import { post as beneficiosHogar } from "./posts/beneficios-hogar-inteligente-panama";
import { post as automatizacionHogar } from "./posts/como-funciona-automatizacion-hogar";
import { post as shabbatTecnologia } from "./posts/shabbat-tecnologia-automatizacion-halaja";
import { post as wifiEmpresarial } from "./posts/wifi-empresarial-vs-domestico";
import { post as privacidadLocal } from "./posts/privacidad-hogar-inteligente-local-vs-nube";
import { post as seguridadInteligente } from "./posts/seguridad-inteligente-camaras-sensores";
import { post as iluminacionInteligente } from "./posts/iluminacion-inteligente-ambiente-ahorro";
import { post as climatizacionTropico } from "./posts/climatizacion-inteligente-tropico-panama";
import { post as guiaPrincipiantes } from "./posts/guia-principiantes-primera-casa-inteligente";
import { post as smartOficinas } from "./posts/smart-home-oficinas-negocios";
import { post as knxPartner } from "./posts/knx-panama-automatizacion-premium";
import { post as controlVoz } from "./posts/control-por-voz-alexa-google-siri";
import { post as cortinasMotorizadas } from "./posts/cortinas-motorizadas-persianas-inteligentes";
import { post as automatizacionApartamentos } from "./posts/automatizacion-apartamentos-panama";
import { post as ahorroEnergia } from "./posts/ahorro-energia-hogar-inteligente-panama";
import { post as zigbeeZwaveVsWifi } from "./posts/zigbee-zwave-vs-wifi-smart-home";
import { post as daliIluminacion } from "./posts/dali-protocolo-iluminacion-futuro";
import { post as casaVsDispositivos } from "./posts/casa-inteligente-vs-dispositivos-inteligentes";
import { post as bmsComercial } from "./posts/bms-sistema-gestion-edificios-comercial";
import { post as bacnetEstandar } from "./posts/bacnet-protocolo-bms-estandar-ashrae";
import { post as cuantoCuesta } from "./posts/cuanto-cuesta-casa-inteligente-panama";
import { post as empresasDomotica } from "./posts/empresas-domotica-panama-como-elegir";
import { post as knxVsControl4 } from "./posts/knx-vs-control4-crestron-savant";
import { post as hotelesGuia } from "./posts/automatizacion-hoteles-panama-guia";
import { post as knxObraNueva } from "./posts/knx-obra-nueva-arquitecto-electricista";
import { post as sinInternet } from "./posts/casa-inteligente-sin-internet-procesamiento-local";
import { post as restaurantesGimnasios } from "./posts/automatizacion-restaurantes-gimnasios-clinicas-panama";
import { post as cuantoTarda } from "./posts/cuanto-tarda-instalar-casa-inteligente-panama";

export const blogPosts = [
  cuantoCuesta,
  empresasDomotica,
  knxVsControl4,
  hotelesGuia,
  knxObraNueva,
  sinInternet,
  restaurantesGimnasios,
  cuantoTarda,
  bmsComercial,
  bacnetEstandar,
  casaVsDispositivos,
  daliIluminacion,
  zigbeeZwaveVsWifi,
  knxPartner,
  controlVoz,
  cortinasMotorizadas,
  automatizacionApartamentos,
  ahorroEnergia,
  beneficiosHogar,
  automatizacionHogar,
  shabbatTecnologia,
  wifiEmpresarial,
  privacidadLocal,
  seguridadInteligente,
  iluminacionInteligente,
  climatizacionTropico,
  guiaPrincipiantes,
  smartOficinas,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

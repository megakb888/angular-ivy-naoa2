import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { CitynetListView } from "./citynet-list/citynet-list-view";
import { CitynetView } from "./citynet/citynet-view";

@Injectable({
  providedIn: 'root'
})
export class CitynetService {

  citynetDisplayData: CitynetView[] = [
    {
      url: 'allbohus', title: 'Allbohus', lead: 'Bredband via Allbohus', campaignperiod: 'tre', img: '/assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_template.png', 
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '2/2 Mbit/s', speed: '2/2', sprice: '149', cprice: '75', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '10/10 Mbit/s', speed: '10/10', sprice: '199', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/10 Mbit/s', speed: '100/10', sprice: '289', cprice: '145', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '100/100 Mbit/s', speed: '100/100', sprice: '389', cprice: '195', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'biggnet', title: 'Biggnet', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_template.png', 
      description: 'När du beställer bredband i Biggnet får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
      ]
    },
    {
      url: 'burlovs-portalen', title: 'Burlövs portalen', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_template.png', 
      description: 'När du beställer bredband i Burlövs portalen får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},

      ]
    },
    {
      url: 'framtidens-bredband', title: 'Framtidens Bredband', lead: 'Det lokala nätet i Lund',  campaignperiod: 'tre', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Framtidens Bredband får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '145', cprice: '73', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '175', cprice: '88', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '255', cprice: '128', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/100 Mbit/s', speed: '250/100', sprice: '315', cprice: '158', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/100 Mbit/s', speed: '500/100', sprice: '445', cprice: '223', campaigndate: '3', contractperiod: '1'},
        {id: 6, name: '1000/500 Mbit/s', speed: '1000/500', sprice: '695', cprice: '695', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'hammarby-sjostad', title: 'Hammarby Sjöstad', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '227', cprice: '114', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '257', cprice: '129', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '297', cprice: '149', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/100 Mbit/s', speed: '250/100', sprice: '395', cprice: '198', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/100 Mbit/s', speed: '500/100', sprice: '495', cprice: '248', campaigndate: '3', contractperiod: '1'},
        {id: 6, name: '1000/500 Mbit/s', speed: '1000/500', sprice: '595', cprice: '298', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'heimstaden', title: 'Heimstaden', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '369', cprice: '185', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '629', cprice: '315', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'hassleholms-fibernat', title: 'Hässleholms fibernat', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '319', cprice: '160', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '399', cprice: '200', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '1000/100 Mbit/s', speed: '1000/1000', sprice: '589', cprice: '295', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'ip-only', title: 'IP-Only', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/ip-only/logo.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png', 
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '345', cprice: '173', contractperiod: '0'},
        {id: 2, name: '250/100 Mbit/s', speed: '250/100', sprice: '365', cprice: '183', contractperiod: '0'},
        {id: 3, name: '500/100 Mbit/s', speed: '500/100', sprice: '425', cprice: '213', contractperiod: '0'},
        {id: 4, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '795', cprice: '398', contractperiod: '0'}
      ]
    },
    {
      url: 'itux-goteborg', title: 'Itux Göteborg', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-motala', title: 'Itux Motala', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '%00/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-skane', title: 'Itux Skåne', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-stockholm', title: 'Itux Stockholm', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-varberg', title: 'Itux Varberg', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-villa', title: 'Itux Villa', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/10 Mbit/s', speed: '100/10', sprice: '298', cprice: '149', campaigndate: '3', contractperiod: '1'},
        {id: 1, name: '100 /100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'itux-atvidaberg', title: 'Itux Åtvidaberg', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'karlshamn-stadsnat', title: 'karlshamn-stadsnat', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
      ]
    },
    {
      url: 'kristinehamns-portalen', title: 'Kristinehamns portalen', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'kungalv-energi', title: 'Kungälv energi', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '185', cprice: '93', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '30/30 Mbit/s', speed: '30/30', sprice: '245', cprice: '123', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/10 Mbit/s', speed: '100/10', sprice: '245', cprice: '123', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '100/100 Mbit/s', speed: '100/100', sprice: '310', cprice: '155', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '200/200 Mbit/s', speed: '200/200', sprice: '675', cprice: '338', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'ljungby-energi', title: 'Ljungby Energi', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '355', cprice: '178', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '445', cprice: '223', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '500/500 Mbit/s', speed: '500/500', sprice: '575', cprice: '288', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '775', cprice: '388', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'lkf', title: 'LKF', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i LKF får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/lkf-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '369', cprice: '185', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '629', cprice: '315', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'molndal-stadsnat', title: 'Mölndal stadsnät', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '215', cprice: '108', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '30/30 Mbit/s', speed: '30/30', sprice: '225', cprice: '113', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/10 Mbit/s', speed: '100/10', sprice: '245', cprice: '123', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '100/100 Mbit/s', speed: '100/100', sprice: '295', cprice: '148', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '655', cprice: '328', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'njudung-energi', title: 'Njudung energi', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '215', cprice: '108', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '30/30 Mbit/s', speed: '30/30', sprice: '225', cprice: '113', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/10 Mbit/s', speed: '100/10', sprice: '245', cprice: '123', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '100/100 Mbit/s', speed: '100/100', sprice: '295', cprice: '148', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '655', cprice: '328', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'nybro', title: 'Nybro', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '369', cprice: '185', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '629', cprice: '315', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'open-universe', title: 'Open Universe', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '255', cprice: '255', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '275', cprice: '275', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '325', cprice: '325', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/100 Mbit/s', speed: '250/100', sprice: '375', cprice: '375', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/100 Mbit/s', speed: '500/100', sprice: '655', cprice: '328', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'seths', title: 'Seths', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
      ]
    },
    {
      url: 'ituxstenafastigheter', title: 'Itux Stenafastigheter', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
        url: 'svedala', title: 'svedala', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
        description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
        orderURL: '/allbohus-order',
        prices: [
          {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
          {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
        ]
      },
    {
      url: 'svenskastadsnat', title: 'svenskastadsnat', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
      ]
    },
    {
        url: 'svenljunga', title: 'svenljunga', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
        description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
        orderURL: '/allbohus-order',
        prices: [
          {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
          {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
        ]
      },
    {
      url: 'oppenfiber', title: 'oppenfiber', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100 Mbit/s', speed: '100', sprice: '100', cprice: '100'}
      ]
    },
    {
      url: 'uppcom', title: 'Uppcom', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/10 Mbit/s', speed: '100/10', sprice: '129', cprice: '65', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/100 Mbit/s', speed: '100/100', sprice: '159', cprice: '80', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '250/250 Mbit/s', speed: '250/250', sprice: '249', cprice: '125', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '500/500 Mbit/s', speed: '500/500', sprice: '349', cprice: '175', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '1000/100 Mbit/s', speed: '1000/100', sprice: '669', cprice: '335', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'vellinge-portalen', title: 'Vellinge portalen', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'ituxvictoriapark', title: 'Itux Victoria Park', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '239', cprice: '120', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/10 Mbit/s', speed: '100/10', sprice: '269', cprice: '135', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/100 Mbit/s', speed: '100/100', sprice: '339', cprice: '170', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '250/250 Mbit/s', speed: '250/250', sprice: '429', cprice: '215', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '500/500 Mbit/s', speed: '500/500', sprice: '569', cprice: '285', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'wetternet', title: 'Wetternet', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '10/10 Mbit/s', speed: '10/10', sprice: '155', cprice: '78', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '30/30 Mbit/s', speed: '30/30', sprice: '175', cprice: '88', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '100/10 Mbit/s', speed: '100/10', sprice: '235', cprice: '118', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '100/100 Mbit/s', speed: '100/100', sprice: '245', cprice: '123', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '250/250 Mbit/s', speed: '250/250', sprice: '435', cprice: '218', campaigndate: '3', contractperiod: '1'},
        {id: 6, name: '500/100 Mbit/s', speed: '500/100', sprice: '555', cprice: '278', campaigndate: '3', contractperiod: '1'},
        {id: 6, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '755', cprice: '378', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'wexnet', title: 'wexnet', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/wexnet/logo.png', backimg: '/assets/img/banner/citynet/banner_ip-only_2.jpg', 
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/10 Mbit/s', speed: '100/10', sprice: '129', cprice: '65', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '100/100 Mbit/s', speed: '100/100', sprice: '159', cprice: '80', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '250/250 Mbit/s', speed: '250/250', sprice: '219', cprice: '110', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '500/500 Mbit/s', speed: '500/500', sprice: '349', cprice: '175', campaigndate: '3', contractperiod: '1'},
        {id: 5, name: '1000/100 Mbit/s', speed: '1000/100', sprice: '669', cprice: '335', campaigndate: '3', contractperiod: '1'},
      ]
    },
    {
      url: 'zmarket', title: 'zmarket', lead: 'Det lokala nätet i Lund', campaignperiod: 'tre', img: '../../assets/img/logo/citynet/allbohus/allbohus.png', backimg: '/assets/img/banner/citynet/banner_ip-only.png',
      description: 'När du beställer bredband i Allbohus får du det till kampanjpris i tre månader. Välj den tjänst som passar ditt surfmönster bäst, om du ska streama TV, spela dataspel, eller bara läsa nyheterna.',
      orderURL: '/allbohus-order',
      prices: [
        {id: 1, name: '100/100 Mbit/s', speed: '100/100', sprice: '319', cprice: '160', campaigndate: '3', contractperiod: '1'},
        {id: 2, name: '250/250 Mbit/s', speed: '250/250', sprice: '379', cprice: '190', campaigndate: '3', contractperiod: '1'},
        {id: 3, name: '500/500 Mbit/s', speed: '500/500', sprice: '489', cprice: '245', campaigndate: '3', contractperiod: '1'},
        {id: 4, name: '1000/1000 Mbit/s', speed: '1000/1000', sprice: '995', cprice: '498', campaigndate: '3', contractperiod: '1'},
      ]
    },

  ];

  constructor(private http: HttpClient) { }

  getCitynets(): Observable<CitynetListView[]>
  {
      return this.http.get<CitynetListView[]>(environment.appUrl + '/api/nao/citynet/getCitynetList');
  }

  getCitynetData(citynetUrl): CitynetView
  {
    for(let citynetData of this.citynetDisplayData)
    {
      if(citynetData.url === citynetUrl)
      {
        return citynetData;
      }
    }

    let testData = {
      url: '', title: 'Testsida', lead: 'Det lokala testnätet', img: '', backimg: '',
      description: 'Testnätet är det bästa nätet. Beställ detta.',
      orderURL: '',
      prices: [
        {id: 1, name: '100 Mbit/sek', speed: '100', sprice: '100'}
      ]
    } as CitynetView;
    return testData;
  }
}

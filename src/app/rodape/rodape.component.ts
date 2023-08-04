import { Component } from '@angular/core';
import {NgFor} from '@angular/common'
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgFor],
})
export class RodapeComponent {

  constructor(private router: Router){}

  title: string = 'Lar Feliz Imóveis';
    copyright: string = 'Desenvolvido em 2023';
    developer: string = 'Start Tech TOTVS';

    redesSociais: Array<any> = [
      {
        nome: 'Facebook',
        link: 'http://www.facebook.com/',
        icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
      },
      {
        nome: 'Instagram',
        link: 'http://www.instagram.com/',
        icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
      },
      {
        nome: 'LinkedIn',
        link: 'http://www.linkedin.com/',
        icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
      }
    ]

    seeDetails(redeSocial : string){
      this.router.navigate(['', redeSocial]);
    }

}
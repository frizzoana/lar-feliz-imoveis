import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'], 
  standalone: true,
  imports: [ MatGridListModule, MatCardModule, MatIconModule, CommonModule, NgFor, NgIf ]
})
export class DetalhesComponent implements OnInit {

  imovelId: string;
  imovel: any;

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
      this.http.get<any>('http://localhost:3000/imoveis/' + this.imovelId).subscribe(data => {
        this.imovel = data;
        console.log(data);
      });
    });
  }

}

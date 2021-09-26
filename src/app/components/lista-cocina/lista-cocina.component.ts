import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocina } from 'src/app/model/cocina';
import { CocinaService } from 'src/app/services/cocina.service';

@Component({
  selector: 'app-lista-cocina',
  templateUrl: './lista-cocina.component.html',
  styleUrls: ['./lista-cocina.component.css']
})
export class ListaCocinaComponent implements OnInit {

  cocinas:Cocina[]=[];

  constructor(private cocinaService: CocinaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.cocinaService.getAll().subscribe(
      data => {
        this.cocinas = data;
      }
    );
  }

}

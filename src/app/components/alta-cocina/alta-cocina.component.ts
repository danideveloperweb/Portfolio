import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CocinaService } from '../../services/cocina.service';
import { Router } from '@angular/router';
import { Cocina } from 'src/app/model/cocina';

@Component({
  selector: 'app-alta-cocina',
  templateUrl: './alta-cocina.component.html',
  styleUrls: ['./alta-cocina.component.css']
})
export class AltaCocinaComponent implements OnInit {

  formGroup:any;

  constructor(private cocinaService: CocinaService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id:['', Validators.required],
      marca:['', Validators.required],
      descripcion:['', Validators.required]
    })
  }

  procesar() {
    let id = this.formGroup.controls.id.value;
    let marca = this.formGroup.controls.marca.value;
    let descripcion = this.formGroup.controls.descripcion.value;

    let cocina = new Cocina(id, marca, descripcion);

    this.cocinaService.crear(cocina).subscribe(
      respuesta => {
        this.router.navigate(['cocinas']);
      }
    );

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cocina } from '../model/cocina';

const URL = environment.URL + "/cocinas";

@Injectable({
  providedIn: 'root'
})
export class CocinaService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Cocina[]>{
    return this.httpClient.get<Cocina[]>(URL);
  }
  crear(cocina:Cocina):Observable<Cocina> {
    return this.httpClient.post<Cocina>(URL + "/", cocina);
  }
}

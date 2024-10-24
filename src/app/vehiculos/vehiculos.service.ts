import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vehiculo } from './vehiculo';

const API_URL = 'http://127.1.0.1.8000/api/vehicle/list'

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http:HttpClient) { }

  obtenerVehiculos():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(API_URL);
  }
}

// core.mjs:7192 ERROR SyntaxError: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL
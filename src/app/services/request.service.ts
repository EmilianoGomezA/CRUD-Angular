import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Localidad } from "../models/localidad.model";
import { Candidato } from "../models/candidato.model";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: "root"
})

export class RequestService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    //Acciones para localidades
    obtenerLocalidades() {
        return this.http.get(`${this.baseUrl}/getAllLocations.php`);
    }

    obtenerLocalidad(id: any) {
        return this.http.get(`${this.baseUrl}/getLocation.php?idLocalidad=${id}`);
    }
    
    agregarLocalidad(formData: FormData) {
        return this.http.post(`${this.baseUrl}/addLocation.php`, formData);
    }

    eliminarLocalidad(idLocalidad: number | string) {
        return this.http.delete(`${this.baseUrl}/deleteLocation.php?idLocalidad=${idLocalidad}`);
    }

    editarLocalidad(localidad: Localidad) {
        return this.http.put(`${this.baseUrl}/editLocation.php`, localidad);
    }

    //Acciones para candidatos
    obtenerCandidatos(){
        return this.http.get(`${this.baseUrl}/getAllCandidates.php`);
    }

    obtenerCandidato(id: any) {
        return this.http.get(`${this.baseUrl}/getCandidate.php?idCandidato=${id}`);
    }
    
    agregarCandidato(formData: FormData) {
        return this.http.post(`${this.baseUrl}/addCandidate.php`, formData);
    }

    eliminarCandidato(idCandidato: number | string) {
        return this.http.delete(`${this.baseUrl}/deleteCandidate.php?idCandidato=${idCandidato}`);
    }

    editarCandidato(candidato: Candidato) {
        return this.http.put(`${this.baseUrl}/editCandidate.php`, candidato);
    }

    //Enviar mensaje 
    enviarMensaje(mensaje: FormData) {
        return this.http.post(`${this.baseUrl}/sendMessage.php`, mensaje);
    }

}
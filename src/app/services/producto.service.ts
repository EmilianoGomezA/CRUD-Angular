import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from "../models/producto.model";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: "root"
})

export class ProductoService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    obtenerProductos() {
        return this.http.get(`${this.baseUrl}/getAllProducts.php`);
    }

    obtenerProducto(id: string | number) {
        return this.http.get(`${this.baseUrl}/getProduct.php?idProducto=${id}`);
    }
    
    agregarProducto(formData: FormData) {
        return this.http.post(`${this.baseUrl}/addProduct.php`, formData);
    }

    eliminarProducto(producto: Producto) {
        return this.http.delete(`${this.baseUrl}/deleteProduct.php?idProducto=${producto.id}`);
    }

    editarProducto(producto: Producto) {
        return this.http.put(`${this.baseUrl}/editProduct.php`, producto);
    }

}
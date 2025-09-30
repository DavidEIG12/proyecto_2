import { Component } from '@angular/core';
@Component({
selector: 'app-contador',
templateUrl: './contador.component.html',
styleUrls: ['./contador.component.css']
})
export class Contador {
numero: number = 0;
incrementar() {
this.numero++;
}
decrementar() {
this.numero--;
}
reset() {
this.numero = 0;
}
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  
  @Input() valorBotonSeguir: string = "solid";


  botonSeguir: boolean = true;
  activarSegmentTerrapias: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  seguir() {
    this.botonSeguir = !this.botonSeguir;
    if(this.botonSeguir) {
      this.valorBotonSeguir = "solid";
    }else{
      this.valorBotonSeguir = "outline";
    }
  }

  valorSegment(event) {

    //const valorSegmento = event.detail.value;
    console.log(event.detail.value);
    if(event.detail.value === "terrapiasSegment") {
      this.activarSegmentTerrapias = true;
    }else{
      this.activarSegmentTerrapias = false;
    }
  }

  leerTerrapias(event) {
    
  }


}

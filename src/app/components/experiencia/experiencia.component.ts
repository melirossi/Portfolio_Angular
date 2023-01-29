import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  experienciaList:any;

  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaList=data.experiencia;
    });
  }

}

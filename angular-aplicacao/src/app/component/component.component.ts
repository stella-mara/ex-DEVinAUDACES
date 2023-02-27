import { Component, OnInit } from '@angular/core';
import { Personagem } from '../personagem';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit{

  public personagens : Personagem[] = [];
  constructor(private _service: ServiceService) {}

  ngOnInit(): void {

    this._service.getPersonagens().subscribe(
      (res) => {
        this.personagens = res
      }
    );
  }

}

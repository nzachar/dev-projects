import { PoiEntity, PoiSelectors } from '@packt/poi';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  poi$: Observable<PoiEntity | undefined> | undefined;

  constructor(private store: Store) {
   
  }
  ngOnInit(): void {
    this.poi$ = this.store.select(PoiSelectors.getSelected);
  }



}

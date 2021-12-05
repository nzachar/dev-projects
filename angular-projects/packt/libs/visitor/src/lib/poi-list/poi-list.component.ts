import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css']
})
export class PoiListComponent implements OnInit {

  pois$: Observable<PoiEntity[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(PoiActions.loadPois());
    this.pois$ = this.store.select(PoiSelectors.getAllPoi);
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({poiId: poi.id}))
  }
}

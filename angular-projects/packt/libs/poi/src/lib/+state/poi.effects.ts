import { PoiService } from './../../../poi.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators'

import * as PoiActions from './poi.actions';

@Injectable()
export class PoiEffects {
  loadPois$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.loadPois),
      fetch({
        run: () => {
          return this.poiService.getAll()
            .pipe(map(pois => PoiActions.loadPoisSuccess({ pois })));
        },
        onError: (_, error) => {
          console.error('Error', error);
          return PoiActions.loadPoisFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private poiService: PoiService) { }
}

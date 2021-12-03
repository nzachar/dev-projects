import { createAction, props } from '@ngrx/store';
import { PoiEntity } from './poi.models';

export const loadPois = createAction('[Poi Page] Load Pois');

export const loadPoisSuccess = createAction(
  '[Poi/API] Load Poi Success',
  props<{ pois: PoiEntity[] }>()
);

export const loadPoisFailure = createAction(
  '[Poi/API] Load Pois Failure',
  props<{ error: any }>()
);

export const selectPoi = createAction(
  '[Poi/API] Select Poi',
  props<{ poiId:string | number }>()
);

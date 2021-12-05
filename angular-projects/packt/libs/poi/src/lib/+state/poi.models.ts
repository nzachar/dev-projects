/**
 * Interface for the 'Poi' data
 */
export interface PoiEntity {
  id: string | number; // Primary ID
  name: string;
  lat: number;
  lng: number;
  descrption: string;
  imgUrl: string;
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionServiceService {

  constructor(private http:HttpClient) { }
  public getAllRegion(){
    return this.http.get('http://localhost:8080/projet/odk/Regions/liste')
  }
  postDasbord(
    nomregions:any,
    coderegion:any,
    activiterregion:any,
    superficieregion:any,
    languemregion:any,
    description:any,
    image:any,
    pays:any
  ):Observable<any>{
    let data = new FormData();
    data.append("nomregions", nomregions)
    data.append("coderegion", coderegion)
    data.append("activiterregion", activiterregion)
    data.append("superficieregion", superficieregion)
    data.append("languemregion", languemregion)
    data.append("description", description)
    data.append("images", image)
    return this.http.post(`http://localhost:8080/projet/odk/Regions/ajouterRegion/${pays}`, data)
  }
}
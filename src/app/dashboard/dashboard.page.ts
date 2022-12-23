import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaysService } from '../CLASS/pays';
import { Regions } from '../CLASS/regions';

import { PaysServiceService } from '../SERVICE/pays-service.service';
import { RegionServiceService } from '../SERVICE/region-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  images : any
  region:any
  file:any
  formmodule!: FormGroup;
  pays:any


  regionDashboard : Regions = {
    id_regions: 0,
    nomregions: '',
    coderegion: '',
    activiterregion: '',
    superficieregion: '',
    languemregion: '',
    description: '',
    images: '',
    nombrecommentaire: '',
    pays: new PaysService,
  };

  


  regions:any
  constructor( private paysService:PaysServiceService,
    private regionService: RegionServiceService,
   
  ) { }

  ngOnInit() {
  
    this.paysService.getAllPays().subscribe(data=>{
      this.pays=data;
      console.log(data);
    })
    this.regionService.getAll().subscribe(reponse => {
      console.log(reponse)
      this.regions = reponse;
    })
   
  }

  chargeImage(event: any){
    this.images = event.target.files[0]
    console.log(this.images);
  }

  AjouterRegions(){
    this.regionService.postDasbord(
      this.regionDashboard.nomregions,
      this.regionDashboard.coderegion,
      this.regionDashboard.activiterregion,
      this.regionDashboard.superficieregion,
      this.regionDashboard.languemregion,
      this.regionDashboard.description,
      this.regionDashboard.images = this.images,
      this.regionDashboard.pays
      ).subscribe(data=>{
      this.regions=data;
      console.log(data)
    })
  }
  supprimerRegion(id : number){
    console.log("j s8 clk")
    return this.regionService.deleteRegion(id).subscribe(d => {
      alert(" supprimer !")
    })
  }
}

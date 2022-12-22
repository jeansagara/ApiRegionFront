import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PaysServiceService } from '../SERVICE/pays-service.service';
import { RegionServiceService } from '../SERVICE/region-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  image : any
  region:any
  file:any
  formmodule!: FormGroup;
  pays:any


  regionDashboard : any = {
    nomregions : null,
    coderegion: null,
    activiterregion: null,
    superficieregion: null,
    languemregion: null,
    pays:null,
    description :null,
    

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
   
  }

  chargeImage(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }

  AjouterRegions(){
    this.regionService.postDasbord(
      this.regionDashboard.nomregions,
      this.regionDashboard.coderegion,
      this.regionDashboard.activiterregion,
      this.regionDashboard.superficieregion,
      this.regionDashboard.languemregion,
      this.regionDashboard.description,
      this.image,this.regionDashboard.pays
      
    ).subscribe(data=>{
      this.regions=data;
      console.log(data)
    })
  }
}

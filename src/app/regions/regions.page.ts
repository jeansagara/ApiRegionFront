import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegionServiceService } from '../SERVICE/region-service.service';


@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
mesregion : any;
nbreRg: number=0;
searchText: any;
p:any;
  constructor(private serviceRegion:RegionServiceService) { }
 
  ngOnInit() {
    this.serviceRegion.getAllRegion().subscribe(reponse => {
      this.mesregion = reponse;
      console.log(this.mesregion);
      this.nbreRg = this.mesregion.length;
      console.log(this.nbreRg);
    })
  }

}
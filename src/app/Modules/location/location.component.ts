import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent  {
  
  mapOptions: google.maps.MapOptions = {
    center: { lat: 26.224996554132048, lng: -98.22633191584079 },
    zoom : 18
 }
 
 marker = {
    position: { lat:  26.22536939191419,  lng: -98.22692232119
    },
 }


  constructor() { }
  ngAfterViewInit(): void {
   
    
  }
 
  
}

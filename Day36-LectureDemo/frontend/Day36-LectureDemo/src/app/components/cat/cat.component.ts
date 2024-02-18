import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent implements OnInit, OnDestroy{
  
  
  
  
  ngOnDestroy(): void {
    console.info("Cat OnDestroy");
  }
  ngOnInit(): void {
    console.info("Cat OnInit");
  }

}

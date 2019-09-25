import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name:string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('contentParagraph', {static: true}) contentparagraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(change: SimpleChanges){
    console.log(change);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content: '+this.header.nativeElement.textContent);
    console.log('Text content of paragraph: '+this.contentparagraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('Text content of paragraph: '+this.contentparagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Text content: '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}

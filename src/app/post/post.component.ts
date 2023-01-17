import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, 
OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  @Input('img') postImg= ''
  @Output() imgSelected = new EventEmitter<string>()
  constructor() { 
    console.log('constructor() called', this.postImg)
  }

  ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg)
  }
  ngOnChanges(){
    console.log('ngOnChanges() called')

  }
  ngDoCheck(){
    console.log('ngDoChecks() called')
  }
  ngAfterContentInit(){
    console.log('AfterContentInit() called')
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked() called')
  }
   ngAfterViewInit(){
    console.log("AfterViewInit() called")
  }
  ngAfterViewChecked(){
    console.log('AfterViewChekecd() called')
  } 
  ngOnDestroy(){
    console.log("OnDestory() called")
  }
 
}

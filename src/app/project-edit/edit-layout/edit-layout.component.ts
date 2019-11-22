import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core';


@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.scss'],
 
})
export class EditLayoutComponent implements OnInit, AfterViewInit {
  viewport = 'fixed';
  bottomGap = 10;
  topGap = 64;
  tabContent = [];
  isExpanded = false;
  
  @ViewChildren('defaultOpen') tab: QueryList<any>;
  @ViewChildren('tabcontent') content: QueryList<any>;
  constructor() { }

  ngOnInit() {
    this.tabContent = [
      {
        id: 0,
        name: 'person'
      },
      {
        id: 1,
        name: 'assignment'
      },
      {
        id: 2 ,
        name: 'Management'
      }
    ]
  }

  ngAfterViewInit() {
    // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();
    this.content.changes.subscribe(
      (element) => {
        element.nativeElement.style.display = "none"
      }
    )
    console.log(window.innerWidth);
    if (window.innerWidth >=1440) {
      this.tab.toArray().map(
        element => {
          if (element._elementRef.nativeElement.id === "0") {
            element._elementRef.nativeElement.click()
          }
        }
      )
    } else {
      this.content.toArray().map(
        element => {
          element.nativeElement.style.display = "none"
        }
      )
    }
    // this.tab.toArray().map(
    //   element => {
    //     if (element._elementRef.nativeElement.id === "0") {
    //       element._elementRef.nativeElement.click()
    //     }
    //   }
    // )
  }

  onResize(event) {
    console.log(event.target.innerWidth);
    if (event.target.innerWidth >= 1440) {
      this.tab.toArray().map(
        element => {
          if (element._elementRef.nativeElement.id === "0") {
            element._elementRef.nativeElement.click()
          }
        }
      )
    } else {
      this.content.toArray().map(
        element => {
          element.nativeElement.style.display = "none"
        }
      )
    }
  }



  openCity(evt, tab_id) {
    console.log(evt, tab_id, this.content);
    this.content.toArray().map(
      element => {
        element.nativeElement.style.display = "none"
      }
    )
    this.tab.toArray().map(
      element => {
        console.log(element._elementRef.nativeElement.className);
        element._elementRef.nativeElement.className = element._elementRef.nativeElement.className.replace(" active", "")
        
      }
    )
    this.content.toArray().map(
      element => {
        element.nativeElement.className = element.nativeElement.className.replace(" active", "");
      }
    )
    this.content.toArray()[tab_id].nativeElement.style.display = "block"
    evt.currentTarget.className += " active"

  }

  // toggleSidenav() {
  //   this.content.toArray().map(
  //     element => {
  //       element.nativeElement.style.display = "none"
  //     }
  //   )
  //   this.isExpanded = !this.isExpanded
  // }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private router: Router) {}
  isvisible:any = false;
  addoffer(){
    this.isvisible = true;
  }

  confirm(){
    this.isvisible = false;
    this.router.navigate(['/tabs/tab4'])
  }
}

import {Component, OnInit} from '@angular/core';
import {IUserDetails} from "../../../models/IUserDetails";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.userDetailsObj = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUserDetails
    })
  }

  ngOnInit(): void {
  }

}

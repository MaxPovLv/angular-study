import {Component, OnInit} from '@angular/core';
import {IPostDetails} from "../../../models/IPostDetails";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.postDetailsObj = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPostDetails
    })
  }

  ngOnInit(): void {
  }
}

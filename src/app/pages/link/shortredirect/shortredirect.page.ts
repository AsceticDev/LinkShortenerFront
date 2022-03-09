import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';


@Component({
  selector: 'app-shortredirect',
  templateUrl: './shortredirect.page.html',
  styleUrls: ['./shortredirect.page.scss'],
})
export class ShortredirectPage implements OnInit {
  public linkHash: any;
  public fullUrl: any;

  constructor(
    public activatedRoute: ActivatedRoute, 
    public linkService: LinkService
    ) { }

  ngOnInit() {
    this.linkHash = this.activatedRoute.snapshot.params.linkHash;
    this.getShortlinkDetails();
  }

  getShortlinkDetails() {
    this.linkService.getShortenedLink(this.linkHash).subscribe(
      (res: any) => {
        this.fullUrl = res.shortenedLink.link;
        console.log(this.fullUrl);
        this.getMeTheFuckOutOfHere();
        console.log('HTTP response', res);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
  }

  getMeTheFuckOutOfHere() {
    window.location.href = this.fullUrl;
  }
}

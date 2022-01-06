import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public linkDetails: any;
  public linkHash: any;
  public href: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public linkService: LinkService,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    //init the hash id for the link via snapshot for hashId
    this.linkHash = this.activatedRoute.snapshot.params.linkHash;
    this.href = 'http://localhost:8101' + this.router.url;
    console.log(this.href)
    this.getLinkDetails();
  }

  public getLinkDetails(){
    this.linkService.getShortenedLink(this.linkHash).subscribe(
      (res: any) => {
        this.linkDetails = res.shortenedLink;
        console.log(this.linkDetails.author.username)
        console.log('HTTP response', res);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
  }


}

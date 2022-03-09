import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LinkService } from 'src/app/services/link.service';
import { UserService } from 'src/app/services/user.service';
import {Location} from '@angular/common';
import jwt_decode from 'jwt-decode';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public linkDetails: any;
  public linkHash: any;
  public href: any;
  public showToast: boolean;
  public myLinks: any;
  public theId: any;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    public linkService: LinkService,
    public router: Router,
    public authService: AuthService,
    public userService: UserService,
  ) { }

  ngOnInit() {
    //init the hash id for the link via snapshot for hashId
    this.linkHash = this.activatedRoute.snapshot.params.linkHash;
    this.href = this.document.location.origin + '/' + this.linkHash;
    console.log(this.href);
    this.getLinkDetails();
    this.getUserLinks();
  }

  public getLinkDetails(){
    this.linkService.getShortenedLink(this.linkHash).subscribe(
      (res: any) => {
        this.linkDetails = res.shortenedLink;
        console.log(this.linkDetails)
        console.log('HTTP response', res);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
  }

  public getUserLinks(){
      const access_token = this.authService.getJwtToken();
      const decoded_token: any = jwt_decode(access_token);
    this.userService.getUser(decoded_token.sub).subscribe(
      (res: any) => {
        this.myLinks = res.user.shortenedLinks;
        this.myLinks = this.myLinks.slice(0,5)
        console.log('asdfasdf', this.myLinks)
        console.log('HTTP response getUser', res);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    )
  }

  public copyShortLink = async () => {
    // let dingus = JSON.stringify(this.href)
    navigator.clipboard.writeText(this.href)
    this.showCopiedToast();
  }

  public showCopiedToast() {
    let nuts = (<HTMLElement>document.querySelector('.snackbar'));
    // nuts.style.visibility = 'visible'
    // nuts.style.animation = 'fadein 0.5s,fadeout .5s ease 1s 1 forwards';
    if(nuts) {
      nuts.classList.add('show');
      nuts.addEventListener('animationend', () => nuts.classList.remove('show') );
    }
  }

 

}

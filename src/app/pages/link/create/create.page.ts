import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/services/link.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public linkService: LinkService,
    public router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      linkHash: ['', [Validators.required]],
    });
  }

  createShortenedLink() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const access_token = this.authService.getJwtToken();
      const decoded_token: any = jwt_decode(access_token);
      console.log('Decoded Token: ', decoded_token);
      this.ionicForm.value.user_id = decoded_token.sub;
      this.linkService.createShortenedLink(this.ionicForm.value).subscribe(
        (success:any) => {
          console.log()
          console.log('HTTP response', success)
          try{
            this.router.navigate(['/link/details/' + success.shortenedLink._linkHash]);
          }catch(err){
            console.log(err);
          }
        
        },
        err => console.log('HTTP Error', err),
      );
    }
  }

}

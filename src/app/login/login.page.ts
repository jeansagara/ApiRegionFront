import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // username: string = '';
  // password: string = '';
  form: any = {
    username: null,
    password: null
  }
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  // login(){

  //   const data = {
  //     username: this.username,
  //     password: this.password
  //   };
  
  //   this.http.post('http://localhost:8080/api/auth/signin', data).subscribe(
  //     (response) => {
  //       // la connexion a réussi, traitez la réponse de l'API Spring
  //       console.log(data)
  //       this.router.navigate(['/dashboard']);
  //     },
  //     (error) => {
  //       // la connexion a échoué, affichez un message d'erreur
  //       console.log(error)
  //     }
  //   );}
  ngOnInit() {
  }

  
onSubmit(): void{
  console.log(this.form)
  this.http.post('http://localhost:8080/api/auth/signin', this.form).subscribe(
    data => console.log(data),

    err => console.log(err),
    //this.router.navigate(['/accueil'])
  );
  this.router.navigate(['/dashboard'])

}
}

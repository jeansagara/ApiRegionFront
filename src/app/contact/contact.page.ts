import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  submitForm(form: any): void {
    console.log(form.value);
    // Envoyer les données du formulaire à votre service de gestion des formulaires de contact ici
  }

}

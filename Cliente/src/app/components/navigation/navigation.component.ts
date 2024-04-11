import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

declare var $: any;


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    $(document).ready(function () { $(".dropdown-trigger").dropdown(); });
  }

  logout() {
    console.log("Cerrando sesion");
    localStorage.removeItem("id_Rol")
    localStorage.removeItem("correo")
    this.router.navigateByUrl('');
  }

  setIdioma(idioma: any) {
    if (idioma == 1)
      this.translate.use("en");
    if (idioma == 2)
      this.translate.use("es");
  }

}

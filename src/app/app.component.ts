import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from "./forms/template-driven/template-driven.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularNewProject4';


  save(input:string){
    console.log(input);
  }
}

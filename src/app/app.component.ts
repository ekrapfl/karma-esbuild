import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { useLargeDep } from "./use-large-dep";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'karma-esbuild';

  constructor() {
    useLargeDep();
  }
}

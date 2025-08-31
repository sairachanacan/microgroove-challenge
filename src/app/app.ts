import { Component, inject } from '@angular/core';
import { InitialsForm } from "./components/initials-form/initials-form";
import { InitialsService } from './services/initials-service';
import { GalleryComponent } from './components/gallery/gallery';
import { SpinnerComponent } from './components/spinner/spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    InitialsForm,
    GalleryComponent,
    SpinnerComponent,
    CommonModule
  ]
})
export class App {
  private readonly initialService = inject(InitialsService);
  loading$ = this.initialService.loading;
  constructor() { }

  intialFormSubmitHandler(name: string) {
    this.initialService.getInitials(name)
  }
}

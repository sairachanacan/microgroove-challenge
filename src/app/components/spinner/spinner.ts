import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss'
})
export class SpinnerComponent {

}

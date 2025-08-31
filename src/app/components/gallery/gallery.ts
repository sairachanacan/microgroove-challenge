import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { InitialsService } from '../../services/initials-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent implements OnInit {
  private readonly initialsService = inject(InitialsService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly domSanitizer = inject(DomSanitizer);
  initials: string[] = [];
  currentIndex: number = 0;

  /* On component initialization, subscribe to the initials service to get SVGs */
  ngOnInit() {
    this.initialsService.svgs.subscribe((data) => {
      this.initials = data?.map(svg => this.domSanitizer.bypassSecurityTrustHtml(svg) as string) || [];
      this.currentIndex = data.length ? data.length - 1 : 0;
      this.cdr.detectChanges();
    });
  }

  /* Navigate to the previous image */
  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  /* Navigate to the next image */
  nextImage() {
    if (this.currentIndex < this.initials.length - 1) {
      this.currentIndex++;
    }
  }
}

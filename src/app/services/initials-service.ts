import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialsService {

  private readonly httpClient = inject(HttpClient);
  private readonly $svgs = new BehaviorSubject<string[]>([]);
  private readonly $loading = new BehaviorSubject<boolean>(false);

  /** Fetch initials from the API based on the provided name.
   * @param name The name to fetch initials for.
   */
  public getInitials(name: string) {
    this.$loading.next(true);
    return this.httpClient.get(`https://tagdiscovery.com/api/get-initials?name=${name}`, {
      responseType: 'text'
    }).pipe(
      catchError((error) => {
        console.error('Error occurred while fetching initials:', error);
        throw error;
      }),
      take(1)
    ).subscribe({
      next: (response) => {
        this.setSvgs(response);
      },
      error: () => {
        this.$loading.next(false);
      },
      complete: () => {
        this.$loading.next(false);
      }
    });
  }

  /** Observable stream of SVGs fetched from the API. */
  public get svgs(): Observable<string[]> {
    return this.$svgs.asObservable();
  }

  /** Observable stream indicating the loading state of the service. */
  public get loading(): Observable<boolean> {
    return this.$loading.asObservable();
  }

  /** Update the SVGs BehaviorSubject with a new SVG string.
   * @param svg The new SVG string to add.
   */
  private setSvgs(svg: string) {
    const previousSvgs = this.$svgs.getValue();
    previousSvgs.push(svg);
    this.$svgs.next(previousSvgs);
  }
}

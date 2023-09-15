import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subject, take, takeUntil, timer} from "rxjs";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
  showPopup = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    const timer$ = timer(10000).pipe(take(1));

    timer$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.router.url === '/') {
          this.showPopup = true;
        }
      });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url !== '/' && this.showPopup) {
          this.showPopup = false;
          this.destroy$.next();
        }
      }
    });
  }

  redirectToCatalog() {
    this.router.navigate(['/catalog']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

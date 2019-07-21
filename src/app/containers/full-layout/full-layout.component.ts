import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SiderService }                                                                           from '@shared/services';
import { SubscriptionLike }                                                                       from 'rxjs';

@Component({
  selector: 'app-full-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit, OnDestroy {

  isMobile: boolean;
  isCollapsed: boolean;

  statusSubscription: SubscriptionLike;

  @HostListener('window:resize', ['$event']) onResize() {
    this.setMenuMode(window.innerWidth);
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private siderService: SiderService
  ) {
    this.statusSubscription = this.siderService.status
      .subscribe(value => this.isCollapsed = value);
  }

  ngOnInit() {
    this.setMenuMode(window.innerWidth);
  }

  ngOnDestroy() {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
      this.statusSubscription = null;
    }
  }

  onCollapseChange(event) {
    this.isCollapsed = event;
    this.siderService.isCollapsed(event);
  }

  setMenuMode(width) {
    if (width <= 576) {
      this.isMobile = true;
      this.isCollapsed = true;
    } else if (width > 576 && width < 922) {
      this.isMobile = false;
      this.isCollapsed = true;
    } else {
      this.isMobile = false;
      this.isCollapsed = false;
    }
    this.siderService.isCollapsed(this.isCollapsed);
  }
}

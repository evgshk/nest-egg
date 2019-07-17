import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {

  isMobile: boolean;
  isCollapsed: boolean;

  @HostListener('window:resize', ['$event']) onResize() {
    this.setMenuMode(window.innerWidth);
  }

  ngOnInit() {
    this.setMenuMode(window.innerWidth);
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
  }
}

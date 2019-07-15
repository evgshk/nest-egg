import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent {

  isCollapsed = false;
  hasCollapseBtn = true;

  @HostListener('window:resize', ['$event']) onResize() {
    this.isCollapsed = window.innerWidth <= 992;
    this.hasCollapseBtn = window.innerWidth > 992;
  }
}

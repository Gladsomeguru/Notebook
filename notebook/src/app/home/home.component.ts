import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  @ViewChild('page') page!: ElementRef;
  lineCount = 0;
  lineCountRight = 0;
  lineHeight = 36;

  ngAfterViewInit() {
    this.calculateLines();
    this.cdr.detectChanges();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateLines();
  }

  calculateLines() {
    if (this.page) {
      const height = this.page.nativeElement.offsetHeight;
      this.lineCount = Math.floor(height / this.lineHeight);
      this.lineCountRight = this.lineCount - 1; 
      console.log('Height:', height, 'Line Count:', this.lineCount);
    }
  }
}



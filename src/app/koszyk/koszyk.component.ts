import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() sumaKoszyka: number = 0;
}

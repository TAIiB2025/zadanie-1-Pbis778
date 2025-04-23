import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from '../koszyk/koszyk.component';

export class Product {
  constructor(
    public nazwa: string,
    public cena: number,
    public dataUtworzenia: Date,
    public czyPromocja: boolean,
    public liczbaWKoszyku: number = 0
  ) {}
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, KoszykComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  produkty: Product[] = [
    new Product('myszka', 20.00, new Date('2025-04-23'), true),
    new Product('klawiatura', 40.50, new Date('2025-04-23'), false),
    new Product('słuchawki', 15.00, new Date('2025-04-23'), true),
    new Product('monitor', 150.00, new Date('2025-04-23'), false),
    new Product('ładowarka', 10.00, new Date('2025-04-23'), true)
  ];

  sumaKoszyka: number = 0;
  produktyWidoczne: boolean = true;

  dodajDoKoszyka(produkt: Product) {
    produkt.liczbaWKoszyku += 1;
    this.sumaKoszyka += produkt.cena;
  }

  przelaczWidocznosc() {
    this.produktyWidoczne = !this.produktyWidoczne;
  }

  zerujKoszyk() {
    this.sumaKoszyka = 0;
    this.produkty.forEach(product => {
      product.liczbaWKoszyku = 0;
    });
  }
}

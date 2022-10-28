import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../../services/currency.service';
import { IResponse } from './../../models/currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private currencyService: CurrencyService
  ) { }

  currencyUSD = 0
  currencyEUR = 0

  ngOnInit(): void {
      this.currencyService.getCurr().subscribe((s: IResponse) => {
        this.currencyUSD = s.rates.UAH        
      })
      this.currencyService.getCurr('EUR').subscribe((s: IResponse) => {
        this.currencyEUR = s.rates.UAH        
      })
  }

}

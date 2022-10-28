import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Rates } from 'src/app/models/currency';
import { CurrencyService } from './../../services/currency.service';

@Component({
  selector: 'app-conventer',
  templateUrl: './conventer.component.html',
  styleUrls: ['./conventer.component.css']
})


export class ConventerComponent implements OnInit {
  @Input() symb1: string = 'AED'
  @Input() curr1: number = 1
  @Input() symb2: string = 'AED'
  @Input() curr2: number = 1

  symbols: any = []
  rates: any 
  ratesSecond: any
  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
      this.currencyService.getSymbols().subscribe(e => {
       this.symbols = Object.keys(e.symbols) // Здесь коды валют
     })     
     this.currencyService.getCurr(this.symb1).subscribe(e => {      
      this.rates = e.rates
      this.ratesSecond = e.rates
    })    
  }

  changeHandleCurr() {    
    this.curr2 = Number((this.curr1 * this.rates[this.symb2]).toFixed(2))
  }
  changeHandleCurrSecond() {    
    this.curr1 = Number((this.curr2 * this.ratesSecond[this.symb1]).toFixed(2))
  }

  changeHandleSymb() {    
    this.currencyService.getCurr(this.symb1).subscribe(e => {      
      this.rates = e.rates
      this.curr2 = Number((this.curr1 * e.rates[this.symb2]).toFixed(2))
    })    

  }

  changeHandleSymbSecond() {    
    this.currencyService.getCurr(this.symb2).subscribe(e => {      
      this.ratesSecond = e.rates
      this.curr2 = Number((this.curr1 * e.rates[this.symb1]).toFixed(2))
    })    

  }


}

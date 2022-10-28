export interface Motd {
  msg: string;
  url: string;
}

export interface Rates extends Record<string, any> {
  AED: number;
  AFN: number;
  ALL: number;
  AMD: number;
  ANG: number;
  AOA: number;
  ARS: number;
  AUD: number;
  AWG: number;
  AZN: number;
  BAM: number;
  BBD: number;
  BDT: number;
  BGN: number;
  BHD: number;
  BIF: number;
  BMD: number;
  BND: number;
  BOB: number;
  BRL: number;
  BSD: number;
  BTC: number;
  BTN: number;
  BWP: number;
  BYN: number;
  BZD: number;
  CAD: number;
  CDF: number;
  CHF: number;
  CLF: number;
  CLP: number;
  CNH: number;
  CNY: number;
  COP: number;
  CRC: number;
  CUC: number;
  CUP: number;
  CVE: number;
  CZK: number;
  DJF: number;
  DKK: number;
  DOP: number;
  DZD: number;
  EGP: number;
  ERN: number;
  ETB: number;
  EUR: number;
  FJD: number;
  FKP: number;
  GBP: number;
  GEL: number;
  GGP: number;
  GHS: number;
  GIP: number;
  GMD: number;
  GNF: number;
  GTQ: number;
  GYD: number;
  HKD: number;
  HNL: number;
  HRK: number;
  HTG: number;
  HUF: number;
  IDR: number;
  ILS: number;
  IMP: number;
  INR: number;
  IQD: number;
  IRR: number;
  ISK: number;
  JEP: number;
  JMD: number;
  JOD: number;
  JPY: number;
  KES: number;
  KGS: number;
  KHR: number;
  KMF: number;
  KPW: number;
  KRW: number;
  KWD: number;
  KYD: number;
  KZT: number;
  LAK: number;
  LBP: number;
  LKR: number;
  LRD: number;
  LSL: number;
  LYD: number;
  MAD: number;
  MDL: number;
  MGA: number;
  MKD: number;
  MMK: number;
  MNT: number;
  MOP: number;
  MRU: number;
  MUR: number;
  MVR: number;
  MWK: number;
  MXN: number;
  MYR: number;
  MZN: number;
  NAD: number;
  NGN: number;
  NIO: number;
  NOK: number;
  NPR: number;
  NZD: number;
  OMR: number;
  PAB: number;
  PEN: number;
  PGK: number;
  PHP: number;
  PKR: number;
  PLN: number;
  PYG: number;
  QAR: number;
  RON: number;
  RSD: number;
  RUB: number;
  RWF: number;
  SAR: number;
  SBD: number;
  SCR: number;
  SDG: number;
  SEK: number;
  SGD: number;
  SHP: number;
  SLL: number;
  SOS: number;
  SRD: number;
  SSP: number;
  STD: number;
  STN: number;
  SVC: number;
  SYP: number;
  SZL: number;
  THB: number;
  TJS: number;
  TMT: number;
  TND: number;
  TOP: number;
  TRY: number;
  TTD: number;
  TWD: number;
  TZS: number;
  UAH: number;
  UGX: number;
  USD: number;
  UYU: number;
  UZS: number;
  VES: number;
  VND: number;
  VUV: number;
  WST: number;
  XAF: number;
  XAG: number;
  XAU: number;
  XCD: number;
  XDR: number;
  XOF: number;
  XPD: number;
  XPF: number;
  XPT: number;
  YER: number;
  ZAR: number;
  ZMW: number;
  ZWL: number;
}

export interface IResponse {
  motd: Motd;
  success: boolean;
  base: string;
  date: string;
  rates: Rates;
}

export interface Motd {
  msg: string;
  url: string;
}

export interface AED {
  description: string;
  code: string;
}

export interface AFN {
  description: string;
  code: string;
}

export interface ALL {
  description: string;
  code: string;
}

export interface AMD {
  description: string;
  code: string;
}

export interface ANG {
  description: string;
  code: string;
}

export interface AOA {
  description: string;
  code: string;
}

export interface ARS {
  description: string;
  code: string;
}

export interface AUD {
  description: string;
  code: string;
}

export interface AWG {
  description: string;
  code: string;
}

export interface AZN {
  description: string;
  code: string;
}

export interface BAM {
  description: string;
  code: string;
}

export interface BBD {
  description: string;
  code: string;
}

export interface BDT {
  description: string;
  code: string;
}

export interface BGN {
  description: string;
  code: string;
}

export interface BHD {
  description: string;
  code: string;
}

export interface BIF {
  description: string;
  code: string;
}

export interface BMD {
  description: string;
  code: string;
}

export interface BND {
  description: string;
  code: string;
}

export interface BOB {
  description: string;
  code: string;
}

export interface BRL {
  description: string;
  code: string;
}

export interface BSD {
  description: string;
  code: string;
}

export interface BTC {
  description: string;
  code: string;
}

export interface BTN {
  description: string;
  code: string;
}

export interface BWP {
  description: string;
  code: string;
}

export interface BYN {
  description: string;
  code: string;
}

export interface BZD {
  description: string;
  code: string;
}

export interface CAD {
  description: string;
  code: string;
}

export interface CDF {
  description: string;
  code: string;
}

export interface CHF {
  description: string;
  code: string;
}

export interface CLF {
  description: string;
  code: string;
}

export interface CLP {
  description: string;
  code: string;
}

export interface CNH {
  description: string;
  code: string;
}

export interface CNY {
  description: string;
  code: string;
}

export interface COP {
  description: string;
  code: string;
}

export interface CRC {
  description: string;
  code: string;
}

export interface CUC {
  description: string;
  code: string;
}

export interface CUP {
  description: string;
  code: string;
}

export interface CVE {
  description: string;
  code: string;
}

export interface CZK {
  description: string;
  code: string;
}

export interface DJF {
  description: string;
  code: string;
}

export interface DKK {
  description: string;
  code: string;
}

export interface DOP {
  description: string;
  code: string;
}

export interface DZD {
  description: string;
  code: string;
}

export interface EGP {
  description: string;
  code: string;
}

export interface ERN {
  description: string;
  code: string;
}

export interface ETB {
  description: string;
  code: string;
}

export interface EUR {
  description: string;
  code: string;
}

export interface FJD {
  description: string;
  code: string;
}

export interface FKP {
  description: string;
  code: string;
}

export interface GBP {
  description: string;
  code: string;
}

export interface GEL {
  description: string;
  code: string;
}

export interface GGP {
  description: string;
  code: string;
}

export interface GHS {
  description: string;
  code: string;
}

export interface GIP {
  description: string;
  code: string;
}

export interface GMD {
  description: string;
  code: string;
}

export interface GNF {
  description: string;
  code: string;
}

export interface GTQ {
  description: string;
  code: string;
}

export interface GYD {
  description: string;
  code: string;
}

export interface HKD {
  description: string;
  code: string;
}

export interface HNL {
  description: string;
  code: string;
}

export interface HRK {
  description: string;
  code: string;
}

export interface HTG {
  description: string;
  code: string;
}

export interface HUF {
  description: string;
  code: string;
}

export interface IDR {
  description: string;
  code: string;
}

export interface ILS {
  description: string;
  code: string;
}

export interface IMP {
  description: string;
  code: string;
}

export interface INR {
  description: string;
  code: string;
}

export interface IQD {
  description: string;
  code: string;
}

export interface IRR {
  description: string;
  code: string;
}

export interface ISK {
  description: string;
  code: string;
}

export interface JEP {
  description: string;
  code: string;
}

export interface JMD {
  description: string;
  code: string;
}

export interface JOD {
  description: string;
  code: string;
}

export interface JPY {
  description: string;
  code: string;
}

export interface KES {
  description: string;
  code: string;
}

export interface KGS {
  description: string;
  code: string;
}

export interface KHR {
  description: string;
  code: string;
}

export interface KMF {
  description: string;
  code: string;
}

export interface KPW {
  description: string;
  code: string;
}

export interface KRW {
  description: string;
  code: string;
}

export interface KWD {
  description: string;
  code: string;
}

export interface KYD {
  description: string;
  code: string;
}

export interface KZT {
  description: string;
  code: string;
}

export interface LAK {
  description: string;
  code: string;
}

export interface LBP {
  description: string;
  code: string;
}

export interface LKR {
  description: string;
  code: string;
}

export interface LRD {
  description: string;
  code: string;
}

export interface LSL {
  description: string;
  code: string;
}

export interface LYD {
  description: string;
  code: string;
}

export interface MAD {
  description: string;
  code: string;
}

export interface MDL {
  description: string;
  code: string;
}

export interface MGA {
  description: string;
  code: string;
}

export interface MKD {
  description: string;
  code: string;
}

export interface MMK {
  description: string;
  code: string;
}

export interface MNT {
  description: string;
  code: string;
}

export interface MOP {
  description: string;
  code: string;
}

export interface MRO {
  description: string;
  code: string;
}

export interface MRU {
  description: string;
  code: string;
}

export interface MUR {
  description: string;
  code: string;
}

export interface MVR {
  description: string;
  code: string;
}

export interface MWK {
  description: string;
  code: string;
}

export interface MXN {
  description: string;
  code: string;
}

export interface MYR {
  description: string;
  code: string;
}

export interface MZN {
  description: string;
  code: string;
}

export interface NAD {
  description: string;
  code: string;
}

export interface NGN {
  description: string;
  code: string;
}

export interface NIO {
  description: string;
  code: string;
}

export interface NOK {
  description: string;
  code: string;
}

export interface NPR {
  description: string;
  code: string;
}

export interface NZD {
  description: string;
  code: string;
}

export interface OMR {
  description: string;
  code: string;
}

export interface PAB {
  description: string;
  code: string;
}

export interface PEN {
  description: string;
  code: string;
}

export interface PGK {
  description: string;
  code: string;
}

export interface PHP {
  description: string;
  code: string;
}

export interface PKR {
  description: string;
  code: string;
}

export interface PLN {
  description: string;
  code: string;
}

export interface PYG {
  description: string;
  code: string;
}

export interface QAR {
  description: string;
  code: string;
}

export interface RON {
  description: string;
  code: string;
}

export interface RSD {
  description: string;
  code: string;
}

export interface RUB {
  description: string;
  code: string;
}

export interface RWF {
  description: string;
  code: string;
}

export interface SAR {
  description: string;
  code: string;
}

export interface SBD {
  description: string;
  code: string;
}

export interface SCR {
  description: string;
  code: string;
}

export interface SDG {
  description: string;
  code: string;
}

export interface SEK {
  description: string;
  code: string;
}

export interface SGD {
  description: string;
  code: string;
}

export interface SHP {
  description: string;
  code: string;
}

export interface SLL {
  description: string;
  code: string;
}

export interface SOS {
  description: string;
  code: string;
}

export interface SRD {
  description: string;
  code: string;
}

export interface SSP {
  description: string;
  code: string;
}

export interface STD {
  description: string;
  code: string;
}

export interface STN {
  description: string;
  code: string;
}

export interface SVC {
  description: string;
  code: string;
}

export interface SYP {
  description: string;
  code: string;
}

export interface SZL {
  description: string;
  code: string;
}

export interface THB {
  description: string;
  code: string;
}

export interface TJS {
  description: string;
  code: string;
}

export interface TMT {
  description: string;
  code: string;
}

export interface TND {
  description: string;
  code: string;
}

export interface TOP {
  description: string;
  code: string;
}

export interface TRY {
  description: string;
  code: string;
}

export interface TTD {
  description: string;
  code: string;
}

export interface TWD {
  description: string;
  code: string;
}

export interface TZS {
  description: string;
  code: string;
}

export interface UAH {
  description: string;
  code: string;
}

export interface UGX {
  description: string;
  code: string;
}

export interface USD {
  description: string;
  code: string;
}

export interface UYU {
  description: string;
  code: string;
}

export interface UZS {
  description: string;
  code: string;
}

export interface VEF {
  description: string;
  code: string;
}

export interface VES {
  description: string;
  code: string;
}

export interface VND {
  description: string;
  code: string;
}

export interface VUV {
  description: string;
  code: string;
}

export interface WST {
  description: string;
  code: string;
}

export interface XAF {
  description: string;
  code: string;
}

export interface XAG {
  description: string;
  code: string;
}

export interface XAU {
  description: string;
  code: string;
}

export interface XCD {
  description: string;
  code: string;
}

export interface XDR {
  description: string;
  code: string;
}

export interface XOF {
  description: string;
  code: string;
}

export interface XPD {
  description: string;
  code: string;
}

export interface XPF {
  description: string;
  code: string;
}

export interface XPT {
  description: string;
  code: string;
}

export interface YER {
  description: string;
  code: string;
}

export interface ZAR {
  description: string;
  code: string;
}

export interface ZMW {
  description: string;
  code: string;
}

export interface ZWL {
  description: string;
  code: string;
}

export interface Symbols {
  AED: AED;
  AFN: AFN;
  ALL: ALL;
  AMD: AMD;
  ANG: ANG;
  AOA: AOA;
  ARS: ARS;
  AUD: AUD;
  AWG: AWG;
  AZN: AZN;
  BAM: BAM;
  BBD: BBD;
  BDT: BDT;
  BGN: BGN;
  BHD: BHD;
  BIF: BIF;
  BMD: BMD;
  BND: BND;
  BOB: BOB;
  BRL: BRL;
  BSD: BSD;
  BTC: BTC;
  BTN: BTN;
  BWP: BWP;
  BYN: BYN;
  BZD: BZD;
  CAD: CAD;
  CDF: CDF;
  CHF: CHF;
  CLF: CLF;
  CLP: CLP;
  CNH: CNH;
  CNY: CNY;
  COP: COP;
  CRC: CRC;
  CUC: CUC;
  CUP: CUP;
  CVE: CVE;
  CZK: CZK;
  DJF: DJF;
  DKK: DKK;
  DOP: DOP;
  DZD: DZD;
  EGP: EGP;
  ERN: ERN;
  ETB: ETB;
  EUR: EUR;
  FJD: FJD;
  FKP: FKP;
  GBP: GBP;
  GEL: GEL;
  GGP: GGP;
  GHS: GHS;
  GIP: GIP;
  GMD: GMD;
  GNF: GNF;
  GTQ: GTQ;
  GYD: GYD;
  HKD: HKD;
  HNL: HNL;
  HRK: HRK;
  HTG: HTG;
  HUF: HUF;
  IDR: IDR;
  ILS: ILS;
  IMP: IMP;
  INR: INR;
  IQD: IQD;
  IRR: IRR;
  ISK: ISK;
  JEP: JEP;
  JMD: JMD;
  JOD: JOD;
  JPY: JPY;
  KES: KES;
  KGS: KGS;
  KHR: KHR;
  KMF: KMF;
  KPW: KPW;
  KRW: KRW;
  KWD: KWD;
  KYD: KYD;
  KZT: KZT;
  LAK: LAK;
  LBP: LBP;
  LKR: LKR;
  LRD: LRD;
  LSL: LSL;
  LYD: LYD;
  MAD: MAD;
  MDL: MDL;
  MGA: MGA;
  MKD: MKD;
  MMK: MMK;
  MNT: MNT;
  MOP: MOP;
  MRO: MRO;
  MRU: MRU;
  MUR: MUR;
  MVR: MVR;
  MWK: MWK;
  MXN: MXN;
  MYR: MYR;
  MZN: MZN;
  NAD: NAD;
  NGN: NGN;
  NIO: NIO;
  NOK: NOK;
  NPR: NPR;
  NZD: NZD;
  OMR: OMR;
  PAB: PAB;
  PEN: PEN;
  PGK: PGK;
  PHP: PHP;
  PKR: PKR;
  PLN: PLN;
  PYG: PYG;
  QAR: QAR;
  RON: RON;
  RSD: RSD;
  RUB: RUB;
  RWF: RWF;
  SAR: SAR;
  SBD: SBD;
  SCR: SCR;
  SDG: SDG;
  SEK: SEK;
  SGD: SGD;
  SHP: SHP;
  SLL: SLL;
  SOS: SOS;
  SRD: SRD;
  SSP: SSP;
  STD: STD;
  STN: STN;
  SVC: SVC;
  SYP: SYP;
  SZL: SZL;
  THB: THB;
  TJS: TJS;
  TMT: TMT;
  TND: TND;
  TOP: TOP;
  TRY: TRY;
  TTD: TTD;
  TWD: TWD;
  TZS: TZS;
  UAH: UAH;
  UGX: UGX;
  USD: USD;
  UYU: UYU;
  UZS: UZS;
  VEF: VEF;
  VES: VES;
  VND: VND;
  VUV: VUV;
  WST: WST;
  XAF: XAF;
  XAG: XAG;
  XAU: XAU;
  XCD: XCD;
  XDR: XDR;
  XOF: XOF;
  XPD: XPD;
  XPF: XPF;
  XPT: XPT;
  YER: YER;
  ZAR: ZAR;
  ZMW: ZMW;
  ZWL: ZWL;
}

export interface ISymbols {
  motd: Motd;
  success: boolean;
  symbols: Symbols;
}
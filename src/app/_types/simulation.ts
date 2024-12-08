type ChartViewType = '일' | '주' | '월' | '년';

type TradeType = '매수' | '매도';

type AmountType = '10%' | '25%' | '50%' | '최대';

type SideNavType =
  | '관심종목'
  | '보유종목'
  | '백테스팅'
  | '거래현황'
  | '내 거래내역';

interface TradeDataType {
  stockName: string;
  stockQuantity: number;
  stockPrice: number;
}

interface StockInfo {
  image_path: string;
  name: string;
  price: number;
  change_amount: number;
  change_percent: number;
  liked: boolean;
  quantity: number;
  avg_purchase_price: number;
}

interface DailyPriceBodyTypes {
  marketDivCode: string;
  stockCode: string;
  dateFrom: string;
  dateTo: string;
  periodDivCode: string;
  orgAdjPrice: number;
}

interface DailyPriceResponseTypes {
  marketDivCode: string;
  stockCode: string;
  dateFrom: string;
  dateTo: string;
  periodDivCode: string;
  orgAdjPrice: number;
}

interface HoldStockTypes {
  userId: number;
  holdStockId: number;
  corpName: string;
  stockCode: string;
  totalHoldings: number;
  holdStatus: string;
  avgPrice: number;
  principal: number;
  createdAt: string;
}

interface StockPriceTypes {
  iscd_stat_cls_code: string;
  marg_rate: string;
  rprs_mrkt_kor_name: string;
  bstp_kor_isnm: string;
  temp_stop_yn: string;
  oprc_rang_cont_yn: string;
  clpr_rang_cont_yn: string;
  crdt_able_yn: string;
  grmn_rate_cls_code: string;
  elw_pblc_yn: string;
  stck_prpr: string;
  prdy_vrss: string;
  prdy_vrss_sign: string;
  prdy_ctrt: string;
  acml_tr_pbmn: string;
  acml_vol: string;
  prdy_vrss_vol_rate: string;
  stck_oprc: string;
  stck_hgpr: string;
  stck_lwpr: string;
  stck_mxpr: string;
  stck_llam: string;
  stck_sdpr: string;
  wghn_avrg_stck_prc: string;
  hts_frgn_ehrt: string;
  frgn_ntby_qty: string;
  pgtr_ntby_qty: string;
  pvt_scnd_dmrs_prc: string;
  pvt_frst_dmrs_prc: string;
  pvt_pont_val: string;
  pvt_frst_dmsp_prc: string;
  pvt_scnd_dmsp_prc: string;
  dmrs_val: string;
  dmsp_val: string;
  cpfn: string;
  rstc_wdth_prc: string;
  stck_fcam: string;
  stck_sspr: string;
  aspr_unit: string;
  hts_deal_qty_unit_val: string;
  lstn_stcn: string;
  hts_avls: string;
  per: string;
  pbr: string;
  stac_month: string;
  vol_tnrt: string;
  eps: string;
  bps: string;
  d250_hgpr: string;
  d250_hgpr_date: string;
  d250_hgpr_vrss_prpr_rate: string;
  d250_lwpr: string;
  d250_lwpr_date: string;
  d250_lwpr_vrss_prpr_rate: string;
  stck_dryy_hgpr: string;
  dryy_hgpr_vrss_prpr_rate: string;
  dryy_hgpr_date: string;
  stck_dryy_lwpr: string;
  dryy_lwpr_vrss_prpr_rate: string;
  dryy_lwpr_date: string;
  w52_hgpr: string;
  w52_hgpr_vrss_prpr_ctrt: string;
  w52_hgpr_date: string;
  w52_lwpr: string;
  w52_lwpr_vrss_prpr_ctrt: string;
  w52_lwpr_date: string;
  whol_loan_rmnd_rate: string;
  ssts_yn: string;
  stck_shrn_iscd: string;
  fcam_cnnm: string;
  cpfn_cnnm: string;
  frgn_hldn_qty: string;
  vi_cls_code: string;
  ovtm_vi_cls_code: string;
  last_ssts_cntg_qty: string;
  invt_caful_yn: string;
  mrkt_warn_cls_code: string;
  short_over_yn: string;
  sltr_yn: string;
}

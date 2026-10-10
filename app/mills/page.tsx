"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight, 
  RotateCcw,
  List,
  Map,
  X,
  Award,
  Phone,
  User,
  Menu
} from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const REAL_MILLS_DATA = [
  { id: 1, name: "امین گهر", province: "اردبیل", brand: "امین اردبیل", ceo: "عادل صلح نژاد", phone: "04533640906", capacity: "850,000 MT/Year", rawCapacity: 850000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "SGS"] },
  { id: 2, name: "قندریزی مهر", province: "اردبیل", brand: "زیرک", ceo: "علیرضا خیرالی", phone: "04533645947", capacity: "450,000 MT/Year", rawCapacity: 450000, status: "Verified", standards: ["ICUMSA 45", "FDA", "ISO 22000"] },
  { id: 3, name: "قند آرتا کیمیا", province: "اردبیل", brand: "کیمیا- سلامت خزر- برلیان", ceo: "مهیار فصیحی کله سر", phone: "04533873786", capacity: "600,000 MT/Year", rawCapacity: 600000, status: "Verified", standards: ["ICUMSA 45", "SGS", "HACCP"] },
  { id: 4, name: "الین قند شیرین کام", province: "اردبیل", brand: "شیرین کام اردبیل", ceo: "حسن رشیدی", phone: "04533873939", capacity: "750,000 MT/Year", rawCapacity: 750000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "HALAL"] },
  { id: 5, name: "گل علی کبیری پور", province: "اردبیل", brand: "کبیر", ceo: "گل علی کبیری پور", phone: "04533874007", capacity: "520,000 MT/Year", rawCapacity: 520000, status: "Verified", standards: ["ICUMSA 45", "FDA", "SGS"] },
  { id: 6, name: "محمود وطنی", province: "اصفهان", brand: "وطن", ceo: "محمود وطنی", phone: "03138553198", capacity: "950,000 MT/Year", rawCapacity: 950000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "SGS"] },
  { id: 7, name: "قند کامیاب", province: "اصفهان", brand: "افرا", ceo: "بهمن مهرابی", phone: "03133690780", capacity: "1,200,000 MT/Year", rawCapacity: 1200000, status: "Verified", standards: ["ICUMSA 45", "SGS", "HACCP"] },
  { id: 8, name: "شیرین شاخص عطیه سپاهان", province: "اصفهان", brand: "عطیه", ceo: "خلیل کدخدایی الیادرانی", phone: "03132358456", capacity: "680,000 MT/Year", rawCapacity: 680000, status: "Verified", standards: ["ICUMSA 45", "FDA", "ISO 22000"] },
  { id: 9, name: "شیرین شهد جی", province: "اصفهان", brand: "جی", ceo: "ناصر عمادی", phone: "03135727280", capacity: "500,000 MT/Year", rawCapacity: 500000, status: "Verified", standards: ["ICUMSA 45", "HALAL", "SGS"] },
  { id: 10, name: "افسون شهد نایین", province: "اصفهان", brand: "افسون شهد نایین", ceo: "محمد دهقانی", phone: "03146249281", capacity: "400,000 MT/Year", rawCapacity: 400000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 11, name: "شیرین سازان دماوند", province: "البرز", brand: "ماقوت", ceo: "حمیدرضا آماده", phone: "02637870412", capacity: "820,000 MT/Year", rawCapacity: 820000, status: "Verified", standards: ["ICUMSA 45", "SGS", "FDA"] },
  { id: 12, name: "هزاره سوم وطن", province: "البرز", brand: "گلشکر", ceo: "یوسف سرابی داریان", phone: "02644373192", capacity: "910,000 MT/Year", rawCapacity: 910000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 13, name: "زرین البرز ایرانیان", province: "البرز", brand: "البرز", ceo: "اباسط حاجی زاده", phone: "02645333410", capacity: "650,000 MT/Year", rawCapacity: 650000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 14, name: "نرگس نگین زاگرس", province: "ایلام", brand: "ایلام", ceo: "غلامرضا جوانمردی", phone: "08432232621", capacity: "380,000 MT/Year", rawCapacity: 380000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 15, name: "قند حمزه صمدی", province: "آذربایجان شرقی", brand: "شالده", ceo: "حمزه صمدی", phone: "04137277555", capacity: "720,000 MT/Year", rawCapacity: 720000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 16, name: "متین نصیری", province: "آذربایجان شرقی", brand: "قانع", ceo: "عیسی نصیری", phone: "04142113745", capacity: "490,000 MT/Year", rawCapacity: 490000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 17, name: "قند ناب آذربایجان شرقی", province: "آذربایجان شرقی", brand: "آیتن", ceo: "بهمن هلالی", phone: "04134456190", capacity: "880,000 MT/Year", rawCapacity: 880000, status: "Verified", standards: ["ICUMSA 45", "SGS", "FDA"] },
  { id: 18, name: "قند رضوان", province: "آذربایجان شرقی", brand: "پلی گام", ceo: "محراب نوبخت", phone: "04137780658", capacity: "560,000 MT/Year", rawCapacity: 560000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 19, name: "علی و جمیل ایمانی", province: "آذربایجان شرقی", brand: "ایمانی - حامدی", ceo: "علی ایمانی", phone: "04144552977", capacity: "610,000 MT/Year", rawCapacity: 610000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 20, name: "قند شهد ضیافت سعادت", province: "آذربایجان شرقی", brand: "ضیافت", ceo: "قاسم سعادتی", phone: "04143458852", capacity: "430,000 MT/Year", rawCapacity: 430000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 21, name: "شکوه آذین", province: "آذربایجان شرقی", brand: "تاپدوق – رول میلا-آیتن", ceo: "بهمن هلالی", phone: "04134456190", capacity: "990,000 MT/Year", rawCapacity: 990000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 22, name: "افتخار قند شکر ارس", province: "آذربایجان شرقی", brand: "هاشمی میریان", ceo: "ابوبکر صالح پور", phone: "04142110797", capacity: "780,000 MT/Year", rawCapacity: 780000, status: "Verified", standards: ["ICUMSA 45", "SGS", "FDA"] },
  { id: 23, name: "قند سبحان", province: "آذربایجان غربی", brand: "ئیللر", ceo: "حسین حسین زاده", phone: "04445357430", capacity: "540,000 MT/Year", rawCapacity: 540000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 24, name: "تنها تجارت متین غرب", province: "آذربایجان غربی", brand: "تنها – حسام", ceo: "خلیل تنها", phone: "04446433511", capacity: "830,000 MT/Year", rawCapacity: 830000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 25, name: "قند رامیار", province: "آذربایجان غربی", brand: "شمشاد", ceo: "محمدامین مینایی فر", phone: "04444412712", capacity: "620,000 MT/Year", rawCapacity: 620000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 26, name: "زرین چشمه میاندواب", province: "آذربایجان غربی", brand: "ارمغان", ceo: "وحید خدادادیان", phone: "04445357372", capacity: "710,000 MT/Year", rawCapacity: 710000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 27, name: "شیرین دیار میاندواب", province: "آذربایجان غربی", brand: "سوغات شیرین دیار", ceo: "اروجعلی محتشم", phone: "04445350685", capacity: "460,000 MT/Year", rawCapacity: 460000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 28, name: "شکرشکن میاندواب", province: "آذربایجان غربی", brand: "تاملا", ceo: "نوذر مردمی", phone: "04445358545", capacity: "590,000 MT/Year", rawCapacity: 590000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 29, name: "بهمن احمدی", province: "آذربایجان غربی", brand: "ایشملی", ceo: "بهمن احمدی", phone: "04436523663", capacity: "370,000 MT/Year", rawCapacity: 370000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 30, name: "جمال امین پور", province: "آذربایجان غربی", brand: "زانکو", ceo: "جمال امین پور", phone: "04446433593", capacity: "800,000 MT/Year", rawCapacity: 800000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 31, name: "شیرین قند قوشاچای", province: "آذربایجان غربی", brand: "قوشاچای", ceo: "جعفر ابراهیمی", phone: "04445362776", capacity: "670,000 MT/Year", rawCapacity: 670000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 32, name: "تعاونی 348 قند زاگرس خوی", province: "آذربایجان غربی", brand: "زوزان", ceo: "رضا قلندرزاده", phone: "04436441302", capacity: "530,000 MT/Year", rawCapacity: 530000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 33, name: "یکتا تغذیه نیکو", province: "آذربایجان غربی", brand: "سللر", ceo: "احد صمدی", phone: "02155631667", capacity: "740,000 MT/Year", rawCapacity: 740000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 34, name: "ویستا تجارت راشا", province: "آذربایجان غربی", brand: "نامور", ceo: "سعید عبدالهی حسنلو", phone: "04445363006", capacity: "890,000 MT/Year", rawCapacity: 890000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 35, name: "متین قند کردستان", province: "آذربایجان غربی", brand: "سردار", ceo: "مصطفی هاشمی", phone: "04446433655", capacity: "600,000 MT/Year", rawCapacity: 600000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 36, name: "فرهنگ طعام", province: "آذربایجان غربی", brand: "شیرکوه", ceo: "رحیم امین پور", phone: "04446433501", capacity: "420,000 MT/Year", rawCapacity: 420000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 37, name: "قند شادی", province: "آذربایجان غربی", brand: "گللر نو", ceo: "احمد محمد رحیمی", phone: "04446433600", capacity: "510,000 MT/Year", rawCapacity: 510000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 38, name: "قربانعلی سلیمانی", province: "آذربایجان غربی", brand: "چایپاره", ceo: "قربانعلی سلیمانی", phone: "04436727752", capacity: "350,000 MT/Year", rawCapacity: 350000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 39, name: "سالار قند حاج داداش", province: "آذربایجان غربی", brand: "جان آتا", ceo: "علی اکبر احمدز اده", phone: "04433744489", capacity: "760,000 MT/Year", rawCapacity: 760000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 40, name: "جلال اوغلو قند آذربایجان", province: "آذربایجان غربی", brand: "جلال اوغلو – شیرین سن", ceo: "علی جلال زاده", phone: "04432723730", capacity: "920,000 MT/Year", rawCapacity: 920000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 41, name: "نام آوران نگین گستر", province: "آذربایجان غربی", brand: "امین کردستان- هلگا", ceo: "منصور حاجی حسن", phone: "04446271008", capacity: "630,000 MT/Year", rawCapacity: 630000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 42, name: "نازنین علیزاده بهمنی", province: "بوشهر", brand: "مرنیکادو", ceo: "نازنین علیزاده بهمنی", phone: "06643240524", capacity: "480,000 MT/Year", rawCapacity: 480000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 43, name: "قند امینی پویا", province: "تهران", brand: "کامکا", ceo: "مهدی امینی پویا", phone: "02136901002", capacity: "1,100,000 MT/Year", rawCapacity: 1100000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "SGS"] },
  { id: 44, name: "صنعت غذا اطمینان", province: "تهران", brand: "یکان", ceo: "مسعود حاجیلو", phone: "02156227063", capacity: "850,000 MT/Year", rawCapacity: 850000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 45, name: "زرچین امین غرب", province: "تهران", brand: "عسلی", ceo: "قهرمان سلیمی", phone: "02136428152", capacity: "700,000 MT/Year", rawCapacity: 700000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 46, name: "شکوه یاس", province: "تهران", brand: "باخ", ceo: "مهیار دلدار", phone: "02155610309", capacity: "580,000 MT/Year", rawCapacity: 580000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 47, name: "حسنعلی حسنی", province: "تهران", brand: "آنا", ceo: "حسنعلی حسنی", phone: "02156390857", capacity: "490,000 MT/Year", rawCapacity: 490000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 48, name: "محمدعلی جعفری سیاوشانی", province: "تهران", brand: "سایلین - طارق", ceo: "محمدعلی جعفری سیاوشانی", phone: "02136424274", capacity: "930,000 MT/Year", rawCapacity: 930000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 49, name: "یگانه مهر شینا", province: "تهران", brand: "آتاتاتی", ceo: "وحید غیور", phone: "02136909664", capacity: "640,000 MT/Year", rawCapacity: 640000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 50, name: "سروستان خوراک", province: "تهران", brand: "بهین", ceo: "سینا مورخ", phone: "02188538667", capacity: "770,000 MT/Year", rawCapacity: 770000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 51, name: "کوشاتغذیه ماندگار", province: "تهران", brand: "نام آوران", ceo: "غلامرضا روزبهانی راد", phone: "02136424387", capacity: "860,000 MT/Year", rawCapacity: 860000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 52, name: "طبیعت سبزپارس کهن", province: "تهران", brand: "طبیعت", ceo: "محمد مختاریانی", phone: "02144354392", capacity: "1,500,000 MT/Year", rawCapacity: 1500000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "SGS"] },
  { id: 53, name: "رضا عامری فرانی", province: "تهران", brand: "عامری", ceo: "رضا عامری فرانی", phone: "02136427157", capacity: "520,000 MT/Year", rawCapacity: 520000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 54, name: "مزرعه پنجه آفتاب", province: "چهارمحال و بختیاری", brand: "سیاوش – پنجه کوه", ceo: "سیاوش قاسمی", phone: "03833526181", capacity: "410,000 MT/Year", rawCapacity: 410000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 55, name: "قند حیدری", province: "چهارمحال و بختیاری", brand: "حیدری", ceo: "خدابخش حیدری", phone: "03833339411", capacity: "630,000 MT/Year", rawCapacity: 630000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 56, name: "قند درسا چهار محال", province: "چهارمحال و بختیاری", brand: "درسا", ceo: "محمد مهدی بنی هاشمی", phone: "3834226562", capacity: "550,000 MT/Year", rawCapacity: 550000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 57, name: "قند میلاد", province: "چهارمحال و بختیاری", brand: "میلاد - دینا", ceo: "سجاد یعقوبی سامانی", phone: "03833526751", capacity: "720,000 MT/Year", rawCapacity: 720000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 58, name: "شیرین گستر جوین", province: "خراسان رضوی", brand: "جوین", ceo: "علی اکبر بیسجردی", phone: "05145222783", capacity: "1,050,000 MT/Year", rawCapacity: 1050000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 59, name: "قند وحیدی پویا", province: "خراسان رضوی", brand: "وحیدی", ceo: "علی وحیدی پویا", phone: "05144333370", capacity: "480,000 MT/Year", rawCapacity: 480000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 60, name: "مهر طوس خراسان", province: "خراسان رضوی", brand: "صمیم", ceo: "منوچهر اربابیان", phone: "05135413784", capacity: "810,000 MT/Year", rawCapacity: 810000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 61, name: "پانیذ بیهق", province: "خراسان رضوی", brand: "پانیذ بیهق بلالی- بلالی", ceo: "محسن بلالی", phone: "05144444044", capacity: "690,000 MT/Year", rawCapacity: 690000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 62, name: "مبنا تجارت پاژ", province: "خراسان رضوی", brand: "بارگاه", ceo: "ناهید کامیاب", phone: "05135412468", capacity: "570,000 MT/Year", rawCapacity: 570000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 63, name: "قند بهنازگلبهار", province: "خراسان رضوی", brand: "مشمش – کامکار – مک لارن", ceo: "احمد کامیاب", phone: "05135410791", capacity: "940,000 MT/Year", rawCapacity: 940000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 64, name: "الماس قند بجنورد", province: "خراسان شمالی", brand: "سپیتا", ceo: "مهرداد اکبری پور", phone: "05832412479", capacity: "430,000 MT/Year", rawCapacity: 430000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 65, name: "قند بلورین دزفول", province: "خوزستان", brand: "بلورین دزفول", ceo: "کریم راشدی", phone: "06142547570", capacity: "1,300,000 MT/Year", rawCapacity: 1300000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "SGS"] },
  { id: 66, name: "آذین شوشتر", province: "خوزستان", brand: "مجید", ceo: "ساسان قنادان", phone: "06136221679", capacity: "870,000 MT/Year", rawCapacity: 870000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 67, name: "خوش طعم خوزستان", province: "خوزستان", brand: "خوش طعم خوزستان", ceo: "کریم خنیفر", phone: "06142870229", capacity: "600,000 MT/Year", rawCapacity: 600000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 68, name: "نیکا نگین یگانه اورنج", province: "خوزستان", brand: "کامکوک", ceo: "مرتضی نوری فر", phone: "06142548107", capacity: "750,000 MT/Year", rawCapacity: 750000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 69, name: "کشت و صنعت ایران سوژا", province: "خوزستان", brand: "اندیمشک", ceo: "عبدالمجید مدیری", phone: "02191001032", capacity: "1,150,000 MT/Year", rawCapacity: 1150000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 70, name: "قند خوبان", province: "خوزستان", brand: "خوبان - 855", ceo: "مرتضی موسوی فرد", phone: "06142547545", capacity: "510,000 MT/Year", rawCapacity: 510000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 71, name: "پارت رایمون غرب", province: "زنجان", brand: "لابان", ceo: "حامد صفاییان", phone: "02458548082", capacity: "640,000 MT/Year", rawCapacity: 640000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 72, name: "حسن و حسین عبدی", province: "زنجان", brand: "برادران عبدی", ceo: "حسین عبدی", phone: "02432385088", capacity: "420,000 MT/Year", rawCapacity: 420000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 73, name: "صداقت محور زنجان", province: "زنجان", brand: "جزیاری", ceo: "محمدرحیم جزیاری", phone: "02432222310", capacity: "1,000,000 MT/Year", rawCapacity: 1000000, status: "Verified", standards: ["ICUMSA 45", "FDA", "ISO 22000"] },
  { id: 74, name: "قند حامد جزیاری", province: "زنجان", brand: "جزیاری", ceo: "حامد جزیاری", phone: "02432221091", capacity: "580,000 MT/Year", rawCapacity: 580000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 75, name: "قندریزی محمدتقی جزیاری", province: "زنجان", brand: "جزیاری", ceo: "محمدتقی جزیاری", phone: "02432222310", capacity: "730,000 MT/Year", rawCapacity: 730000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 76, name: "آذرین تاک ارغوان", province: "زنجان", brand: "فیروزه - ماهرخ", ceo: "حمیدرضا مصطفی", phone: "02435751565", capacity: "490,000 MT/Year", rawCapacity: 490000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 77, name: "شیرین شهد زنجان", province: "زنجان", brand: "گاوازنک", ceo: "فرزین محمدی", phone: "02432221166", capacity: "820,000 MT/Year", rawCapacity: 820000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 78, name: "محمد اسماعیلی", province: "زنجان", brand: "محمد مجید", ceo: "محمد اسماعیلی", phone: "02434338500", capacity: "390,000 MT/Year", rawCapacity: 390000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 79, name: "شیرین طعم زنجان", province: "زنجان", brand: "گلگون", ceo: "مهدی علی نژاد واقع", phone: "02432222102", capacity: "660,000 MT/Year", rawCapacity: 660000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 80, name: "اسکندر توحیدلو", province: "زنجان", brand: "لابان", ceo: "اسکندر توحیدلو", phone: "02432385060", capacity: "530,000 MT/Year", rawCapacity: 530000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 81, name: "هجرت گونای", province: "زنجان", brand: "پاک لار", ceo: "اسماعیل اسعد", phone: "02432385274", capacity: "470,000 MT/Year", rawCapacity: 470000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 82, name: "گلپاک غنچه", province: "زنجان", brand: "محدثه", ceo: "هاشم محمدرضایی", phone: "02432221251", capacity: "710,000 MT/Year", rawCapacity: 710000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 83, name: "قندریزی سلیمان عبدی", province: "زنجان", brand: "عبدی", ceo: "سلیمان عبدی", phone: "2432221580", capacity: "360,000 MT/Year", rawCapacity: 360000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 84, name: "قند شهد صایین شهر", province: "زنجان", brand: "بهرنگ", ceo: "مهدی جعفری", phone: "02432385060", capacity: "590,000 MT/Year", rawCapacity: 590000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 85, name: "اصغر امیری", province: "زنجان", brand: "قندستان نوآوران", ceo: "اصغر امیری", phone: "0243285295", capacity: "440,000 MT/Year", rawCapacity: 440000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 86, name: "باهر عسل", province: "زنجان", brand: "باهرعسل زنجان", ceo: "گیتی عنقایی", phone: "02432222022", capacity: "800,000 MT/Year", rawCapacity: 800000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 87, name: "رایان قطعه زنجان", province: "زنجان", brand: "کوهساری", ceo: "پیمان کوهساری", phone: "02432221466", capacity: "620,000 MT/Year", rawCapacity: 620000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 88, name: "شمیم کویر شاهرود", province: "سمنان", brand: "شمیم", ceo: "محمد محمدی", phone: "02332511680", capacity: "750,000 MT/Year", rawCapacity: 750000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 89, name: "پانیذفام شاهرود", province: "سمنان", brand: "قیصر", ceo: "علی صالح آبادی", phone: "02332511200", capacity: "510,000 MT/Year", rawCapacity: 510000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 90, name: "کامینه", province: "سمنان", brand: "کامینه", ceo: "محمدمهدی عامریان", phone: "02332511864", capacity: "680,000 MT/Year", rawCapacity: 680000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 91, name: "خلیل درواخ", province: "سیستان و بلوچستان", brand: "شهد شمشاد", ceo: "خلیل درواخ", phone: "05437342042", capacity: "390,000 MT/Year", rawCapacity: 390000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 92, name: "ماهکان شهد ایرانشهر", province: "سیستان و بلوچستان", brand: "شیرین طلا", ceo: "عبدالغفور دامنی", phone: "N/A", capacity: "450,000 MT/Year", rawCapacity: 450000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 93, name: "شیرین قند نوین پاسارگاد", province: "فارس", brand: "مرودشت نوین شوگر", ceo: "محسن بهمئی", phone: "07136264527", capacity: "880,000 MT/Year", rawCapacity: 880000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 94, name: "صدف نقش رستم فارس", province: "فارس", brand: "مرزبان", ceo: "سیروس مرزبان", phone: "07143417184", capacity: "630,000 MT/Year", rawCapacity: 630000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 95, name: "رشک عقیق درخشان", province: "فارس", brand: "لابیت", ceo: "علی محمد صمیمی", phone: "07137731088", capacity: "520,000 MT/Year", rawCapacity: 520000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 96, name: "آبنوس نوید فارس", province: "فارس", brand: "آبنوس", ceo: "بهروز رضانیا", phone: "07132602038", capacity: "770,000 MT/Year", rawCapacity: 770000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 97, name: "نقش شاپور فارس", province: "فارس", brand: "ساردو", ceo: "ملک غلامشاهی", phone: "07137730012", capacity: "600,000 MT/Year", rawCapacity: 600000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 98, name: "قند مروارید بیرم", province: "فارس", brand: "فایق", ceo: "محمد شکسته", phone: "07152554945", capacity: "430,000 MT/Year", rawCapacity: 430000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 99, name: "قند کسری فارس", province: "فارس", brand: "قند 212", ceo: "نصرالدین رحیمی", phone: "N/A", capacity: "350,000 MT/Year", rawCapacity: 350000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 100, name: "قندآوران فارس", province: "فارس", brand: "الوس", ceo: "علیرضا محمودی", phone: "07132622190", capacity: "710,000 MT/Year", rawCapacity: 710000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 101, name: "شیرین کار البرز", province: "قزوین", brand: "کومک", ceo: "علی اصغر میلانی", phone: "02833454764", capacity: "840,000 MT/Year", rawCapacity: 840000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 102, name: "تولیدی و صنعتی شرف", province: "قزوین", brand: "شمان", ceo: "احمد پیمان", phone: "02833453242", capacity: "590,000 MT/Year", rawCapacity: 590000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 103, name: "شیرین کام کوش کاسپین", province: "قزوین", brand: "آریایی", ceo: "وجیه الله شعبانی", phone: "02832848554", capacity: "950,000 MT/Year", rawCapacity: 950000, status: "Verified", standards: ["ICUMSA 45", "FDA", "ISO 22000"] },
  { id: 104, name: "مهدی اخوان قربانی", province: "قم", brand: "مشکور - شکارچی", ceo: "مهدی اخوان قربانی", phone: "02538868660", capacity: "460,000 MT/Year", rawCapacity: 460000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 105, name: "درنیکا قند عارف", province: "قم", brand: "عارف – صدیق – وایت جوی", ceo: "هاشم گیوه چی", phone: "02534383674", capacity: "730,000 MT/Year", rawCapacity: 730000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 106, name: "صنعت قند کردستان", province: "کردستان", brand: "فردوس- زکریا- برمک- کارو- آیچی", ceo: "آزاد خالقی", phone: "08791001018", capacity: "880,000 MT/Year", rawCapacity: 880000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 107, name: "شقایق پوش", province: "کردستان", brand: "آرویز", ceo: "سردار عبدالهی", phone: "08733383280", capacity: "520,000 MT/Year", rawCapacity: 520000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 108, name: "ذکریا جعفریان", province: "کردستان", brand: "گروس", ceo: "ذکریا جعفریان", phone: "08738239010", capacity: "410,000 MT/Year", rawCapacity: 410000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 109, name: "تعاونی 1247 خسروپور", province: "کردستان", brand: "شکرین", ceo: "هیمن خسروپور", phone: "08733383363", capacity: "650,000 MT/Year", rawCapacity: 650000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 110, name: "یکتا قند برکت سقز", province: "کردستان", brand: "برکت", ceo: "علی محمدی", phone: "08736323204", capacity: "790,000 MT/Year", rawCapacity: 790000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 111, name: "سواره چیای مریوان", province: "کردستان", brand: "کاندید", ceo: "امیدرضوانی", phone: "08733384663", capacity: "470,000 MT/Year", rawCapacity: 470000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 112, name: "احمد کلانتری پور", province: "کرمان", brand: "فرهاد", ceo: "احمد کلانتری پور", phone: "03413315431", capacity: "380,000 MT/Year", rawCapacity: 380000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 113, name: "گلزار تجارت میریان", province: "کرمانشاه", brand: "گلزار", ceo: "بابک میریان مطلق", phone: "08338264874", capacity: "720,000 MT/Year", rawCapacity: 720000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 114, name: "قند معاد", province: "کرمانشاه", brand: "معاد", ceo: "نورمراد قادری", phone: "08338282754", capacity: "540,000 MT/Year", rawCapacity: 540000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 115, name: "چهارفصل کلهر", province: "کرمانشاه", brand: "سفید بال", ceo: "محمد جواد رحیمی", phone: "08345564030", capacity: "660,000 MT/Year", rawCapacity: 660000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 116, name: "تعاونی2477تولید قند از شکر روانسر", province: "کرمانشاه", brand: "برکت", ceo: "محمد فایق سنجابی", phone: "08346623221", capacity: "490,000 MT/Year", rawCapacity: 490000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 117, name: "تعاونی 2554", province: "کرمانشاه", brand: "چهارفصل – بهار تمدن", ceo: "سجاد رحیمی", phone: "08325323253", capacity: "810,000 MT/Year", rawCapacity: 810000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 118, name: "گلمهر غرب", province: "کرمانشاه", brand: "تنها – حسام - اسکناس", ceo: "محمد تنها", phone: "08334642272", capacity: "930,000 MT/Year", rawCapacity: 930000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 119, name: "نیلبرگ خزر", province: "گلستان", brand: "شالین - تحسین", ceo: "عصمت قانعی", phone: "01735203777", capacity: "610,000 MT/Year", rawCapacity: 610000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 120, name: "نومینو رامیان", province: "گلستان", brand: "آتیکا - لابوسا", ceo: "مرجان پویان", phone: "01735888064", capacity: "440,000 MT/Year", rawCapacity: 440000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 121, name: "شیرین کام سرمد", province: "لرستان", brand: "قندان سپاهان", ceo: "حسن مالکی مقدم", phone: "N/A", capacity: "370,000 MT/Year", rawCapacity: 370000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 122, name: "قند سلیمان", province: "لرستان", brand: "سلیمان", ceo: "سلیمان طیوری", phone: "06643240524", capacity: "530,000 MT/Year", rawCapacity: 530000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 123, name: "شیرین شهد طبرستان", province: "مازندران", brand: "خطیر", ceo: "محمدمهدی گیوه چی", phone: "01144480111", capacity: "760,000 MT/Year", rawCapacity: 760000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 124, name: "تکامل غذا", province: "مازندران", brand: "کاترین - تکامل", ceo: "علی امینی", phone: "01144203569", capacity: "890,000 MT/Year", rawCapacity: 890000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] },
  { id: 125, name: "شهد پسند شازند", province: "مرکزی", brand: "شازند", ceo: "حمیدرضا شیری", phone: "08638232000", capacity: "950,000 MT/Year", rawCapacity: 950000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000", "FDA"] },
  { id: 126, name: "سلامت خوراک آریایی", province: "مرکزی", brand: "امروز", ceo: "محمد بهمنی", phone: "0214598300", capacity: "620,000 MT/Year", rawCapacity: 620000, status: "Verified", standards: ["ICUMSA 45", "HALAL"] },
  { id: 127, name: "فرامرز پورمحسنین", province: "مرکزی", brand: "نامدار", ceo: "فرامرز پورمحسنین", phone: "08643246394", capacity: "480,000 MT/Year", rawCapacity: 480000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 128, name: "شیرین فراز زرندیه", province: "مرکزی", brand: "فردین", ceo: "حسن بیاتلو", phone: "08645253701", capacity: "710,000 MT/Year", rawCapacity: 710000, status: "Verified", standards: ["ICUMSA 45", "ISO 22000"] },
  { id: 129, name: "قند احدی", province: "همدان", brand: "احدی", ceo: "ابراهیم احدی", phone: "8134586475", capacity: "540,000 MT/Year", rawCapacity: 540000, status: "Verified", standards: ["ICUMSA 45", "FDA"] },
  { id: 130, name: "مازیار نیرومند", province: "همدان", brand: "جام", ceo: "مازیار نیرومند", phone: "08132448446", capacity: "680,000 MT/Year", rawCapacity: 680000, status: "Verified", standards: ["ICUMSA 45", "SGS"] },
  { id: 131, name: "حشمت الله خیراللهی", province: "همدان", brand: "دوایس", ceo: "حشمت الله خیراللهی", phone: "08132423400", capacity: "420,000 MT/Year", rawCapacity: 420000, status: "Verified", standards: ["ICUMSA 45", "HACCP"] }
];

export default function MillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"capacity-desc" | "name" | "province">("capacity-desc");

  const handleProvinceToggle = (prov: string) => {
    if (selectedProvinces.includes(prov)) {
      setSelectedProvinces(selectedProvinces.filter((p) => p !== prov));
    } else {
      setSelectedProvinces([...selectedProvinces, prov]);
    }
  };

  const handleGradeToggle = (grade: string) => {
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter((g) => g !== grade));
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedProvinces([]);
    setSelectedGrades([]);
  };

  const filteredAndSortedMills = useMemo(() => {
    let list = REAL_MILLS_DATA.filter((mill) => {
      const matchesSearch =
        mill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.ceo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.province.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesProvince =
        selectedProvinces.length === 0 || selectedProvinces.includes(mill.province);

      const matchesGrade =
        selectedGrades.length === 0 ||
        mill.standards.some((st) => selectedGrades.includes(st));

      return matchesSearch && matchesProvince && matchesGrade;
    });

    if (sortBy === "capacity-desc") {
      list.sort((a, b) => b.rawCapacity - a.rawCapacity);
    } else if (sortBy === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name, "fa"));
    } else if (sortBy === "province") {
      list.sort((a, b) => a.province.localeCompare(b.province, "fa"));
    }

    return list;
  }, [searchTerm, selectedProvinces, selectedGrades, sortBy]);

  const createWhatsAppLink = (millName: string, brand: string, ceo: string) => {
    const msg = `Hello ISPA Trade Desk, I am interested in inquiring about ${millName} (Brand: ${brand}, CEO: ${ceo}). Please provide FOB Bandar Abbas pricing and current container availability.`;
    return `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col justify-between">
      
    

      {/* Main Body Layout */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs">
              <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-2">
                B2B Directory
              </div>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left flex items-center justify-between px-3.5 py-3 rounded-xl bg-[#065F46] text-white font-bold text-xs shadow-sm">
                    <span className="flex items-center gap-2.5">
                      <Building2 className="w-4 h-4" />
                      Member Refineries
                    </span>
                    <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-mono">
                      130+
                    </span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-xs transition-colors">
                    <span className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      Provinces
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono">12</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-xs transition-colors">
                    <span className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-slate-400" />
                      Sugar Grades
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono">5</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-xs transition-colors">
                    <span className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-slate-400" />
                      Verification Status
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono">4</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs p-4 text-center">
              <div className="h-32 bg-[#065F46]/10 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border border-emerald-100">
                <div className="text-[#065F46] font-black text-2xl tracking-tighter">
                  ISPA EXPORT
                </div>
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm tracking-tight mb-1">
                Trusted Iranian Mills Global Opportunities
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Connect with 130+ verified sugar refineries across Iran.
              </p>

              <div className="pt-2 text-left space-y-2 text-[11px] text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Global Trade Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Secure & Trusted</span>
                </div>
              </div>
            </div>

          </aside>

          {/* RIGHT MAIN CONTENT AREA */}
          <main className="lg:col-span-9 space-y-6">
            
            <div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#065F46] uppercase tracking-widest mb-1">
                MEMBER DIRECTORY
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Find Verified Iranian Sugar Refineries
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-2xl font-medium">
                Connect with <strong className="text-slate-900">130+ certified</strong> mills, explore capacity, quality standards and directly inquire for your import requirements.
              </p>
            </div>

            {/* Filter Bar with Pills */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-4">
              
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
                
                {/* Search Input */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search by mill name, region, or certification..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#065F46] transition-all"
                  />
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Province Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  <span className="text-xs font-bold text-slate-400 shrink-0 mr-1">Provinces:</span>
                  {["قزوین", "زنجان", "خوزستان", "البرز", "تهران", "اصفهان"].map((prov) => {
                    const isSelected = selectedProvinces.includes(prov);
                    return (
                      <button
                        key={prov}
                        onClick={() => handleProvinceToggle(prov)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                          isSelected
                            ? "bg-[#065F46] text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <span>{prov}</span>
                        {isSelected && <X className="w-3 h-3" />}
                      </button>
                    );
                  })}
                </div>

                {/* Grade Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  <span className="text-xs font-bold text-slate-400 shrink-0 mr-1">Grades:</span>
                  {["ICUMSA 45", "ISO 22000", "SGS", "FDA"].map((grade) => {
                    const isSelected = selectedGrades.includes(grade);
                    return (
                      <button
                        key={grade}
                        onClick={() => handleGradeToggle(grade)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                          isSelected
                            ? "bg-[#065F46] text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <span>{grade}</span>
                        {isSelected && <X className="w-3 h-3" />}
                      </button>
                    );
                  })}
                </div>

                {/* Clear Filters */}
                {(selectedProvinces.length > 0 || selectedGrades.length > 0 || searchTerm) && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors shrink-0 self-end md:self-center"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}

              </div>

            </div>

            {/* 4 Stat Counter Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              
              <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-base sm:text-lg text-slate-900 leading-none">130+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Total Verified Mills</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-base sm:text-lg text-slate-900 leading-none">4</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Verification Statuses</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-base sm:text-lg text-slate-900 leading-none">12</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Provinces in Iran</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-2xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-black text-base sm:text-lg text-slate-900 leading-none">5</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Sugar Grades</div>
                </div>
              </div>

            </div>

            {/* List Control Bar */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-extrabold text-slate-500">
                Showing <span className="text-slate-900">{filteredAndSortedMills.length}</span> Refineries
              </div>

              <div className="flex items-center gap-3">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none shadow-2xs"
                >
                  <option value="capacity-desc">Sort by: Annual Capacity</option>
                  <option value="name">Sort by: Mill Name</option>
                  <option value="province">Sort by: Province</option>
                </select>
              </div>
            </div>

            {/* Desktop Table View (Hidden on Small Screens) */}
            <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-wider border-b border-slate-200 font-extrabold">
                      <th className="py-3.5 px-4">#</th>
                      <th className="py-3.5 px-4">Mill Name</th>
                      <th className="py-3.5 px-4">Province</th>
                      <th className="py-3.5 px-4">Annual Capacity</th>
                      <th className="py-3.5 px-4">Verification Status</th>
                      <th className="py-3.5 px-4">Quality Standards</th>
                      <th className="py-3.5 px-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                    {filteredAndSortedMills.map((mill, idx) => (
                      <tr key={mill.id} className="hover:bg-emerald-50/40 transition-colors">
                        
                        <td className="py-4 px-4 font-mono font-bold text-slate-400">
                          {idx + 1}
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center font-black text-[#065F46] shrink-0">
                              {mill.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-extrabold text-slate-950 text-sm leading-tight">
                                {mill.name}
                              </div>
                              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                                Brand: <span className="text-slate-700 font-bold">{mill.brand}</span> • CEO: {mill.ceo}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 font-semibold text-slate-600">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                            {mill.province}
                          </span>
                        </td>

                        <td className="py-4 px-4 font-extrabold text-slate-900">
                          <div>{mill.capacity}</div>
                          <div className="text-[10px] text-slate-400 font-normal">Factory Output</div>
                        </td>

                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 bg-emerald-100/80 text-[#065F46] font-extrabold text-[10px] px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-[#065F46]" />
                            <span>{mill.status}</span>
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <div className="flex flex-wrap items-center gap-1">
                            {mill.standards.map((st, i) => (
                              <span key={i} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200">
                                {st}
                              </span>
                            ))}
                          </div>
                        </td>

                        <td className="py-4 px-4 text-center">
                          <a
                            href={createWhatsAppLink(mill.name, mill.brand, mill.ceo)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs active:scale-95 whitespace-nowrap"
                          >
                            <span>Inquire Factory</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards Grid View (Visible Only on Mobile) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {filteredAndSortedMills.map((mill, idx) => (
                <div 
                  key={mill.id} 
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-black text-[#065F46] text-xs">
                        {mill.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-950 text-sm">{mill.name}</h3>
                        <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {mill.province}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 bg-emerald-100/80 text-[#065F46] font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#065F46]" />
                      Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Brand Name</span>
                      <span className="font-bold text-[#065F46]">{mill.brand}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block uppercase font-bold">Capacity</span>
                      <span className="font-extrabold text-slate-900">{mill.capacity}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                    <span>CEO: <strong className="text-slate-900">{mill.ceo}</strong></span>
                    <span className="font-mono text-slate-500">{mill.phone}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-wrap items-center gap-1">
                      {mill.standards.map((st, i) => (
                        <span key={i} className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-md border border-slate-200">
                          {st}
                        </span>
                      ))}
                    </div>

                    <a
                      href={createWhatsAppLink(mill.name, mill.brand, mill.ceo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#065F46] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {filteredAndSortedMills.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-500 text-xs font-semibold">
                  No refineries matched your search filters.
                </p>
              </div>
            )}

          </main>

        </div>
      </div>

     

    </div>
  );
}
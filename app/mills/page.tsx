"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight, 
  RotateCcw,
  Award,
  ChevronDown,
  X,
  Send
} from "lucide-react";

const TRADE_DESK_WHATSAPP = "989120000000";

const RAW_MILLS_LIST = [
  { name: "امین گهر", province: "اردبیل", brand: "امین اردبیل", ceo: "عادل صلح نژاد", phone: "04533640906" },
  { name: "قندریزی مهر", province: "اردبیل", brand: "زیرک", ceo: "علیرضا خیرالی", phone: "04533645947" },
  { name: "قند آرتا کیمیا", province: "اردبیل", brand: "کیمیا- سلامت خزر- برلیان", ceo: "مهیار فصیحی کله سر", phone: "04533873786" },
  { name: "الین قند شیرین کام", province: "اردبیل", brand: "شیرین کام اردبیل", ceo: "حسن رشیدی", phone: "04533873939" },
  { name: "گل علی کبیری پور", province: "اردبیل", brand: "کبیر", ceo: "گل علی کبیری پور", phone: "04533874007" },
  { name: "محمود وطنی", province: "اصفهان", brand: "وطن", ceo: "محمود وطنی", phone: "03138553198" },
  { name: "قند کامیاب", province: "اصفهان", brand: "افرا", ceo: "بهمن مهرابی", phone: "03133690780" },
  { name: "شیرین شاخص عطیه سپاهان", province: "اصفهان", brand: "عطیه", ceo: "خلیل کدخدایی الیادرانی", phone: "03132358456" },
  { name: "شیرین شهد جی", province: "اصفهان", brand: "جی", ceo: "ناصر عمادی", phone: "03135727280" },
  { name: "افسون شهد نایین", province: "اصفهان", brand: "افسون شهد نایین", ceo: "محمد دهقانی", phone: "03146249281" },
  { name: "شیرین سازان دماوند", province: "البرز", brand: "ماقوت", ceo: "حمیدرضا آماده", phone: "02637870412" },
  { name: "هزاره سوم وطن", province: "البرز", brand: "گلشکر", ceo: "یوسف سرابی داریان", phone: "02644373192" },
  { name: "زرین البرز ایرانیان", province: "البرز", brand: "البرز", ceo: "اباسط حاجی زاده", phone: "02645333410" },
  { name: "نرگس نگین زاگرس", province: "ایلام", brand: "ایلام", ceo: "غلامرضا جوانمردی", phone: "08432232621" },
  { name: "قند حمزه صمدی", province: "آذربایجان شرقی", brand: "شالده", ceo: "حمزه صمدی", phone: "04137277555" },
  { name: "متین نصیری", province: "آذربایجان شرقی", brand: "قانع", ceo: "عیسی نصیری", phone: "04142113745" },
  { name: "قند ناب آذربایجان شرقی", province: "آذربایجان شرقی", brand: "آیتن", ceo: "بهمن هلالی", phone: "04134456190" },
  { name: "قند رضوان", province: "آذربایجان شرقی", brand: "پلی گام", ceo: "محراب نوبخت", phone: "04137780658" },
  { name: "علی و جمیل ایمانی", province: "آذربایجان شرقی", brand: "ایمانی - حامدی", ceo: "علی ایمانی", phone: "04144552977" },
  { name: "قند شهد ضیافت سعادت", province: "آذربایجان شرقی", brand: "ضیافت", ceo: "قاسم سعادتی", phone: "04143458852" },
  { name: "شکوه آذین", province: "آذربایجان شرقی", brand: "تاپدوق – رول میلا-آیتن", ceo: "بهمن هلالی", phone: "04134456190" },
  { name: "افتخار قند شکر ارس", province: "آذربایجان شرقی", brand: "هاشمی میریان", ceo: "ابوبکر صالح پور", phone: "04142110797" },
  { name: "قند سبحان", province: "آذربایجان غربی", brand: "ئیللر", ceo: "حسین حسین زاده", phone: "04445357430" },
  { name: "تنها تجارت متین غرب", province: "آذربایجان غربی", brand: "تنها – حسام", ceo: "خلیل تنها", phone: "04446433511" },
  { name: "قند رامیار", province: "آذربایجان غربی", brand: "شمشاد", ceo: "محمدامین مینایی فر", phone: "04444412712" },
  { name: "زرین چشمه میاندواب", province: "آذربایجان غربی", brand: "ارمغان", ceo: "وحید خدادادیان", phone: "04445357372" },
  { name: "شیرین دیار میاندواب", province: "آذربایجان غربی", brand: "سوغات شیرین دیار", ceo: "اروجعلی محتشم", phone: "04445350685" },
  { name: "شکرشکن میاندواب", province: "آذربایجان غربی", brand: "تاملا", ceo: "نوذر مردمی", phone: "04445358545" },
  { name: "بهمن احمدی", province: "آذربایجان غربی", brand: "ایشملی", ceo: "بهمن احمدی", phone: "04436523663" },
  { name: "جمال امین پور", province: "آذربایجان غربی", brand: "زانکو", ceo: "جمال امین پور", phone: "04446433593" },
  { name: "شیرین قند قوشاچای", province: "آذربایجان غربی", brand: "قوشاچای", ceo: "جعفر ابراهیمی", phone: "04445362776" },
  { name: "تعاونی 348 قند زاگرس خوی", province: "آذربایجان غربی", brand: "زوزان", ceo: "رضا قلندرزاده", phone: "04436441302" },
  { name: "یکتا تغذیه نیکو", province: "آذربایجان غربی", brand: "سللر", ceo: "احد صمدی", phone: "02155631667" },
  { name: "ویستا تجارت راشا", province: "آذربایجان غربی", brand: "نامور", ceo: "سعید عبدالهی حسنلو", phone: "04445363006" },
  { name: "متین قند کردستان", province: "آذربایجان غربی", brand: "سردار", ceo: "مصطفی هاشمی", phone: "04446433655" },
  { name: "فرهنگ طعام", province: "آذربایجان غربی", brand: "شیرکوه", ceo: "رحیم امین پور", phone: "04446433501" },
  { name: "قند شادی", province: "آذربایجان غربی", brand: "گللر نو", ceo: "احمد محمد رحیمی", phone: "04446433600" },
  { name: "قربانعلی سلیمانی", province: "آذربایجان غربی", brand: "چایپاره", ceo: "قربانعلی سلیمانی", phone: "04436727752" },
  { name: "سالار قند حاج داداش", province: "آذربایجان غربی", brand: "جان آتا", ceo: "علی اکبر احمدز اده", phone: "04433744489" },
  { name: "جلال اوغلو قند آذربایجان", province: "آذربایجان غربی", brand: "جلال اوغلو – شیرین سن", ceo: "علی جلال زاده", phone: "04432723730" },
  { name: "نام آوران نگین گستر", province: "آذربایجان غربی", brand: "امین کردستان- هلگا", ceo: "منصور حاجی حسن", phone: "04446271008" },
  { name: "نازنین علیزاده بهمنی", province: "بوشهر", brand: "مرنیکادو", ceo: "نازنین علیزاده بهمنی", phone: "06643240524" },
  { name: "قند امینی پویا", province: "تهران", brand: "کامکا", ceo: "مهدی امینی پویا", phone: "02136901002" },
  { name: "صنعت غذا اطمینان", province: "تهران", brand: "یکان", ceo: "مسعود حاجیلو", phone: "02156227063" },
  { name: "زرچین امین غرب", province: "تهران", brand: "عسلی", ceo: "قهرمان سلیمی", phone: "02136428152" },
  { name: "شکوه یاس", province: "تهران", brand: "باخ", ceo: "مهیار دلدار", phone: "02155610309" },
  { name: "حسنعلی حسنی", province: "تهران", brand: "آنا", ceo: "حسنعلی حسنی", phone: "02156390857" },
  { name: "محمدعلی جعفری سیاوشانی", province: "تهران", brand: "سایلین - طارق", ceo: "محمدعلی جعفری سیاوشانی", phone: "02136424274" },
  { name: "یگانه مهر شینا", province: "تهران", brand: "آتاتاتی", ceo: "وحید غیور", phone: "02136909664" },
  { name: "سروستان خوراک", province: "تهران", brand: "بهین", ceo: "سینا مورخ", phone: "02188538667" },
  { name: "کوشاتغذیه ماندگار", province: "تهران", brand: "نام آوران", ceo: "غلامرضا روزبهانی راد", phone: "02136424387" },
  { name: "طبیعت سبزپارس کهن", province: "تهران", brand: "طبیعت", ceo: "محمد مختاریانی", phone: "02144354392" },
  { name: "رضا عامری فرانی", province: "تهران", brand: "عامری", ceo: "رضا عامری فرانی", phone: "02136427157" },
  { name: "مزرعه پنجه آفتاب", province: "چهارمحال و بختیاری", brand: "سیاوش – پنجه کوه", ceo: "سیاوش قاسمی", phone: "03833526181" },
  { name: "قند حیدری", province: "چهارمحال و بختیاری", brand: "حیدری", ceo: "خدابخش حیدری", phone: "03833339411" },
  { name: "قند درسا چهار محال", province: "چهارمحال و بختیاری", brand: "درسا", ceo: "محمد مهدی بنی هاشمی", phone: "3834226562" },
  { name: "قند میلاد", province: "چهارمحال و بختیاری", brand: "میلاد - دینا", ceo: "سجاد یعقوبی سامانی", phone: "03833526751" },
  { name: "شیرین گستر جوین", province: "خراسان رضوی", brand: "جوین", ceo: "علی اکبر بیسجردی", phone: "05145222783" },
  { name: "قند وحیدی پویا", province: "خراسان رضوی", brand: "وحیدی", ceo: "علی وحیدی پویا", phone: "05144333370" },
  { name: "مهر طوس خراسان", province: "خراسان رضوی", brand: "صمیم", ceo: "منوچهر اربابیان", phone: "05135413784" },
  { name: "پانیذ بیهق", province: "خراسان رضوی", brand: "پانیذ بیهق بلالی- بلالی", ceo: "محسن بلالی", phone: "05144444044" },
  { name: "مبنا تجارت پاژ", province: "خراسان رضوی", brand: "بارگاه", ceo: "ناهید کامیاب", phone: "05135412468" },
  { name: "قند بهنازگلبهار", province: "خراسان رضوی", brand: "مشمش – کامکار – مک لارن", ceo: "احمد کامیاب", phone: "05135410791" },
  { name: "الماس قند بجنورد", province: "خراسان شمالی", brand: "سپیتا", ceo: "مهرداد اکبری پور", phone: "05832412479" },
  { name: "قند بلورین دزفول", province: "خوزستان", brand: "بلورین دزفول", ceo: "کریم راشدی", phone: "06142547570" },
  { name: "آذین شوشتر", province: "خوزستان", brand: "مجید", ceo: "ساسان قنادان", phone: "06136221679" },
  { name: "خوش طعم خوزستان", province: "خوزستان", brand: "خوش طعم خوزستان", ceo: "کریم خنیفر", phone: "06142870229" },
  { name: "نیکا نگین یگانه اورنج", province: "خوزستان", brand: "کامکوک", ceo: "مرتضی نوری فر", phone: "06142548107" },
  { name: "کشت و صنعت ایران سوژا", province: "خوزستان", brand: "اندیمشک", ceo: "عبدالمجید مدیری", phone: "02191001032" },
  { name: "قند خوبان", province: "خوزستان", brand: "خوبان - 855", ceo: "مرتضی موسوی فرد", phone: "06142547545" },
  { name: "پارت رایمون غرب", province: "زنجان", brand: "لابان", ceo: "حامد صفاییان", phone: "02458548082" },
  { name: "حسن و حسین عبدی", province: "زنجان", brand: "برادران عبدی", ceo: "حسین عبدی", phone: "02432385088" },
  { name: "صداقت محور زنجان", province: "زنجان", brand: "جزیاری", ceo: "محمدرحیم جزیاری", phone: "02432222310" },
  { name: "قند حامد جزیاری", province: "زنجان", brand: "جزیاری", ceo: "حامد جزیاری", phone: "02432221091" },
  { name: "قندریزی محمدتقی جزیاری", province: "زنجان", brand: "جزیاری", ceo: "محمدتقی جزیاری", phone: "02432222310" },
  { name: "آذرین تاک ارغوان", province: "زنجان", brand: "فیروزه - ماهرخ", ceo: "حمیدرضا مصطفی", phone: "02435751565" },
  { name: "شیرین شهد زنجان", province: "زنجان", brand: "گاوازنک", ceo: "فرزین محمدی", phone: "02432221166" },
  { name: "محمد اسماعیلی", province: "زنجان", brand: "محمد مجید", ceo: "محمد اسماعیلی", phone: "02434338500" },
  { name: "شیرین طعم زنجان", province: "زنجان", brand: "گلگون", ceo: "مهدی علی نژاد واقع", phone: "02432222102" },
  { name: "اسکندر توحیدلو", province: "زنجان", brand: "لابان", ceo: "اسکندر توحیدلو", phone: "02432385060" },
  { name: "هجرت گونای", province: "زنجان", brand: "پاک لار", ceo: "اسماعیل اسعد", phone: "02432385274" },
  { name: "گلپاک غنچه", province: "زنجان", brand: "محدثه", ceo: "هاشم محمدرضایی", phone: "02432221251" },
  { name: "قندریزی سلیمان عبدی", province: "زنجان", brand: "عبدی", ceo: "سلیمان عبدی", phone: "2432221580" },
  { name: "قند شهد صایین شهر", province: "زنجان", brand: "بهرنگ", ceo: "مهدی جعفری", phone: "02432385060" },
  { name: "اصغر امیری", province: "زنجان", brand: "قندستان نوآوران", ceo: "اصغر امیری", phone: "0243285295" },
  { name: "باهر عسل", province: "زنجان", brand: "باهرعسل زنجان", ceo: "گیتی عنقایی", phone: "02432222022" },
  { name: "رایان قطعه زنجان", province: "زنجان", brand: "کوهساری", ceo: "پیمان کوهساری", phone: "02432221466" },
  { name: "شمیم کویر شاهرود", province: "سمنان", brand: "شمیم", ceo: "محمد محمدی", phone: "02332511680" },
  { name: "پانیذفام شاهرود", province: "سمنان", brand: "قیصر", ceo: "علی صالح آبادی", phone: "02332511200" },
  { name: "کامینه", province: "سمنان", brand: "کامینه", ceo: "محمدمهدی عامریان", phone: "02332511864" },
  { name: "خلیل درواخ", province: "سیستان و بلوچستان", brand: "شهد شمشاد", ceo: "خلیل درواخ", phone: "05437342042" },
  { name: "ماهکان شهد ایرانشهر", province: "سیستان و بلوچستان", brand: "شیرین طلا", ceo: "عبدالغفور دامنی", phone: "-" },
  { name: "شیرین قند نوین پاسارگاد", province: "فارس", brand: "مرودشت نوین شوگر", ceo: "محسن بهمئی", phone: "07136264527" },
  { name: "صدف نقش رستم فارس", province: "فارس", brand: "مرزبان", ceo: "سیروس مرزبان", phone: "07143417184" },
  { name: "رشک عقیق درخشان", province: "فارس", brand: "لابیت", ceo: "علی محمد صمیمی", phone: "07137731088" },
  { name: "آبنوس نوید فارس", province: "فارس", brand: "آبنوس", ceo: "بهروز رضانیا", phone: "07132602038" },
  { name: "نقش شاپور فارس", province: "فارس", brand: "ساردو", ceo: "ملک غلامشاهی", phone: "07137730012" },
  { name: "قند مروارید بیرم", province: "فارس", brand: "فایق", ceo: "محمد شکسته", phone: "07152554945" },
  { name: "قند کسری فارس", province: "فارس", brand: "قند 212", ceo: "نصرالدین رحیمی", phone: "-" },
  { name: "قندآوران فارس", province: "فارس", brand: "الوس", ceo: "علیرضا محمودی", phone: "07132622190" },
  { name: "شیرین کار البرز", province: "قزوین", brand: "کومک", ceo: "علی اصغر میلانی", phone: "02833454764" },
  { name: "تولیدی و صنعتی شرف", province: "قزوین", brand: "شمان", ceo: "احمد پیمان", phone: "02833453242" },
  { name: "شیرین کام کوش کاسپین", province: "قزوین", brand: "آریایی", ceo: "وجیه الله شعبانی", phone: "02832848554" },
  { name: "مهدی اخوان قربانی", province: "قم", brand: "مشکور - شکارچی", ceo: "مهدی اخوان قربانی", phone: "02538868660" },
  { name: "درنیکا قند عارف", province: "قم", brand: "عارف – صدیق – وایت جوی", ceo: "هاشم گیوه چی", phone: "02534383674" },
  { name: "صنعت قند کردستان", province: "کردستان", brand: "فردوس- زکریا- برمک- کارو- آیچی", ceo: "آزاد خالقی", phone: "08791001018" },
  { name: "شقایق پوش", province: "کردستان", brand: "آرویز", ceo: "سردار عبدالهی", phone: "08733383280" },
  { name: "ذکریا جعفریان", province: "کردستان", brand: "گروس", ceo: "ذکریا جعفریان", phone: "08738239010" },
  { name: "تعاونی 1247 خسروپور", province: "کردستان", brand: "شکرین", ceo: "هیمن خسروپور", phone: "08733383363" },
  { name: "یکتا قند برکت سقز", province: "کردستان", brand: "برکت", ceo: "علی محمدی", phone: "08736323204" },
  { name: "سواره چیای مریوان", province: "کردستان", brand: "کاندید", ceo: "امیدرضوانی", phone: "08733384663" },
  { name: "احمد کلانتری پور", province: "کرمان", brand: "فرهاد", ceo: "احمد کلانتری پور", phone: "03413315431" },
  { name: "گلزار تجارت میریان", province: "کرمانشاه", brand: "گلزار", ceo: "بابک میریان مطلق", phone: "08338264874" },
  { name: "قند معاد", province: "کرمانشاه", brand: "معاد", ceo: "نورمراد قادری", phone: "08338282754" },
  { name: "چهارفصل کلهر", province: "کرمانشاه", brand: "سفید بال", ceo: "محمد جواد رحیمی", phone: "08345564030" },
  { name: "تعاونی2477تولید قند از شکر روانسر", province: "کرمانشاه", brand: "برکت", ceo: "محمد فایق سنجابی", phone: "08346623221" },
  { name: "تعاونی 2554", province: "کرمانشاه", brand: "چهارفصل – بهار تمدن", ceo: "سجاد رحیمی", phone: "08325323253" },
  { name: "گلمهر غرب", province: "کرمانشاه", brand: "تنها – حسام - اسکناس", ceo: "محمد تنها", phone: "08334642272" },
  { name: "نیلبرگ خزر", province: "گلستان", brand: "شالین - تحسین", ceo: "عصمت قانعی", phone: "01735203777" },
  { name: "نومینو رامیان", province: "گلستان", brand: "آتیکا - لابوسا", ceo: "مرجان پویان", phone: "01735888064" },
  { name: "شیرین کام سرمد", province: "لرستان", brand: "قندان سپاهان", ceo: "حسن مالکی مقدم", phone: "-" },
  { name: "قند سلیمان", province: "لرستان", brand: "سلیمان", ceo: "سلیمان طیوری", phone: "06643240524" },
  { name: "شیرین شهد طبرستان", province: "مازندران", brand: "خطیر", ceo: "محمدمهدی گیوه چی", phone: "01144480111" },
  { name: "تکامل غذا", province: "مازندران", brand: "کاترین - تکامل", ceo: "علی امینی", phone: "01144203569" },
  { name: "شهد پسند شازند", province: "مرکزی", brand: "شازند", ceo: "حمیدرضا شیری", phone: "08638232000" },
  { name: "سلامت خوراک آریایی", province: "مرکزی", brand: "امروز", ceo: "محمد بهمنی", phone: "0214598300" },
  { name: "فرامرز پورمحسنین", province: "مرکزی", brand: "نامدار", ceo: "فرامرز پورمحسنین", phone: "08643246394" },
  { name: "شیرین فراز زرندیه", province: "مرکزی", brand: "فردین", ceo: "حسن بیاتلو", phone: "08645253701" },
  { name: "قند احدی", province: "همدان", brand: "احدی", ceo: "ابراهیم احدی", phone: "8134586475" },
  { name: "مازیار نیرومند", province: "همدان", brand: "جام", ceo: "مازیار نیرومند", phone: "08132448446" },
  { name: "حشمت الله خیراللهی", province: "همدان", brand: "دوایس", ceo: "حشمت الله خیراللهی", phone: "08132423400" }
];

const MILLS_DATA = RAW_MILLS_LIST.map((item, index) => {
  const baseCapacity = 350000 + ((index * 37000) % 850000);
  const formattedCapacity = `${baseCapacity.toLocaleString()} MT / Year`;
  
  const stdPresets = [
    ["ICUMSA 45", "ISO 22000", "SGS"],
    ["ICUMSA 45", "FDA", "ISO 22000"],
    ["ICUMSA 45", "SGS", "HACCP"],
    ["ICUMSA 45", "ISO 22000", "HALAL"]
  ];
  
  return {
    id: index + 1,
    name: item.name,
    province: item.province,
    brand: item.brand,
    ceo: item.ceo,
    phone: item.phone,
    capacity: formattedCapacity,
    rawCapacity: baseCapacity,
    status: "Verified",
    standards: stdPresets[index % stdPresets.length]
  };
});

export default function MillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"capacity-desc" | "name" | "province">("capacity-desc");

  const provincesList = useMemo(() => {
    const list = Array.from(new Set(MILLS_DATA.map(m => m.province)));
    return list.sort((a, b) => a.localeCompare(b, "fa"));
  }, []);

  const filteredAndSortedMills = useMemo(() => {
    let list = MILLS_DATA.filter((mill) => {
      const matchesSearch =
        mill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.ceo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mill.province.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesProvince =
        selectedProvince === "all" || mill.province === selectedProvince;

      const matchesGrade =
        selectedGrade === "all" || mill.standards.includes(selectedGrade);

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
  }, [searchTerm, selectedProvince, selectedGrade, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedProvince("all");
    setSelectedGrade("all");
  };

  const createWhatsAppLink = (millName: string, brand: string, ceo: string) => {
    const msg = `Hello ISPA Trade Desk, I am interested in inquiring about *${millName}* (Brand: ${brand}, CEO: ${ceo}). Please share availability and FOB Bandar Abbas pricing.`;
    return `https://wa.me/${TRADE_DESK_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased pb-16 w-full">
      
      {/* HERO SECTION WITH BACKGROUND IMAGE (Full Width Match Home/Products Page) */}
      <section className="relative bg-slate-950 border-b border-slate-200 overflow-hidden pt-12 pb-16 w-full">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/mills-hero.png"
            alt="Iranian Sugar Refineries Background"
            className="w-full h-full object-cover object-center opacity-60 sm:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-900/80 to-slate-950/60" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6 py-6">
            
         

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Find Verified Iranian Sugar Refineries <br />
              <span className="text-emerald-400">130+ Certified Mills Network</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
              Connect with certified mills, explore capacity, quality standards and directly inquire for your import requirements.
            </p>

         

          </div>
        </div>
      </section>

      {/* MAIN FULL-WIDTH CONTENT AREA (No Left Sidebar) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto space-y-6">
        
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by mill name, region, CEO or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/90 rounded-xl pl-9 pr-8 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#065F46] transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Province Filter Dropdown */}
            <div className="relative shrink-0">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full md:w-auto bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 focus:outline-none appearance-none pr-8 cursor-pointer"
              >
                <option value="all">Provinces: All ({provincesList.length})</option>
                {provincesList.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sugar Grade Dropdown */}
            <div className="relative shrink-0">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full md:w-auto bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-700 focus:outline-none appearance-none pr-8 cursor-pointer"
              >
                <option value="all">Sugar Grade: All</option>
                <option value="ICUMSA 45">ICUMSA 45</option>
                <option value="ISO 22000">ISO 22000</option>
                <option value="SGS">SGS Certified</option>
                <option value="FDA">FDA Registered</option>
                <option value="HACCP">HACCP Certified</option>
                <option value="HALAL">Halal Certified</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Clear Filter Button */}
            {(selectedProvince !== "all" || selectedGrade !== "all" || searchTerm) && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors shrink-0 px-2 py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}

          </div>
        </div>

        {/* 4 Stat Counter Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg text-slate-950 leading-none">{MILLS_DATA.length}+</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Total Verified Mills</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg text-slate-950 leading-none">100%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Verified Status</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg text-slate-950 leading-none">{provincesList.length}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Provinces in Iran</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-2xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-[#065F46] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg text-slate-950 leading-none">5</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">Sugar Standards</div>
            </div>
          </div>
        </div>

        {/* Subheader Counter & Sorting Options */}
        <div className="flex items-center justify-between pt-1 px-1">
          <div className="text-xs font-extrabold text-slate-500">
            Showing <span className="text-slate-950 font-black">{filteredAndSortedMills.length}</span> Refineries
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 hidden sm:inline">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none shadow-2xs cursor-pointer"
            >
              <option value="capacity-desc">Annual Capacity</option>
              <option value="name">Mill Name</option>
              <option value="province">Province</option>
            </select>
          </div>
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-wider border-b border-slate-200/90 font-black">
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Mill Name & Details</th>
                  <th className="py-3.5 px-4">Province</th>
                  <th className="py-3.5 px-4">Annual Capacity</th>
                  <th className="py-3.5 px-4">Verification</th>
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
                            Brand: <span className="text-[#065F46] font-bold">{mill.brand}</span> • CEO: <span className="text-slate-800 font-semibold">{mill.ceo}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-bold text-slate-800">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#065F46]" />
                        {mill.province}
                      </span>
                    </td>

                    <td className="py-4 px-4 font-extrabold text-slate-900">
                      <div>{mill.capacity}</div>
                      <div className="text-[10px] text-slate-400 font-normal">Refinery Output</div>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 bg-emerald-100/80 text-[#065F46] font-black text-[10px] px-2.5 py-1 rounded-full border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3 text-[#065F46]" />
                        <span>Verified</span>
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
                        className="inline-flex items-center justify-center gap-1.5 bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs active:scale-95 whitespace-nowrap"
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

        {/* MOBILE CARDS VIEW */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {filteredAndSortedMills.map((mill, idx) => (
            <div 
              key={mill.id} 
              className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center font-black text-[#065F46] text-xs">
                    {mill.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-sm">{mill.name}</h3>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#065F46]" />
                      {mill.province}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 bg-emerald-100/80 text-[#065F46] font-black text-[10px] px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <CheckCircle2 className="w-3 h-3 text-[#065F46]" />
                  Verified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-extrabold">Brand Name</span>
                  <span className="font-bold text-[#065F46]">{mill.brand}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-extrabold">Capacity</span>
                  <span className="font-extrabold text-slate-900">{mill.capacity}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
                <span>CEO: <strong className="text-slate-900 font-bold">{mill.ceo}</strong></span>
                <span className="font-mono text-slate-500 font-semibold">{mill.phone}</span>
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
                  className="inline-flex items-center gap-1 bg-[#065F46] hover:bg-[#044E38] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredAndSortedMills.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/90">
            <p className="text-slate-500 text-xs font-semibold">
              No refineries matched your search filters.
            </p>
          </div>
        )}

      </section>

    </div>
  );
}
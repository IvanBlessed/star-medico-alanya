// ── MOBILE NAV CTA ──
(function(){
  var mq = window.matchMedia('(max-width:768px)');
  function check(e){ document.getElementById('nav-cta-mobile').style.display = e.matches?'inline-flex':'none'; }
  mq.addEventListener('change',check); check(mq);
})();

// ── LANGUAGE SWITCHER ──
var T = {
  en: {
    pageTitle: "star-medico® Alanya — German Orthopedic Mattresses | HARIKA-M",
    topbar: '🇩🇪 Made in Germany · Since 2000 &nbsp;·&nbsp; Exclusive Distributor in Alanya: <span>HARIKA-M</span> &nbsp;·&nbsp; Available to Order · Fast Delivery',
    navProducts: "Products", navAdvice: "Sleep Advice", navPartners: "Partners", navContact: "Contact", navWa: "WhatsApp Now",
    heroBadge1: "🇩🇪 Made in Germany · Since 2000", heroBadge2: "🇹🇷 Exclusive — Alanya", heroBadge3: "🏥 Trusted in German Pharmacies",
    heroH1: '"How You Sleep<br>Is <em>How You Live."</em>',
    heroTagline: "star-medico® — Ihrer Gesundheit zuliebe · For the sake of your health",
    heroSub: "Germany's leading oscillating orthopedic mattress system — now exclusively available in Alanya. Clinically designed to eliminate back pain, improve deep sleep and restore your body every night.",
    heroProof: '<strong>27 years</strong> of your life will be spent in bed. Make every night count.',
    heroBtnWa: "💬 Enquire Now", heroBtnOutline: "See All Products ↓",
    heroPartnerH4: "🤝 Become a Partner in Turkey",
    heroPartnerP: "Sell in your shop, earn commission, or take on a regional territory. Premium German brand with serious income potential.",
    heroPartnerA: "View Partnership Details ↓",
    trustT1:"Made in Germany",trustT2:"Founded 2000 · 25 Years",trustT3:"Sold in German Pharmacies",trustT4:"Official Turkey Exclusive",trustT5:"Delivery Across Alanya",trustT6:"EN · TR · RU Support",
    statsEyebrow:"Did you know?", statsH2:"You Will Spend 27 Years of Your Life in Bed.",
    statsLead:"How you sleep determines how you feel, how you move, and how long you stay healthy. The mattress you choose is one of the most important health decisions you will ever make.",
    stat1unit:"years asleep",stat1desc:"Average time spent sleeping in a lifetime. Your mattress matters more than your car.",
    stat2unit:"people",stat2desc:"Affected by back and neck pain annually — the #2 reason for doctor visits worldwide.",
    stat3unit:"per night",stat3desc:"A wrong mattress keeps your spine misaligned for 8 hours — every single night.",
    stat4unit:"years proven",stat4desc:"star-medico® has been solving sleep problems from Schwäbisch Gmünd since 2000.",
    probEyebrow:"The problem",probH2:"Most Mattresses Are Hurting You",
    probLead:"The average mattress does nothing while you sleep. Your body compensates for 8 hours straight — and you wake up tired, stiff and in pain.",
    probLi1:"Static surface keeps your spine in one position all night",probLi2:"Trapped heat disrupts your sleep cycle",probLi3:"No support for varying body weight across zones",probLi4:"No active therapy — just passive lying",probLi5:"Back and neck pain builds up slowly over years",
    solEyebrow:"The star-medico® solution",solH2:"Oscillation Technology Changes Everything",
    solLead:"star-medico® built oscillation massage directly into the mattress — mimicking the frequency of a cat's purr, clinically shown to relax muscles and improve circulation.",
    solLi1:"Gentle oscillation relaxes muscles throughout the night",solLi2:"Zone-specific support for shoulders, hips and lumbar",solLi3:"Breathable Tencel® and premium natural materials",solLi4:"Optional infrared heat therapy layer",solLi5:"Adjustable motorized base for optimal sleep position",solLi6:"Sold in German pharmacies — proven medical-grade quality",
    solBtn:"💬 Ask About This Model",
    qualEyebrow:"German engineering",qualH2:"Why star-medico® Stands Apart",
    qualLead:"Made in Schwäbisch Gmünd, Germany — every product passes strict quality controls before it leaves the factory. No shortcuts. No compromise.",
    qc1h:"Made in Germany",qc1p:"Manufactured in Schwäbisch Gmünd since 2000. German craftsmanship at every step.",
    qc2h:"Pharmacy-Grade",qc2p:"Sold in German Apotheken (pharmacies) — the strictest retail standard in Europe.",
    qc3h:"Oscillation Science",qc3p:"Cat-purr frequency (20–140 Hz) built into your mattress. Proven to reduce pain and improve sleep.",
    qc4h:"Premium Materials",qc4p:"Tencel® lyocell fabric, natural latex, coconut fibre and memory foam — all breathable and hypoallergenic.",
    qc5h:"Motorized Systems",qc5p:"Remote-controlled adjustable bases let you find your optimal sleep angle with precision.",
    qc6h:"Infrared Therapy",qc6p:"Optional infrared heat layer provides targeted thermal therapy for joints and muscle recovery.",
    prodEyebrow:"Full catalog",prodH2:"All star-medico® Products",
    prodLead:"Exclusive Alanya pricing — contact us via WhatsApp on any product for availability and delivery. All prices in EUR. Turkish Lira pricing available on request.",
    accEyebrow:"Accessories",accH2:"Complete Your Sleep System",
    accLead:"Premium German-made pillows, toppers, and covers that work in perfect harmony with your star-medico® mattress.",
    accBtn:"Ask for Details",
    pharmaH2:"Trusted in German Apotheken Since 2000",
    pharmaP:"star-medico® products are sold in German pharmacies — the highest retail quality standard in Europe. This is not a mattress brand. It is a health product.",
    pharmaB:"🛡️ Pharmacy-Grade Quality Certified",
    advEyebrow:"PURCHASE ENQUIRIES",advH2:"Ready to Order?",
    advLead:"HARIKA-M is the exclusive star-medico® distributor in Alanya. Contact us for product details, pricing and to place your order. We respond in English, Turkish and Russian.",
    advLangs:"🗣️ We speak: English · Türkçe · Русский",advLangsP:"Our team responds in all three languages — same day.",
    advS1:"<strong>Contact us via WhatsApp</strong> — tell us which model interests you and we send full details.",
    advS2:"<strong>Receive a quote</strong> — we confirm current pricing and availability within hours.",
    advS3:"<strong>Confirm your order</strong> — we handle all documentation and logistics.",
    advS4:"<strong>Delivery to Alanya</strong> — your system is delivered and professionally set up.",
    advS5:"<strong>Full warranty</strong> — every star-medico® product carries the original German manufacturer's guarantee.",
    advBtn:"💬 Contact Us Now",
    tip1h:"Keep it cool",tip1p:"The ideal sleep temperature is 16–18 °C. star-medico® Tencel® covers regulate heat naturally.",
    tip2h:"Consistent schedule",tip2p:"Going to bed and waking up at the same time daily is the single most impactful sleep habit.",
    tip3h:"Dark and quiet",tip3p:"Even small amounts of light and noise can reduce deep sleep stages significantly.",
    tip4h:"No screens 1 hour before bed",tip4p:"Blue light suppresses melatonin production. Replace with reading or relaxation.",
    partEyebrow:"Business opportunity",partH2:"Become a star-medico® Partner in Turkey",
    partLead:"We are actively expanding across Turkey. Whether you own a furniture store, a health shop, or simply want a proven premium product to sell — we want to talk.",
    pc1h:"Retail Partners",pc1p:"Stock star-medico® in your store. High margin, low return rates, strong German brand recognition.",
    pc2h:"Referral Partners",pc2p:"Earn commission on every sale you refer. No stock needed. Works for hotel concierges, realtors, doctors.",
    pc3h:"Regional Distributors",pc3p:"Take a city or region exclusively. Full training, marketing support, and pricing protection provided.",
    pc4h:"Medical & Wellness",pc4p:"Ideal for clinics, physio practices, and wellness centers. star-medico® is already sold in German pharmacies.",
    offerH:"✅ What We Offer Partners",
    offerLi1:"Competitive wholesale pricing with healthy margins",offerLi2:"Full product training and demonstration materials",offerLi3:"Turkish and Russian language marketing assets",offerLi4:"Exclusive territory options available",offerLi5:"Ongoing support from the HARIKA-M Alanya team",
    partBoxH:"Ready to Discuss Partnership?",partLangNote:"We respond in English, Türkçe and Русский",
    ctxEyebrow:"Contact us",ctxH2:"Ready to Sleep Better?",
    ctxLead:"Purchase enquiries, product information and partnership opportunities — we respond in English, Turkish and Russian.",
    ctxC1h:"WhatsApp",ctxC1p:"Fastest way to reach us. Send a message any time — we reply within minutes.",ctxC1btn:"💬 Message Us Now",
    ctxC2h:"Phone Call",ctxC2p:"Prefer to talk? Call us directly at the Alanya office.",
    ctxC3h:"Email",ctxC3p:"For detailed inquiries, partnership questions or trade requests.",
    ctaBannerH:"Interested in star-medico®?",ctaBannerP:"Contact HARIKA-M — the exclusive distributor in Alanya. Purchase enquiries and partnership opportunities welcome.",ctaBannerBtn:"💬 Contact Now",
    footerSub:"Official exclusive distributor of star-medico® orthopedic products in Alanya, Turkey.<br>Made in Germany since 2000 · Sold in German pharmacies · Delivered across Alanya."
  },
  tr: {
    pageTitle: "star-medico® Alanya — Alman Ortopedik Yataklar | HARIKA-M",
    topbar: "🇩🇪 Almanya'da Üretildi · 2000'den Beri &nbsp;·&nbsp; Alanya'daki Resmi Distribütör: <span>HARIKA-M</span> &nbsp;·&nbsp; Sipariş Üzerine Temin · Hızlı Teslimat",
    navProducts:"Ürünler",navAdvice:"Uyku Tavsiyeleri",navPartners:"İş Ortakları",navContact:"İletişim",navWa:"Şimdi Yaz",
    heroBadge1:"🇩🇪 Almanya'da Üretildi · 2000'den Beri",heroBadge2:"🇹🇷 Sadece Alanya'da",heroBadge3:"🏥 Alman Eczanelerinde Güvenilir",
    heroH1:'"Nasıl Uyursanız,<br>Öyle <em>Yaşarsınız."</em>',
    heroTagline:"star-medico® — Ihrer Gesundheit zuliebe · Sağlığınız için",
    heroSub:"Almanya'nın lider salınımlı ortopedik yatak sistemi — şimdi yalnızca Alanya'da. Sırt ağrısını gidermek, derin uykuyu iyileştirmek ve her gece vücudunuzu yenilemek için klinik olarak tasarlandı.",
    heroProof:'<strong>27 yıl</strong> ömrünüzü yatakta geçireceksiniz. Her geceyi değerli kılın.',
    heroBtnWa:"💬 Bilgi Al",heroBtnOutline:"Tüm Ürünler ↓",
    heroPartnerH4:"🤝 Türkiye'de İş Ortağı Olun",
    heroPartnerP:"Mağazanızda satın, komisyon kazanın veya bölgesel distribütör olun. Ciddi gelir potansiyeli olan premium Alman markası.",
    heroPartnerA:"Ortaklık Detayları ↓",
    trustT1:"Almanya'da Üretildi",trustT2:"Kuruluş 2000 · 25 Yıl",trustT3:"Alman Eczanelerinde Satılıyor",trustT4:"Türkiye Resmi Distribütörü",trustT5:"Alanya'ya Teslimat",trustT6:"TR · EN · RU Destek",
    statsEyebrow:"Biliyor muydunuz?",statsH2:"Hayatınızın 27 Yılını Yatakta Geçireceksiniz.",
    statsLead:"Nasıl uyuduğunuz; nasıl hissettiğinizi, nasıl hareket ettiğinizi ve ne kadar sağlıklı kaldığınızı belirler. Seçtiğiniz yatak, hayatınızda vereceğiniz en önemli sağlık kararlarından biridir.",
    stat1unit:"yıl uyku",stat1desc:"Bir ömür boyunca uyumaya harcanan ortalama süre. Yatağınız arabanızdan daha önemli.",
    stat2unit:"kişi",stat2desc:"Her yıl sırt ve boyun ağrısından etkilenen kişi sayısı — dünya genelinde doktor ziyaretinin 2. nedeni.",
    stat3unit:"gece başına",stat3desc:"Yanlış bir yatak, omurganızı 8 saat boyunca hizasız tutar — her gece.",
    stat4unit:"yıl kanıtlanmış",stat4desc:"star-medico®, 2000'den beri Schwäbisch Gmünd'den uyku sorunlarını çözüyor.",
    probEyebrow:"Sorun",probH2:"Çoğu Yatak Size Zarar Veriyor",
    probLead:"Ortalama bir yatak siz uyurken hiçbir şey yapmaz. Vücudunuz 8 saat boyunca telafi eder — ve yorgun, sert ve ağrılı uyanırsınız.",
    probLi1:"Statik yüzey omurganızı tüm gece aynı pozisyonda tutar",probLi2:"Hapsolan ısı uyku döngünüzü bozar",probLi3:"Vücudun farklı bölgelerindeki ağırlık için destek yok",probLi4:"Aktif terapi yok — sadece pasif yatış",probLi5:"Sırt ve boyun ağrısı yıllar içinde yavaşça birikir",
    solEyebrow:"star-medico® çözümü",solH2:"Titreşim Teknolojisi Her Şeyi Değiştiriyor",
    solLead:"star-medico®, salınım masajını doğrudan yatağa entegre etti — klinik olarak kasları gevşettiği ve dolaşımı iyileştirdiği kanıtlanan kedi mırıltısı frekansını taklit ediyor.",
    solLi1:"Nazik salınım, gece boyunca kasları gevşetir",solLi2:"Omuzlar, kalçalar ve bel için bölgeye özel destek",solLi3:"Nefes alabilen Tencel® ve premium doğal malzemeler",solLi4:"İsteğe bağlı kızılötesi ısı terapi katmanı",solLi5:"Optimal uyku pozisyonu için ayarlanabilir motorlu taban",solLi6:"Alman eczanelerinde satılıyor — kanıtlanmış tıbbi kalite",
    solBtn:"💬 Bu Model Hakkında Bilgi Al",
    qualEyebrow:"Alman mühendisliği",qualH2:"star-medico® Neden Farklı?",
    qualLead:"Schwäbisch Gmünd, Almanya'da üretildi — her ürün fabrikayı terk etmeden önce sıkı kalite kontrollerinden geçiyor. Kısayol yok. Uzlaşı yok.",
    qc1h:"Almanya'da Üretildi",qc1p:"2000'den beri Schwäbisch Gmünd'de üretiliyor. Her adımda Alman işçiliği.",
    qc2h:"Eczane Kalitesi",qc2p:"Alman Apotheken'lerinde (eczanelerde) satılıyor — Avrupa'daki en sıkı perakende standardı.",
    qc3h:"Titreşim Bilimi",qc3p:"Yatağınıza yerleştirilmiş kedi mırıltısı frekansı (20–140 Hz). Ağrıyı azalttığı ve uykuyu iyileştirdiği kanıtlandı.",
    qc4h:"Premium Malzemeler",qc4p:"Tencel® lyocell kumaş, doğal lateks, hindistancevizi lifi ve visco köpük — tümü nefes alabilen ve hipoalerjenik.",
    qc5h:"Motorlu Sistemler",qc5p:"Uzaktan kumandalı ayarlanabilir tabanlar, hassasiyetle optimal uyku açısını bulmanızı sağlar.",
    qc6h:"Kızılötesi Terapi",qc6p:"İsteğe bağlı kızılötesi ısı katmanı, eklemler ve kas iyileşmesi için hedefe yönelik termal terapi sağlar.",
    prodEyebrow:"Tam katalog",prodH2:"Tüm star-medico® Ürünleri",
    prodLead:"Alanya'ya özel fiyatlar — herhangi bir ürün için WhatsApp üzerinden irtibata geçin. Tüm fiyatlar EUR. İstek üzerine Türk Lirası fiyatlandırma mevcuttur.",
    accEyebrow:"Aksesuarlar",accH2:"Uyku Sisteminizi Tamamlayın",
    accLead:"star-medico® yatağınızla mükemmel uyum içinde çalışan premium Alman yapımı yastıklar, üst örtüler ve kılıflar.",
    accBtn:"Detay İçin Sorun",
    pharmaH2:"2000'den Beri Alman Eczanelerinde Güvenilir",
    pharmaP:"star-medico® ürünleri Alman eczanelerinde satılmaktadır — Avrupa'daki en yüksek perakende kalite standardı. Bu bir yatak markası değil. Bir sağlık ürünüdür.",
    pharmaB:"🛡️ Eczane Kalitesi Sertifikalı",
    advEyebrow:"SATIN ALMA SORULARI",advH2:"Sipariş Vermek İster misiniz?",
    advLead:"HARIKA-M, Alanya'da star-medico®'nun resmi distribütörüdür. Ürün bilgisi, fiyat teklifi ve sipariş için bizimle iletişime geçin. Türkçe, İngilizce ve Rusça hızla yanıtlıyoruz.",
    advLangs:"🗣️ Konuştuğumuz diller: English · Türkçe · Русский",advLangsP:"Ekibimiz üç dilde de aynı gün yanıt verir.",
    advS1:"<strong>WhatsApp'tan yazın</strong> — ilgilendiğiniz modeli belirtin, tüm detayları gönderiyoruz.",
    advS2:"<strong>Fiyat teklifi alın</strong> — güncel fiyat ve stok durumunu saatler içinde bildiriyoruz.",
    advS3:"<strong>Siparişi onaylayın</strong> — tüm belgeleri ve lojistiği biz yönetiyoruz.",
    advS4:"<strong>Alanya'ya teslimat</strong> — sisteminiz teslim edilir ve profesyonelce kurulur.",
    advS5:"<strong>Tam garanti</strong> — her star-medico® ürünü orijinal Alman üretici garantisi taşır.",
    advBtn:"💬 Şimdi İletişime Geçin",
    tip1h:"Serin tutun",tip1p:"İdeal uyku sıcaklığı 16–18 °C'dir. star-medico® Tencel® örtüler ısıyı doğal olarak düzenler.",
    tip2h:"Tutarlı program",tip2p:"Her gün aynı saatte yatmak ve kalkmak, en etkili tek uyku alışkanlığıdır.",
    tip3h:"Karanlık ve sessiz",tip3p:"Küçük miktarda ışık ve gürültü bile derin uyku aşamalarını önemli ölçüde azaltabilir.",
    tip4h:"Yatmadan 1 saat önce ekran yok",tip4p:"Mavi ışık melatonin üretimini baskılar. Okuma veya gevşemeyle değiştirin.",
    partEyebrow:"İş fırsatı",partH2:"Türkiye'de star-medico® İş Ortağı Olun",
    partLead:"Türkiye genelinde aktif olarak büyüyoruz. İster bir mobilya mağazasına, ister bir sağlık dükkanına sahip olun, ister satmak için kanıtlanmış bir premium ürün istiyorsanız — konuşmak istiyoruz.",
    pc1h:"Perakende Ortaklar",pc1p:"star-medico®'yu mağazanıza alın. Yüksek kar marjı, düşük iade oranları, güçlü Alman marka bilinirliği.",
    pc2h:"Referans Ortakları",pc2p:"Yönlendirdiğiniz her satıştan komisyon kazanın. Stok gerekmez. Otel resepsiyonistleri, emlakçılar, doktorlar için idealdir.",
    pc3h:"Bölgesel Distribütörler",pc3p:"Münhasıran bir şehir veya bölge alın. Tam eğitim, pazarlama desteği ve fiyat koruması sağlanmaktadır.",
    pc4h:"Tıbbi ve Wellness",pc4p:"Klinikler, fizyoterapi muayenehaneleri ve wellness merkezleri için idealdir. star-medico® zaten Alman eczanelerinde satılmaktadır.",
    offerH:"✅ Ortaklara Sunduklarımız",
    offerLi1:"Sağlıklı kar marjlı rekabetçi toptan fiyatlandırma",offerLi2:"Tam ürün eğitimi ve tanıtım materyalleri",offerLi3:"Türkçe ve Rusça pazarlama varlıkları",offerLi4:"Münhasır bölge seçenekleri mevcut",offerLi5:"HARIKA-M Alanya ekibinden sürekli destek",
    partBoxH:"Ortaklığı Görüşmeye Hazır mısınız?",partLangNote:"English, Türkçe ve Русский dillerinde yanıt veriyoruz",
    ctxEyebrow:"Bize Ulaşın",ctxH2:"Daha İyi Uyumaya Hazır mısınız?",
    ctxLead:"Satın alma sorularınız, ürün bilgisi ve iş ortaklığı fırsatları için bizimle iletişime geçin. Türkçe, İngilizce ve Rusça hızla yanıt veriyoruz.",
    ctxC1h:"WhatsApp",ctxC1p:"Bize ulaşmanın en hızlı yolu. İstediğiniz zaman mesaj gönderin — dakikalar içinde yanıtlıyoruz.",ctxC1btn:"💬 Şimdi Mesaj Gönderin",
    ctxC2h:"Telefon",ctxC2p:"Konuşmayı tercih eder misiniz? Alanya ofisimizi doğrudan arayın.",
    ctxC3h:"E-posta",ctxC3p:"Detaylı sorular, ortaklık soruları veya ticari talepler için.",
    ctaBannerH:"star-medico® ile Tanışın",ctaBannerP:"HARIKA-M — Alanya'nın resmi distribütörü. Satın alma ve iş ortaklığı sorularınız için bizimle iletişime geçin.",ctaBannerBtn:"💬 Şimdi İletişime Geçin",
    footerSub:"Alanya, Türkiye'de star-medico® ortopedik ürünlerin resmi münhasır distribütörü.<br>2000'den beri Almanya'da üretildi · Alman eczanelerinde satılıyor · Alanya genelinde teslimat."
  },
  ru: {
    pageTitle: "star-medico® Алания — Немецкие Ортопедические Матрасы | HARIKA-M",
    topbar: '🇩🇪 Сделано в Германии · С 2000 года &nbsp;·&nbsp; Официальный дистрибьютор в Алании: <span>HARIKA-M</span> &nbsp;·&nbsp; Под заказ · Быстрая доставка',
    navProducts:"Товары",navAdvice:"Советы по сну",navPartners:"Партнёры",navContact:"Контакты",navWa:"Написать",
    heroBadge1:"🇩🇪 Сделано в Германии · С 2000 года",heroBadge2:"🇹🇷 Эксклюзивно — Алания",heroBadge3:"🏥 Продаётся в немецких аптеках",
    heroH1:'«Как Спите —<br>Так и <em>Живёте.»</em>',
    heroTagline:"star-medico® — Ihrer Gesundheit zuliebe · Ради вашего здоровья",
    heroSub:"Ведущая немецкая ортопедическая система с осцилляцией — теперь эксклюзивно в Алании. Клинически разработана для устранения боли в спине, улучшения глубокого сна и восстановления тела каждую ночь.",
    heroProof:'<strong>27 лет</strong> вашей жизни пройдут во сне. Сделайте каждую ночь полезной.',
    heroBtnWa:"💬 Узнать цену",heroBtnOutline:"Все товары ↓",
    heroPartnerH4:"🤝 Стать партнёром в Турции",
    heroPartnerP:"Продавайте в своём магазине, получайте комиссию или станьте региональным дистрибьютором. Премиум немецкий бренд с серьёзным потенциалом дохода.",
    heroPartnerA:"Условия партнёрства ↓",
    trustT1:"Сделано в Германии",trustT2:"Основано в 2000 · 25 лет",trustT3:"Продаётся в немецких аптеках",trustT4:"Официальный дистрибьютор Турции",trustT5:"Доставка по Алании",trustT6:"RU · TR · EN Поддержка",
    statsEyebrow:"Знаете ли вы?",statsH2:"Вы проведёте 27 лет своей жизни в постели.",
    statsLead:"То, как вы спите, определяет ваше самочувствие, подвижность и здоровье. Выбор матраса — одно из важнейших решений для вашего здоровья.",
    stat1unit:"лет во сне",stat1desc:"Среднее время сна за всю жизнь. Ваш матрас важнее автомобиля.",
    stat2unit:"человек",stat2desc:"Страдают от боли в спине и шее ежегодно — 2-я причина обращений к врачу в мире.",
    stat3unit:"в ночь",stat3desc:"Неправильный матрас держит позвоночник в неправильном положении 8 часов — каждую ночь.",
    stat4unit:"лет опыта",stat4desc:"star-medico® решает проблемы со сном из Швэбиш-Гмюнда с 2000 года.",
    probEyebrow:"Проблема",probH2:"Большинство матрасов вам вредят",
    probLead:"Обычный матрас ничего не делает пока вы спите. Ваше тело компенсирует это 8 часов подряд — и вы просыпаетесь усталым, скованным и с болью.",
    probLi1:"Статичная поверхность держит позвоночник в одном положении всю ночь",probLi2:"Накопленное тепло нарушает цикл сна",probLi3:"Нет поддержки для разного веса тела по зонам",probLi4:"Никакой активной терапии — только пассивное лежание",probLi5:"Боль в спине и шее накапливается годами",
    solEyebrow:"Решение star-medico®",solH2:"Технология осцилляции меняет всё",
    solLead:"star-medico® встроил осцилляционный массаж прямо в матрас — имитируя частоту мурлыканья кошки, клинически доказанную для расслабления мышц и улучшения кровообращения.",
    solLi1:"Мягкая осцилляция расслабляет мышцы в течение всей ночи",solLi2:"Зональная поддержка плеч, бёдер и поясницы",solLi3:"Дышащий Tencel® и натуральные материалы",solLi4:"Опциональный слой инфракрасной тепловой терапии",solLi5:"Регулируемое моторизованное основание для оптимальной позиции",solLi6:"Продаётся в немецких аптеках — доказанное медицинское качество",
    solBtn:"💬 Попробуйте бесплатно — Запишитесь",
    qualEyebrow:"Немецкая инженерия",qualH2:"Почему star-medico® выделяется",
    qualLead:"Произведено в Швэбиш-Гмюнде, Германия — каждый продукт проходит строгий контроль качества перед выходом с завода. Никаких компромиссов.",
    qc1h:"Сделано в Германии",qc1p:"Производится в Швэбиш-Гмюнде с 2000 года. Немецкое мастерство на каждом этапе.",
    qc2h:"Аптечное качество",qc2p:"Продаётся в немецких Apotheken (аптеках) — строжайший стандарт розничной торговли в Европе.",
    qc3h:"Наука осцилляции",qc3p:"Частота мурлыканья кошки (20–140 Гц) встроена в матрас. Доказано снижение боли и улучшение сна.",
    qc4h:"Премиальные материалы",qc4p:"Ткань Tencel® lyocell, натуральный латекс, кокосовое волокно и вискоэластичная пена — всё дышащее и гипоаллергенное.",
    qc5h:"Моторизованные системы",qc5p:"Регулируемые основания с дистанционным управлением для точного выбора угла сна.",
    qc6h:"Инфракрасная терапия",qc6p:"Опциональный инфракрасный слой обеспечивает точечную тепловую терапию для суставов и мышц.",
    prodEyebrow:"Полный каталог",prodH2:"Все продукты star-medico®",
    prodLead:"Эксклюзивные цены для Алании — пишите нам в WhatsApp по любому продукту. Цены в EUR. Цены в турецких лирах — по запросу.",
    accEyebrow:"Аксессуары",accH2:"Дополните вашу систему сна",
    accLead:"Премиальные немецкие подушки, топперы и чехлы, которые работают в идеальной гармонии с вашим матрасом star-medico®.",
    accBtn:"Узнать подробнее",
    pharmaH2:"Надёжность немецких аптек с 2000 года",
    pharmaP:"Продукты star-medico® продаются в немецких аптеках — высочайший стандарт качества розничной торговли в Европе. Это не бренд матрасов. Это медицинский продукт.",
    pharmaB:"🛡️ Сертифицировано: аптечное качество",
    advEyebrow:"ЗАПРОС НА ПОКУПКУ",advH2:"Хотите заказать?",
    advLead:"HARIKA-M — официальный дистрибьютор star-medico® в Алании. Свяжитесь с нами для получения информации о продуктах, цен и оформления заказа. Отвечаем на русском, турецком и английском.",
    advLangs:"🗣️ Мы говорим: English · Türkçe · Русский",advLangsP:"Команда отвечает на всех трёх языках — в тот же день.",
    advS1:"<strong>Напишите нам в WhatsApp</strong> — укажите интересующую модель, мы пришлём все детали.",
    advS2:"<strong>Получите коммерческое предложение</strong> — подтверждаем актуальные цены и наличие в течение нескольких часов.",
    advS3:"<strong>Оформите заказ</strong> — мы берём на себя все документы и логистику.",
    advS4:"<strong>Доставка в Аланью</strong> — система доставляется и профессионально устанавливается.",
    advS5:"<strong>Полная гарантия</strong> — каждый продукт star-medico® имеет оригинальную гарантию немецкого производителя.",
    advBtn:"💬 Связаться сейчас",
    tip1h:"Прохладная комната",tip1p:"Идеальная температура сна 16–18 °C. Tencel® star-medico® регулирует тепло естественным образом.",
    tip2h:"Постоянный режим",tip2p:"Ложиться и вставать в одно и то же время — самая эффективная привычка для сна.",
    tip3h:"Темнота и тишина",tip3p:"Даже небольшое количество света и шума может значительно снизить глубокие стадии сна.",
    tip4h:"Без экранов за час до сна",tip4p:"Синий свет подавляет выработку мелатонина. Замените чтением или расслаблением.",
    partEyebrow:"Деловая возможность",partH2:"Стать партнёром star-medico® в Турции",
    partLead:"Мы активно расширяемся по всей Турции. Владелец мебельного магазина, магазина здоровья или просто хотите продавать проверенный премиум-продукт — свяжитесь с нами.",
    pc1h:"Розничные партнёры",pc1p:"Разместите star-medico® в своём магазине. Высокая маржа, низкий процент возвратов, сильный немецкий бренд.",
    pc2h:"Рефеальные партнёры",pc2p:"Получайте комиссию с каждой реферальной продажи. Склад не нужен. Подходит для консьержей отелей, риелторов, врачей.",
    pc3h:"Региональные дистрибьюторы",pc3p:"Получите эксклюзивные права на город или регион. Полное обучение, маркетинговая поддержка, защита цен.",
    pc4h:"Медицина и велнес",pc4p:"Идеально для клиник, физиотерапевтических кабинетов и велнес-центров. star-medico® уже продаётся в немецких аптеках.",
    offerH:"✅ Что мы предлагаем партнёрам",
    offerLi1:"Конкурентные оптовые цены с хорошей маржой",offerLi2:"Полное обучение и демонстрационные материалы",offerLi3:"Маркетинговые материалы на турецком и русском",offerLi4:"Эксклюзивные территориальные опции",offerLi5:"Постоянная поддержка от команды HARIKA-M в Алании",
    partBoxH:"Готовы обсудить партнёрство?",partLangNote:"Отвечаем на English, Türkçe и Русском",
    ctxEyebrow:"Контакты",ctxH2:"Готовы спать лучше?",
    ctxLead:"Запишитесь на бесплатную консультацию, задайте вопрос о продукте или просто напишите. Быстро отвечаем на английском, турецком и русском.",
    ctxC1h:"WhatsApp",ctxC1p:"Самый быстрый способ связаться. Пишите в любое время — ответим за минуты.",ctxC1btn:"💬 Написать сейчас",
    ctxC2h:"Телефон",ctxC2p:"Предпочитаете поговорить? Звоните напрямую в офис в Алании.",
    ctxC3h:"Эл. почта",ctxC3p:"Для детальных вопросов, партнёрских запросов или оптовых заявок.",
    ctaBannerH:"Интересует star-medico®?",ctaBannerP:"Свяжитесь с HARIKA-M — официальным дистрибьютором в Алании. Принимаем запросы на покупку и партнёрство.",ctaBannerBtn:"💬 Написать сейчас",
    footerSub:"Официальный эксклюзивный дистрибьютор ортопедических продуктов star-medico® в Алании, Турция.<br>Сделано в Германии с 2000 года · Продаётся в немецких аптеках · Доставка по Алании."
  }
};

var LANG = localStorage.getItem('sm_lang') || 'en';

function setLang(l) {
  LANG = l; localStorage.setItem('sm_lang', l);
  var t = T[l];
  document.title = t.pageTitle;
  // Topbar
  var tb = document.querySelector('.topbar'); if(tb) tb.innerHTML = t.topbar;
  // Nav
  var nl = document.querySelectorAll('.nav-links a');
  if(nl[0]) nl[0].textContent = t.navProducts;
  if(nl[1]) nl[1].textContent = t.navAdvice;
  if(nl[2]) nl[2].textContent = t.navPartners;
  if(nl[3]) nl[3].textContent = t.navContact;
  var navCtas = document.querySelectorAll('.nav-cta'); navCtas.forEach(function(e){e.textContent=''; e.innerHTML=t.navWa;});
  // Lang buttons active
  document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.toggle('active', b.textContent===l.toUpperCase()); });
  // Hero
  var hb = document.querySelectorAll('.hero-badge');
  if(hb[0]) hb[0].textContent = t.heroBadge1;
  if(hb[1]) hb[1].textContent = t.heroBadge2;
  if(hb[2]) hb[2].textContent = t.heroBadge3;
  var h1 = document.querySelector('.hero h1'); if(h1) h1.innerHTML = t.heroH1;
  var ht = document.querySelector('.hero-tagline'); if(ht) ht.textContent = t.heroTagline;
  var hs = document.querySelector('.hero-sub'); if(hs) hs.textContent = t.heroSub;
  var hp = document.querySelector('.hero-proof'); if(hp) hp.innerHTML = t.heroProof;
  var hwa = document.querySelector('.hero-btn-wa'); if(hwa) hwa.textContent = t.heroBtnWa;
  var hout = document.querySelector('.hero-btn-outline'); if(hout) hout.textContent = t.heroBtnOutline;
  var hph = document.querySelector('.hero-partner-card h4'); if(hph) hph.textContent = t.heroPartnerH4;
  var hpp = document.querySelector('.hero-partner-card p'); if(hpp) hpp.textContent = t.heroPartnerP;
  var hpa = document.querySelector('.hero-partner-card a'); if(hpa) hpa.textContent = t.heroPartnerA;
  // Trust bar
  var ti = document.querySelectorAll('.trust-item strong');
  var td = document.querySelectorAll('.trust-item');
  var trustKeys = ['trustT1','trustT2','trustT3','trustT4','trustT5','trustT6'];
  td.forEach(function(el,i){ if(trustKeys[i]) { var s=el.querySelector('strong'); el.innerHTML=''; if(s){el.appendChild(s);} el.appendChild(document.createTextNode(' '+t[trustKeys[i]])); } });
  // Stats
  var se = document.querySelector('.stats-section .section-eyebrow'); if(se) se.textContent = t.statsEyebrow;
  var sh = document.querySelector('.stats-section .section-title'); if(sh) sh.textContent = t.statsH2;
  var sl = document.querySelector('.stats-section .section-lead'); if(sl) sl.textContent = t.statsLead;
  var sc = document.querySelectorAll('.stat-card');
  var statU = ['stat1unit','stat2unit','stat3unit','stat4unit'];
  var statD = ['stat1desc','stat2desc','stat3desc','stat4desc'];
  sc.forEach(function(c,i){
    var u=c.querySelector('.stat-unit'); if(u) u.textContent=t[statU[i]];
    var d=c.querySelector('.stat-desc'); if(d) d.textContent=t[statD[i]];
  });
  // Problem section
  function q(sel){return document.querySelector(sel);}
  function qa(sel){return document.querySelectorAll(sel);}
  var ps = qa('.problem-section .section-eyebrow');
  if(ps[0]) ps[0].textContent=t.probEyebrow;
  if(ps[1]) ps[1].textContent=t.solEyebrow;
  var ph = qa('.problem-section .section-title');
  if(ph[0]) ph[0].textContent=t.probH2;
  if(ph[1]) ph[1].textContent=t.solH2;
  var pl = qa('.problem-section .section-lead');
  if(pl[0]) pl[0].textContent=t.probLead;
  if(pl[1]) pl[1].textContent=t.solLead;
  var pli = qa('.problem-list li');
  var pliKeys=['probLi1','probLi2','probLi3','probLi4','probLi5'];
  pli.forEach(function(el,i){if(pliKeys[i]) el.textContent=t[pliKeys[i]];});
  var sli = qa('.solution-list li');
  var sliKeys=['solLi1','solLi2','solLi3','solLi4','solLi5','solLi6'];
  sli.forEach(function(el,i){if(sliKeys[i]) el.textContent=t[sliKeys[i]];});
  var sb = q('.problem-section .btn-wa'); if(sb) sb.textContent=t.solBtn;
  // Quality
  var qe=q('.quality-section .section-eyebrow');if(qe)qe.textContent=t.qualEyebrow;
  var qh=q('.quality-section .section-title');if(qh)qh.textContent=t.qualH2;
  var ql=q('.quality-section .section-lead');if(ql)ql.textContent=t.qualLead;
  var qcards=qa('.quality-card');
  var qch=['qc1h','qc2h','qc3h','qc4h','qc5h','qc6h'];
  var qcp=['qc1p','qc2p','qc3p','qc4p','qc5p','qc6p'];
  qcards.forEach(function(c,i){
    var h4=c.querySelector('h4');if(h4)h4.textContent=t[qch[i]];
    var p=c.querySelector('p');if(p)p.textContent=t[qcp[i]];
  });
  // Products header
  var pe=q('.products-section .section-eyebrow');if(pe)pe.textContent=t.prodEyebrow;
  var ph2=q('.products-section .section-title');if(ph2)ph2.textContent=t.prodH2;
  var ple=q('.products-section .section-lead');if(ple)ple.textContent=t.prodLead;
  // Accessories
  var ae=q('.acc-section .section-eyebrow');if(ae)ae.textContent=t.accEyebrow;
  var ah=q('.acc-section .section-title');if(ah)ah.textContent=t.accH2;
  var al=q('.acc-section .section-lead');if(al)al.textContent=t.accLead;
  qa('.acc-btn').forEach(function(b){b.textContent=t.accBtn;});
  // Pharmacy
  var pmh=q('.pharma-section h2');if(pmh)pmh.textContent=t.pharmaH2;
  var pmp=q('.pharma-section p');if(pmp)pmp.textContent=t.pharmaP;
  var pmb=q('.pharma-badge');if(pmb)pmb.textContent=t.pharmaB;
  // Advice
  var adve=q('.advice-section .section-eyebrow');if(adve)adve.textContent=t.advEyebrow;
  var advh=q('.advice-section .section-title');if(advh)advh.textContent=t.advH2;
  var advl=q('.advice-section .section-lead');if(advl)advl.textContent=t.advLead;
  var alb=q('.advice-langs strong');if(alb)alb.textContent=t.advLangs;
  var alp=q('.advice-langs p');if(alp)alp.textContent=t.advLangsP;
  var steps=qa('.step-text');
  var stepKeys=['advS1','advS2','advS3','advS4','advS5'];
  steps.forEach(function(el,i){if(stepKeys[i])el.innerHTML=t[stepKeys[i]];});
  var advbtn=q('.advice-section .btn-wa');if(advbtn)advbtn.textContent=t.advBtn;
  var tips=qa('.tip-card');
  var tph=['tip1h','tip2h','tip3h','tip4h'];
  var tpp=['tip1p','tip2p','tip3p','tip4p'];
  tips.forEach(function(c,i){
    var h4=c.querySelector('h4');if(h4)h4.textContent=t[tph[i]];
    var p=c.querySelector('p');if(p)p.textContent=t[tpp[i]];
  });
  // Partners
  var parte=q('.partner-section .section-eyebrow');if(parte)parte.textContent=t.partEyebrow;
  var parth=q('.partner-section .section-title');if(parth)parth.textContent=t.partH2;
  var partl=q('.partner-section .section-lead');if(partl)partl.textContent=t.partLead;
  var pcards=qa('.partner-card');
  var pch=['pc1h','pc2h','pc3h','pc4h'];
  var pcp=['pc1p','pc2p','pc3p','pc4p'];
  pcards.forEach(function(c,i){
    var h4=c.querySelector('h4');if(h4)h4.textContent=t[pch[i]];
    var p=c.querySelector('p');if(p)p.textContent=t[pcp[i]];
  });
  var oh=q('.partner-offer h4');if(oh)oh.textContent=t.offerH;
  var oli=qa('.partner-offer li');
  var oliK=['offerLi1','offerLi2','offerLi3','offerLi4','offerLi5'];
  oli.forEach(function(el,i){if(oliK[i])el.textContent=t[oliK[i]];});
  var pbh=q('.partner-contact-box h4');if(pbh)pbh.textContent=t.partBoxH;
  var pbl=q('.partner-lang');if(pbl)pbl.textContent=t.partLangNote;
  // Contact
  var ctxe=q('.contact-section .section-eyebrow');if(ctxe)ctxe.textContent=t.ctxEyebrow;
  var ctxh=q('.contact-section .section-title');if(ctxh)ctxh.textContent=t.ctxH2;
  var ctxl=q('.contact-section .section-lead');if(ctxl)ctxl.textContent=t.ctxLead;
  var ccs=qa('.contact-card');
  if(ccs[0]){var h=ccs[0].querySelector('h4');if(h)h.textContent=t.ctxC1h;var p=ccs[0].querySelector('p');if(p)p.textContent=t.ctxC1p;var b=ccs[0].querySelector('.cc-btn-wa');if(b)b.textContent=t.ctxC1btn;}
  if(ccs[1]){var h=ccs[1].querySelector('h4');if(h)h.textContent=t.ctxC2h;var p=ccs[1].querySelector('p');if(p)p.textContent=t.ctxC2p;}
  if(ccs[2]){var h=ccs[2].querySelector('h4');if(h)h.textContent=t.ctxC3h;var p=ccs[2].querySelector('p');if(p)p.textContent=t.ctxC3p;}
  var cbh=q('.cta-banner h3');if(cbh)cbh.textContent=t.ctaBannerH;
  var cbp=q('.cta-banner p');if(cbp)cbp.textContent=t.ctaBannerP;
  var cbb=q('.cta-banner-wa');if(cbb)cbb.textContent=t.ctaBannerBtn;
  // Footer
  var fs=q('.footer-sub');if(fs)fs.innerHTML=t.footerSub;
}

// Apply on load
document.addEventListener('DOMContentLoaded', function(){ setLang(LANG); });

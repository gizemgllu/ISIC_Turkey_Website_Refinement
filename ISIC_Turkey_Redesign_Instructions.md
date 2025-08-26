# ISIC Türkiye Website Redesign Instructions
## Ana Sayfa (Main Page) Redesign - ISIC Portugal Stilinde

### Genel Bakış
Bu dokümanda, ISIC Türkiye websitesini (https://isicturkiye.com) ISIC Portugal websitesi (https://www.isic.pt/en/) stilinde yeniden tasarlamak için gerekli değişiklikler detaylandırılmıştır.

### Mevcut Durum Analizi
**ISIC Türkiye (Mevcut):**
- Tilda platformunda kurulu
- Basit, tek sayfa tasarım
- Mavi-yeşil (#40b8b8) ana renk
- Minimal içerik ve navigasyon
- Mobil uyumlu ama geliştirilebilir

**ISIC Portugal (Hedef):**
- Modern, profesyonel tasarım
- Çoklu slider/banner sistemi
- Tab-based kart türleri (ISIC, ITIC, IYTC)
- Zengin içerik ve görsel öğeler
- Responsive ve kullanıcı dostu

---

## 1. ANA SAYFA YAPISAL DEĞİŞİKLİKLER

### 1.1 Header/Navigation Yeniden Tasarımı
**Mevcut:** Basit menü yapısı
**Hedef:** Modern, dropdown destekli navigasyon

**Yapılacaklar:**
- Logo sol üstte sabit kalacak
- Ana menü öğeleri: Ana Sayfa, Kartlar, İndirimler, Hakkımızda, İletişim
- Dil seçimi (TR/EN) sağ üstte
- Arama kutusu header'a eklenmeli
- Mobil hamburger menü geliştirilmeli

### 1.2 Hero Section Yeniden Tasarımı
**Mevcut:** Tek statik banner
**Hedef:** Çoklu slider sistemi

**Yapılacaklar:**
- LayerSlider veya benzeri slider sistemi kurulmalı
- En az 5-6 farklı banner/slide
- Her slide'da farklı mesaj ve CTA butonu
- Ken Burns efekti (zoom in/out)
- Otomatik geçiş (3 saniye)
- Manuel navigasyon okları

**Slider İçerikleri:**
1. **Ana Banner:** "ISIC ile Dünya Çapında İndirimler"
2. **Seyahat:** "Seyahat Ederken Öğrenci İndirimleri"
3. **Alışveriş:** "Alışverişte Öğrenci Avantajları"
4. **Kültür:** "Müzeler ve Etkinliklerde İndirim"
5. **Mobil Uygulama:** "ISIC Mobil Uygulaması"
6. **Özel Kampanyalar:** Güncel indirim kampanyaları

### 1.3 Kart Türleri Tab Sistemi
**Mevcut:** Tek ISIC kartı
**Hedef:** 3 farklı kart türü için tab sistemi

**Tab Yapısı:**
- **ISIC Tab:** Uluslararası Öğrenci Kimlik Kartı
- **ITIC Tab:** Uluslararası Öğretmen Kimlik Kartı  
- **IYTC Tab:** Uluslararası Gençlik Seyahat Kartı

**Her Tab İçeriği:**
- Sol tarafta kart görseli
- Sağ tarafta açıklama metni
- "Kartınızı Alın" CTA butonu
- Kart özellikleri listesi

---

## 2. TASARIM VE GÖRSEL ÖĞELER

### 2.1 Renk Paleti
**Ana Renkler:**
- **Birincil:** #40b8b8 (Mavi-yeşil - mevcut)
- **İkincil:** #feef00 (Sarı - vurgu rengi)
- **Koyu:** #006666 (Koyu mavi-yeşil)
- **Açık:** #f5f5f5 (Açık gri - arka plan)
- **Beyaz:** #ffffff (İçerik alanları)

### 2.2 Tipografi
**Font Ailesi:**
- **Ana Font:** Roboto (mevcut)
- **Başlıklar:** Roboto Bold (700)
- **Alt başlıklar:** Roboto Medium (500)
- **Gövde metni:** Roboto Regular (400)
- **Vurgu metni:** Roboto Light (300)

**Font Boyutları:**
- H1: 65px (mobilde 30px)
- H2: 50px (mobilde 25px)
- H3: 35px (mobilde 20px)
- Gövde: 16px (mobilde 14px)
- Küçük metin: 14px (mobilde 12px)

### 2.3 Buton Tasarımları
**Birincil Buton:**
- Arka plan: #40b8b8
- Metin: Beyaz
- Border: 3px solid #40b8b8
- Border-radius: 15px
- Hover: #006666 arka plan, #feef00 metin

**İkincil Buton:**
- Arka plan: Şeffaf
- Metin: #40b8b8
- Border: 3px solid #40b8b8
- Border-radius: 15px
- Hover: #40b8b8 arka plan, beyaz metin

---

## 3. İÇERİK VE METİNLER

### 3.1 Ana Sayfa Metinleri (Türkçe)
**Hero Section:**
- Ana Başlık: "DÜNYA ÇAPINDA ÖĞRENCİ İNDİRİMLERİ"
- Alt Başlık: "ISIC ile 130+ ülkede 5 milyon+ öğrenciye katılın"
- Açıklama: "Uluslararası Öğrenci Kimlik Kartı ile seyahat, alışveriş, kültür ve eğlence alanlarında özel indirimlerden yararlanın"

**Tab İçerikleri:**
- **ISIC:** "Global Öğrenci Kimliği - Dünya çapında tanınan tek uluslararası öğrenci kimlik kartı"
- **ITIC:** "Uluslararası Öğretmen Kimlik Kartı - Eğitimciler için özel avantajlar"
- **IYTC:** "Uluslararası Gençlik Seyahat Kartı - 26 yaş altı gençler için seyahat indirimleri"

### 3.2 CTA Butonları
- "Kartınızı Alın" (Ana CTA)
- "Daha Fazla Bilgi" (İkincil CTA)
- "İndirimleri Keşfedin" (Üçüncül CTA)

---

## 4. FIRSATLAR SAYFASI YENİDEN TASARIMI

### 4.1 Mevcut Durum Analizi
**ISIC Türkiye Fırsatlar (Mevcut):**
- Basit liste formatında fırsatlar
- Sınırlı kategori sistemi
- Minimal görsel içerik
- Temel filtreleme özellikleri

**Hedef Tasarım:**
- Modern kart tabanlı layout
- Gelişmiş kategori filtreleme
- Zengin görsel içerik
- İnteraktif kullanıcı deneyimi

### 4.2 Yapısal Değişiklikler
**Fırsat Kategorileri:**
- **Seyahat & Ulaşım:** Uçak bileti, otobüs, tren, araç kiralama
- **Konaklama:** Otel, hostel, apart otel indirimleri
- **Eğitim & Kültür:** Müze, tiyatro, konser, kurs indirimleri
- **Alışveriş & Yemek:** Restoran, kafe, mağaza indirimleri
- **Spor & Eğlence:** Spor salonu, sinema, eğlence parkı
- **Teknoloji & Hizmetler:** Yazılım, sigorta, bankacılık

**Filtreleme Sistemi:**
- Kategori bazlı filtreleme
- Şehir/ülke bazlı filtreleme
- İndirim oranına göre sıralama
- Popülerlik bazlı sıralama
- Tarih bazlı filtreleme

### 4.3 Görsel Tasarım
**Fırsat Kartları:**
- Modern kart tasarımı (glassmorphism)
- Yüksek kaliteli görseller
- İndirim oranı vurgusu
- Firma logosu ve bilgileri
- "Detayları Gör" CTA butonu

**Layout Düzeni:**
- Grid sistem (3-4 sütun)
- Responsive tasarım
- Lazy loading görseller
- Smooth animasyonlar

---

## 5. BLOG YAZILARI SAYFASI YENİDEN TASARIMI

### 5.1 Mevcut Durum Analizi
**ISIC Türkiye Blog (Mevcut):**
- Basit blog listesi
- Sınırlı kategori sistemi
- Minimal görsel içerik
- Temel arama özellikleri

**Hedef Tasarım:**
- Modern blog grid layout
- Gelişmiş kategori filtreleme
- Zengin görsel içerik
- İnteraktif kullanıcı deneyimi

### 5.2 Yapısal Değişiklikler
**Blog Kategorileri:**
- **Eğitim:** Akademik ipuçları, online kurslar, sınav hazırlığı
- **Seyahat:** Seyahat rehberleri, bütçe ipuçları, rota önerileri
- **Kariyer:** Staj fırsatları, networking, CV hazırlama
- **Teknoloji:** Öğrenci yazılımları, dijital araçlar, online platformlar
- **Yaşam:** Öğrenci hayatı, bütçe yönetimi, sağlık ve spor
- **Kültür:** Sanat etkinlikleri, müze rehberleri, kültürel deneyimler

**Blog Layout Sistemi:**
- Featured post (büyük kart)
- Regular posts grid (2-3 sütun)
- Sidebar widget'ları
- Pagination sistemi

### 5.3 İçerik Yönetimi
**Blog İçerikleri:**
- **Ana Başlık:** "Blog Yazıları"
- **Alt Başlık:** "Öğrenci hayatı, seyahat ipuçları, eğitim fırsatları ve ISIC avantajları hakkında güncel blog yazılarımızı keşfedin"

**Örnek Blog Yazıları:**
1. **2024'te Öğrencilerin Mutlaka Bilmesi Gereken 10 Online Eğitim Platformu**
   - Kategori: Eğitim
   - Tarih: 20 Mart 2024
   - İçerik: Dijital eğitim fırsatları ve ISIC indirimleri

2. **Bütçe Dostu Avrupa Turu: ISIC ile Tasarruf İpuçları**
   - Kategori: Seyahat
   - Tarih: 18 Mart 2024
   - İçerik: Avrupa seyahatinde %50'ye varan tasarruf

3. **Üniversite Hayatında Networking: Profesyonel Ağ Kurma Rehberi**
   - Kategori: Kariyer
   - Tarih: 15 Mart 2024
   - İçerik: ISIC etkinliklerinden faydalanma

### 5.4 Sidebar Widget'ları
**Popüler Yazılar:**
- En çok okunan blog yazıları
- Görsel thumbnail'lar
- Tarih bilgisi
- Okuma süresi

**Kategoriler:**
- Tüm kategoriler listesi
- Her kategorideki yazı sayısı
- Aktif kategori vurgusu
- Filtreleme fonksiyonu

**Etiketler:**
- Popüler etiketler
- Tag cloud görünümü
- Hover efektleri

### 5.5 Görsel Tasarım
**Blog Kartları:**
- Modern kart tasarımı
- Yüksek kaliteli görseller
- Kategori badge'leri
- Meta bilgileri (tarih, yazar)
- Excerpt metni
- "Devamını Oku" CTA butonu

**Responsive Tasarım:**
- Desktop: 2-3 sütun grid
- Tablet: 2 sütun grid
- Mobile: Tek sütun layout
- Touch-friendly etkileşimler

---

## 6. DENEYİM YAZILARI SAYFASI YENİDEN TASARIMI

### 6.1 Mevcut Durum Analizi
**ISIC Türkiye Deneyim Yazıları (Mevcut):**
- Basit deneyim listesi
- Sınırlı öğrenci profili
- Minimal görsel içerik
- Temel hikaye formatı

**Hedef Tasarım:**
- Modern deneyim kartları
- Zengin öğrenci profilleri
- Görsel hikaye anlatımı
- İnteraktif kullanıcı deneyimi

### 6.2 Yapısal Değişiklikler
**Deneyim Kategorileri:**
- **Seyahat Deneyimleri:** Erasmus+, yaz okulu, staj deneyimleri
- **Kültürel Deneyimler:** Müze, tiyatro, konser deneyimleri
- **Eğitim Deneyimleri:** Online kurs, sertifika programları
- **Alışveriş Deneyimleri:** İndirim ve avantaj deneyimleri
- **Sosyal Deneyimler:** Etkinlik ve topluluk deneyimleri

**Deneyim Layout Sistemi:**
- Hero section (büyük başlık)
- İstatistik kartları
- Deneyim hikayeleri grid'i
- Featured deneyim (öne çıkan)
- CTA section

### 6.3 İçerik Yönetimi
**Ana Başlık:** "Deneyimler"
**Alt Başlık:** "ISIC kart sahiplerinin dünya çapında yaşadığı gerçek deneyimleri keşfedin. Her hikaye bir keşif, her deneyim bir ilham kaynağı."

**İstatistik Kartları:**
1. **500+ Deneyim Hikayesi**
2. **50+ Ülke**
3. **1000+ Mutlu Öğrenci**
4. **24/7 Destek**

**Örnek Deneyim Hikayeleri:**

1. **Yeva Nahorna - Prague, Charles University**
   - **Deneyim:** "ISIC kartım sayesinde Prag'da hem ekonomik hem de sosyal açıdan harika bir deneyim yaşadım. KFC, UGO, Burger King gibi popüler zincirlerden indirim aldım."
   - **Vurgular:** Yemek İndirimleri, Elektronik, Alive App

2. **Vadym Zashkolnyi - Uluslararası Öğrenci**
   - **Deneyim:** "ISIC kartım hem müze ziyaretlerimde hem de ulaşımda büyük kolaylık sağladı. FlixBus ve RegioJet ile çok daha uygun fiyatlarla seyahat ettim."
   - **Vurgular:** Müze İndirimleri, Ulaşım, Uçak Bileti

3. **Umut Utku Akça - İstanbul**
   - **Deneyim:** "ISIC kartı benim için fırsatlar dünyasının kapısını açan bir anahtar gibi. Dijital esnekliği ve öğrenci topluluğu arasındaki birliktelik hissi muhteşem."
   - **Vurgular:** Dijital Esneklik, Topluluk, Güvenilir Kimlik

### 6.4 Görsel Tasarım
**Deneyim Kartları:**
- Modern glassmorphism tasarım
- Öğrenci avatar'ları
- Gradient renk geçişleri
- Hover animasyonları
- Highlight tag'leri

**Layout Düzeni:**
- Grid sistem (2-3 sütun)
- Responsive tasarım
- Smooth scroll efektleri
- Interactive hover states

**Featured Deneyim:**
- Büyük gradient kart
- Öne çıkan hikaye
- Vurgulu tasarım
- CTA butonu

### 6.5 CTA Section
**Ana CTA:**
- **Başlık:** "Sen de Deneyimini Paylaş"
- **Açıklama:** "ISIC kartınla yaşadığın unutulmaz deneyimleri, keşfettiğin yerleri ve öğrendiğin dersleri bizimle paylaş."
- **Buton:** "Deneyimini Paylaş"

**Küçük CTA:**
- **Başlık:** "Hemen Kartınızı Alın"
- **Açıklama:** "Dünya çapında öğrenci indirimlerinden yararlanmaya başlayın"
- **Butonlar:** "Kartınızı Alın", "Bizimle İletişime Geçin"

---

## 7. SONRAKI ADIMLAR

Bu sayfa redesign'ları tamamlandıktan sonra:
1. **Blog Post Detay Sayfaları:** Her blog yazısı için detay sayfası
2. **Deneyim Detay Sayfaları:** Her deneyim için detaylı hikaye sayfası
3. **Arama Fonksiyonu:** Gelişmiş arama ve filtreleme
4. **Kullanıcı Yorumları:** Blog ve deneyim yazılarına yorum sistemi
5. **Sosyal Medya Entegrasyonu:** Paylaşım butonları ve entegrasyon

---

## İLETİŞİM VE SORULAR

Bu dokümanla ilgili sorularınız için:
- **Proje Yöneticisi:** [İsim]
- **Tasarım Sorumlusu:** [İsim]
- **Teknik Sorumlu:** [İsim]

**Not:** Bu redesign sürecinde ISIC Portugal websitesi sürekli referans olarak kullanılmalı ve tasarım tutarlılığı korunmalıdır. Blog yazıları ve deneyim yazıları sayfaları, ana sayfa ve fırsatlar sayfası ile uyumlu tasarım dilini sürdürmelidir.

---

## 8. BLOG YAZILARI SAYFASI YENİDEN TASARIMI

### 8.1 Mevcut Durum Analizi
**ISIC Türkiye Blog Yazıları (Mevcut):**
- 15 blog yazısı grid düzeninde
- Sadece başlık ve küçük görsel
- Temel kart tasarımı

**Kaldırılanlar:**
- Basit blog kartları
- Minimal görsel boyutları

### 8.2 Yeni Tasarım (ISIC Portugal Stilinde)

**Eklenenler:**

**Ana Başlık Bölümü:**
- "Blog Yazıları" büyük başlık
- Alt açıklama metni
- Arama kutusu

**Yan Menü (Sidebar):**
- Kategoriler listesi
- Popüler yazılar bölümü  
- Etiket bulutu

**Blog Kartları:**
- Büyük görseller
- Renkli kategori etiketleri
- Yazı özeti
- Tarih bilgisi
- "Devamını Oku" butonu

**Öne Çıkan Blog:**
- Büyük featured kart
- Vurgulu tasarım

---

## 9. DENEYİM YAZILARI SAYFASI YENİDEN TASARIMI

### 9.1 Mevcut Durum Analizi
**ISIC Türkiye Deneyim Yazıları (Mevcut):**
- "Sizden Gelenler!" başlığı
- 13 öğrenci hikayesi basit liste formatında
- Sadece fotoğraf ve metin
- Instagram linkleri

**Kaldırılanlar:**
- "Sizden Gelenler!" başlığı
- Basit liste düzeni
- Instagram odaklı linkler

### 9.2 Yeni Tasarım (ISIC Portugal Stilinde)

**Eklenenler:**

**Ana Başlık Bölümü:**
- "Deneyimler" büyük başlık
- Alt açıklama metni
- Gradient arka plan

**İstatistik Kartları:**
- 500+ Deneyim Hikayesi
- 50+ Ülke  
- 1000+ Mutlu Öğrenci
- 24/7 Destek

**Öğrenci Kartları Yenilendi:**
- Modern kart tasarımı
- Gradient renkler
- Etiket sistemi
- Vurgulu profil fotoğrafları

**Mevcut Hikayeler:**
- Yeva Nahorna (Prag deneyimi)
- Vadym Zashkolnyi (Seyahat deneyimi)
- Umut Utku Akça (Dijital deneyim)

**Kategori Butonları:**
- Seyahat, Eğitim, Kültür, Alışveriş, Sosyal

**Paylaşım Bölümü:**
- "Sen de Deneyimini Paylaş" kartı
- "Kartınızı Alın" çağrı kartı

---

**Not:** Bu blog yazıları ve deneyim yazıları redesign'ları, ana sayfa ve fırsatlar sayfası ile tutarlı tasarım dili kullanır. Aynı renk paleti, tipografi sistemi ve component library uygulanır. Her iki sayfa da ISIC Portugal'in modern, kullanıcı odaklı tasarım yaklaşımını yansıtır.

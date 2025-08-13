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

## 4. TEKNİK UYGULAMA

### 4.1 Platform Değişikliği
**Önerilen:** Tilda'dan WordPress'e geçiş
**Alternatif:** Tilda'da gelişmiş özellikler kullanımı

**WordPress Avantajları:**
- LayerSlider eklentisi ile profesyonel slider
- Gelişmiş menü yönetimi
- SEO optimizasyonu
- İçerik yönetim kolaylığı

### 4.2 Responsive Tasarım
**Breakpoint'ler:**
- Desktop: 1200px+
- Tablet: 960px - 1199px
- Mobile Large: 640px - 959px
- Mobile Small: 320px - 639px

**Mobil Optimizasyonları:**
- Touch-friendly butonlar
- Swipe gesture desteği
- Optimized görsel boyutları
- Hızlı yükleme

### 4.3 Performans Optimizasyonu
- Görsel sıkıştırma (WebP formatı)
- Lazy loading
- CSS/JS minification
- CDN kullanımı
- Browser caching

---

## 5. UYGULAMA ADIMLARI

### 5.1 Faz 1: Temel Yapı (1-2 hafta)
- [ ] Header/navigation yeniden tasarımı
- [ ] Hero section slider sistemi
- [ ] Temel sayfa yapısı

### 5.2 Faz 2: İçerik ve Görseller (1-2 hafta)
- [ ] Tab sistemi implementasyonu
- [ ] İçerik metinlerinin yazılması
- [ ] Görsel materyallerin hazırlanması

### 5.3 Faz 3: Responsive ve Test (1 hafta)
- [ ] Mobil uyumluluk testleri
- [ ] Cross-browser testleri
- [ ] Performans optimizasyonu

### 5.4 Faz 4: Launch ve SEO (1 hafta)
- [ ] Canlıya alma
- [ ] SEO ayarları
- [ ] Analytics kurulumu

---

## 6. GEREKSİNİMLER VE KAYNAKLAR

### 6.1 Görsel Materyaller
- Yüksek kaliteli banner görselleri (1920x600px)
- ISIC, ITIC, IYTC kart görselleri
- İkon seti (FontAwesome önerilen)
- Logo (yüksek çözünürlük)

### 6.2 İçerik
- Türkçe metinler (SEO uyumlu)
- Meta açıklamalar
- Alt metinler (görseller için)
- H1, H2, H3 başlık hiyerarşisi

### 6.3 Teknik Gereksinimler
- Hosting (WordPress uyumlu)
- SSL sertifikası
- Domain yönetimi
- Backup sistemi

---

## 7. KALİTE KONTROL

### 7.1 Test Kriterleri
- [ ] Tüm tarayıcılarda uyumluluk
- [ ] Mobil cihazlarda performans
- [ ] Sayfa yükleme hızı (<3 saniye)
- [ ] SEO skorları (90+)
- [ ] Accessibility standartları

### 7.2 Kullanıcı Deneyimi
- [ ] Kolay navigasyon
- [ ] Hızlı bilgi erişimi
- [ ] Görsel çekicilik
- [ ] Mobil kullanım kolaylığı

---

## 8. SONRAKI ADIMLAR

Bu ana sayfa redesign tamamlandıktan sonra:
1. **Diğer Sayfalar:** Hakkımızda, İndirimler, İletişim sayfaları
2. **Blog Sistemi:** Haberler ve güncellemeler
3. **E-ticaret:** Online kart satış sistemi
4. **Mobil Uygulama:** iOS/Android uygulaması

---

## İLETİŞİM VE SORULAR

Bu dokümanla ilgili sorularınız için:
- **Proje Yöneticisi:** [İsim]
- **Tasarım Sorumlusu:** [İsim]
- **Teknik Sorumlu:** [İsim]

**Not:** Bu redesign sürecinde ISIC Portugal websitesi sürekli referans olarak kullanılmalı ve tasarım tutarlılığı korunmalıdır.

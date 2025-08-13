# ISIC Türkiye Website - Redesign Demo

Bu proje, ISIC Türkiye websitesini ISIC Portugal stilinde yeniden tasarlamak için oluşturulmuş bir demo websitesidir.

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Python 3.6+ (yerleşik HTTP server için)
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)

### Kurulum ve Çalıştırma

1. **Projeyi indirin**
   ```bash
   # Eğer git kullanıyorsanız
   git clone [repository-url]
   cd web
   
   # Veya dosyaları manuel olarak indirin
   ```

2. **Sunucuyu başlatın**
   ```bash
   # Python ile
   python server.py
   
   # Veya Python3 ile
   python3 server.py
   ```

3. **Tarayıcıda açın**
   - Sunucu otomatik olarak tarayıcıyı açacaktır
   - Manuel olarak: http://localhost:8000 adresine gidin

## 📁 Dosya Yapısı

```
web/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── server.py           # Python HTTP sunucusu
├── README.md           # Bu dosya
└── ISIC_Turkey_Redesign_Instructions.md  # Redesign talimatları
```

## ✨ Özellikler

### 🎨 Tasarım
- **ISIC Portugal stilinde** modern tasarım
- **Responsive** (mobil uyumlu) layout
- **ISIC Türkiye renk paleti**: #40b8b8, #feef00, #006666
- **Roboto font** ailesi

### 🖼️ Hero Section
- **5 farklı slider** banner
- **Otomatik geçiş** (5 saniyede bir)
- **Manuel navigasyon** (ok tuşları ve noktalar)
- **Ken Burns efekti** benzeri görsel geçişler

### 🃏 Kart Türleri
- **ISIC**: Uluslararası Öğrenci Kimlik Kartı
- **ITIC**: Uluslararası Öğretmen Kimlik Kartı
- **IYTC**: Uluslararası Gençlik Seyahat Kartı
- **Tab sistemi** ile kolay geçiş

### 📱 Mobil Uyumluluk
- **Hamburger menü** mobil cihazlarda
- **Touch-friendly** butonlar
- **Responsive grid** layout
- **Optimized** görsel boyutları

### 🎯 Etkileşim
- **Smooth scrolling** navigasyon
- **Hover efektleri** butonlarda
- **Loading states** form gönderimlerinde
- **Keyboard navigation** slider için

## 🌐 Canlı Demo

Website şu anda yerel sunucuda çalışıyor:
- **URL**: http://localhost:8000
- **Port**: 8000
- **Durum**: Aktif

## 🔧 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #40b8b8;
    --secondary-color: #feef00;
    --dark-color: #006666;
    --light-color: #f5f5f5;
}
```

### İçerik Güncelleme
`index.html` dosyasında metinleri ve görselleri değiştirin.

### Slider Ekleme
Yeni slide eklemek için HTML'de `.slide` div'i ekleyin ve JavaScript'te dots array'ini güncelleyin.

## 📱 Test

### Tarayıcı Uyumluluğu
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Cihaz Testleri
- ✅ Desktop (1200px+)
- ✅ Tablet (960px - 1199px)
- ✅ Mobile Large (640px - 959px)
- ✅ Mobile Small (320px - 639px)

## 🚀 Production'a Geçiş

Bu demo'yu production ortamına geçirmek için:

1. **Hosting**: Netlify, Vercel, GitHub Pages
2. **Domain**: ISIC Türkiye domain'i
3. **SSL**: HTTPS sertifikası
4. **CDN**: Görsel optimizasyonu
5. **Analytics**: Google Analytics kurulumu

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- **Dosya yapısını** kontrol edin
- **Port 8000'in** boş olduğundan emin olun
- **Python sürümünü** kontrol edin (3.6+)

## 📄 Lisans

Bu proje ISIC Türkiye için geliştirilmiştir.

---

**Not**: Bu demo, ISIC Portugal websitesi stilinde tasarlanmıştır ve orijinal ISIC Türkiye websitesinin yerini almak üzere geliştirilmiştir.

# Webpage Project Deployment Guide / Webpage Projesi Kurulum Kılavuzu

## English

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- A GoDaddy hosting account with cPanel access

### Local Development
1. Clone the repository
```bash
git clone [your-repository-url]
cd project
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

### Deployment to GoDaddy

1. Build your project
- Run `npm run build` or `yarn build`
- This will create a `dist` folder with the production build

2. Access cPanel
- Log in to your GoDaddy account
- Go to cPanel
- Find the File Manager tool

3. Upload Files
- Navigate to the `public_html` directory in File Manager
- Upload all files from your local `dist` folder to this directory

4. Configure Domain
- If you haven't already, point your domain to GoDaddy's nameservers
- Wait for DNS propagation (may take up to 24-48 hours)

5. Configure .htaccess
Create or edit the .htaccess file in your public_html directory with the following content:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Türkçe

### Gereksinimler
- Node.js (v16 veya üstü)
- npm veya yarn paket yöneticisi
- cPanel erişimi olan bir GoDaddy hosting hesabı

### Yerel Geliştirme
1. Depoyu klonlayın
```bash
git clone [depo-url'niz]
cd project
```

2. Bağımlılıkları yükleyin
```bash
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın
```bash
npm run dev
# veya
yarn dev
```

4. Üretim için derleyin
```bash
npm run build
# veya
yarn build
```

### GoDaddy'de Yayınlama

1. Projeyi derleyin
- `npm run build` veya `yarn build` komutunu çalıştırın
- Bu işlem `dist` klasöründe üretim sürümünü oluşturacak

2. cPanel'e erişin
- GoDaddy hesabınıza giriş yapın
- cPanel'e gidin
- Dosya Yöneticisi aracını bulun

3. Dosyaları yükleyin
- Dosya Yöneticisi'nde `public_html` dizinine gidin
- Yerel `dist` klasöründeki tüm dosyaları bu dizine yükleyin

4. Alan adını yapılandırın
- Henüz yapmadıysanız, alan adınızı GoDaddy'nin isim sunucularına yönlendirin
- DNS yayılmasını bekleyin (24-48 saat sürebilir)

5. .htaccess dosyasını yapılandırın
public_html dizininde .htaccess dosyası oluşturun veya düzenleyin ve içeriğini şu şekilde ayarlayın:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Sorun Giderme
- Eğer sayfalar doğru yüklenmiyor ise .htaccess dosyasının doğru yüklendiğinden emin olun
- Statik dosyaların yolları ile ilgili sorun yaşıyorsanız, vite.config.ts dosyasındaki base URL ayarını kontrol edin
- 404 hatası alıyorsanız, tüm dosyaların doğru konuma yüklendiğinden emin olun
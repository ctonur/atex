# Webpage Project Deployment Guide

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

## Azure App Service Deployment Guide

### Prerequisites
- Node.js v18 LTS or higher
- Azure CLI installed
- An Azure account
- Visual Studio Code with Azure Tools extension (optional but recommended)

### Local Testing for Azure

1. Install dependencies and build
```bash
npm install
npm run build
```

2. Test production build locally
```bash
npm run preview
```
Visit http://localhost:5177 to verify the application works as expected.

### Azure Configuration

1. Create a new Azure App Service:
   - Go to Azure Portal (https://portal.azure.com)
   - Create a new Web App
   - Select the following settings:
     - Runtime stack: Node 18 LTS
     - Operating System: Linux
     - Region: Choose the closest to your users
     - Pricing Plan: B1 or higher recommended

2. Configure deployment settings:
   - In Azure Portal, go to your App Service
   - Under Settings > Configuration, add these Application settings:
     ```
     SCM_DO_BUILD_DURING_DEPLOYMENT=true
     NODE_VERSION=18-lts
     ```

3. Configure build settings by creating an Azure App Service build file:
   Create a new file `.azure/config.yaml` in your project:
   ```yaml
   language: node
   nodejs:
     - src: build
       dest: /home/site/wwwroot
   build:
     - npm install
     - npm run build
   post_build:
     - cp .htaccess dist/
   artifacts:
     - location: dist
       name: dist
   ```

### Deployment Methods

#### Method 1: Using Azure CLI

1. Login to Azure:
```bash
az login
```

2. Deploy to Azure App Service:
```bash
az webapp up --name <your-app-name> --resource-group <your-resource-group> --runtime "NODE:18-lts" --sku B1
```

#### Method 2: Using Visual Studio Code

1. Install Azure Tools extension in VS Code
2. Sign in to Azure through VS Code
3. Right-click on the project folder
4. Select "Deploy to Web App"
5. Follow the prompts to select or create a new web app

#### Method 3: Using GitHub Actions (Recommended)

1. In Azure Portal:
   - Go to your App Service
   - Under Settings > Configuration
   - Add GitHub Actions deployment configuration

2. In your GitHub repository:
   - Go to Settings > Secrets
   - Add these secrets:
     - AZURE_WEBAPP_NAME: Your app service name
     - AZURE_WEBAPP_PUBLISH_PROFILE: Your publish profile from Azure

3. Create GitHub Actions workflow:
   Create `.github/workflows/azure-deploy.yml`:
   ```yaml
   name: Deploy to Azure
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to Azure
           uses: azure/webapps-deploy@v2
           with:
             app-name: ${{ secrets.AZURE_WEBAPP_NAME }}
             publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
             package: ./dist
   ```

### Troubleshooting

1. If the site shows a 404 error:
   - Verify that the web.config file is present in your dist folder
   - Check if the build process completed successfully
   - Review App Service logs in Azure Portal

2. If static assets are not loading:
   - Check if the base URL in vite.config.ts is configured correctly
   - Verify that all assets are being copied to the dist folder

3. If the build fails:
   - Check Node.js version in Azure App Service configuration
   - Review deployment logs in Azure Portal
   - Verify all dependencies are listed in package.json

### Post-Deployment Verification

1. Visit your Azure App Service URL (https://your-app-name.azurewebsites.net)
2. Test all routes and functionality
3. Check if all static assets are loading correctly
4. Verify that client-side routing works properly

### Important Notes

- Always use production builds for deployment
- Configure environment variables in Azure App Service Configuration
- Enable HTTPS only in production
- Set up custom domains if needed
- Configure SSL certificates for custom domains
- Set up monitoring and logging

### Useful Azure CLI Commands

```bash
# List all web apps
az webapp list

# Get web app details
az webapp show --name <app-name> --resource-group <resource-group>

# Start/Stop web app
az webapp start --name <app-name> --resource-group <resource-group>
az webapp stop --name <app-name> --resource-group <resource-group>

# View logs
az webapp log tail --name <app-name> --resource-group <resource-group>
```
# Markdown Görüntüleyici

Bu proje, markdown dosyalarını web üzerinden görüntülemek ve yönetmek için geliştirilmiş bir uygulamadır. Kullanıcı dostu arayüzü ve gelişmiş özellikleriyle, markdown dosyalarınızı kolayca incelemenizi ve düzenlemenizi sağlar.

## Özellikler

- **Markdown Dosya Listesi**: Tüm markdown dosyalarınızı sol panelde listeleyerek kolay erişim sağlar.
- **Canlı Önizleme**: Seçilen markdown dosyasının anında render edilmiş halini görüntüler.
- **Sözdizimi Vurgulama**: Kod blokları için otomatik sözdizimi vurgulama özelliği.
- **Tema Değiştirme**: Koyu ve açık tema arasında geçiş yapabilme imkanı.
- **Responsive Tasarım**: Mobil cihazlar dahil her ekran boyutuna uyumlu arayüz.
- **URL ile Paylaşım**: Belirli bir dosyayı doğrudan URL üzerinden açabilme ve paylaşabilme.
- **Otomatik Güncelleme Kontrolü**: Açık olan dosyanın güncellemelerini periyodik olarak kontrol eder ve kullanıcıya bildirim gösterir.

## Kurulum

1. Repo'yu klonlayın:
   ```
   git clone https://github.com/kullaniciadi/markdown-goruntleyici.git
   ```

2. Proje dizinine gidin:
   ```
   cd markdown-goruntleyici
   ```

3. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```

4. Uygulamayı başlatın:
   ```
   node server.js
   ```

5. Tarayıcınızda `http://localhost:4200` adresine giderek uygulamayı kullanmaya başlayın.

## Kullanım

1. Sol paneldeki dosya listesinden bir markdown dosyası seçin.
2. Seçilen dosyanın içeriği sağ panelde görüntülenecektir.
3. Tema değiştirme butonuyla koyu ve açık tema arasında geçiş yapabilirsiniz.
4. Dosya güncellendiğinde, sayfanın üst kısmında bir bildirim göreceksiniz. Bildirimdeki linke tıklayarak içeriği yenileyebilirsiniz.

## Proje Yapısı

- `server.js`: Express sunucusunu ve API endpoint'lerini içerir.
- `public/`: Frontend dosyalarını içeren klasör.
  - `index.html`: Ana HTML dosyası.
- `markdown_files/`: Markdown dosyalarının bulunduğu klasör.

## Katkıda Bulunma

Projeye katkıda bulunmak istiyorsanız, lütfen bir Pull Request açın. Büyük değişiklikler için, önce bir konu açarak değişikliği tartışmaya açmanızı rica ederiz.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

## İletişim

Sorularınız veya önerileriniz için lütfen bir [GitHub konusu açın](https://github.com/kullaniciadi/markdown-goruntleyici/issues).
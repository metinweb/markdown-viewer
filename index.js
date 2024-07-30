const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4200;

app.use(cors());
app.use(express.static('public'))

// Markdown dosyalarının bulunduğu klasör
const MARKDOWN_DIR = './markdown_files';

// Markdown dosyasından başlığı çıkaran fonksiyon
async function extractTitle(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const lines = content.split('\n');
        for (const line of lines) {
            // İlk '#' ile başlayan satırı bul
            if (line.startsWith('#')) {
                // Başlığı döndür (# işaretini ve baştaki/sondaki boşlukları kaldırarak)
                return line.replace(/^#+\s*/, '').trim();
            }
        }
        // Eğer başlık bulunamazsa dosya adını kullan
        return path.basename(filePath, '.md');
    } catch (error) {
        console.error(`Başlık çıkarılırken hata oluştu: ${filePath}`, error);
        return path.basename(filePath, '.md');
    }
}

// Dosya listesini al
app.get('/files', async (req, res) => {
    try {
        const files = await fs.readdir(MARKDOWN_DIR);
        const markdownFiles = files.filter(file => path.extname(file).toLowerCase() === '.md');
        
        const fileDetails = await Promise.all(markdownFiles.map(async (file) => {
            const filePath = path.join(MARKDOWN_DIR, file);
            const title = await extractTitle(filePath);
            return {
                filename: file,
                title: title
            };
        }));
        
        res.json(fileDetails);
    } catch (error) {
        res.status(500).json({ error: 'Dosya listesi alınamadı' });
    }
});

// Dosya içeriğini al
app.get('/file/:filename', async (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(MARKDOWN_DIR, filename);

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        res.send(content);
    } catch (error) {
        res.status(404).json({ error: 'Dosya bulunamadı' });
    }
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
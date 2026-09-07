const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const WISHES_FILE = path.join(__dirname, 'wishes.json');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    console.log(`[${req.method}] ${req.url}`);

    // API: Ghi lời chúc mới vào file wishes.json
    if (req.method === 'POST' && req.url === '/api/wishes') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const newWish = JSON.parse(body);
                
                // Đọc file JSON hiện tại
                fs.readFile(WISHES_FILE, 'utf8', (err, data) => {
                    let wishes = [];
                    if (!err && data) {
                        try { wishes = JSON.parse(data); } catch (e) {}
                    }
                    
                    // Thêm lời chúc mới
                    wishes.push(newWish.text);
                    
                    // Ghi lại vào file JSON
                    fs.writeFile(WISHES_FILE, JSON.stringify(wishes, null, 4), 'utf8', (err) => {
                        if (err) {
                            res.writeHead(500);
                            res.end(JSON.stringify({ success: false, message: 'Lỗi ghi file' }));
                            return;
                        }
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true }));
                    });
                });
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Dữ liệu không hợp lệ' }));
            }
        });
        return;
    }

    // Serve static files (HTML, CSS, JS, Images, JSON)
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    
    // Loại bỏ query string (ví dụ: style.css?v=1)
    filePath = filePath.split('?')[0];

    const extname = path.extname(filePath);
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n======================================`);
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`Mở trình duyệt và truy cập link trên để xem web!`);
    console.log(`Mọi lời chúc sẽ được lưu vào file: wishes.json`);
    console.log(`======================================\n`);
});

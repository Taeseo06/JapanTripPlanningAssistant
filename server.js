import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// 환경 변수 로드
dotenv.config();

const app = express();
const port = 3000;

// CORS 허용 설정
app.use(cors());

// static 파일 서비스 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Firebase 설정 정보 제공 엔드포인트
app.get('/firebase-config', (req, res) => {
    res.json({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';


// 환경 변수 로드
dotenv.config();

const app = express();
const port = 3000;

// CORS 허용 설정
// app.use(cors());
app.use(cors({
    origin: '*', // 모든 도메인 허용
    methods: ['GET', 'POST'], // 허용할 메소드
}));


// 정적 파일 제공을 위해 public 디렉토리 설정
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, 'public')));



// Firebase 설정 정보 제공 엔드포인트
app.get('/firebase-config', (req, res) => {
    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
    };

    console.log("Firebase Config Requested:", firebaseConfig); // 로그 추가 - fibaseConfig 페이지 응답 확인

    if (firebaseConfig.apiKey) {
        res.json(firebaseConfig);
    } else {
        res.status(404).send('Firebase configuration not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
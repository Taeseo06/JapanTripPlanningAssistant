import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

// 환경 변수 로드
dotenv.config();

const app = express();
const port = 3000;

// CORS 허용 설정
app.use(cors());

// 정적 파일 제공을 위해 public 디렉토리 설정
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}/public`);
});
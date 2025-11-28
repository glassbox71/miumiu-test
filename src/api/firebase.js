//TODO firebase API
//sdk 초기화
import { initializeApp } from 'firebase/app';
// GoogleAuthProvider
// → 구글 로그인용 인증 공급자 객체입니다.
// → 이걸 사용해서 구글 계정으로 로그인할 수 있어요.
// getAuth
// → Firebase의 인증(auth) 기능을 가져오는 함수입니다.
// → 로그인/회원가입, 로그아웃, 사용자 상태 체크 등을 할 수 있어요.
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// Firebase의 **Cloud Firestore(실시간 NoSQL DB)**를 사용하는 함수입니다.
// 앱에서 데이터를 저장하고 불러오고 수정할 수 있게 해줍니다.
import { getFirestore } from 'firebase/firestore';
// Firebase의 Storage(파일 저장소) 기능을 가져옵니다.
// 사진, 문서, 동영상 등 파일 업로드/다운로드 기능을 구현할 때 사용합니다.
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

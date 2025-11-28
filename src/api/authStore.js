import { signInWithPopup } from 'firebase/auth';
import { create } from 'zustand';
import { auth, db, googleAuthProvider } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { persist } from 'zustand/middleware';

//TODO 구글 로그인 API
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (userInfo) => set({ user: userInfo }),
      logout: () => {
        set({ user: null });
      },

      onGoogleLogin: async () => {
        try {
          // 구글 로그인 창을 띄워서 사용자로부터 로그인하게 하고 그 결과값 저장하기
          const result = await signInWithPopup(auth, googleAuthProvider);
          console.log('로그인 정보', result);
          // 로그인한 사람의 정보를 가져오기
          const user = result.user;
          // 그 정보를 데이터 베이스에 저장하기
          const userDate = doc(db, 'users', user.uid);
          // 이미 회원인지 아닌지 체크하기
          const userDoc = await getDoc(userDate);

          if (!userDoc.exists()) {
            const userInfo = {
              uid: user.uid || '',
              email: user.email || '',
              displayName: user.displayName || '익명',
              photoURL: user.photoURL || '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(userDate, userInfo);
            set({ user: userInfo });
          } else {
            set({ user: userDoc.data() });
          }
          // 데이터가 없으면 새로운 정보로 회원가입을 하고, 있으면 정보를 불러오기
        } catch (err) {
          console.error('Firestore 에러:', err.code, err.message);
          alert(err.message);
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

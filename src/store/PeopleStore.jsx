import create from 'zustand';

// 사람 더미 데이터
const initialPeople = [
  { nickname: "파송탁", gender: "Female", email: 'sh1220@hanyang.ac.kr',
     style: "Casual", height: 165, weight: 55 },

  { nickname: "Sunny", gender: "Male", email: 'seond0112@naver.com',
     style: "Sporty", height: 180, weight: 75 },

  { nickname: "Blossom", gender: "Female", email: 'sh1220@hanyang.ac.kr',
     style: "Elegant", height: 170, weight: 60 }
];

// Zustand로 스토어 생성
const usePeopleStore = create((set) => ({
  people: initialPeople,
  loggedInUser: null,

  setPeople: (newPeople) => set({ people: newPeople }),
   
  // 새로운 사용자 정보를 저장하는 함수
  setLoggedInUser: (user) => set({ loggedInUser: user }),
    // 사용자 정보를 업데이트하는 함수
    updateUser: (updatedUser) =>
      set((state) => ({
        people: state.people.map((person) =>
          person.email === updatedUser.email ? updatedUser : person
        ),
        loggedInUser: updatedUser, // 업데이트된 정보를 현재 로그인된 사용자로 설정
      })),
}));

export default usePeopleStore;
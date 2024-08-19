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
  setLoggedInUser: (user) => set({ loggedInUser: user })
}));

export default usePeopleStore;
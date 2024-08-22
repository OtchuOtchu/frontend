import { create } from 'zustand';

const useDateStore = create((set) => ({
    selectedDate: 'today', // 기본 선택 날짜
    setSelectedDate: (date) => set({ selectedDate: date }), // 날짜 변경
}));

export default useDateStore;
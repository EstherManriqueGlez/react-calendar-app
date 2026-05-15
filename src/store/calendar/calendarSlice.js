import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  title: 'Cumpleaños del jefe',
  notes: 'Comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Remy',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload,
      );
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addEvent, removeEvent, setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;

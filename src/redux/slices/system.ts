import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    dark: false,
    brightness: 80
  },
  reducers: {}
});

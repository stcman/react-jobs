import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobList: []
  },
  reducers: {
    setJobList: (state, action) => {
      state.jobList = action.payload;
    },
    addNewjob: (state, action) => {
      state.jobList.push(action.payload);
    },
    deletejob: (state, action) => {
      state.jobList = state.jobList.filter(r => r.id !== action.payload.id);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setJobList, addNewJob, deleteJob } = jobSlice.actions;

export default jobSlice.reducer;

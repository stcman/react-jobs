import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobsSlice";

export default configureStore({
  reducer: {
    jobList: jobReducer
  }
});

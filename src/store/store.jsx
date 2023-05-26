import {configureStore} from "@reduxjs/toolkit";
import counterSlice  from "../reduxslice/counterSlice";
 export const store = configureStore({
    reducer:{
      counter:counterSlice,
    }
 })
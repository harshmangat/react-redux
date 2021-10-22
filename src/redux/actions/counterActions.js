import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = createAction("COUNTER.INCREMENT");

export const DECREMENT = createAction("COUNTER.DECREMENT");

export const ADD_COUNT = createAction("COUNTER.ADD_COUNT");

export const RESET = createAction('COUNTER.RESET');
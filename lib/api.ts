import axios from "axios";
import { substackRSS } from "./constants";

export const api = axios.create({
  baseURL: substackRSS,
  timeout: 10000,
});

export const formApi = axios.create({
  baseURL: "https://formspree.io/f/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

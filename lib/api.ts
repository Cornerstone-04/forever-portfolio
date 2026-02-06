import axios from "axios";
import { substackRSS } from "./constants";

export const api = axios.create({
  baseURL: substackRSS,
  timeout: 10000,
});

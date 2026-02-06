import axios from "axios";
import { substackSSR } from "./constants";

export const api = axios.create({
  baseURL: substackSSR,
  timeout: 10000,
});


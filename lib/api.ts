import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUBSTACK_RSS,
  timeout: 10000,
});


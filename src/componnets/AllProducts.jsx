import axios from "axios";
import crypto from "crypto-js";
import qs from "qs";

const CONSUMER_KEY = "ck_fd43ca6f25c6ab4a3508615320dc0648f9d80149";
const CONSUMER_SECRET = "cs_82c0a014b1177e19f5699f91cb21115c28aff2f7";
const PROJECT_URL = "https://wp-react-store.aayurfarms.com/";
const API_URL = PROJECT_URL + "wp-json/wc/v3";

const api = axios.create({
  baseURL: API_URL,
});

const generateOAuthSignature = (url) => {
    // Generate a random nonce using Web Crypto API
    const nonceArray = new Uint8Array(16);
    window.crypto.getRandomValues(nonceArray);
    const nonce = Array.from(nonceArray, (byte) => byte.toString(16).padStart(2, "0")).join("");
  
    const timestamp = Math.floor(new Date().getTime() / 1000);
  
    const params = {
      oauth_consumer_key: CONSUMER_KEY,
      oauth_nonce: nonce,
      oauth_signature_method: "HMAC-SHA256",
      oauth_timestamp: timestamp,
      oauth_version: "1.0",
    };
  
    const sortedParams = qs.stringify(params, { sort: (a, b) => a.localeCompare(b) });
    const baseString = `GET&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
    const signingKey = `${CONSUMER_SECRET}&`;
  
    // Use CryptoJS for HMAC-SHA256 signing
    const signature = crypto.HmacSHA256(baseString, signingKey).toString(crypto.enc.Base64);
  
    return { ...params, oauth_signature: signature };
  };
  

export const getAllProducts = async () => {
  try {
    const url = `${API_URL}/products`;
    const oauthParams = generateOAuthSignature(url);
    const response = await api.get("/products", { params: oauthParams });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

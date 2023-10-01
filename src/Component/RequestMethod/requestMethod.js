
import axios from 'axios';
const  BASA_URL="https://ecommer-backend.vercel.app/api";
const TOKEN='';
export const publicRequest=axios.create({
    baseURL:BASA_URL,
})
export const userRequest=axios.create({
    baseURL:BASA_URL,
    header:{token:"Bearer"}
})
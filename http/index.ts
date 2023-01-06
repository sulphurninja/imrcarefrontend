import axios from 'axios'

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    }
});

//Categories

export const fetchCategories = async (queriString: string)  => api.get(`/api/categories?${queriString}`)

// Mobiles

export const fetchMobiles = async (queryString: string) => api.get(`/api/mobiles?${queryString}`)

export const fetchMobilesBySlug = async(queryString:string)=> api.get(`/api/mobiles?${queryString}`)
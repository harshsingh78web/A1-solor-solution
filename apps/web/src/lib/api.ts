import { supabase } from "./supabase";
export async function api<T>(path:string,options:RequestInit={}):Promise<T>{
 const {data}=await supabase.auth.getSession();const token=data.session?.access_token;
 const apiBase=import.meta.env.VITE_API_URL??(import.meta.env.DEV?"http://localhost:5000/api/v1":"/api/v1");
 const response=await fetch(`${apiBase}${path}`,{...options,headers:{"Content-Type":"application/json",...(token?{Authorization:`Bearer ${token}`} :{}),...options.headers}});
 const body=await response.json() as {success:boolean;message:string;data:T};
 if(!response.ok)throw new Error(body.message);return body.data;
}

import { supabase } from "./supabase";
export async function api<T>(path:string,options:RequestInit={}):Promise<T>{
 const {data}=await supabase.auth.getSession();const token=data.session?.access_token;
 const response=await fetch(`${import.meta.env.VITE_API_URL??"http://localhost:5000/api/v1"}${path}`,{...options,headers:{"Content-Type":"application/json",...(token?{Authorization:`Bearer ${token}`} :{}),...options.headers}});
 const body=await response.json() as {success:boolean;message:string;data:T};
 if(!response.ok)throw new Error(body.message);return body.data;
}

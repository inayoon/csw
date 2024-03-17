export async function uploadImage(file:any){
  const data = new FormData();
  data.append ('file', file);
  data.append ("upload_preset", import.meta.env.VITE_C_PRESET);
  return fetch(import.meta.env.VITE_C_URL, {
    method:'POST',
    body:data
  }).then((res)=>res.json())
    .then((data)=>data.url);
}
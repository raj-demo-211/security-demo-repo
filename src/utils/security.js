export const parse=(s)=>Object.assign({},JSON.parse(s));
export const regex=(i)=>{
  if(typeof i !== 'string') return false;
  if(i.length > 1000) return false;
  return /^a+$/.test(i);
};
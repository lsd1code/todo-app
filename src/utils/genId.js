export const genId = (len = 10) => {
  const vals = '0123456789abcdefghijklmnoprstuvwxyz'
  let id = ''
  
  // eslint-disable-next-line no-unused-vars
  for(const _ of [...Array(len)]) {
    const idx = Math.floor(Math.random() * vals.length)
    id += vals[idx] 
  }

  return id
} 

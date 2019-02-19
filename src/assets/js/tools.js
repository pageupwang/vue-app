//创建a链接跳转
export const createA=(url,target)=>{
  const elink = document.createElement('a')
  elink.style.display = 'none'
  elink.href = url
  elink.target = '_blank'
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)
}

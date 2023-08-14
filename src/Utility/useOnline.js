const { useState } = require("react")

const useOnline = () => {

  const [online , setOnline] = useState(true)
 
    window.addEventListener("offline",()=>{
      setOnline(false)
    })

    window.addEventListener("online", ()=>{
      setOnline(true)
    })

    return online
  
}

export default useOnline;
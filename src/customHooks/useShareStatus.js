import { useEffect, useState } from "react"

const useShareStatus = () => {
    const [status, setStatus] = useState('online')

 useEffect(() => {
    shareStatus()
 }, []);

    const shareStatus = async () => {
      window.addEventListener("online", ()=>{
        setStatus('online')
      })

      window.addEventListener('offline',() => {
        setStatus('offline')
      })
    }

    return status;
}

export default useShareStatus
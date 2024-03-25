

import React,{ useEffect,useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function TopLoading() {
  const [progress, setProgress] = useState()

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100)
    }, 500);
  
  }, [setProgress])
  return (
   <>
    <LoadingBar
        color='#17cf97'
        progress={progress}
        onLoaderFinished={() => setProgress(0)
      
        }
      />
   </>
  )
}

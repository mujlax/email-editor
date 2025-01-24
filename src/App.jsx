import styles from "./App.module.scss"
import { Testcomponent } from './Testcomponent'
import { useState, useEffect, useRef } from 'react';

export function App() {

  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffects",
    description: "hello mazafaka",
    buttonText: 'click'
  })



  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails(prev => ({ ...prev, isLoading: false }))
    }, 5000)


    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    console.log('title has changed')
    setDetails(prev => ({
      ...prev,
      description: 'title has changed'
    }))
  }, [details.title])

  const imageRef = useRef(null)

  const onClick = () => {
      if(!imageRef.current) return

      imageRef.current.style.borderRadius = '20px'
  }

  const handleLoading = () => {
    setDetails(prev => ({...prev, isLoading: !prev.isLoading}))
  }

  return <div className={styles.layout}>
    <h1>Test</h1>
    <img ref={imageRef} src='./sheets.webp' width={300} />
    <br />
    <button onClick={onClick}>Change Image</button>
    {details.isLoading && (<p>Loading...</p>)}

<Testcomponent details={details} handleLoading={handleLoading}/>


  </div>
}
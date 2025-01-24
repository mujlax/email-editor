import styles from "./App.module.scss"
import { Testcomponent } from './Testcomponent'
import { useState, useEffect } from 'react';

export function App() {

  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffects",
    description: "hello mazafaka",
    buttonText: 'click'
  })

  const imageRef = useRef(null)

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

  return <div className={styles.layout}>
    <h1>Test</h1>
    <img ref={imageRef} src='./sheets.webp' width={100} />
    <button></button>
    {details.isLoading ? <p>Loading...</p> : (
      <Testcomponent details={details} setDetails={setDetails} />
    )}


  </div>
}
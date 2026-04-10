import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {FirstSteps} from './FirstSteps'
import { MyAwesomeApp } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hola mundo!</h1>
    <FirstSteps />
    <MyAwesomeApp />
  </StrictMode>,
)

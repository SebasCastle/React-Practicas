import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {Toaster} from 'sonner';


// import {HooksApp} from './hooksApp';
// import {TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import FocousScreen from './04-useRef/FocousScreen'
// import { TasksApp } from './useReducer/TaskApp'
import { ScrambleWords } from './05-Reducer/ScrambleWords'
// import MemoHook from './06-memos/MemoHook'
// import MemoCounter from './06-memos/MemoCounter'
// import { InstagramApp } from './07-useOptimistic/InstagramApp'
// import { Clientinformation } from './08-use-suspense/Clientinformation';
// import { getUsrAcction } from './08-use-suspense/api/get-user.action';
// import { ProfessionalApp } from './09-useContext/ProfessionalApp';



import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    {/* <PokemonPage/> */}
    {/* <FocousScreen/> */}
    {/* <TasksApp/> */}
    <ScrambleWords/>
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagramApp/> */}
    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col items-center'>
        <h1 className='text-2xl text-white'>Cargando ....</h1>
      </div>
    }>
      <Clientinformation getUser={getUsrAcction(100)}/>
    </Suspense> */}
    {/* <ProfessionalApp/> */}
  </StrictMode>
)

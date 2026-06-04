import { useEffect, useState } from "react";
const colors ={
    red:'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animate-pulse',
    green:'bg-green-500 animate-pulse',
    blue:'bg-blue-500 animate-pulse',
}

// type TrafficLightColor = 'red'| 'yellow'| 'green'; 
type TrafficLightColor = keyof typeof colors; 

export const useTrafficLight = () =>{

        const [light, setLight] = useState<TrafficLightColor>('red');
    const [countDown, SetCountdown] = useState(5);


  useEffect(()=>{
    if(countDown === 0) return;

    const intervalId = setInterval(() => {
      SetCountdown((prev)=>prev -1);
    }, 1000);

      return ()=>{
        clearInterval(intervalId);
      }

  },[countDown])

  useEffect(()=>{
    if(countDown > 0) return;

    SetCountdown(5);
          if(light==='red')return setLight('green');
          if(light==='yellow')return setLight('red');
          if(light==='green')return setLight('yellow');
  },[countDown, light])


    const handleColorChange = (color:TrafficLightColor) =>{
        setLight((prev) =>{
            return color;
        })
    }

        return {
            //props
            countDown,
            light,
            colors,

            //computed
            progress: (countDown/5) *100,
            greenLight: light ==='green' ?colors.green :'bg-gray-500',
            redLight: light ==='red' ?colors.red :'bg-gray-500',
            yellowLight: light ==='yellow' ?colors.yellow :'bg-gray-500',
            //methods


            
        }
}

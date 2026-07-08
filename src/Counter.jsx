import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import voice from './audio/wrestlingHorn.mp3'


const Counter = (props) => {
    const [second,setSecond] = useState(0);
    const [second2,setSecond2] = useState(0);
    const [min,setMin] = useState(0)
    const [stoping,setStoping] = useState(0);
    const [onStart,setOnStart] = useState(false)
    const [begin,setBegin] = useState(0)
    const [begin2,setBegin2] = useState(0);
    const [round2,setRound2] = useState(false);
    const [play] = useSound(voice)


    const na9isSecond =()=>{
        setSecond(prev => prev - 1);
        if(second < 0){
          setSecond(9)
          setSecond2(prev => prev - 1)
        }
        if(second2 < 0){
          setSecond2(5)
          setMin(prev => prev - 1);
        }
      }

      const za2idSecond =()=>{
        setSecond(prev => prev + 1);
        if(second >= 9){
          setSecond(0)
          setSecond2(prev => prev + 1)
        }
        if(second2 > 5){
          setSecond2(0)
          setMin(prev => prev + 1)
       
        }
      }

      useEffect(()=>{
        if (begin != 0) {
            za2idSecond();
        }
      },[props.plus])

      useEffect(()=>{
        if (begin != 0) {
            na9isSecond();
        }
      },[props.mine])

    const reset = ()=>{
        setSecond(0)
        setSecond2(0)
        setRound2(false)
        setMin(props.ref1);
        setStoping(props.ref2)
        setBegin(0)
        setBegin2(0)
    }

    useEffect(()=>{
        setMin(props.ref1);
        setStoping(props.ref2)
    },[props.ref1,props.ref2])

    useEffect(()=>{
        setOnStart(props.timeOn)
    },[props.timeOn])

    useEffect(()=>{
        if (props.reset) {
        setSecond(0)
        setSecond2(0)
        setRound2(false)
        setMin(props.ref1);
        setStoping(props.ref2)
        setBegin(0)
        setBegin2(0)
        props.setReset(false)
        }
    },[props.reset]);
    
    useEffect(()=>{
        let counter = null;
        if (onStart) {
            counter = setInterval(()=>{
                setBegin(1);
                setSecond(prev => prev  - 1);
            },1000);
        }  
        return ()=> clearInterval(counter) 
    },[onStart]);

    useEffect(()=>{
        if (begin == 1 && second < 0) {
            setSecond(9);
            setSecond2(prev => prev - 1);
        }
    },[second,begin]);

    useEffect(()=>{
        if (begin == 1 && second2 < 0) {
            setSecond2(5);
            setMin(prev => prev - 1);
        }
    },[second2,begin]);

    useEffect(()=>{
        if (min === stoping && second === 0 && second2 === 0 && begin == 1 && begin2 == 0) {
            setMin(0);
            setSecond2(3)
            setSecond(0)
            setBegin(1)
            play();
            props.stop();
            setTimeout(()=>{
              props.start();
            },3500)
        }
    },[min,begin,second,second2,begin2])

    useEffect(()=>{
        if (begin == 1 && second === 0 && second2 === 0 && min === 0) {
            props.stop();
            setBegin2(1)
        }
    },[begin,second,second2,min]);

    useEffect(()=>{
        if (begin2 == 1) {
            setMin(stoping);
            setSecond(0)
            setSecond2(0)
        }
    },[begin2]);

    useEffect(()=>{
        if (begin2 == 1 && second == 0 && second2 == 0 && min == 0) {
            props.stop();
            setRound2(true)
        }
    },[min,second,second2,begin2]);

    useEffect(()=>{
        if (begin2 == 1 && second == 0 && second2 == 0 && min == 0 && round2) {
            props.setEndCounter(true);
        }
    },[min,second,second2,begin2,round2]);

  return (
    <div style={{color:"white"}}>
      {0}{min}:{second2}{second}
      
    </div>
  )
}

export default Counter

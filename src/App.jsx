import './App.css';
import {useRef, useState} from 'react';
import { useEffect } from 'react';
import img1 from './mochaffaaPic.jpeg'
import img2 from './logoMaroc.jpg'
import img3 from './united2.png'
import voice from './audio/wrestlingHorn.mp3'
import useSound from 'use-sound';
import Counter from './Counter';
import db from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';



function App() {
  const [ref1,setRef1] = useState(0)
  const [ref2,setRef2] = useState(0)
  const [timeOn,setTimeOn] = useState(false)
  const [avOn,setAvOn] = useState(false)
  const [avOn2,setAvOn2] = useState(false)
  const [second,setSecond] = useState(0)
  const [second2,setSecond2] = useState(0)
  const [min,setMin] = useState(0)
  const [min2,setMin2] = useState(false)
  const [tracker,setTracker] = useState(0)
  const [redPoint,setRedPoint] = useState(0)
  const [bluePoint,setBluePoint] = useState(0)
  const [displaying,setDisplaying] = useState("none")
  const [displayCounter,setDisplayCounter] = useState("none");
  const [displayCounter2,setDisplayCounter2] = useState("none");
  const [direction,setDirection] = useState(true)
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [nameInp,setNameInp] = useState()
  const [passwordInp,setPasswordInp] = useState();
  const[caty,setCaty] = useState(null);
  const [play] = useSound(voice);

  const [nameR,setNameR] = useState("")
  const [nameB,setNameB] = useState("")
  const [eqpR,setEqpR] = useState("");
  const [eqpB,setEqpB] = useState("");

  const [endCounter,setEndCounter] = useState(false)


// kist3lm 3la lw9t dyl cadet / junior / senior wch 4min ola 6min
  useEffect(()=>{
    setMin(ref1)
  },[ref1,ref2])

  useEffect(()=>{
    if(min<0){
      setMin(0)
    }
  },[min])
  useEffect(()=>{
    if(redPoint < 0){
      setRedPoint(0)
    }
    if(bluePoint < 0){
      setBluePoint(0)
    }
  },[redPoint,bluePoint]);

const [sec,setSec] = useState(30)
const [secNo,setSecNo] = useState(0)
const [sec2,setSec2] = useState(30)
const [sec2No,setSec2No] = useState(0)

const [handlePlus,setHandlePlus] = useState(false)
const [handleMine,setHandleMine] = useState(false)
const za2idSecond =()=>{
  setHandlePlus(!handlePlus)
}
const na9isSecond =()=>{
  setHandleMine(!handleMine)
}
const start2=()=>{
  if (displayCounter == "none") {
    setDisplayCounter("flex")
  } else {
    setDisplayCounter("none")
    setAvOn(false)
    setSec(30)
  }
 }

 const [col,setCol] = useState("10px")

  useEffect(()=>{
    var counter2 = null;

    if (avOn) {
      counter2 = setInterval(()=>{
        setSec(sec => sec - 1)
        if (sec <= 0) {
          setAvOn(false)
          setSec(30)
          setDisplayCounter("none")
      }
      },980);

    }

    return ()=> clearInterval(counter2);
    
  },[avOn,sec]);

  useEffect(()=>{
    if (timeOn && displayCounter === "flex") {
      setAvOn(true);
    }else if(!timeOn && displayCounter === "flex"){
      setAvOn(false);
    }
  },[timeOn,displayCounter])


  const [col2,setCol2] = useState("0px")

  const start3=()=>{
    if (displayCounter2 == "none") {
      setDisplayCounter2("flex")
    } else {
      setDisplayCounter2("none")
      setAvOn2(false)
      setSec2(30)
    }
   }
    useEffect(()=>{
      var counter3 = null;
  
      if (avOn2) {
        counter3 = setInterval(()=>{
          setSec2(sec => sec - 1)
          if (sec2 <= 0) {
            setAvOn2(false)
            setSec2(30)
            setDisplayCounter2("none")
        }
        },980);
      }
      return ()=> clearInterval(counter3);
      
    },[avOn2,sec2]);

    useEffect(()=>{
      if (timeOn && displayCounter2 === "flex") {
        setAvOn2(true);
      }else if(!timeOn && displayCounter2 === "flex"){
        setAvOn2(false);
      }
    },[timeOn,displayCounter2])
  
  
  const categorie = {
    p1:"45 kg",
    p2:"48 kg",
    p3:"51 kg",
    p4:"55 kg",
    p5:"60 kg",
    p6:"65 kg",
    p7:"71 kg",
    p8:"80 kg",
    p9:"92 kg",
    p10:"110 kg",
  }
  const categorie2 = {
    p1:"55 kg",
    p2:"60 kg",
    p3:"63 kg",
    p4:"67 kg",
    p5:"72 kg",
    p6:"77 kg",
    p7:"82 kg",
    p8:"87 kg",
    p9:"97 kg",
    p10:"130 kg",
  }
  
  const categorie3 = {
    p1:"45 kg",
    p2:"48 kg",
    p3:"51 kg",
    p4:"55 kg",
    p5:"60 kg",
    p6:"65 kg",
    p7:"71 kg",
    p8:"80 kg",
    p9:"92 kg",
    p10:"110 kg",
  }
  const categorie4 = {
    p1:"57 kg",
    p2:"61 kg",
    p3:"65 kg",
    p4:"70 kg",
    p5:"74 kg",
    p6:"79 kg",
    p7:"86 kg",
    p8:"92 kg",
    p9:"97 kg",
    p10:"125 kg",
  }
  const categorie5 ={
    p1:"40 kg",
    p2:"43 kg",
    p3:"46 kg",
    p4:"49 kg",
    p5:"53 kg",
    p6:"57 kg",
    p7:"61 kg",
    p8:"65 kg",
    p9:"96 kg",
    p10:"73 kg",
  }
  const categorie6 ={
    p1:"50 kg",
    p2:"53 kg",
    p3:"55 kg",
    p4:"57 kg",
    p5:"59 kg",
    p6:"62 kg",
    p7:"65 kg",
    p8:"68 kg",
    p9:"72 kg",
    p10:"76 kg",
  }

  const [cat,setCat] = useState(0)
  const [cat2,setCat2] = useState(0)
  const [val,setVal] = useState("")

  const [av1,setAv1] = useState("black")
  const [av2,setAv2] = useState("black")
  const [av3,setAv3] = useState("black")
  const [av4,setAv4] = useState("black")
  const [av5,setAv5] = useState("black")
  const [av6,setAv6] = useState("black")

  const [avCounter,setAvCounter] = useState(0)
  const [avCounter2,setAvCounter2] = useState(0)

  

  const incR =()=>{
    setAvCounter(avCounter + 1)
  }
  const incB =()=>{
    setAvCounter2(avCounter2 + 1)
  }
  
useEffect(()=>{
  if (avCounter === 0) {
    setAv1("black")
    setAv2("black")
    setAv3("black")
  }if (avCounter == 1) {
    setAv1("yellow")
    setAv2("black")
    setAv3("black")
  }
  if (avCounter == 2) {
    setAv1("yellow")
    setAv2("yellow")
    setAv3("black")
  }
  if (avCounter == 3) {
    setAv1("yellow")
    setAv2("yellow")
    setAv3("yellow")
  }
  if (avCounter == 4) {
    setAvCounter(3)
  }
  if (avCounter < 0) {
    setAvCounter(0)
  }
},[avCounter])

useEffect(()=>{
  if (avCounter2 === 0) {
    setAv4("black")
    setAv5("black")
    setAv6("black")
  }if (avCounter2 == 1) {
    setAv4("yellow")
    setAv5("black")
    setAv6("black")
  }
  if (avCounter2 == 2) {
    setAv4("yellow")
    setAv5("yellow")
    setAv6("black")
  }
  if (avCounter2 == 3) {
    setAv4("yellow")
    setAv5("yellow")
    setAv6("yellow")
  }
  if (avCounter2 == 4) {
    setAvCounter2(3)
  }
  if (avCounter2 < 0) {
    setAvCounter2(0)
  }
},[avCounter2])

const decR=()=>{
    setAvCounter(avCounter - 1)
}
const decB=()=>{
  setAvCounter2(avCounter2 - 1)
}
const [s,setS] = useState(1)

  const start=()=>{
   setTimeOn(true)
  }
  
  const stop=()=>{
    setTimeOn(false)
   }

   const [re,setRe] = useState(false)

   const reset=()=>{
      stop();
      setRe(true)
      setTracker(0)
      setBluePoint(0)
      setRedPoint(0)
      setAvCounter2(0)
      setAvCounter(0)
      setEndCounter(false);
      setS(1)
      setNumI(numInitial)
      setTr(0)
      setWinner(0)
      setPointTheme("")
      setPointTheme2("")
      setPointTheme3("")
      setPointTheme4("")
   }
   const recount =()=>{
     stop();
     setAlert2("inline")
   }
   

const myRef = useRef(null)

const [changer,setChanger] = useState(true)
const [numInitial,setNumInitial] = useState(5)
const [numI,setNumI] = useState(numInitial)
const [tr,setTr] = useState(0)
const [winner,setWinner] = useState(0)
const [time,setTime] = useState(1000);





  const catChanged=(e)=>{
    if (e.target.value === "gr") {
      setCat(1)
      setDisplaying("none")
      setCaty("GR")
    } 
    if (e.target.value === "fs") {
      setCat(2)
      setDisplaying("inline")
      setCaty("MFS")

    }
    if (e.target.value === "ww") {
      setCat(3)
      setDisplaying("inline")
      setCaty("WFS")

    }
  }
  const catChanged2=(e)=>{
    if (e.target.value === "cadet") {
      setCat2(1)
      setRef1(4)
      setRef2(2)
      }
    if (e.target.value === "junior") {
        setCat2(2)
        setRef1(6)
        setRef2(3)
        }
        if (e.target.value === "senior") {
          setCat2(2)
          setRef1(6)
          setRef2(3)
          }
    }
  
    useEffect(()=>{
      if (cat === 1 && cat2 === 1) {
        setVal(categorie)
      }
      if (cat === 1 && cat2 === 2) {
        setVal(categorie2)
      }
      if (cat === 2 && cat2 === 1) {
        setVal(categorie3)
      }
      if (cat === 2 && cat2 === 2) {
        setVal(categorie4)
      }
      if (cat === 3 && cat2 === 1) {
        setVal(categorie5)
      }
      if (cat === 3 && cat2 === 2) {
        setVal(categorie6)
      }
    },[cat,cat2]);
    const [pointTheme,setPointTheme] = useState("");
    const [pointTheme2,setPointTheme2] = useState("");
    const [pointTheme3,setPointTheme3] = useState("");
    const [pointTheme4,setPointTheme4] = useState("");

    const pickWinner=()=>{
      if (redPoint > bluePoint) {
        setPointTheme("white")
        setPointTheme3("black")
      }else if(redPoint < bluePoint){
        setPointTheme2("white")
        setPointTheme4("black")
      }
    }
    const [bb,setBb] = useState(0)
    const [rr,setRr] = useState(0)
    const bWinner=()=>{
      if (bb === 0) {
        setPointTheme2("white")
        setPointTheme4("black")
        setBb(1)
      }
      if (bb === 1) {
        setPointTheme2("")
        setPointTheme4("")
        setBb(0)
      }
    }
    const rWinner=()=>{
      if (rr === 0) {
        setPointTheme("white")
        setPointTheme3("black")
        setRr(1)
      }
      if (rr === 1){
        setPointTheme("")
        setPointTheme3("")
        setRr(0)
      }
    }

    useEffect(()=>{
      if (winner === 2) {
        pickWinner()
      }
    },[winner])


    const getData = async()=>{
      const docRef = doc(db, "log", "login");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setName(docSnap.data()?.name || null); // Set name to null if data.name is undefined
          setPassword(docSnap.data()?.password || null);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    useEffect(() => {
      getData();
    }, []);

    const registerd = async(e) => {
      e.preventDefault();
  
      const updatedDoc = doc(db, "log", "login");

      if (name === nameInp && password === passwordInp) {

        await updateDoc(updatedDoc, {
          reference: true,
        });
        
      } else {
        await updateDoc(updatedDoc, {
          reference: false,
        });
      }
    };
  

    const getData2 = async()=>{
      const docRef = doc(db, "log", "login");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const ref = docSnap.data()?.reference || false; // Set default to false if 'reference' is missing
        setDirection(ref);      
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  
      return () => unsubscribe();
    }
    useEffect(() => {
      getData2(); 
    }, []);

  const logout=()=>{
    setAlert("inline")
    
  }
  const logout2 =()=>{
    setAlert("none")
  }
  const logout3=async()=>{

    const updatedDoc = doc(db, "log", "login");
        await updateDoc(updatedDoc, {
          reference: true,
        }).then(()=>{
          setAlert("none");
          stop();
        })
  }
  const [alert,setAlert] = useState("none");
  const [alert2,setAlert2] = useState("none");


  useEffect(()=>{
    if (endCounter) {
      pickWinner();
    }
  },[endCounter])
  
  return ( 
    <div className="App">
      {direction? (
        <center style={{display:"flex",justifyContent:"center"}}> 
        <div className="platform">
          <center>
            <div className="boardring">
          <center style={{display:"flex",justifyContent:"center"}}>
      <div style={{display:alert,borderRadius:"0 0 20px 20px",float:"center",background:"white",width:"350px",height:"50px",padding:"30px", position:"fixed"}}>
      <h3 style={{marginTop:"-15px"}}>Wanna logout?</h3>
            <button style={{cursor:"pointer",backgroundColor:"red",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid",margin:"5px"}} onClick={logout3}>YES</button>
            <button style={{cursor:"pointer",backgroundColor:"green",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid",margin:"5px"}} onClick={logout2} >NO</button>
      </div>
      <div style={{display:alert2,borderRadius:"0 0 20px 20px",float:"center",background:"white",width:"350px",height:"50px",padding:"30px", position:"fixed",bottom:"0px"}}>
      <div onClick={()=>{setAlert2("none")}} style={{position:"absolute",left:"365px",top:"0",cursor:"pointer"}}>close</div>
            <button style={{cursor:"pointer",backgroundColor:"red",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid",margin:"5px"}} onClick={na9isSecond}>-</button>
            <button style={{cursor:"pointer",backgroundColor:"green",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid",margin:"5px"}} onClick={za2idSecond}>+</button>
      </div>
      </center>
        
          <div className="categories">
          <select name="" id="">
          <option value="">----------</option>
          <option value="">Round 1</option>
          <option value="">Round 2</option>
          <option value="">Round 3</option>
          <option value="">Round 4</option>
          <option value="">Round 5</option>
          <option value="">Repechage</option>
          <option value="">Qualification</option>
          <option value="">1/16 Final</option>
          <option value="">1/8 Final</option> 
          <option value="">1/4 Final</option>
          <option value="">1/2 Final</option>
          <option value="">3-5 Final</option>
          <option value="">1-2 Final</option>
        </select>
        <div style={{display:"flex",color:"yellow",alignItem:"center"}}>
        <h2 style={{paddingLeft:"5px",paddingRight:"6px"}}>{caty}</h2>
        <select name="" id="">
          <option value="">{val.p1}</option>
          <option value="">{val.p2}</option>
          <option value="">{val.p3}</option>
          <option value="">{val.p4}</option>
          <option value="">{val.p5}</option>
          <option value="">{val.p6}</option>
          <option value="">{val.p7}</option>
          <option value="">{val.p8}</option>
          <option value="">{val.p9}</option>
          <option value="">{val.p10}</option>
        </select>
        </div>
          </div>
      <div className="names">
        <div className="name1"><input autoComplete='false' value={nameR} className="inputName1" type="text"/><input autoComplete='false' value={eqpR} className="teamName1" type="" style={{color:"yellow"}} /></div>
        <div className="name2"><input autoComplete='false' value={eqpB} className="teamName2" type="text" style={{color:"yellow"}} /><input  autoComplete='false' value={nameB} className="inputName2" type="text" /></div>
      </div>
        <div className="down">
          <div style={{background:pointTheme}} className="red">
            <h1 style={{color:pointTheme3,fontSize:"230px",fontFamily:"sans-serif"}}>{redPoint}</h1>
          </div>
          <div className="time">
          <h2 style={{transition:"1s"}}><Counter ref1={ref1} ref2={ref2} timeOn={timeOn} start={start} stop={stop} reset={re} setReset={setRe} plus={handlePlus} mine={handleMine} endCounter={endCounter} setEndCounter={setEndCounter} /></h2>
          </div>
          <div style={{background:pointTheme2}} className="blue">
            <h1 style={{color:pointTheme4,fontSize:"230px",fontFamily:"sans-serif"}}>{bluePoint}</h1>
          </div>
        </div>
        <div className="down2">
          <div style={{display:displayCounter}} className="redCount">
            <h3 style={{paddingTop:col,paddingBottom:col,transition:'1s'}}>{sec}</h3>
          </div>
          <div style={{display:displayCounter2}} className="blueCount1">
            <h3 style={{paddingTop:col,paddingBottom:col,transition:'1s'}}>{sec2}</h3>
          </div>
        </div>
        <div className="avertissment"> 
         <div className="ar">
         <div style={{backgroundColor:av1}} className="ar1"></div>
          <div style={{backgroundColor:av2}} className="ar2"></div>
          <div style={{backgroundColor:av3}} className="ar3"></div>
         </div>
          <div className="ab">
          <div style={{backgroundColor:av4}} className="ab1"></div>
          <div style={{backgroundColor:av5}} className="ab2"></div>
          <div style={{backgroundColor:av6}} className="ab3"></div>
          </div>
          
        </div><br />
        </div>
        </center>
        <br /><br /><br />
        <center>
      <div style={{marginTop:"10px"}} className="controlePanel">
      <div className="startup">
      <input style={{border:"none",outline:"none",height:"26px",marginRight:"5px",borderRadius:"4px"}} onChange={(e)=> setNameR(e.target.value)} type='text' placeholder='n.om'/>
      <input style={{border:"none",outline:"none",height:"26px",marginRight:"5px",borderRadius:"4px"}} onChange={(e)=> setEqpR(e.target.value)} type='text' placeholder='Equipe'/>
      <button className="wButton" onClick={rWinner} style={{background:"red"}}>Winner</button>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={recount}>SEC.CH</button>
      <button className="wButton" onClick={bWinner} style={{background:"blue"}}>Winner</button>
      <input style={{border:"none",outline:"none",height:"26px",marginLeft:"5px",borderRadius:"4px"}} onChange={(e)=> setEqpB(e.target.value)} type='text' placeholder='Equipe'/>
      <input style={{border:"none",outline:"none",height:"26px",marginLeft:"5px",borderRadius:"4px"}} onChange={(e)=> setNameB(e.target.value)} type='text' placeholder='n.om'/>


      </div>
      <div className="hidden startup"> 
      <button onClick={rWinner} style={{background:"red"}}>Winner</button>
      <button onClick={bWinner} style={{background:"blue"}}>Winner</button>
      </div>
      <div className="point">
        <div className="redP">
        <button onClick={()=>{setRedPoint(redPoint + 1)}} className="1">1</button>
        <button onClick={()=>{setRedPoint(redPoint + 2)}} className="2">2</button>
        <button onClick={()=>{setRedPoint(redPoint + 4)}} className="4">4</button>
        <button onClick={()=>{setRedPoint(redPoint + 5)}} className="5">5</button>
        <button onClick={()=>{setRedPoint(redPoint - 1)}} className="blueDec">-1</button>
        </div>
      <div className="avertissmentSelection">
      <button style={{backgroundColor:"red",color:"white", display: displaying,borderRadius:"50px",width:"45px"}} onClick={start2}  className="avertissmentRedSecond">30s</button>
      <button style={{backgroundColor:"red",color:"white", border:"1px solid yellow",borderRadius:"15px"}} onClick={incR} className="avertissmentRed">+</button> 
      <button style={{backgroundColor:"red" ,color:"white", border:"1px solid yellow",borderRadius:"15px"}} onClick={decR} className="avertissmentRedDec">-</button>
      <button style={{backgroundColor:"blue" ,color:"white", border:"1px solid yellow",borderRadius:"15px"}} onClick={incB} className="avertissmentBlue">+</button>  
      <button style={{backgroundColor:"blue" ,color:"white", border:"1px solid yellow",borderRadius:"15px"}} onClick={decB} className="avertissmentBlueDec">-</button>
      <button style={{backgroundColor:"blue" ,color:"white", display: displaying,borderRadius:"50px",width:"45px"}} onClick={start3}  className="avertissmentBlueSecond">30s</button>      
      </div>
        <div className="blueP">
        <button onClick={()=>{setBluePoint(bluePoint + 1)}} className="1">1</button>
        <button onClick={()=>{setBluePoint(bluePoint + 2)}} className="2">2</button>
        <button onClick={()=>{setBluePoint(bluePoint + 4)}} className="4">4</button>
        <button onClick={()=>{setBluePoint(bluePoint + 5)}} className="5">5</button>
        <button onClick={()=>{setBluePoint(bluePoint - 1)}} className="redDec">-1</button>
        </div>
      </div>
      <br />

      <div className="selecting">
      <select onChange={catChanged} name="" id="">
        <option value="">---------</option>
        <option value="gr">GR</option>
        <option value="fs">MFS</option>
        <option value="ww">WFS</option>
      </select>

      <select onChange={catChanged2} name="" id="">
        <option value="nothing">--------</option>
        <option value="cadet">Cadets</option>
        <option value="junior">Juniors</option>
        <option value="senior">Seniors</option>
      </select>
      <button style={{height:"25px",borderRadius:"30px"}}  onClick={()=>{play()}}>Vlm</button>

      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <button style={{backgroundColor:"red",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid"}} className="logout" onClick={logout}>Logout</button>
      <button style={{backgroundColor:"green",color:"white",width:"100px",height:"30px",marginTop:"5px",border:"1px solid"}} onClick={reset}>RESET</button>
      </div>
      </div>
     
        </center>
      </div>
      </center>
      ):(
        <div style={{background:"black"}}>
        <div className="images">
        <img style={{position:"relative",width:"20%",height:"100vh",objectFit:"contain",paddingLeft:"20px"}} src={img2}/>
        <img style={{position:"relative",width:"59%",height:"100vh",objectFit:"contain"}} src={img1}/>
        <img style={{position:"relative",width:"21%",height:"100vh",objectFit:"contain",paddingRight:"20px"}} src={img3}/>

        </div>
        <div className="login">
          <center>
          <div  className="loginPlatform">
            <h2>WRESTLING BOARD</h2>
            <input onChange={(e)=>{setNameInp(e.target.value)}} type="text" className="passName" />
            <input onChange={(e)=>{setPasswordInp(e.target.value)}} type="password" className="passCod" />
            <button onClick={registerd}>Register</button>
          </div>
          </center>
          
        </div>
        </div>
       
      )

      }
    </div>
  );
}

export default App;


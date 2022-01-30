import React,{useState,useRef,useEffect} from 'react';

const Ref = () => {
    const [state,setState]=useState(2);
    const input=useRef();
    const headingRef=useRef()

    useEffect(()=>{
        console.log("Rendered")

    })


    const focusIt=()=>{

        input.current.focus();

    }

    const changeHEading=()=>{
        headingRef.current.textContent="Changed"
        headingRef.current.style.background="red"  // document.getElementbyId("hh").style.background="Green";
    }

    const changeState=()=>{
        setState(9);
    }

    const handler=()=>{
        ///ascii value of the key that is pressed  --> en

        // if the value is 10
        // you have to make focs to another field next line 
    }



    // You have to create a form   ,when I press enter  i want you to focus the field 

  return <div>
     <h1>USing Refs</h1>
     <h1>{state}</h1>

     <input type="text" ref={input} onKeyDown={handler}  />
     <h1 ref={headingRef}>HEllo there</h1>

     <button onClick={focusIt}>Make Focus</button>

     

     <button onClick={changeHEading}>Change Content</button>
     <button onClick={changeState}>Change State</button>


  </div>;
};

export default Ref;

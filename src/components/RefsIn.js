import React,{useRef} from 'react';

function RefsIn() {

    const inp1=useRef()
const inp2=useRef()
const inp3=useRef()


    function handler(event)
{

  if(event.target.name=="input1")
  {
      console.log(event.key);
    if(event.key=="Enter")
    {
      inp2.current.focus();
    }
  }
 else if(event.target.name=="input2")
  {
    if(event.key=="Enter")
    {
      inp3.current.focus();
    }
  }
  else if(event.target.name=="input3")
  {
    if(event.key=="Enter")
    {
      inp1.current.focus();
    }
  }
}
  return (
  
  <div>

<input type="text"  className='form-control'/>
<input type="text" ref={inp1} onKeyPress={handler}  className='form-control' name="input1"/><br />
     <input type="text" ref={inp2} onKeyPress={handler} className='form-control' name="input2"/><br />
     <input type="text" ref={inp3} onKeyPress={handler}  className='form-control' name="input3"/>



  </div>
  )
}

export default RefsIn;

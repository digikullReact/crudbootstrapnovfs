export const ChangesToLowerCase=(value)=>{
    //useRef
    //ueContex

    return value.toLowerCase();
}

export let v={

}

export const TokenExists=()=>{
    const token=localStorage.getItem("token");

    if(token){
        return true;
    }

return false
}


export const useBackGroundColor=()=>{
 

return "BackgroundColor"
}


export const def=()=>{
    console.log("hi");

}

export default def;
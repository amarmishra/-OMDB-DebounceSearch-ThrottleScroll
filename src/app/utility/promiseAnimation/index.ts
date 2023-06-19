function setPlaceholder(input:HTMLInputElement,placeholder:string){
    let pos=0;
    let id=requestAnimationFrame(()=>placeholderAnimation(pos))
    function placeholderAnimation(pos:number){
       if(input.placeholder===placeholder){
        setTimeout(()=>{input.placeholder="";},100)
        pos=0
       }
       else{
        setTimeout(()=>{input.placeholder=input.placeholder+placeholder.charAt(pos);  pos+=1},100)
       
       }
       id=requestAnimationFrame(()=>placeholderAnimation(pos));
    }
   

    
}

export default setPlaceholder
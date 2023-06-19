import { ChangeEvent } from "react";


function debounceInputChange(delay:number | undefined=800)
{
    let promise=new Promise<string>((res,rej)=>{}) ;
    return function (e:ChangeEvent<HTMLInputElement>,){
           
            promise = new Promise<string>((res,rej)=>{
                setTimeout(()=>{
                    res(e.target.value)
                    console.log("Sending API request now after ",delay)
                    console.log("searching for",e.target.value)
                },delay)
            })
          
            return promise;
             
                
          
      } 
} 

 //this is decorator function for the cb 
//checks whether the no scroll happends for stayLimit(time) --stabilty of scroll
function throttleScrollChange(
    cb:(e:React.UIEvent<HTMLDivElement, UIEvent>, searchFor: string, page: number)=>Promise<void> ,
    stayLimit:number| undefined = 200
    )
{  
   
    let promise=new Promise<Promise<void>>((res,rej)=>{});
    

    return  ( e:React.UIEvent<HTMLDivElement, UIEvent> , searchFor:string,page:number )=>{

        promise=new Promise<Promise<void>>((res,rej)=>{
            setTimeout(()=>{
                res(cb(e,searchFor,page))
            },stayLimit)
        })
       
        return promise;
    } 
} 

export { debounceInputChange,throttleScrollChange};
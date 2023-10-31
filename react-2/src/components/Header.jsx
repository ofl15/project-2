import React, { useEffect, useState } from "react"
import {DAYS, MONTHS} from '../utils/date'


export default function Header() {
   const [ time, setTime ] = useState("afternoon") 
   const date = new Date()
   let hour = date.getHours()

   useEffect(() => {
    if(hour > 18 || hour < 7){
        setTime("night")
    }else{
        setTime("afternoon")
    }
   }, [hour])

   return (
       <div className={'header ' + time}>
           <h1>{DAYS[date.getDay()]}</h1>
           <span>{MONTHS[date.getMonth()]}, {date.getDate()}</span>
       </div>
   )
}

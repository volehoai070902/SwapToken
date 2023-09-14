import React from "react"
import stypes from "../page.module.css"
export default function Home(){
    const click = (e:React.MouseEvent)=>{
        console.log("Hello")
    }
    return (
        <main>
            <div>Hoai</div>
            <button>Click</button>
        </main>
    )
}
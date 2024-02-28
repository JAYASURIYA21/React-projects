import { useState } from "react"
import QRCode from "react-qr-code"
import './styles.css'

export default function QrGenerator(){
  const [input,setInput]=useState('')
  const [qrcode,setQrcode]=useState('')

  function handleSubmit(){
    setQrcode(input)
    setInput('')
  }
console.log(qrcode);
  return(
    <div style={{display:"flex", justifyContent:"center"}}>
      <div>
        <div style={{marginTop:"30px", marginBottom:"20px"}}>
          <input className="input-button" type="text" name="qr-code" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="enter your text" />
          <button className="ml-3" disabled={input && input.trim()!==''?false:true} onClick={handleSubmit}>Generate</button>
        </div>
        <QRCode value={qrcode} size={400}/>
      </div>
    </div>
  )
}
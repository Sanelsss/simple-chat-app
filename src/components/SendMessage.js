import React, { useState,useEffect} from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        if(msg!==''){
        const { uid, photoURL } = auth.currentUser
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
     }
     
    return (
        <div className="ss">
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} 
                    placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px',
                backgroundColor: 'rgba(0, 0, 25, 0.678)',color:'#fff', 
                }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}
export default SendMessage

import React, { useState,useEffect,componentDidMount } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
   /// const [oko, setOko] = useState(false)

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        if(msg!==''){
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
        <div> 
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage



/*      async function deleteMessage (e) { 
         e.preventDefault() 
        let ref = db.collection('messages')
     await   db.collection("messages").onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                ref.doc(doc.id).delete()    
            })
        })



                if(msg!==''){

  } */
import firebase from 'firebase'
import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [oko, setOko] = useState(false)

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(570).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    /* function deleteMessage (e) { 
        const { uid } = auth.currentUser
        {messages.map(({  uid }) => (
            if(uid === auth.currentUser.uid){
                e.preventDefault();
                let ref = db.collection('messages')
               db.collection("messages").onSnapshot(snapshot => {
                    snapshot.docs.forEach (doc => {
                        ref.doc(doc.id).delete()  ;  
                    }) 
                })
             }
        ))}
    window.location.reload();  

    } */
    return (
        <div className="ss">
            <SignOut />
{/* <button onClick={(e)=>deleteMessage(e)}>houston we did it</button>
 */}            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                            <p>{uid}</p>
                            <p>{id}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat

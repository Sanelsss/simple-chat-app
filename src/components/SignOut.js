import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import { db } from '../firebase'


function SignOut() {

    async function deleteMessage (e) { 
        e.preventDefault();
        const { uid } = auth.currentUser
          if(uid === auth.currentUser.uid){
              console.log(uid);
       let ref = db.collection('messages')
       await  db.collection("messages").onSnapshot(snapshot => {
           snapshot.docs.forEach (doc => {
               ref.doc(doc.id).delete() ;
           }) 
       })
       window.location.reload();   
    }
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'relative',/* fixed */
             width: '100%', backgroundColor: '#FAFAFA',
             top: 0, borderBottom: 'solid 2px lightgray', zIndex: '10'
        }}>

<Button style={{ padding: '10px', fontSize: '15px', borderRadius: '20px',
             backgroundColor: '#808080	',
              marginBottom: 5, marginTop: 5,  color:'#fff', 
            fontWeight: '600' }} onClick={(e)=>deleteMessage(e)}>Reset</Button>
            <Button style={{ padding: '10px', fontSize: '15px', borderRadius: '20px',
             backgroundColor: '#808080	',marginLeft: 5,
              marginBottom: 5, marginTop: 5,  color:'#fff', 
            fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut

import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed',
             width: '100%', backgroundColor: '#FAFAFA',
             top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '20',
             backgroundColor: 'rgba(0, 0, 25, 0.678)',
              marginBottom: 5, marginTop: 5,  color:'#fff',        
            fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut

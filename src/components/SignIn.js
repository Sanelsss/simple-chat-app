import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
function SignIn() {
    const useStyles = makeStyles((theme) => ({
        signButton:{ 
           padding: 30 ,
           fontSize: 20 ,
           borderRadius: 20,
           fontWeight: 600,
           color:'#fff',
           background: 'rgb(180, 20, 87)',
           boxShadow: ' 0 0 40px rgb(164, 164, 164)',
       }
           }));
           const classes = useStyles();
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className="sign">
            <Button className={classes.signButton}  onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn


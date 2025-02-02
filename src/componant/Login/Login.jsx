import { GithubAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth"; // ✅ Fixed import path
import { auth } from "../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user,setuser] = useState(null);
    const provider = new GoogleAuthProvider();
    const provider2 = new  GithubAuthProvider();


    const handlegooglesignup = () => {
        
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setuser(result.user)
            })
            .catch((error) => {
                console.log("Error", error);
                setuser(null);
            });
    };

    const  handlegithubsignup = () => {
        
        signInWithPopup(auth, provider2)
            .then((result) => {
                console.log(result.user);
                setuser(result.user)
            })
            .catch((error) => {
                console.log("Error", error);
                setuser(null);
            });
    };

    const handlelogout = () =>
    {

        signOut(auth)
        .then(()=>
        {
            console.log("log out done");
            setuser(null);
        })

        .catch(()=>
        console.log("error occured"));
    }

    return (
        <div>
            <h1> this is log in form</h1>
            {/* <button onClick={handlegooglesignup}> Log in </button>
            <button onClick={handlelogout}>Log out </button> */}

            {
                user?
                <button onClick={handlelogout}>Log out </button>
                :
                 <>
                 <button onClick={handlegooglesignup}> Google Log in </button>
                 <button onClick={handlegithubsignup}> github Log in </button>
                 </>

            }

            {
                user &&
                <div>
                    <h3>{user.displayName}</h3>
                    <h4>{user.email}</h4>
                </div>
            }
        </div>
    );
};

export default Login;

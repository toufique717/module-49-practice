import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.init";

 

const Login = () => {

    const provider = new GoogleAuthProvider();

    const  handlegooglesignup = ()=>
    {

       signInWithPopup(auth,provider)
       .then((result) =>
    {
        console.log(result);
    })

    .catch(error =>
    {
        console.log('Errror',error);
    }
    )

    }
    return (
        <div>
            <h1> this is log in form</h1>

            <button onClick={handlegooglesignup}> Log in </button>
        </div>
    );
};

export default Login;
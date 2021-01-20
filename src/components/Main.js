import React from 'react';
import Typography from '@material-ui/core/Typography';



 const Main = (props) => {

    const removeSigned = (e) =>{
        e.preventDefault();
        localStorage.removeItem('signed');
        props.history.push("/sign-in")
    }


    return (
        <div>
        <Typography component="h1" variant="h5">
          You are signed in!
        </Typography>
        <button
            onClick={removeSigned}
          >
            Log out
          </button>
        </div>
    )
}

export default Main;
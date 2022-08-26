import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
    const { user: currentUser } = useSelector( (state) => state.auth )
    

    if(!currentUser){
        return <Redirect to="./login" />;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    Hi, <strong>{currentUser.username }! </strong> Welcome to your profile page.
                </div>
                <div className="col-sm-12 mt-5">
                    <p> <strong> Token - : </strong> 
                        { currentUser.accessToken.substring(0,10) } ... { currentUser.accessToken.substring( currentUser.accessToken.length - 10 ) } 
                    </p>
                    <p> <strong> Id - : </strong> {currentUser.id} </p>
                    <p> <strong> Email </strong> {currentUser.email} </p>
                    <p>
                        <strong>UserName:</strong> {currentUser.username}
                    </p>
                    <strong>Authorities</strong>
                    <ul>
                        {currentUser.roles && 
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
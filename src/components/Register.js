import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

const Register = () => {
    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <Form >
                    <div>
                        <div className="from-group">
                            <label htmlfor="username"> UserName</label>
                            <Input type="text" className="form-control" name="username" />
                        </div>
                        <div className="from-group">
                            <label htmlfor="email"> Email</label>
                            <Input type="text" className="form-control" name="email" />
                        </div>
                        <div className="from-group">
                            <label htmlfor="password"> Password</label>
                            <Input type="text" className="form-control" name="password" />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block"> Sign up</button>
                        </div>

                        <CheckButton  style={{display:'none'}} ref="checkbtn" />
                    </div>
                </Form>    

            </div>
        </div>
    )
}

export default Register;

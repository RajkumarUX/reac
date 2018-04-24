import React, { Component } from 'react';

export class LoginForm extends Component {
    render() {
        return (
            <main >
                <center>
                    <img class="responsive-img" src="https://i.imgur.com/ax0NCsK.gif" />
                    <div class="section"></div>

                    <h5 class="indigo-text">Please, login into your account</h5>
                    <div class="section"></div>

                    <div class="container">
                        <div class="z-depth-1 grey lighten-4 row" >

                            <form class="col s12" method="post">
                                <div class='row'>
                                    <div class='col s12'>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input class='validate' type='email' placeholder="Enter your email" name='email' id='email' />
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input class='validate' type='password' placeholder="Enter your passwrod" name='password' id='password' />
                                    </div>
                                    <label >
                                        <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                                </div>

                                <br />
                                <center>
                                    <div class='row'>
                                        <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                    <a href="#!">Create account</a>
                </center>

            </main >
        )
    }
}
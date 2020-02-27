import React, { Component } from 'react';

class HomePage extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            users: null,
            currentUser: null
        }
    }

    componentDidMount(){

    }

    render(){
       // const { currentUser, users } = this.state;
        return(
            <div className="jumbotron">
                <h1>Hi !</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {/* {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                } */}
            </div>
        );
    }
}


export default HomePage;
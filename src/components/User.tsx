import * as React from "react";
import AppContext from './AppContext';


class User extends React.Component {


    render() {

        return (
            <AppContext.Consumer>
                {({ name, email, changeName, changeEmail }) => (
                    <div className="container">
                        <input className="form-control form-control-lg" defaultValue={name} placeholder="Name" onChange={(e) => changeName(e.target.value)} />
                        <input className="form-control form-control-lg" defaultValue={email} placeholder="Email" onChange={(e) => changeEmail(e.target.value)} />
                    </div>
                )}
            </AppContext.Consumer>
        )
    }



}

export default User;

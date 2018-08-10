import * as React from "react";
import AppContext from '../components/AppContext';

class WrapperState extends React.Component {

    state = {
        menu:[{'url':'/About','title':'About'},{'url':'/User','title':'User'}],
        number: 10,
        changeName: (name: string) => {
            this.setState({ name: name });
        },
        changeEmail: (email: string) => {
            this.setState({ email: email });
        },
        name: "",
        email: ""
    }

    render() {


        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>;
    }

}

export default WrapperState;

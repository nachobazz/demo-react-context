import * as React from "react";

const AppContext = React.createContext({
  menu:[{'url':'','title':''}],
  name: "",
  email: "",
  changeName: (name: string) => { },
  changeEmail: (email: string) => { }
});


export default AppContext;

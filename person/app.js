import React, {Component} from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app"

ReactDOM.render(
    <App />,
    document.getElementById('person')
);
//针对js做热更新
if (module.hot) {
   module.hot.accept(()=> {
       ReactDOM.render(
           <App />,
           document.getElementById('person')
       );
   })
}
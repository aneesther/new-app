import React  from "react";
import  FunctionalComponent  from "./func";
class  ClassComponent extends React.Component {
    render() {
        return (
            <>
                <h1> Hello from class component</h1>
                <p>I see you now</p>
                <FunctionalComponent name="John" age="7"/>
                </>
        );
    }
}
 export default ClassComponent;
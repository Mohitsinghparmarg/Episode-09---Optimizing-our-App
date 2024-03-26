import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

 class About extends Component{

      constructor(props){
           super(props);

         //  console.log("Parent Constructor");
      }

      componentDidMount(){
       // console.log("Parent Component Did Mount");
  }

    render(){
           
      //  console.log("Parent render");

        return (
            <div>
                <h1>About Class Component</h1>
                <h2>this is Namaste React </h2>
                <UserClass name={"1st (class)"} location={"1 (class)"} contact = {"@mohitsinghparmar01 (class)"}/>
                {/* <UserClass name={"2nd (class)"} location={"2  (class)"} contact = {"@mohitsinghparmar02 (class)"}/>
                <UserClass name={"3rd (class)"} location={"3 (class)"} contact = {"@mohitsinghparmar03 (class)"}/> */}
            </div>
       );
    }
}


export default About;
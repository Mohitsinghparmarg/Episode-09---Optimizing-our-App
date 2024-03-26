
import React from "react";


class UserClass extends React.Component {
            
      constructor(props){
            super(props);
           
            this.state = {
               // count: 0,
                userInfo:{
                    
                    name:"Dummy",
                    location:"Default",
                    avatar_url:"http://dummy-photo.com"  ,

                }
            };
      //  console.log(this.props.name +" Child constructor is called");
      }

    async componentDidMount(){
           // console.log(this.props.name+"Child Component Did Mount");

              const data = await fetch("https://api.github.com/users/Mohitsinghparmarg");
              const json = await data.json();

              this.setState({
                userInfo : json,
              });

              console.log(json);

      }

      componentDidUpdate()
        {
          // this.timer = setInterval(() =>{
          //      console.log("it will be called multiple times");
          //  },1000);
            console.log("component did updated");
        }
     
     componentWillUnmount(){
      clearInterval(this.timer);
           console.log("component will unmount");
     }



    render() {
        
     //   const {name,location,contact} = this.props;
       // const {count} = this.state;
   
         // console.log(this.props.name +" Child render is called");

         const {name,location,avatar_url} = this.state.userInfo;
           
       

        return (
            <div className='user-card'>
                {/* <h1> Count:{count}</h1>
                <button onClick={() =>{
                    this.setState({
                         count:this.state.count+1,
                    });
                }} >Count Increase </button> */}
                <img src= {avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                
                {/* <h4>Contact:{contact}</h4> */}
            </div>
           );
      }


}

export default UserClass;




/**
 * 
 * --- MOUNTING ---
 * 
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * ---  UPDATE ---
 *     render(API data)
 *     <HTML (new API data) >
 *     componentDid Update
 * 
 * 
 * 
 * 
 */
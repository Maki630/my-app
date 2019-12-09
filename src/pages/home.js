import React from 'react';
import ContentLoader from 'react-content-loader';
import '../style/home.css';
import { pro1 } from '../controller/homeController'
//import promise from "../controller/homeController";

const MyLoader = () => (
    <ContentLoader>
        {/* Only SVG shapes */}
        <rect x="120" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="120" y="40" rx="3" ry="3" width="250" height="10" />
        <circle cx="50" cy="50" r="50" />
    </ContentLoader>
)

class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          list: [],
      }
    }

   componentDidMount() {
        this.getData();
   }

   getData = async () => {
        const a = await pro1;
        console.log(a);
        this.setState({
            list: a.list,
        })
   }
   getNew = () => {
        var a = '';
   }

    render(){
       const {list} = this.state;
        return(
            <div className="home">
                {list.length === 0 ?
                <MyLoader /> :
                <div className="list">
                    <div className="item">
                        <div className="leftArea">
                            <img src={require('../img/pic1.jpeg')} alt="标签" />
                        </div>
                        <div className="rightArea">
                            <p className="tips">hello</p>
                            <p className="tips">hello</p>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }

}

export default Home;
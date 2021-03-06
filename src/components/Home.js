import React from 'react';
import './HomeCss.css';
import ReactPageScroller from "../ReactpageScroller";

import HomeFirstComponent from "./HomeFirstComponent";
import HomeSecondComponent from "./HomeSecondComponent.js";
import HomeThirdComponent from "./HomeThirdComponent";
import HomeFourthComponent from "./HomeFourthComponent";

  

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: null };
      }
    
      handlePageChange = component => {
        this.setState({ currentPage: component }); // set currentPage number, to reset it from the previous selected.
      };
    

    render() {


    return(
    <React.Fragment>

    <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
    >
         <HomeFirstComponent />
         <HomeSecondComponent />
         <HomeThirdComponent />
         <HomeFourthComponent />
       
    </ReactPageScroller>
    
    </React.Fragment>

);
}
}

export default Home ;
import React from 'react';

import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import Products from './components/Products';
import quiz from './quiz';
import products from './Products';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            members :quiz.members
        }
       
    }
    render(){
        const productComp= products.map(function(item){
            return <Products key={item.id} product={item}/>
        })
        return(
            <div>
              <Header />
              <MainContent members={this.state.members}/>
                {productComp}
              <Footer />
            </div>
        )
    }
}

export default App

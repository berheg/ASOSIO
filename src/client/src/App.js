import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ListOfItems from './components/ListOfItems/ListOfItems.component';
import Header from './components/Layout/Header.component';
import About from './pages/About/About';
import Loading from './components/Loading/Loading.component';

class App extends Component {
	constructor(props){
    
    super(props)
    this.state ={
      reactionsGeneratedContent : [],
      reactionsGeneratedBy: [],
      isLoading:true
    }
  }                                                
  //excuted when the component is mounted
	componentDidMount() {
    setInterval(() => {
      setTimeout(() => {
        fetch('/randomAPIresponse',{method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(apiResponse => {
        console.log(apiResponse);
        this.setState({isLoading:false});
        const reactions=[];
        const generated = JSON.parse(apiResponse);
        console.log(generated);
        const reactionsGenerated = [];   
        const typeSorted=[];                                                            
        let newObject;
        let newValues;   
        let newCombined=[];
    
        const dataToList =[];
        const names=[];   
        for (let i = 0; i < generated.length; i++) {      
          newObject = generated[i];
          newValues= Object.values(newObject); 
          typeSorted.push(newValues);          
          console.log(newValues);         
        }    
        newCombined.push(typeSorted[0]);
        reactions.push([typeSorted[0][0],typeSorted[0][1]]);
        let flag;
        for(let j=1;j<typeSorted.length;j++){
          flag=true;
          let k=0;
          do{
            if(typeSorted[j][0]===newCombined[k][0]){
              newCombined[k].push(typeSorted[j][2]);
            flag =false;
            } 
            k++;              
          }while (flag && k<newCombined.length);
          if(flag){
            newCombined.push(typeSorted[j]);
            reactions.push([typeSorted[j][0],typeSorted[j][1]]);
          } 
        } 
        for (let t = 0; t < newCombined.length; t++) {
          console.log(newCombined[t].length);
          let arrayOfNames =[];
          for (let index = 2; index < newCombined[t].length; index++) {        
            arrayOfNames.push(newCombined[t][index]);        
          }
          reactionsGenerated[newCombined[t][0]] = arrayOfNames;      
        }
        let eachEnteries = Object.values(reactionsGenerated);
        let indexOfEachEnteries =0;
        for (let element in reactionsGenerated) {
          let content=
            reactions.filter(elementInReactions => {
              if(elementInReactions[0]=== element )
                return elementInReactions[1];
              return null;
            });          
          
          console.log(element + ' has ' + eachEnteries[indexOfEachEnteries].length+'X'+ content[0][1]+'('+eachEnteries[indexOfEachEnteries]+')');
          dataToList.push({"type":element,"content":content[0][1],"name":eachEnteries[indexOfEachEnteries],"numberOfNames": eachEnteries[indexOfEachEnteries].length});
          names.push(eachEnteries[indexOfEachEnteries]);
          indexOfEachEnteries++;  
        }
        this.setState({reactionsGeneratedContent:dataToList,reactionsGeneratedBy: names} );
        });    
      }, 500);
    }, 10000);
        
  } 
  render() {
    return (
      <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          
          <Route
            exact
            path='/'
            render={(props) => (
              <React.Fragment> 
                <div className="home-header">
                  <h2>RANDOMLY GENERATED REACTIONS</h2>
                </div>
                {this.state.isLoading?<Loading/>:                   
                <ListOfItems                  
                  items={this.state.reactionsGeneratedContent}                                       
                />}
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </div>
      </div>
      </Router>
    );
  }
}
  
  export default App;



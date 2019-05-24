import React,{Component} from 'react';
//import { createStore } from 'redux'; video 122 se quita
//import { connect } from 'react-redux'; // se agrego en el video 117 es para acceso al store
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid , Row, Col } from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended';
import LocationListContainer from './containers/LocationListContainer';
//import { setCity } from './actions'; // pasando la action a otra carpeta video 122 se quita
//import { store } from './store'; // pasa la logica del store 

import './App.css';


const cities =[
  'Buenos Aires,ar',
  'Washington,us',
  'Soyapango,sv',
  'Madrid,es',
  'Lima,pe',
  'Cojutepeque,sv',
]
/*Video 116 lo mueve
const store = createStore(() => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

//video 114 en el video 115 se mueve a la carpeta action
/*const setCity = value =>({type: 'setCity', value});*/


class App extends Component {    

  constructor() {
    super();
    //solamente en el constructor del componente en ningun otro lugar se puede
    this.state = { city:null} ;
  }
  /*
  handleSelectionLocation = city =>{
    this.setState({ city})
    console.log(`"handleSelectionLocation"${city}`);
    this.props.setCity(city);
  }*/
  render() {
    const {city} = this.state;
      return ( 
          <Grid>
            <Row>
              <AppBar position='sticky'>
                <Toolbar>
                  <Typography variant='title' color='inherit'>
                    Weather App
                  </Typography>
                </Toolbar>
              </AppBar>
            </Row>  
            <Row>
              <Col xs={12} md={6}>
              <LocationListContainer 
                  cities={cities} />
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                <div className="detail">
                  {
                    //si solo dejamos city? no viene nulo 
                    // cuando se niega ponemos estamos poniendo que si viene nulo
                    /* !city? 
                      <h1>No se selecciono ciudad</h1>:
                      <ForecastExtended city={city}></ForecastExtended>*/
                    city &&
                    <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
                </Paper>
              </Col>
            </Row>          
          </Grid>
      );
  }
}
/*const mapDispatchToPropsActions = dispatch =>({
  setCity: value => dispatch(setCity(value))
});
const AppConected = connect(null, mapDispatchToPropsActions)(App);*/
export default App;
//export default App;


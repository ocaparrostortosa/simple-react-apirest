import { AppBar, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Pages
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ListPage from "./components/ListPage";
//Styles
import CustomStyles from "./styles/CustomStyles";
import ButtonStyle from "./styles/ButtonStyle";
import { Home, InfoOutlined, List } from "@material-ui/icons";

function App() {
  const custom = CustomStyles();

  const [colorBotones, setColorBotones] = useState({
    botonHome: "#ffffff",
    botonList: "#ffffff",
    botonAbout: "#ffffff",
  });  

  const iconos = {
    home: <Home/>,
    list: <List/>,
    about: <InfoOutlined/>
  };

  const handleClick = (data) => {
    switch (data) {
      case 'Home':
        setColorBotones({
          botonHome: '#12ffff',
          botonList: "#ffffff",
          botonAbout: "#ffffff"
        });
        break;
      case 'About':
        setColorBotones({
          botonHome: '#ffffff',
          botonList: "#ffffff",
          botonAbout: "#12ffff"
        });
        break;
      case 'List':
        setColorBotones({
          botonHome: '#ffffff',
          botonList: "#12ffff",
          botonAbout: "#ffffff"
        });
        break;
      default:
        break;
    }     
  };

  return (
    <Router>
      {/* Dentro del router, sera donde definamos las rutas de acceso de la aplicación con Link o NavLink
      NavLink es una versión especial del Link, pero esta añade atributos de estilos para el elemento actual renderizado  */}
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={custom.link}>
              <ButtonStyle label="Home" colorB={colorBotones.botonHome} handleClick={handleClick} icon={iconos.home}/>
            </Link>
            <Link to="/list" style={custom.link}>
              <ButtonStyle label="List" colorB={colorBotones.botonList} handleClick={handleClick} icon={iconos.list}/>
            </Link>
            <Link to="/about" style={custom.link}>
              <ButtonStyle label="About" colorB={colorBotones.botonAbout} handleClick={handleClick} icon={iconos.about}/>
            </Link>
          </Toolbar>
        </AppBar>
        {/* El Switch es el contenedor de los componentes Route, los cuales se definen de más detallados a más globales */}
        <Switch>
          <Route path="/list">
            <ListPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="fixed" color="inherit">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>BASQUET</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Remeras</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Zapatillas</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Pelotas</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTRARSE</MenuItem>
                    <MenuItem>INICIAR SESION</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;
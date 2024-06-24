import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './img.png'; // import the logo image
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#171110' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <motion.img
                        src={logo}
                        alt="Logo"
                        style={{height: '50px', marginRight: '16px'}}
                        initial={{x: -100}}
                        animate={{x: 0}}
                        transition={{duration: 0.5}}
                    />


                    <nav className="navigation">
                        <Button color="inherit" component={Link} to="/">
                            Главная
                        </Button>
                        <Button color="inherit" component={Link} to="/catalog">
                            Каталог
                        </Button>
                        <Button color="inherit" component={Link} to="/favorites">
                            Избранное
                        </Button>
                        <Button color="inherit" component={Link} to="/cart">
                            Корзина
                        </Button>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px',
                width: '100%',
                position: 'static',
                bottom: 0,
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} gamestop
                    </Typography>
                    <Box sx={{ display: 'static', gap: '70px' }}>
                        <Link href="#" color="inherit" underline="none" style={{ margin: '0 5px' }}>
                            Подробнее
                        </Link>
                        <Link href="#" color="inherit" underline="none" style={{ margin: '0 5px' }}>
                            Контакты
                        </Link>
                        <Link href="#" color="inherit" underline="none" style={{ margin: '0 5px' }}>
                            Политика конфедициальности
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

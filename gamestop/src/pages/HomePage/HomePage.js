import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import ProductList from '../../components/ProductList/ProductList';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: '80px' }}>
            <Box my={4}>
                <Typography variant="h2" component="h1" align="center" gutterBottom>
                    Добро пожаловать в наш магазин!
                </Typography>
            </Box>

            <Box my={4}>
                <Typography variant="h5" component="h2" align="center" gutterBottom mb={15}>
                    Геймеры рекомендуют
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <motion.div
                        initial={{ opacity: 0 }} // start with opacity 0
                        animate={{ opacity: 1 }} // animate to opacity 1
                        transition={{ duration: 0.5, delay: 0.5 }} // animate over 0.5 seconds, with a delay of 0.5 seconds
                    >
                        <ProductList limit={10} />
                    </motion.div>
                </Grid>
            </Box>

            <Card>
                <CardContent>
                    <Box my={4}>
                        <Typography variant="h5" component="h2" align="center" gutterBottom>
                            Обратная связь
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Напишите нам!
                        </Typography>
                        <FeedbackForm />
                    </Box>
                </CardContent>
            </Card>
        </Container>

    );
};

export default HomePage;

import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import {FavoritesContext} from '../../contexts/FavoritesContext/FavoritesContext';
import {CartContext} from '../../contexts/CartContext/CartContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { motion } from 'framer-motion';

const Product = ({product}) => {
    const {addToFavorites, removeFromFavorites, isInFavorites} = useContext(FavoritesContext);
    const {addToCart, removeFromCart, isInCart} = useContext(CartContext);

    const handleAddToFavorites = () => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const handleCartAction = () => {
        if (isInCart(product.id)) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <Card sx={{maxWidth: 345, backgroundColor: "#CCCCCC" }}>
            <CardMedia component="img" height="180" image={product.image} alt={product.name}/>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Цена: ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                    <Button size="small" onClick={handleAddToFavorites} sx={{ backgroundColor: "white" }}>
                        {isInFavorites(product.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                    <Button size="small" onClick={handleCartAction} sx={{ backgroundColor: "white" }}>
                        {isInCart(product.id) ? <DeleteIcon /> : <AddShoppingCartIcon />}
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}>
                    <Button size="small" component={Link} to={`/product/${product.id}`} sx={{ backgroundColor: "white" }}>
                        <InfoIcon />
                    </Button>
                </motion.div>
            </CardActions>

        </Card>
    );
};

export default Product;

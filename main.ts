import express from 'express';
import productRouter from './src/product';

const app = express();
const port = 3000;

app.use('/product', productRouter)
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
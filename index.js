import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './src/routes/route.js';

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', router);

mongoose.connect('mongodb+srv://testuser:s8Tmlt5BA2busm09@cluster0.xp51g.mongodb.net/newcrud', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => {
    console.log('Something went wrong!!');
});
db.once('open', () => {
    console.log('Connected to the DB');
});

app.listen(3000, () => {
    console.log('serving the CRUD @ PORT 3000');
});

import express from 'express'; 
import morgan from 'morgan';
import passport from 'passport'
import passportMiddleware from './middlewares/passport';
import cors from 'cors';
const app = express();

import aythRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.use('/api', aythRoutes);
app.use('/api', specialRoutes);
app.get('/', (req, res) => {
    return res.send(`<h3>The API is at http://localhost:${app.get('port')}</h3>`);
  })

export default app;


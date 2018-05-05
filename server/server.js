import './config/config.js';
import './config/passport.js';
import './db/mongoose';
import cors           from 'cors';
import express        from 'express';
import bodyParser     from 'body-parser';
import validator      from 'express-validator';
import rateLimiter    from './config/rateLimiter';
import userRoutes     from './api/routes/users';
import mapRoutes      from './api/routes/map';
import pointRoutes    from './api/routes/points';
import activityRoutes from './api/routes/activities';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(rateLimiter);

// Routes.
app.use('/users', userRoutes);
app.use('/map', mapRoutes);
app.use('/points', pointRoutes);
app.use('/activities', activityRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export { app };
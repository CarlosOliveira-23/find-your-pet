import express from 'express';
import 'express-async-errors';
import { orgRoutes } from '../../modules/orgs/routes/orgRoutes';
import { petRoutes } from '../../modules/pets/routes/petRoutes';
import { AppError } from '../errors/AppError';

const app = express();

app.use(express.json());
app.use('/orgs', orgRoutes);
app.use('/pets', petRoutes);

app.use((err: Error, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

export { app };

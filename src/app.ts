import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import proveedorRouter from './routes/proveedor.route';
import { AppDataSource } from './config/db.config';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/proveedores',proveedorRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;


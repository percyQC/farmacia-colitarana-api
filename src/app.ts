import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import proveedorRouter from './routes/proveedor.route';

const app: Application = express();

app.use(morgan('dev'));
app.use('/api/v1/proveedores',proveedorRouter)

export default app;


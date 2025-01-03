import { DataSource } from "typeorm";
import { db_database, db_host, db_password, db_port, db_type, db_username } from "../shared/constants";
import { Proveedor } from "../entities/proveedor";
import { MedicamentoCategoria } from "../entities/medicamento-categoria";
import { Medicamento } from "../entities/medicamento";

export const AppDataSource = new DataSource({
    type: db_type as any,
    host: db_host,
    port: Number(db_port||'0'),
    username: db_username,
    password: db_password,
    database: db_database,
    entities: [Proveedor,Medicamento,MedicamentoCategoria],
});
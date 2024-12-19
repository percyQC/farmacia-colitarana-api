import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Medicamento } from "./medicamento";



@Entity('medicamentos_categoria')
export class MedicamentoCategoria{
    @PrimaryGeneratedColumn({name:'id_medicamento_categoria'})
    idMedicamentoCategoria: number;

    @Column({name:'nombre'})
    nombre: string;

    @Column({name:'descripcion'})
    descripcion: string;

    @Column({name:'imagen_url'})
    imagenUrl: string;
        
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
    
    @OneToMany(()=>Medicamento,(medicamento)=>medicamento.medicamentoCategoria)
    medicamentos: Medicamento[];
}
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MedicamentoCategoria } from "./medicamento-categoria";

@Entity('medicamentos')
export class Medicamento{
    @PrimaryGeneratedColumn({name:'id_medicamento'})
    idMedicamento: number;

    @ManyToOne(()=>MedicamentoCategoria,(medicamentoCategoria)=>medicamentoCategoria.medicamentos)
    @JoinColumn({name: 'id_medicamento_categoria'})
    medicamentoCategoria: MedicamentoCategoria;

    @Column({name:'codigo'})
    codigo: string;

    @Column({name:'nombre'})
    nombre: string;

    @Column({name:'descripcion'})
    descripcion: string;

    @Column({name:'imagen_url'})
    imagenUrl: string;

    @Column({name:'precio_unitario'})
    precioUnitario: number;

    @Column({name: 'estado'})
    estado: string;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;
    
    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

}
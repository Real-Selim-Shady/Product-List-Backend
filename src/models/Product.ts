/* eslint-disable no-mixed-spaces-and-tabs */
import { Model, PrimaryKey, AutoIncrement, Column, Table } from "sequelize-typescript";
import "reflect-metadata";

@Table({tableName: "Products"})
class Product extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    	id!: number;

    @Column
    	title!: string;

    @Column
    	price!: string;

    @Column
    	description!: string;

    @Column
    	seller!: string;

    @Column
    	imageUrl!: string;

    @Column
    	alt!: string;

}

export default Product;
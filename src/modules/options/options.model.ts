import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'options', timestamps: false })
export class OptionsModel extends Model<OptionsModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ allowNull: false })
  question: number;

  @Column({ allowNull: false })
  level: number;

  @Column({ allowNull: false })
  option: string;

  @Column({ allowNull: false, defaultValue: false })
  correct: boolean;
}

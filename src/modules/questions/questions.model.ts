import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'questions', timestamps: false })
export class QuestionsModel extends Model<QuestionsModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ allowNull: false })
  level: number;

  @Column({ allowNull: false })
  numberQuestion: number;

  @Column({ allowNull: false })
  question: string;
}

// import { ObjectId } from "mongodb";
import { Column, Entity, Index, ObjectIdColumn } from "typeorm";

@Entity()
class User {
  @ObjectIdColumn({
    type: "uuid",
  })
  _id: string;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  password: string;
}

export { User };

import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'fist_name' })
  firstName: string;

  @Column({ name: 'age' })
  age: number;

  @OneToMany(() => Post, (post) => post.user, {
    cascade: true,
  })
  posts: Post[];

  constructor(lastName: string, firstName: string, age: number, posts: Post[]) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.posts = posts;
  }
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'post' })
export class Post {
  @PrimaryColumn({ name: 'url' })
  url: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'user_id' })
  userId?: number;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
  }
}

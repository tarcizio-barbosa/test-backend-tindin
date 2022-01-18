interface IClass {
  name: string;
  description: string;
  video: string;
  date_init: Date;
  date_end: Date;
  created_at?: Date;
  updated_at?: Date;
  total_comments?: number;
  id?: string;
}

export { IClass };

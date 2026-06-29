export interface WorkItem {
  slug: string;
  title: string;
  client?: string;
  description: string;
  role: string;
  stack: string[];
  result?: string;
  year?: string;
  image?: string;
}

export const works: WorkItem[] = [];

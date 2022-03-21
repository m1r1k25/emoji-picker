export interface ICategory {
  title: string;
  items: string[];
}

export interface ICategoryProps {
  category: ICategory
}

export interface EmojiProps {
  emoji: string;
}

export interface RecentEmojiesProps {
  recentEmojies: string[]
}
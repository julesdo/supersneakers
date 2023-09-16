
export interface Product {
  dynamicFields: {
    createMany: {
      data: {
        name: string;
        type: string;
        value: string;
      }[];
    };
  };
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  description: string;
  images: Image[]
};

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};

export interface Post {
  url: string | undefined;
  createdAt: string | undefined;
  id: number;
  title: string;
  content: string;
  image:  {
      url: string;
  }[];
}

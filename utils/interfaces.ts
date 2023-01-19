export interface menuInterface {
  id?: number;
  image?: string;
  title?: string;
}

export type sideBarTypes = {
  image?: string;
  title?: string;
};

export interface imageStoreInterface {
  loading: boolean;
  images: any[];
}

export interface notificationInterface {
  id?: number;
  title?: string;
  subTitle?: string;
}

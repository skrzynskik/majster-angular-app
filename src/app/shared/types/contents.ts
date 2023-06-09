export type Container = {
  id: string;
  containerName: string;
  containerDescription: string;
  containerType: ContainerType;
  containerSpacesNumber: number;
  containerSpaces: Space[];
  containerPhotoUrl: string;
}

export type Space = {
  id: string;
  spaceName: string;
  spaceDescription: string;
  spaceItems: Item[];
}
export type Item = {
  id: string;
  itemName: string;
  itemDescription: string;
  itemQuantity: number;
  itemPhotoUrl: string;
}

export type ContainerIds = {
  containerIds: string[];
}

export enum ContainerType {
  BOX = 'BOX',
  BAG = 'BAG',
  WARDROBE = 'WARDROBE',
  DRESSER = 'DRESSER',
  CUPBOARD = 'CUPBOARD',
  SHELF = 'SHELF',
  BASKET = 'BASKET',
  OTHER = 'OTHER'
}

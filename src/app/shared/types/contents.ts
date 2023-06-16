export type Room = {
  id: string;
  roomName: string;
  roomDescription: string;
  roomPhotoUrl?: string;
  containers?: Container[];
}

export type Container = {
  id: string;
  containerName: string;
  containerDescription: string;
  containerType: ContainerType;
  containerPhotoUrl?: string;
  items?: Item[]
}

export type Item = {
  id: string;
  itemName: string;
  itemDescription: string;
  itemQuantity: number;
  itemPhotoUrl: string;
}

export type RoomIds = {
  roomIds: string[];
}

export type EditAdd = {
  container: ContainerEditAdd;
  item: ItemEditAdd
}

type ContainerEditAdd = {
  activeAdd: boolean
  activeEdit: boolean
}

type ItemEditAdd = {
  activeAdd: boolean
  activeEdit: boolean
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

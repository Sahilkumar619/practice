export type RootStackParamList = {
  Home: undefined;
  Notes: undefined;
  List: undefined;
  Detail: { itemName: string };
};

export type Note = {
  id: string;
  text: string;
};

export type ListItem = {
  id: string;
  name: string;
  description: string;
};

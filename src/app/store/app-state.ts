export interface Breadcrumbs{
  text: string,
  disabled:boolean,
  href: string,
}

export interface AppState {
  counter: number;
  title :  string,
  breadcrumbs : Array<Breadcrumbs[]>
}

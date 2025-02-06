export interface IProduct {
    id:          number;
    title:       string;
    fullName:     string;
    firstName:   string;
    lastName:    string;
    family:      string;
    image:       string;
    imageUrl:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

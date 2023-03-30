import { ObjectId } from "mongodb"

export interface SimpleAdItem {
    _id: ObjectId;
    lat: number;
    lng: number;
}

export interface AdItem extends SimpleAdItem {
    name: string;
    description: string;
    price: number;
    url: string;
}
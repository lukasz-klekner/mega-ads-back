import { ObjectId } from "mongodb"

export interface AdItem {
    _id: ObjectId;
    name: string;
    description: string;
    price: number;
    url: string;
    lat: number;
    lng: number;
}
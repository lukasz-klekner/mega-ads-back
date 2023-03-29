import { ObjectId } from "mongodb";
import { AdItem } from "../types";
import { adsCollection } from "../utils/db";
import { ValidationError } from "../utils/errors";

interface NewAdRecord extends Omit<AdItem, "_id"> {
    _id?: ObjectId
}

export class AdRecord implements AdItem {
    _id: ObjectId
    name: string
    description: string
    price: number
    url: string
    lat: number
    lng: number

    constructor(obj: NewAdRecord){
        if(!obj.name || obj.name.length > 100){
            throw new ValidationError('The name of the ad cannot be empty or greater than 100 characters.')
        }

        if(obj.description.length > 1000) {
            throw new ValidationError('The description cannot greater than 1000 characters.')
        }

        if(obj.price < 0 || obj.price > 9999999){
            throw new ValidationError('The price cannot be negative or greater than 9.999.999.')
        }

        //@TODO: check if url is valid
        if(!obj.url || obj.url.length > 100){
            throw new ValidationError('The url cannot be empty or greater than 100 characters.')
        }

        if(typeof obj.lat !== "number" || typeof obj.lng !== "number"){
            throw new ValidationError('Coords are invalid')
        }

        this._id = obj._id
        this.name = obj.name
        this.description = obj.description
        this.price = obj.price
        this.url = obj.url
        this.lat = obj.lat
        this.lng = obj.lng
    }

    static async getOne(id: string): Promise<AdRecord | null> {
        const ad = await adsCollection.findOne({
            _id: new ObjectId(id)
        }) as AdRecord

        return ad === null ? null : new AdRecord(ad)
    }
}
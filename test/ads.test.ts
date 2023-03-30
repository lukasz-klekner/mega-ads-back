import exp from "constants"
import { AdRecord } from "../records/ad.record"

const defaultAdItem = {
    name: "Testadd  ad",
    description: "Test description",
    price: 1,
    url: "http://test.com",
    lat: 0,
    lng: 0,
}

test("AdRecord reuturns a single ad from datebase", async () => {
    const ad = await AdRecord.getOne("6423f584430d42aaceb630c3")

    expect(ad).toBeDefined()
    expect(ad._id.toString()).toBe("6423f584430d42aaceb630c3")
}) 

test("AdRecord reuturns null when ad is not existied", async () => {
    const ad = await AdRecord.getOne("6423f584430d42aaceb630ac")

    expect(ad).toBeNull()
}) 

test("AdRecord reuturns array of found entries", async () => {
    const ads = await AdRecord.findAll("")

    expect(ads).not.toEqual([])
    expect(ads[0]._id).toBeDefined()
}) 

test("AdRecord reuturns array of found entries when searching for a", async () => {
    const ads = await AdRecord.findAll("ad")

    expect(ads).not.toEqual([])
    expect(ads[0]._id).toBeDefined()
}) 

test("AdRecord reuturns empty array of found entries when searching for ---", async () => {
    const ads = await AdRecord.findAll("---")

    expect(ads).toEqual([])
}) 

test("AdRecord inserts new ad and returns UUID", async () => {
    const newAd =  new AdRecord(defaultAdItem)

    await newAd.insert()

    expect(newAd._id).toBeDefined()
}) 

test("AdRecord inserts data to database", async () => {
    const newAd =  new AdRecord(defaultAdItem)
    await newAd.insert()

    const foundAd = await AdRecord.getOne(newAd._id.toString())

    expect(foundAd).toBeDefined()
    expect(foundAd).not.toBeNull()
    expect(foundAd._id.toString()).toBe(newAd._id.toString())
}) 
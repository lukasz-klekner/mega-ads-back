import exp from "constants"
import { AdRecord } from "../records/ad.record"

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
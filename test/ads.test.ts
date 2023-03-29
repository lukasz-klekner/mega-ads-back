import { AdRecord } from "../records/ad.record"

test("AdRAecord reuturns a single ad from datebase", async () => {
    const ad = await AdRecord.getOne("6423f584430d42aaceb630c3")

    expect(ad).toBeDefined()
    expect(ad._id.toString()).toBe("6423f584430d42aaceb630c3")
}) 

test("AdRAecord reuturns null when ad is not existied", async () => {
    const ad = await AdRecord.getOne("6423f584430d42aaceb630ac")

    expect(ad).toBeNull()
}) 
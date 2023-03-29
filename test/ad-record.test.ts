import { AdRecord } from "../records/ad.record"

const defaultAdItem = {
    name: "Test ad",
    description: "Test description",
    price: 1,
    url: "http://test.com",
    lat: 0,
    lng: 0,
}

test("Can build AdRecord", async () => {
    const ad = new AdRecord(defaultAdItem)

    expect(ad.name).toBe("Test ad")
})

test("Validates invalid price", () => {
    expect(() => new AdRecord({...defaultAdItem, price: -5})).toThrow('The price cannot be negative or greater than 9.999.999.')
})


/* @TODO check all validations */ 
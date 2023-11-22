const mapExamples = () => {
    const map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]);
    console.log("map:", map)

    const arrayFromMap = Array.from(map)
    console.log("arrayFromMap:", arrayFromMap)

    const mapCopy = new Map(Array.from(map))
    console.log("mapCopy:", mapCopy)

    const mapCopyWithUpdate = new Map(Array.from(map).concat([["c", 10]]))
    console.log("mapCopyWithUpdate:", mapCopyWithUpdate)

    const mappedMap = Array.from(map).map((v) => v[1] + 1)
    console.log("mappedMap:", mappedMap)

    const reducedMap1 = Array.from(map).reduce((a, v) => a + v[1], 0)
    console.log("reducedMap1:", reducedMap1)

    const reducedMap2 = Array.from(map).reduce((a, v) => { a.set(v[1], v[0]); return a }, new Map())
    console.log("reducedMap2:", reducedMap2)
}
mapExamples()


const typeExamples = () => {
    interface Address {
        street: string;
    };

    type Person = {
        name: string;
        address: Address;
    };

    const person: Person = {
        name: "Clara",
        address: {
            street: "Kalmgatan"
        }
    }
    console.log("person:", person)

    const updatedPerson1: Person = {
        ...person, name: "Clara Bjuvensjö"
    }
    console.log("updatedPerson1:", updatedPerson1)

    const updatedPerson2: Person = {
        ...person, address: { ...person.address, street: "Kalmisgatan" }
    }
    console.log("updatedPerson2:", updatedPerson2)
}
typeExamples()

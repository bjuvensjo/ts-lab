const functionalExamples1 = () => {
    interface Data {
        x: number;
        y: number;
        z: number;
    };

    // const nested: Data[][] = [
    const nested = [
        [
            { "x": 1, "y": 1, "z": 1 },
            { "x": 2, "y": 2, "z": 2 },
            { "x": 3, "y": 3, "z": 3 }
        ],
        [
            { "x": 4, "y": 4, "z": 4 },
            { "x": 5, "y": 5, "z": 5 },
            { "x": 6, "y": 6, "z": 6 }
        ]
    ]

    const newNested1 = nested.reduce((accumulator, dataArray) => {
        accumulator.push(dataArray.map((data) => [data.x, data.y]))
        return accumulator
    }, new Array())
    console.log("newNested1:", newNested1)

    const newNested2 = nested.map((dataArray) => dataArray.reduce((accumulator, data) => {
        accumulator.push([data.x, data.y])
        return accumulator
    }, new Array()))
    console.log("newNested2:", newNested2)

    const newNested3 = nested.map((dataArray) => dataArray.map((data) => [data.x, data.y]))
    console.log("newNested3:", newNested3)
}
functionalExamples1()


console.log("#####################################")


const functionalExamples2 = () => {
    interface ViewData {
        foo: string
        data: Data[]
    }
    interface Data {
        x: number
        y: number
        z: number
    };

    // const nested: Data[][] = [
    const nested: ViewData[] = [
        {
            foo: "a",
            data: [
                { "x": 1, "y": 1, "z": 1 },
                { "x": 2, "y": 2, "z": 2 },
                { "x": 3, "y": 3, "z": 3 }
            ]
        },
        {
            foo: "b",
            data: [
                { "x": 4, "y": 4, "z": 4 },
                { "x": 5, "y": 5, "z": 5 },
                { "x": 6, "y": 6, "z": 6 }
            ]
        }
    ]

    const newNested1 = nested.map((viewData) => viewData.data.map((v) => [v.x, v.y]))
    console.log("newNested1:", newNested1)
}
functionalExamples2()

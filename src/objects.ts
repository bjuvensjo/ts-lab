const objectExamples = () => {
    let x: any = {
        a: 1
    }
    const i = 1
    x = {
        ...x
    }
    x[`c${i}`] = 3

    console.log("x:", x)

    const templateHeaders = ["a", "b", "c"]
    const row = [1, 2, 3, 4, 5, 6, 7, 8, "-", "-"]
    for (let i = 0; i < templateHeaders.length - 1; i++) {
        let j = i * 3 + 2
        console.log(row[j], row[j + 1], row[j + 2])
    }
}
objectExamples()


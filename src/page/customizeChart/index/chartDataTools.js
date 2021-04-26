export const doubleDataMerge = (data,type) => {
    let data1 = data[0]
    let data2 = data[1]
    console.log('data',data)
    console.log("type",type)
    let t = []
    data1.map((v, i) => {
        t.push({
            name : v.name,
            type : type[0],
            value : v.value
        })
        t.push({
            name : v.name,
            type : type[1],
            value : data2[i].value
        })
    })
    return t
}


export const singleData = (data, type) => {
    return data.map(v => {
        v.type = type
        return v
    })
}
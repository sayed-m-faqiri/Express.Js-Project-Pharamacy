const bodyParseSQL = (columns , body) => {
    const bodyArray = Object.entries(body)
    let values = []
    columnsforEach((col) => {
        const findItem = bodyArray.find((item) => {
            return item[0] == col
        })
        if(findItem[1]){
            values.push(`'${findItem[1]}'`)
        }
    })
    return values.join(",")
}

module.exports = {bodyParseSQL}

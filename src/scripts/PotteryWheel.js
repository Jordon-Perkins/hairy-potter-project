let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    let result = {"shape": shape,"weight": weight,"height": height,"id": primaryKey}
    primaryKey += 1
    return result
}

// module.exports = { makePottery }
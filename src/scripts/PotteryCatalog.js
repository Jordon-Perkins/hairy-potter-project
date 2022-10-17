const potteryToSell = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false) {
        potteryToSell.push(pottery)
    } else {
        return pottery
    }
    if ( pottery.weight >= 6) {
    pottery.price = 40
    } else {
        pottery.price = 20
    }
    return pottery
 }


 export const usePottery = () => {
     return [].concat(potteryToSell)
}


// module.exports = {toSellOrNotToSell, usePottery}

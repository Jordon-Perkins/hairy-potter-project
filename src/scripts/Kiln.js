// this function accepts two parameters;
// * pottery is expected to be an object that has been create from the makePottery function
// *tempuraature is expected to be a number 
// *this function will return the pottery object with two additional keys; fired, cracked


export const firePottery = (pottery, tempurature) => {
    pottery.fired = true
    if (tempurature > 2200) {
        pottery.cracked = true
    }  else {
        pottery.cracked = false
    }
    return pottery
}


// module.exports = { firePottery }
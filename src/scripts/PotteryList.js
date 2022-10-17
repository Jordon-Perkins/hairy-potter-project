import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let finalPottery = usePottery()
    let HTMLPottery = ""
    for (const pottery of finalPottery) {
    HTMLPottery += `<section class="pottery" id="pottery--${pottery.id}">`
    HTMLPottery += `<h2 class="pottery__shape">${pottery.shape}</h2>`
    HTMLPottery += `<div class="pottery__properties">Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height</div>`
    HTMLPottery += `<div class="pottery__price">Price is $${pottery.price}</div>`
    HTMLPottery += `</section>`
    }
    return HTMLPottery
}





/* {<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">Mug</h2>
  <div class="pottery__properties">
    Item weighs 3 grams and is 6 cm in height
  </div>
  <div class="pottery__price">Price is $20</div>
</section> }*/


// module.exports = {PotteryList}
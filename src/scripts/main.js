// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"



// Make 5 pieces of pottery at the wheel
let goblet = makePottery("goblet", "3", "5")
let mug = makePottery("mug", "7", "1")
let punchBowl = makePottery("punch bowl", "2", "8")
let platter = makePottery("platter", "9", "4")
let vase = makePottery("vase", "6", "2")

// Fire each piece of pottery in the kiln

goblet = firePottery(goblet, 450)
mug = firePottery(mug, 5400)
punchBowl = firePottery(punchBowl, 6280)
platter = firePottery(platter, 8902)
vase = firePottery(vase, 670)
// Determine which ones should be sold, and their price

goblet = toSellOrNotToSell(goblet)
mug = toSellOrNotToSell(mug)
punchBowl = toSellOrNotToSell(punchBowl)
platter = toSellOrNotToSell(platter)
vase = toSellOrNotToSell(vase)


// Invoke the component function that renders the HTML list

goblet = PotteryList(goblet)
console.log(goblet)
mug = PotteryList(mug)
console.log(mug)
punchBowl = PotteryList(punchBowl)
console.log(punchBowl)
platter = PotteryList(platter)
console.log(platter)
vase = PotteryList(vase)
console.log(vase)


const mainContainer = document.querySelector(".potteryList")

mainContainer.innerHTML = PotteryList()
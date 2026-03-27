/* local data */

const indexCash = 0;
const indexBrick = 1;
const indexFood = 2;
const indexTool = 3;
const indexWine = 4;
const indexCloth = 5;

const resourceValue = [0,3,4,5,6,7];

const resourceNames = ["££","BR","FO","TO","WI","CL"];

let tick = " \u2705 ";
let cross = " \u274C ";
let mercFailColour = "#F9967A"

let dataArch = {
  //archHousesCurrent:[0,0,0,0,0,0],
  archHousesReqd:[0,0,0,0,0,0],
  archHousesCurrentStrict:[0,0,0,0,0,0],

  archHousesAdd:[0,0,0,0,0,0],
  archHousesAddFree:[0,0,0,0,0,0],
  archHousesAddStrict:[0,0,0,0,0,0],

  archHousesDeltaPossible:[0,0,0,0,0],

  archHousesTotalPossible:[0,0,0,0,0,0],

  archPost:[0,0,0,0,0,0],

  archMoreHousesAvailable:[0,0,0,0,0,0],


  archBuildCost:[0,0,0,0,0,0],
  archBuildCostCash:0,
  archBuildCostBrick:0,
  archBuildCostFood:0,
  archBuildCostTool:0,
  archBuildCostWine:0,
  archBuildCostCloth:0,

  runOutOf:[true,true,true,true,true,true],

  archStrictStoreRemaining:[0,0,0,0,0,0],

  senatorStoreReqd:[0,0,0,0,0,0],

  freeBuildCashValue:[0,0,0,0,0,0],
  freeBuildCashValueTotal:0,


} // dataArch

let fieldValues = {
  storeCurrent:[0,0,0,0,0,0],
  archStoreReqd:[0,0,0,0,0,0],
  storeCurrentStrict:[0,0,0,0,0,0],
  storeCurrentCashValue:[0,0,0,0,0,0],
  storeCurrentCashValueTotal:0,

  storeStrictMinusFree:[0,0,0,0,0,0],
  storeTotalReqd:[0,0,0,0,0,0],
  storeCurrentStatusDelta:[0,0,0,0,0,0],

  storeCurrentResourceTypeFailCount: 0,
  storeCurrentResourceFailCount: 0,
  storeCurrentCashFail: false,
  storeCurrentResourceFail: false,
  storeCurrentMysteryFail: false,
  storeCurrentMysteryDelta: 0,
  storeCurrentMysteryAvailable:0,
  storeCurrentStatusString: "",

  postMercCashFail: false,
  postMercResourceFail: false,
  postMercMysteryFail: false,
  postMercMysteryDelta: 0,
  postMercMysteryAvailable:0,
  postMercSuccessNow: false,

  senatorMysteryReqd:0,




  mercBuyBrick:0,
  mercBuyFood:0,
  mercBuyTool:0,
  mercBuyWine:0,
  mercBuyCloth:0,

  mercSellBrick:0,
  mercSellFood:0,
  mercSellTool:0,
  mercSellWine:0,
  mercSellCloth:0,

  mercRemCash:0,
  mercRemBrick:0,
  mercRemFood:0,
  mercRemTool:0,
  mercRemWine:0,
  mercRemCloth:0,

  archFreeMode:true,
  archModeFirstPass:true,

  

}

const TradeType = Object.freeze({
  BUY: "BUY",
  SELL : "SELL",
  NONE: "NONE"
});

let mercGlobal = {

  mercStore:[0,0,0,0,0,0],
  mercStorePreTrade:[0,0,0,0,0,0],
  mercStoreRunOut:[false,false,false,false,false],

  preMercSellValue:[0,0,0,0,0,0],
  mercBuyCount:[0,0,0,0,0,0],
  mercSellAct:[0,0,0,0,0,0],
  mercStorePostTrade:[0,0,0,0,0,0],

  mercBuyPot:[0,0,0,0,0,0],
  mercBuyAct:[0,0,0,0,0,0],
  mercSellPot:[0,0,0,0,0,0],
  mercSellAct:[0,0,0,0,0,0],

  mercTradeCount:0,

  lastTimeMercStore:[0,0,0,0,0,0],

  storePreSell:[0,0,0,0,0,0],
  sellInProgress:[false,false,false,false,false,false],
  sellInProgressTradeId:[0,0,0,0,0,0],
  sellQtyActual:[0,0,0,0,0,0],
  sellQtyPossible:[0,0,0,0,0,0],

  storeCashValue:[0,0,0,0,0,0],
  storePreBuy:[0,0,0,0,0],
  buyInProgress:[false,false,false,false,false,false],
  buyInProgressTradeId:[0,0,0,0,0,0],
  buyTradeCount:0,
  storeTradeBuyArray:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
  buyQtyActual:[0,0,0,0,0,0],
  buyQtyPossible:[0,0,0,0,0,0],
  storeFinal:[0,0,0,0,0,0],

  storeOut:[0,0,0,0,0,0],
  storeIn:[0,0,0,0,0,0],
  totalTradeDelta:[0,0,0,0,0,0],
  cashBonus:0,


  
  totalStoreCashValue:0,

  hideArchFree:false,
  hideArchStrict:false,
  postMercMysteryAvailable:0,

  preMercDelta:[0,0,0,0,0,0],
  postMercDelta:[0,0,0,0,0,0],

  mercFinalReqdDelta:[0,0,0,0,0,0],
}

let preMercStatus = {
  achieved:false,
  cashDelta:0,
  resourceOnlyFailCount:0,
  resourceAllFailCount:0,
  resourceDelta:[0,0,0,0,0,0],
}

const MercType = Object.freeze({
  MERC0: "MERC0",
  MERC3: "MERC3",
  MERC5: "MERC5",
});

let postMercStatus = {
  achieved:false,
  achievable:false,

  resourceOnlyFailCount:0,
  resourceAllFailCount:0, // includes cash
  resourceOnlyPassCount:0,
  resourceAllPassCount:0, // includes cash

  resourceDeltaArr:[0,0,0,0,0,0],
  resourceDeltaCashValueArr:[0,0,0,0,0,0],
  sellResourceValueRequired:0,

  currentTradeCount:0,

  cashDelta:0,
  // Cash delta when taking into account spare and ising resource values, as well as normal cashDelta
  cashDeltaIncludeSpareAndMissing:0,
  // alwyas +ve
  totalMissingResourceValue:0,
  // always +ve
  totalSpareResourceValue:0,
  resourceSpareCashValueArr:[0,0,0,0,0,0],
  resourceMissingCashValueArr:[0,0,0,0,0,0], // always +ve
  resourceSpareCashValueSortedArr:[0,0,0,0,0],
  resourceMissingCashValueSortedArr:[0,0,0,0,0], // always +ve

  netDeltaCashTwoMercators:0,

  tradesBuyRequired:0,
  tradesSellRequired:0,
  tradeCountRequiredBasic:0,
  tradeCountRequired:0,
  tradeIsPossible:false,
  additionalTradesReqd:0,

  postMercStatusString:"", 
  mercActive:MercType.MERC3, 
  lastMercActive:MercType.MERC3, 



}

let settings = {
  showSenator : false,
  showCashValues : true,
  showArchitectOnly: false,

}

let scores = {
  jupCount: 0,
  jupCards: 0,
  jupVp: 0,

  satCount: 0,
  satCards: 0,
  satVp: 0,

  venusCount: 0,
  venusCards: 0,
  venusVp: 0,

  mercuriousCount: 0,
   mercuriousCards: 0,
   mercuriousVp: 0,

  marsCount: 0,
  marsCards: 0,
  marsVp: 0,

  minBCount: 0,
  minBCards: 0,
  minBVp: 0,

  minFCount: 0,
  minFCards: 0,
  minFVp: 0,

  minTCount: 0,
  minTCards: 0,
  minTVp: 0,

  minWCount: 0,
  minWCards: 0,
  minWVp: 0,

  minCCount: 0,
  minCCards: 0,
  minCVp: 0,

  concoridaVp: 0,
  concordiaCards: 0,

  cashTotal: 0,
  vestaVp: 0,

  totalVp: 0,

}

function SortLastFiveWithIndexes(arr) {
    if (!Array.isArray(arr) || arr.length !== 6 || !arr.every(Number.isInteger)) {
        throw new Error("Input must be an array of 6 integers");
    }

    // Take last 5 elements (index 1 → 5) and pair with original indexes
    const paired = arr.slice(1).map((value, i) => ({
        value,
        originalIndex: i + 1 // offset because we sliced from index 1
    }));

    // Sort descending
    paired.sort((a, b) => b.value - a.value);

    // Return separate arrays
    return {
        sorted: paired.map(item => item.value),
        indexes: paired.map(item => item.originalIndex)
    };
}

function ShiftLeftKeepLength(arr) {
    if (!Array.isArray(arr) || arr.length !== 5 || !arr.every(Number.isInteger)) {
        throw new Error("Input must be an array of 5 integers");
    }

    // Move elements left
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Fill last position (choose what makes sense: 0, null, etc.)
    arr[arr.length - 1] = 0;

    return arr;
}
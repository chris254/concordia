/* local data */

const indexCash = 0;
const indexBrick = 1;
const indexFood = 2;
const indexTool = 3;
const indexWine = 4;
const indexCloth = 5;

const resourceValue = [0,3,4,5,6,7];


let dataArch = {
  archHousesCurrent:[0,0,0,0,0,0],
  archHousesAdd:[0,0,0,0,0,0],

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

  archSpareResource:[0,0,0,0,0,0],

}

let fieldValues = {
  storeCurrent:[0,0,0,0,0,0],

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
  mercTotalDelta:[0,0,0,0,0,0],

  lastTimeMercStore:[0,0,0,0,0,0],

  mercSellDelta:[0,0,0,0,0,0],
  mercBuyDelta:[0,0,0,0,0,0],

  mercHouses:[0,0,0,0,0,0],

  storePreSell:[0,0,0,0,0,0],
  sellInProgress:[false,false,false,false,false,false],
  sellInProgressTradeId:[0,0,0,0,0,0],
  tradeSellCount:[0,0,0,0,0,0],
  sellTradeCount:0,
  storeTradeSellArray:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
  sellQtyActual:[0,0,0,0,0,0],
  sellQtyPossible:[0,0,0,0,0,0],

  storeCashValue:[0,0,0,0,0,0],
  storePreBuy:[0,0,0,0,0],
  buyInProgress:[false,false,false,false,false,false],
  buyInProgressTradeId:[0,0,0,0,0,0],
  tradeBuyCount:[0,0,0,0,0,0],
  buyTradeCount:0,
  storeTradeBuyArray:[[0,0,0,0,0,0],[0,0,0,0,0,0]],
  buyQtyActual:[0,0,0,0,0,0],
  buyQtyPossible:[0,0,0,0,0,0],
  storeFinal:[0,0,0,0,0,0],

  totalTradeCount:0,
  



}

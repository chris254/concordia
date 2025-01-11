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
  archHousesCurrentBrick:0,
  archHousesCurrentFood:0,
  archHousesCurrentTool:0,
  archHousesCurrentWine:0,
  archHousesCurrentCloth:0,

  archHousesDeltaPossibleBrick:0,
  archHousesDeltaPossibleFood:0,
  archHousesDeltaPossibleTool:0,
  archHousesDeltaPossibleWine:0,
  archHousesDeltaPossibleCloth:0,

  archHousesTotalPossible:[0,0,0,0,0,0],

  archRemCash:0,
  archRemBrick:0,
  archRemFood:0,
  archRemTool:0,
  archRemWine:0,
  archRemCloth:0,

  archMoreHousesAvailableBrick:false,
  archMoreHousesAvailableFood:false,
  archMoreHousesAvailableTool:false,
  archMoreHousesAvailableWine:false,
  archMoreHousesAvailableCloth:false,

  archBuildCostCash:0,
  archBuildCostBrick:0,
  archBuildCostFood:0,
  archBuildCostTool:0,
  archBuildCostWine:0,
  archBuildCostCloth:0,

  runOutOfCash:false,
  runOutOfBrick:false,
  runOutOfFood:false,
  runOutOfTool:false,
  runOutOfWine:false,
  runOutOfCloth:false,
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

  mercDeltaCash:0,
  mercDeltaBrick:0,
  mercDeltaFood:0,
  mercDeltaTool:0,
  mercDeltaWine:0,
  mercDeltaCloth:0,

  mercBuyAvailBrick:0,
  mercBuyAvailFood:0,
  mercBuyAvailTool:0,
  mercBuyAvailWine:0,
  mercBuyAvailCloth:0,

  mercTradeCount:0,

  mercTradeActiveBrick:false,
  mercTradeActiveFood:false,
  mercTradeActiveTool:false,
  mercTradeActiveWine:false,
  mercTradeActiveCloth:false,

  archToBankCash:0,
  archFromBankCash:0,
  mercToBankCash:0,
  mercFromBankCash:0,

  archFreeMode:false,
  archModeFirstPass:true,


}

let mercGlobal = {

  trade1RemCash:0,
  trade1RemBrick:0,
  trade1RemFood:0,
  trade1RemTool:0,
  trade1RemWine:0,
  trade1RemCloth:0,

  trade2RemCash:0,
  trade2RemBrick:0,
  trade2RemFood:0,
  trade2RemTool:0,
  trade2RemWine:0,
  trade2RemCloth:0,

  mercStore:[0,0,0,0,0,0],
  mercStorePreTrade:[0,0,0,0,0,0],
  mercStoreRunOut:[false,false,false,false,false],

  preMercCashValue:[0,0,0,0,0,0],
  preMercStore:[0,0,0,0,0,0],


}

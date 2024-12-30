/* local data */
let dataArch = {
  archBrickHousesCurrent:0,
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

  archHousesTotalPossibleBrick:0,
  archHousesTotalPossibleFood:0,
  archHousesTotalPossibleTool:0,
  archHousesTotalPossibleWine:0,
  archHousesTotalPossibleCloth:0,

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
  storeCurrentCash:0,
  storeCurrentBrick:0,
  storeCurrentFood:0,
  storeCurrentTool:0,
  storeCurrentWine:0,
  storeCurrentCloth:0,


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

  preMercCash:0,
  preMercBrick:0,
  preMercFood:0,
  preMercTool:0,
  preMercWine:0,
  preMercCloth:0,

}

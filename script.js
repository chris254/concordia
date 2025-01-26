let elemBtnResetAll;
let elemBtnResetStoreCurrent;
let elemBtnResetArchitect;
let elemBtnResetMerc3;

let elemNumArchStoreCostCash;
let elemNumArchStoreCostBrick;
let elemNumArchStoreCostFood;
let elemNumArchStoreCostTool;
let elemNumArchStoreCostWine;
let elemNumArchStoreCostCloth;

let elemNumArchRemainingCash;
let elemNumArchRemainingBrick;
let elemNumArchRemainingFood;
let elemNumArchRemainingTool;
let elemNumArchRemainingWine;
let elemNumArchRemainingCloth;

let elemNumMercStoreOutCash;
let elemNumMercStoreOutBrick;
let elemNumMercStoreOutFood;
let elemNumMercStoreOutTool;
let elemNumMercStoreOutWine;
let elemNumMercStoreOutCloth;

let elemNumMercRemainingCash;
let elemNumMercDeltaBrick;
let elemNumMercDeltaFood;
let elemNumMercDeltaTool;
let elemNumMercDeltaWine;
let elemNumMercDeltaCloth;

let elemNumArchitectHousesActualBrick;
let elemNumArchitectHousesActualFood;
let elemNumArchitectHousesActualTool;
let elemNumArchitectHousesActualWine;
let elemNumArchitectHousesActualCloth;

let elemNumArchTotalPossible = [0, 0, 0, 0, 0, 0];

const brickHouseCost = 1;
const foodHouseCost = 2;
const toolHouseCost = 3;
const wineHouseCost = 4;
const clothHouseCost = 5;

let elemBtnArch;
let elemBtnMerc;

const CardType = Object.freeze({
  ARCHITECT: "ARCH",
  MERC3: "MERC3",
  MERC5: "MERC5",
});

const MercType = Object.freeze({
  MERC3: "MERC3",
  MERC5: "MERC5",
});

let mercActive;
let lastMercActive;

const EditModeType = Object.freeze({
  STRICT: "STRICT",
  FREE: "FREE",
});

let elemBtnMode;
let editMode;
let btnEditMode;

let elemBtnMercSellBrick;

let btnIncArchBrick;
let btnIncArchFood;
let btnIncArchTool;
let btnIncArchWine;
let btnIncArchCloth;

let btnIncArchBrickAllowed;
let btnIncArchFoodAllowed;
let btnIncArchToolAllowed;
let btnIncArchWineAllowed;
let btnIncArchClothAllowed;

let btnDecArchBrick;
let btnDecArchFood;
let btnDecArchTool;
let btnDecArchWine;
let btnDecArchCloth;

let mercBrickDelta;
let mercFoodDelta;
let mercToolDelta;
let mercWineDelta;
let mercClothDelta;

let btnSellMercBrick;
let btnSellMercFood;
let btnSellMercTool;
let btnSellMercWine;
let btnSellMercCloth;

/* MERC ELEMENTS */
let elemBtnTrade1Mode;
let elemBtnTrade2Mode;

/* MERC GLOBALS */
let mercTrade1Mode;
let mercTrade2Mode;

const elemIdsMercStore = ["num-store-merc-cash"];

const elemNumMercStore = elemIdsMercStore.map((id) => document.getElementById(id));

const elemIdsPreMercStore = [
  "num-pre-merc-cash",
  "num-pre-merc-brick",
  "num-pre-merc-food",
  "num-pre-merc-tool",
  "num-pre-merc-wine",
  "num-pre-merc-cloth",
];

const elemNumPreMercStore = elemIdsPreMercStore.map((id) => document.getElementById(id));

const elemIdsMercStorePostTrade = [
  "num-post-merc-cash",
  "num-post-merc-brick",
  "num-post-merc-food",
  "num-post-merc-tool",
  "num-post-merc-wine",
  "num-post-merc-cloth",
];

const elemNumMercStorePostTrade = elemIdsMercStorePostTrade.map((id) => document.getElementById(id));

const elemIdsPreMercSellValue = [
  "num-pre-merc-cashvalue-cash",
  "num-pre-merc-cashvalue-brick",
  "num-pre-merc-cashvalue-food",
  "num-pre-merc-cashvalue-tool",
  "num-pre-merc-cashvalue-wine",
  "num-pre-merc-cashvalue-cloth",
];

const elemNumPreMercSellValue = elemIdsPreMercSellValue.map((id) => document.getElementById(id));

const elemIdsMercBuyAct = [
  "num-merc-buyact-cash",
  "num-merc-buyact-brick",
  "num-merc-buyact-food",
  "num-merc-buyact-tool",
  "num-merc-buyact-wine",
  "num-merc-buyact-cloth",
];

const elemNumMercBuyAct = elemIdsMercBuyAct.map((id) => document.getElementById(id));

const elemIdsMercSellAct = [
  "num-merc-sellact-cash",
  "num-merc-sellact-brick",
  "num-merc-sellact-food",
  "num-merc-sellact-tool",
  "num-merc-sellact-wine",
  "num-merc-sellact-cloth",
];

const elemNumMercSellAct = elemIdsMercSellAct.map((id) => document.getElementById(id));

const elemIdsBtnMercBuy = [
  "btn-merc-buy-cash",
  "btn-merc-buy-brick",
  "btn-merc-buy-food",
  "btn-merc-buy-tool",
  "btn-merc-buy-wine",
  "btn-merc-buy-cloth",
];

const elemBtnMercBuy = elemIdsBtnMercBuy.map((id) => document.getElementById(id));

const elemIdsBtnMercSell = [
  "btn-merc-sell-cash",
  "btn-merc-sell-brick",
  "btn-merc-sell-food",
  "btn-merc-sell-tool",
  "btn-merc-sell-wine",
  "btn-merc-sell-cloth",
];

const elemBtnMercSell = elemIdsBtnMercSell.map((id) => document.getElementById(id));

const elemIdsBtnMercMinus = [
  "btn-merc-minus-cash",
  "btn-merc-minus-brick",
  "btn-merc-minus-food",
  "btn-merc-minus-tool",
  "btn-merc-minus-wine",
  "btn-merc-minus-cloth",
];

const elemBtnMercMinus = elemIdsBtnMercMinus.map((id) => document.getElementById(id));

const elemIdsStoreCurrent = [
  "num-storecurrent-cash",
  "num-storecurrent-brick",
  "num-storecurrent-food",
  "num-storecurrent-tool",
  "num-storecurrent-wine",
  "num-storecurrent-cloth",
];

const elemNumStoreCurrent = elemIdsStoreCurrent.map((id) => document.getElementById(id));

let elemMercStore = [0, 0, 0, 0, 0];

let elemNumTrades;

document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  document.getElementById("version").textContent = "v1.10";

  elemNumTrades = document.getElementById("num-trades");
  elemBtnMode = document.getElementById("btn-mode");

  elemBtnMercSellBrick = document.getElementById("btn-merc-sell-brick");

  elemBtnResetAll = document.getElementById("btn-reset-all");
  elemBtnResetStoreCurrent = document.getElementById("btn-reset-storecurrent");
  elemBtnResetArchitect = document.getElementById("btn-reset-architect");
  elemBtnResetMerc3 = document.getElementById("btn-reset-merc3");

  elemNumArchStoreCostCash = document.getElementById("num-arch-store-cost-cash");
  elemNumArchStoreCostBrick = document.getElementById("num-arch-store-cost-brick");
  elemNumArchStoreCostFood = document.getElementById("num-arch-store-cost-food");
  elemNumArchStoreCostTool = document.getElementById("num-arch-store-cost-tool");
  elemNumArchStoreCostWine = document.getElementById("num-arch-store-cost-wine");
  elemNumArchStoreCostCloth = document.getElementById("num-arch-store-cost-cloth");

  elemNumArchRemainingCash = document.getElementById("num-arch-remaining-cash");
  elemNumArchRemainingBrick = document.getElementById("num-arch-remaining-brick");
  elemNumArchRemainingFood = document.getElementById("num-arch-remaining-food");
  elemNumArchRemainingTool = document.getElementById("num-arch-remaining-tool");
  elemNumArchRemainingWine = document.getElementById("num-arch-remaining-wine");
  elemNumArchRemainingCloth = document.getElementById("num-arch-remaining-cloth");

  elemNumArchitectHousesActualBrick = document.getElementById("num-arch-brickhouses-actual");
  elemNumArchitectHousesActualFood = document.getElementById("num-arch-foodhouses-actual");
  elemNumArchitectHousesActualTool = document.getElementById("num-arch-toolhouses-actual");
  elemNumArchitectHousesActualWine = document.getElementById("num-arch-winehouses-actual");
  elemNumArchitectHousesActualCloth = document.getElementById("num-arch-clothhouses-actual");

  elemNumArchTotalPossible[1] = document.getElementById("num-arch-brickhouses-potential");
  elemNumArchTotalPossible[2] = document.getElementById("num-arch-foodhouses-potential");
  elemNumArchTotalPossible[3] = document.getElementById("num-arch-toolhouses-potential");
  elemNumArchTotalPossible[4] = document.getElementById("num-arch-winehouses-potential");
  elemNumArchTotalPossible[5] = document.getElementById("num-arch-clothhouses-potential");

  elemBtnArch = document.getElementById("btn-arch");
  elemBtnMerc = document.getElementById("btn-merc");

  archFreeMode = false;
  editMode = EditModeType.STRICT;
  btnEditMode = document.getElementById("btn-edit-mode");

  mercActive = MercType.MERC3;
  lastMercActive = MercType.MERC3;

  btnIncArchBrick = document.getElementById("btn-inc-arch-brick");
  btnIncArchFood = document.getElementById("btn-inc-arch-food");
  btnIncArchTool = document.getElementById("btn-inc-arch-tool");
  btnIncArchWine = document.getElementById("btn-inc-arch-wine");
  btnIncArchCloth = document.getElementById("btn-inc-arch-cloth");

  btnDecArchBrick = document.getElementById("btn-dec-arch-brick");
  btnDecArchFood = document.getElementById("btn-dec-arch-food");
  btnDecArchTool = document.getElementById("btn-dec-arch-tool");
  btnDecArchWine = document.getElementById("btn-dec-arch-wine");
  btnDecArchCloth = document.getElementById("btn-dec-arch-cloth");

  btnDecStoreCash = document.getElementById("btn-dec-storecurrent-cash");
  btnDecStoreBrick = document.getElementById("btn-dec-storecurrent-brick");
  btnDecStoreFood = document.getElementById("btn-dec-storecurrent-food");
  btnDecStoreTool = document.getElementById("btn-dec-storecurrent-tool");
  btnDecStoreWine = document.getElementById("btn-dec-storecurrent-wine");
  btnDecStoreCloth = document.getElementById("btn-dec-storecurrent-cloth");

  btnBuyMercBrick = document.getElementById("btn-buy-merc-brick");
  btnBuyMercFood = document.getElementById("btn-buy-merc-food");
  btnBuyMercTool = document.getElementById("btn-buy-merc-tool");
  btnBuyMercWine = document.getElementById("btn-buy-merc-wine");
  btnBuyMercCloth = document.getElementById("btn-buy-merc-cloth");

  btnSellMercBrick = document.getElementById("btn-dec-merc-brick");
  btnSellMercFood = document.getElementById("btn-dec-merc-food");
  btnSellMercTool = document.getElementById("btn-dec-merc-tool");
  btnSellMercWine = document.getElementById("btn-dec-merc-wine");
  btnSellMercCloth = document.getElementById("btn-dec-merc-cloth");

  mercBrickDelta = 0;
  mercFoodDelta = 0;
  mercToolDelta = 0;
  mercWineDelta = 0;
  mercClothDelta = 0;

  dataArch.archHousesCurrent.fill(0);
  dataArch.archHousesCurrent[indexBrick] = 0;
  dataArch.archHousesCurrent[indexFood] = 0;
  dataArch.archHousesCurrent[indexTool] = 0;
  dataArch.archHousesCurrent[indexWine] = 0;
  dataArch.archHousesCurrent[indexCloth] = 0;

  fieldValues.mercBuyBrick = 0;
  fieldValues.mercBuyFood = 0;
  fieldValues.mercBuyTool = 0;
  fieldValues.mercBuyWine = 0;
  fieldValues.mercBuyCloth = 0;

  fieldValues.mercSellBrick = 0;
  fieldValues.mercSellFood = 0;
  fieldValues.mercSellTool = 0;
  fieldValues.mercSellWine = 0;
  fieldValues.mercSellCloth = 0;

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  elemBtnTrade1Mode = document.getElementById("btn-merc-trade1-mode");
  elemBtnTrade2Mode = document.getElementById("btn-merc-trade2-mode");

  mercTrade1Mode = "SELL";
  mercTrade2Mode = "BUY";

  UpdateAll();
});

function Dec(idNum) {
  if (idNum.includes("num-arch-brickhouses-actual"))
    dataArch.archHousesCurrent[indexBrick] = Max(0, dataArch.archHousesCurrent[indexBrick] - 1);
  if (idNum.includes("num-arch-foodhouses-actual"))
    dataArch.archHousesCurrent[indexFood] = Max(0, dataArch.archHousesCurrent[indexFood] - 1);
  if (idNum.includes("num-arch-toolhouses-actual"))
    dataArch.archHousesCurrent[indexTool] = Max(0, dataArch.archHousesCurrent[indexTool] - 1);
  if (idNum.includes("num-arch-winehouses-actual"))
    dataArch.archHousesCurrent[indexWine] = Max(0, dataArch.archHousesCurrent[indexWine] - 1);
  if (idNum.includes("num-arch-clothhouses-actual"))
    dataArch.archHousesCurrent[indexCloth] = Max(0, dataArch.archHousesCurrent[indexCloth] - 1);

  if (idNum.includes("num-storecurrent-cash") && !dataArch.runOutOfCash)
    fieldValues.storeCurrent[0] = Max(0, fieldValues.storeCurrent[0] - 1);
  if (idNum.includes("num-storecurrent-brick") && !dataArch.runOutOfBrick)
    fieldValues.storeCurrent[1] = Max(0, fieldValues.storeCurrent[1] - 1);
  if (idNum.includes("num-storecurrent-food") && !dataArch.runOutOfFood)
    fieldValues.storeCurrent[2] = Max(0, fieldValues.storeCurrent[2] - 1);
  if (idNum.includes("num-storecurrent-tool") && !dataArch.runOutOfTool)
    fieldValues.storeCurrent[3] = Max(0, fieldValues.storeCurrent[3] - 1);
  if (idNum.includes("num-storecurrent-wine") && !dataArch.runOutOfWine)
    fieldValues.storeCurrent[4] = Max(0, fieldValues.storeCurrent[4] - 1);
  if (idNum.includes("num-storecurrent-cloth") && !dataArch.runOutOfCloth)
    fieldValues.storeCurrent[5] = Max(0, fieldValues.storeCurrent[5] - 1);

  UpdateAll();
}

function IncMercStore(resourceId_) {
  if (resourceId_ === 0) {
    mercGlobal.mercStore[resourceId_] += 1;
    mercGlobal.mercStorePreTrade[resourceId_] += 1;
    mercGlobal.mercStorePostTrade[resourceId_] += 1;
  } else {
    mercGlobal.mercStorePreTrade[resourceId_] += 1;
    mercGlobal.mercStorePostTrade[resourceId_] += 1;
  }

  UpdateAll();
}

function DecMercStore(resourceId_) {
  if (resourceId_ === 0) {
    if (mercGlobal.mercStorePostTrade[0] > 0 && mercGlobal.mercStore[resourceId_] > 0) {
      mercGlobal.mercStore[resourceId_] -= 1;
      mercGlobal.mercStorePreTrade[resourceId_] -= 1;
      mercGlobal.mercStorePostTrade[resourceId_] -= 1;
    }
  } else {
    // Normal resource
    if (mercGlobal.mercStorePreTrade[resourceId_] > 0) {
      mercGlobal.mercStorePreTrade[resourceId_] -= 1;

      if (mercGlobal.mercStorePostTrade[resourceId_] > 0) mercGlobal.mercStorePostTrade[resourceId_] -= 1;

      //mercGlobal.mercStorePreTrade[resourceId_] -= 1;
    }
  }

  UpdateAll();
}

function SellBrick() {
  if (fieldValues.mercRemBrick > 0) fieldValues.mercSellBrick += 1;

  UpdateAll();
}

function SellFood() {
  if (fieldValues.mercRemFood > 0) fieldValues.mercSellFood += 1;

  UpdateAll();
}

function SellTool() {
  if (fieldValues.mercRemTool > 0) fieldValues.mercSellTool += 1;

  UpdateAll();
}

function SellWine() {
  if (fieldValues.mercRemWine > 0) fieldValues.mercSellWine += 1;

  UpdateAll();
}

function SellCloth() {
  if (fieldValues.mercRemCloth > 0) fieldValues.mercSellCloth += 1;

  UpdateAll();
}

function IncStore(id, maxValue) {
  if (id.includes("num-storecurrent-cash")) fieldValues.storeCurrent[0] += 1;
  if (id.includes("num-storecurrent-brick"))
    fieldValues.storeCurrent[1] = Math.min(10, fieldValues.storeCurrent[1] + 1);
  if (id.includes("num-storecurrent-food")) fieldValues.storeCurrent[2] = Math.min(10, fieldValues.storeCurrent[2] + 1);
  if (id.includes("num-storecurrent-tool")) fieldValues.storeCurrent[3] = Math.min(10, fieldValues.storeCurrent[3] + 1);
  if (id.includes("num-storecurrent-wine")) fieldValues.storeCurrent[4] = Math.min(10, fieldValues.storeCurrent[4] + 1);
  if (id.includes("num-storecurrent-cloth"))
    fieldValues.storeCurrent[5] = Math.min(10, fieldValues.storeCurrent[5] + 1);

  UpdateAll();
}

function IsGreyBackground(element) {
  const computedStyle = window.getComputedStyle(element);
  const backgroundColor = computedStyle.backgroundColor;

  // Standard grey colors
  const standardGreyRGB = "rgb(128, 128, 128)";
  const standardGreyHex = "#808080";

  // Check if the background color matches standard grey
  return backgroundColor === standardGreyRGB || backgroundColor.toLowerCase() === standardGreyHex;
}

// Function to update the result div with whether the

function Inc(idItem, idButton) {
  if (fieldValues.archFreeMode) {
    /* In free mode, bo limit to house building */
    if (idItem.includes("num-arch-brickhouses-actual")) dataArch.archHousesCurrent[indexBrick] += 1;
    if (idItem.includes("num-arch-foodhouses-actual")) dataArch.archHousesCurrent[indexFood] += 1;
    if (idItem.includes("num-arch-toolhouses-actual")) dataArch.archHousesCurrent[indexTool] += 1;
    if (idItem.includes("num-arch-winehouses-actual")) dataArch.archHousesCurrent[indexWine] += 1;
    if (idItem.includes("num-arch-clothhouses-actual")) dataArch.archHousesCurrent[indexCloth] += 1;
  } else {
    /* Strict mode. Need to see if more building is possible */
    /* idItem example: num-arch-brickhouses-actual */
    /* idButton example: btn-inc-arch-brick */
    if (dataArch.archMoreHousesAvailableBrick && idItem.includes("num-arch-brickhouses-actual"))
      dataArch.archHousesCurrent[indexBrick] += 1;
    if (dataArch.archMoreHousesAvailableFood && idItem.includes("num-arch-foodhouses-actual"))
      dataArch.archHousesCurrent[indexFood] += 1;
    if (dataArch.archMoreHousesAvailableTool && idItem.includes("num-arch-toolhouses-actual"))
      dataArch.archHousesCurrent[indexTool] += 1;
    if (dataArch.archMoreHousesAvailableWine && idItem.includes("num-arch-winehouses-actual"))
      dataArch.archHousesCurrent[indexWine] += 1;
    if (dataArch.archMoreHousesAvailableCloth && idItem.includes("num-arch-clothhouses-actual"))
      dataArch.archHousesCurrent[indexCloth] += 1;
  }

  UpdateAll();
}

function GetTotalResourceValue(brickCount, foodCount, toolCount, wineCount, clothCount) {
  return brickCount * 3 + foodCount * 4 + toolCount * 5 + wineCount * 6 + clothCount * 7;
}

function GetTotalHouseCost(brickCount, foodCount, toolCount, wineCount, clothCount) {
  return brickCount * 1 + foodCount * 2 + toolCount * 3 + wineCount * 4 + clothCount * 5;
}

function GetTotalBuildValue(brickCount, foodCount, toolCount, wineCount, clothCount) {
  return brickCount * 1 + foodCount * 2 + toolCount * 3 + wineCount * 4 + clothCount * 5;
}

function GetIntegerValue(str) {
  return parseInt(str) || 0;
}

/* ---------------------------------------------------------  --------------------------- */
/* STORE */
/* ------------------------------------------------------------------------------------ */
function GetStoreCashValue() {
  /* calculate cash */

  return GetTotalResourceValue(
    fieldValues.storeCurrent[1],
    fieldValues.storeCurrent[2],
    fieldValues.storeCurrent[3],
    fieldValues.storeCurrent[4],
    fieldValues.storeCurrent[5]
  );
}

function WriteFieldValueBlankZero(elem, value) {
  if (value === 0) {
    elem.textContent = "";
  } else {
    elem.textContent = value;
  }
}
function ResetStoreCurrent() {
  fieldValues.storeCurrent[0] = 0;
  fieldValues.storeCurrent[1] = 0;
  fieldValues.storeCurrent[2] = 0;
  fieldValues.storeCurrent[3] = 0;
  fieldValues.storeCurrent[4] = 0;
  fieldValues.storeCurrent[5] = 0;

  UpdateAll();
}

/* ------------------------------------------------------------------------------------ */
/* BUILD */
/* ------------------------------------------------------------------------------------ */

function ResetArchitect() {
  dataArch.archHousesCurrent[indexBrick] = 0;
  dataArch.archHousesCurrent[indexFood] = 0;
  dataArch.archHousesCurrent[indexTool] = 0;
  dataArch.archHousesCurrent[indexWine] = 0;
  dataArch.archHousesCurrent[indexCloth] = 0;

  UpdateAll();
}

function ProcessArchitectFree() {
  if (fieldValues.archModeFirstPass) {
  }

  /* building more houses is always valid */
  dataArch.archMoreHousesAvailableBrick = true;
  dataArch.archMoreHousesAvailableFood = true;
  dataArch.archMoreHousesAvailableTool = true;
  dataArch.archMoreHousesAvailableWine = true;
  dataArch.archMoreHousesAvailableCloth = true;

  /* Calculate store values from houses */
  fieldValues.storeCurrent[0] =
    dataArch.archHousesCurrent[indexBrick] * brickHouseCost +
    dataArch.archHousesCurrent[indexFood] * foodHouseCost +
    dataArch.archHousesCurrent[indexTool] * toolHouseCost +
    dataArch.archHousesCurrent[indexCloth] * clothHouseCost +
    dataArch.archHousesCurrent[indexWine] * wineHouseCost;

  fieldValues.storeCurrent[1] =
    dataArch.archHousesCurrent[indexFood] +
    dataArch.archHousesCurrent[indexTool] +
    dataArch.archHousesCurrent[indexCloth] +
    dataArch.archHousesCurrent[indexWine];

  fieldValues.storeCurrent[2] = dataArch.archHousesCurrent[indexBrick] + dataArch.archHousesCurrent[indexFood];

  fieldValues.storeCurrent[3] = dataArch.archHousesCurrent[indexTool];

  fieldValues.storeCurrent[4] = dataArch.archHousesCurrent[indexWine];

  fieldValues.storeCurrent[5] = dataArch.archHousesCurrent[indexCloth];
}

function ProcessArchitectStrict() {
  /* -------------------------------------------------------------- */
  /* Write to .archBuildCost */
  /* -------------------------------------------------------------- */
  dataArch.archBuildCostCash = GetTotalBuildValue(
    dataArch.archHousesCurrent[indexBrick],
    dataArch.archHousesCurrent[indexFood],
    dataArch.archHousesCurrent[indexTool],
    dataArch.archHousesCurrent[indexWine],
    dataArch.archHousesCurrent[indexCloth]
  );

  dataArch.archBuildCostBrick =
    dataArch.archHousesCurrent[indexFood] +
    dataArch.archHousesCurrent[indexTool] +
    dataArch.archHousesCurrent[indexWine] +
    dataArch.archHousesCurrent[indexCloth];

  dataArch.archBuildCostFood = dataArch.archHousesCurrent[indexBrick] + dataArch.archHousesCurrent[indexFood];
  dataArch.archBuildCostTool = dataArch.archHousesCurrent[indexTool];
  dataArch.archBuildCostWine = dataArch.archHousesCurrent[indexWine];
  dataArch.archBuildCostCloth = dataArch.archHousesCurrent[indexCloth];

  /* -------------------------------------------------------------- */
  /* Write to .archRem */
  /* -------------------------------------------------------------- */
  dataArch.archRemCash = fieldValues.storeCurrent[0] - dataArch.archBuildCostCash;
  dataArch.archRemBrick = fieldValues.storeCurrent[1] - dataArch.archBuildCostBrick;
  dataArch.archRemFood = fieldValues.storeCurrent[2] - dataArch.archBuildCostFood;
  dataArch.archRemTool = fieldValues.storeCurrent[3] - dataArch.archBuildCostTool;
  dataArch.archRemWine = fieldValues.storeCurrent[4] - dataArch.archBuildCostWine;
  dataArch.archRemCloth = fieldValues.storeCurrent[5] - dataArch.archBuildCostCloth;

  /* -------------------------------------------------------------- */
  /* Write to: */
  /* .archHousesDeltaPossible */
  /* .archMoreHousesAvailable */
  /* -------------------------------------------------------------- */
  dataArch.runOutOfCash = fieldValues.storeCurrent[0] > 0 && dataArch.archRemCash <= 0;
  dataArch.runOutOfBrick = fieldValues.storeCurrent[1] > 0 && dataArch.archRemBrick <= 0;
  dataArch.runOutOfFood = fieldValues.storeCurrent[2] > 0 && dataArch.archRemFood <= 0;
  dataArch.runOutOfTool = fieldValues.storeCurrent[3] > 0 && dataArch.storeCurrentCash > 0 && dataArch.archRemTool <= 0;
  dataArch.runOutOfWine = fieldValues.storeCurrent[4] > 0 && dataArch.archRemWine <= 0;
  dataArch.runOutOfCloth = fieldValues.storeCurrent[5] > 0 && dataArch.archRemCloth <= 0;

  /* --------------------------------------------------------------------- */
  /* BRICK HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleBrick = Min(Math.floor(dataArch.archRemCash / brickHouseCost), dataArch.archRemFood);
  dataArch.archMoreHousesAvailableBrick = dataArch.archHousesDeltaPossibleBrick > 0;

  dataArch.archHousesTotalPossible[1] = dataArch.archHousesDeltaPossibleBrick + dataArch.archHousesCurrent[indexBrick];

  /*dataArch.archRemCash >= brickHouseCost && dataArch.archRemFood >= 1;*/

  /* --------------------------------------------------------------------- */
  /* FOOD HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleFood = Min3(
    Math.floor(dataArch.archRemCash / foodHouseCost),
    dataArch.archRemBrick,
    dataArch.archRemFood
  );
  dataArch.archMoreHousesAvailableFood = dataArch.archHousesDeltaPossibleFood > 0;

  dataArch.archHousesTotalPossible[2] = dataArch.archHousesDeltaPossibleFood + dataArch.archHousesCurrent[indexFood];

  /* --------------------------------------------------------------------- */
  /* TOOL HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleTool = Min3(
    Math.floor(dataArch.archRemCash / toolHouseCost),
    dataArch.archRemBrick,
    dataArch.archRemTool
  );
  dataArch.archMoreHousesAvailableTool = dataArch.archHousesDeltaPossibleTool > 0;
  dataArch.archHousesTotalPossible[3] = dataArch.archHousesDeltaPossibleTool + dataArch.archHousesCurrent[indexTool];

  /* --------------------------------------------------------------------- */
  /* WINE HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleWine = Min3(
    Math.floor(dataArch.archRemCash / wineHouseCost),
    dataArch.archRemBrick,
    dataArch.archRemWine
  );
  dataArch.archMoreHousesAvailableWine = dataArch.archHousesDeltaPossibleWine > 0;
  dataArch.archHousesTotalPossible[4] = dataArch.archHousesDeltaPossibleWine + dataArch.archHousesCurrent[indexWine];

  /* --------------------------------------------------------------------- */
  /* CLOTH HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleCloth = Min3(
    Math.floor(dataArch.archRemCash / clothHouseCost),
    dataArch.archRemBrick,
    dataArch.archRemCloth
  );
  dataArch.archMoreHousesAvailableCloth = dataArch.archHousesDeltaPossibleCloth > 0;
  dataArch.archHousesTotalPossible[5] = dataArch.archHousesDeltaPossibleCloth + dataArch.archHousesCurrent[indexCloth];
}

function GetMercTradeActive(buy, sell) {
  return buy > 0 || sell > 0;
}

function Min3(value1, value2, value3) {
  if (value1 < value2) {
    /* cannot be value 2 as value 1 is less */
    return Min(value1, value3);
  } else {
    /* compare value 2 and value 3) */
    if (value2 < value3) {
      return value2;
    } else {
      return value3;
    }
  }
}

function SetStoreCurrentColour(elem, valueBefore, valueRemaining) {}
function SetBackgroundColor(elem, colour) {
  elem.style.backgroundColor = colour;
}

function ApplyBackground(elem) {
  elem.backgroundColor = "gray";
  /* elem.classList.add('grey-background');*/
}

function UpdateBuySellButton(elemBuyBtn, elemSellBtn, buyCount, sellCount, avail, rem) {
  if (buyCount > 0) {
    /* grey out the sell button */
    ApplyGreyBackground(elemSellBtn);
  } else if (sellCount > 0) {
    ApplyGreyBackground(elemBuyBtn);
  }

  elemBuyBtn.textContent = avail;
  elemSellBtn.textContent = rem;
}

function DisplayDelta(elem, value) {
  if (value < 0) {
    elem.textContent = value;
  } else if (value > 0) {
    elem.textContent = "+" + value;
  } else {
    elem.textContent = "";
  }
}

function MercTradeDelta(resourceId) {
  return mercGlobal.mercStorePostTrade[resourceId] - mercGlobal.mercStorePreTrade[resourceId];
}

function CanBuyResource(resourceId) {
  // Money is available to buy a single resource
  return mercGlobal.mercStorePostTrade[0] >= resourceValue[resourceId];
}

function CanSellResource(resourceId) {
  // Post trade resouirce count is > 0
  return mercGlobal.mercStorePostTrade[resourceId] > 0;
}

function CalcTradeCount() {
  let tradeCountLocal = 0;

  mercGlobal.mercBuyCash = 0;
  mercGlobal.mercSellCash = 0;

  for (let resourceId = 1; resourceId <= 5; resourceId++) {
    mercGlobal.mercDeltaResource[resourceId] =
      mercGlobal.mercStorePostTrade[resourceId] - mercGlobal.mercStorePreTrade[resourceId];

    if (mercGlobal.mercDeltaResource[resourceId] > 0) {
      mercGlobal.mercBuyCash += mercGlobal.mercDeltaResource[resourceId] * resourceValue[resourceId];
    } else if (mercGlobal.mercDeltaResource[resourceId] < 0) {
      mercGlobal.mercSellCash += -mercGlobal.mercDeltaResource[resourceId] * resourceValue[resourceId];
    }

    if (mercGlobal.mercDeltaResource[resourceId] != 0) {
      tradeCountLocal++;
    }

    mercGlobal.mercTradeCount = tradeCountLocal;
  }

  mercGlobal.mercDeltaResource[0] = mercGlobal.mercSellCash - mercGlobal.mercBuyCash;
}

// -------------------------------------------------------------------------
// FUNCTION BUYRESOURCE
// -------------------------------------------------------------------------
function BuyResource(resourceId) {
  // Get all merc data up to date
  ProcessMerc();

  if (!SellActive(resourceId)) {
    if (BuyActive(resourceId)) {
      // Buy is already active for this resource.
      // Can another purchase be made?
      if (CanBuyResource(resourceId)) {
        mercGlobal.mercStorePostTrade[resourceId] += 1;
        mercGlobal.mercStorePostTrade[0] -= resourceValue[resourceId];
      }
    } else {
      // Not a current active trade
      if ((mercGlobal.mercTradeCount < 2 && CanBuyResource(resourceId)) || SellActive(resourceId)) {
        mercGlobal.mercStorePostTrade[resourceId] += 1;
        mercGlobal.mercStorePostTrade[0] -= resourceValue[resourceId];
      }
    }
  }

  UpdateAll();
}

function BuyMinus(resourceId) {
  mercGlobal.mercStorePostTrade[resourceId] -= 1;
  mercGlobal.mercStorePostTrade[0] += resourceValue[resourceId];

  CalcTradeCount();
}

function SellMinus(resourceId) {
  mercGlobal.mercStorePostTrade[resourceId] += 1;
  mercGlobal.mercStorePostTrade[0] -= resourceValue[resourceId];

  CalcTradeCount();
}

function SellResource(resourceId) {
  // Get all merc data up to date
  ProcessMerc();

  if (!BuyActive(resourceId)) {
    if (SellActive(resourceId)) {
      // Sell is already active

      if (CanSellResource(resourceId)) {
        mercGlobal.mercStorePostTrade[resourceId] -= 1;
        mercGlobal.mercStorePostTrade[0] += resourceValue[resourceId];
      }
    } else {
      // Not a current active trade
      if ((mercGlobal.mercTradeCount < 2 && CanSellResource(resourceId)) || BuyActive(resourceId)) {
        mercGlobal.mercStorePostTrade[resourceId] -= 1;
        mercGlobal.mercStorePostTrade[0] += resourceValue[resourceId];
      }
    }
  }

  UpdateAll();
}

function TradeActive(resourceId) {
  return MercTradeDelta(resourceId) != 0;
}

let firstPass = true;

function ProcessMerc() {
  CalcTradeCount();

  let mercCardChangedThisPass = mercActive != lastMercActive;

  if (firstPass) {
    mercGlobal.mercStorePreTrade[0] = 3;
    mercGlobal.mercStorePostTrade[0] = 3;

    firstPass = false;
  }

  // Add 3 or 5 coins for merc type
  //if (mercActive === CardType.MERC3) mercGlobal.mercStorePreTrade[0] = mercGlobal.mercStore[indexCash] + 3;
  //if (mercActive === CardType.MERC5) mercGlobal.mercStorePreTrade[0] = mercGlobal.mercStore[indexCash] + 5;

  // Calculate (for resource only, and not cash):
  //   mercGlobal.preMercCashValue
  //   mercGlobal.mercBuyPot
  let currentCashValue = 0;
  let deltaCashThisResource = 0;
  mercGlobal.preMercSellValue[0] = 0; // Start with zero before getting the sell value for all resources

  if (mercGlobal.mercTradeCount === 0) mercGlobal.mercStorePostTrade[0] = mercGlobal.mercStorePreTrade[0];

  // -------------------------------------------------------------------
  // Calculate sell values for pre trade numbers
  // -------------------------------------------------------------------
  let totalCashValue = 0;
  for (let index = 1; index <= 5; index++) {
    // currentCashValue is the value if all of this resource was sold
    currentCashValue = mercGlobal.mercStorePreTrade[index] * resourceValue[index];
    mercGlobal.preMercSellValue[index] = currentCashValue;

    totalCashValue += currentCashValue;
  }

  mercGlobal.preMercSellValue[0] = totalCashValue;

  // -------------------------------------------------------------------
  // Calculate trade data
  // -------------------------------------------------------------------
  // mercGlobal.mercStorePreTrade
  let resourceId;
  let resourceDelta;
  let cashDeltaThisTrade;
  let cashPreTrade = mercGlobal.mercStorePreTrade[0];
  let cashTotalDelta = 0;

  for (resourceId = 1; resourceId <= 5; resourceId++) {
    // Buy numbers
    mercGlobal.mercBuyPot[resourceId] = Math.floor(mercGlobal.mercStorePostTrade[0] / resourceValue[resourceId]);
    mercGlobal.mercBuyAct[resourceId] = Math.max(
      mercGlobal.mercStorePostTrade[resourceId] - mercGlobal.mercStorePreTrade[resourceId],
      0
    );

    // Sell numbers
    mercGlobal.mercSellPot[resourceId] = mercGlobal.mercStorePostTrade[resourceId];
    mercGlobal.mercSellAct[resourceId] = Math.max(
      mercGlobal.mercStorePreTrade[resourceId] - mercGlobal.mercStorePostTrade[resourceId],
      0
    );
  }

  for (resourceId = 1; resourceId <= 5; resourceId++) {}

  lastMercActive = mercActive;
  for (let resourceId = 0; resourceId <= 5; resourceId++) {
    mercGlobal.lastTimeMercStore = mercGlobal.mercStorePreTrade[resourceId];
  }

  CalcTradeCount();
}

function ResetArchitect() {
  dataArch.archHousesCurrent[indexBrick] = 0;
  dataArch.archHousesCurrent[indexFood] = 0;
  dataArch.archHousesCurrent[indexTool] = 0;
  dataArch.archHousesCurrent[indexWine] = 0;
  dataArch.archHousesCurrent[indexCloth] = 0;

  UpdateAll();
}

function ConvertZeroesToBlank(id, value) {
  if (value === 0) {
    id.textContent = "";
  } else {
    id.textContent = value;
  }
}

function ResetAll() {
  ResetStoreCurrent();
  ResetArchitect();
}

function ResetMerc() {
  fieldValues.mercBuyBrick = 0;
  fieldValues.mercBuyFood = 0;
  fieldValues.mercBuyTool = 0;
  fieldValues.mercBuyWine = 0;
  fieldValues.mercBuyCloth = 0;
  fieldValues.mercBuyWine = 0;
  mercBrickDelta = 0;
  mercFoodDelta = 0;
  mercToolDelta = 0;
  mercWineDelta = 0;
  mercClothDelta = 0;

  UpdateAll();
}

function UpdateRemGui(elem, storeCurrent, storeRem, archFreeMode) {
  if (archFreeMode) {
    elem.textContent = "";
  } else {
    if ((storeRem === 0 && storeCurrent > 0) || storeRem > 0) {
      /* Must have spent it all */
      elem.textContent = storeRem;
    } else {
      elem.textContent = "";
    }
  }
}

function UpdateActGui(elem, actual) {
  if (actual === 0) {
    /* Must have spent it all */
    elem.textContent = "";
  } else {
    elem.textContent = actual;
  }
}

function SetArchStoreBackground(elem, valueCurrent, valueRemaining) {
  if (valueCurrent === 0) SetBackgroundColor(elem, "transparent");
  else if (valueRemaining === 0) SetBackgroundColor(elem, "red");
}

function SetArchStoreActColour(elem, noneLeft, valueCurrent) {
  if (valueCurrent == 0) SetBackgroundColor(elem, "gray");
  else SetBackgroundColor(elem, "white");
}

function SetArchBuildDecColour(elem, valueCurrent) {
  if (valueCurrent === 0) SetBackgroundColor(elem, "gray");
  else SetBackgroundColor(elem, "orange");
}

function SetArchStoreDecColour(elem, noneLeft, valueCurrent) {
  if (noneLeft) SetBackgroundColor(elem, "red");
  else if (valueCurrent === 0) SetBackgroundColor(elem, "gray");
  else SetBackgroundColor(elem, "orange");
}

function SetArchBuilActColour(elem, delta, valueCurrent) {
  if (delta > 0) SetBackgroundColor(elem, "lightgreen");
  else if (delta === 0) SetBackgroundColor(elem, "red");
  else SetBackgroundColor(elem, "gray");
}

function UpdateGUIArch() {
  /* ------------------------------------------------------------- */
  /* Set architect build dec colour:                               */
  /*   gray: zero                                                  */
  /*   amber: non-zero                                             */
  /* ------------------------------------------------------------- */
  SetArchBuildDecColour(btnDecArchBrick, dataArch.archHousesCurrent[indexBrick]);
  SetArchBuildDecColour(btnDecArchFood, dataArch.archHousesCurrent[indexFood]);
  SetArchBuildDecColour(btnDecArchTool, dataArch.archHousesCurrent[indexTool]);
  SetArchBuildDecColour(btnDecArchWine, dataArch.archHousesCurrent[indexWine]);
  SetArchBuildDecColour(btnDecArchCloth, dataArch.archHousesCurrent[indexCloth]);

  /* ------------------------------------------------------------- */
  /* Set store current decrement colour:                           */
  /*    orange - if none Left (it's all been spent)                */
  /*    transparent - all other times                              */
  /* ------------------------------------------------------------- */
  SetArchStoreDecColour(btnDecStoreCash, dataArch.runOutOfCash, dataArch.archRemCash);
  SetArchStoreDecColour(btnDecStoreBrick, dataArch.runOutOfBrick, dataArch.archRemBrick);
  SetArchStoreDecColour(btnDecStoreFood, dataArch.runOutOfFood, dataArch.archRemFood);
  SetArchStoreDecColour(btnDecStoreTool, dataArch.runOutOfTool, dataArch.archRemTool);
  SetArchStoreDecColour(btnDecStoreWine, dataArch.runOutOfWine, dataArch.archRemWine);
  SetArchStoreDecColour(btnDecStoreCloth, dataArch.runOutOfCloth, dataArch.archRemCloth);

  /* ------------------------------------------------------------- */
  /* Set arch build actual colour:                           */
  /*    red - if none Left (it's all been spent)                */
  /* ------------------------------------------------------------- */
  SetArchBuilActColour(elemNumArchitectHousesActualBrick, dataArch.archHousesDeltaPossibleBrick, dataArch.archRemBrick);
  SetArchBuilActColour(elemNumArchitectHousesActualFood, dataArch.archHousesDeltaPossibleFood, dataArch.archRemFood);
  SetArchBuilActColour(elemNumArchitectHousesActualTool, dataArch.archHousesDeltaPossibleTool, dataArch.archRemTool);
  SetArchBuilActColour(elemNumArchitectHousesActualWine, dataArch.archHousesDeltaPossibleWine, dataArch.archRemWine);
  SetArchBuilActColour(elemNumArchitectHousesActualCloth, dataArch.archHousesDeltaPossibleCloth, dataArch.archRemCloth);

  /* ------------------------------------------------------------- */
  /* Set store current blank if zero */
  /* ------------------------------------------------------------- */
  WriteFieldValueBlankZero(elemNumStoreCurrent[0], fieldValues.storeCurrent[0]);
  WriteFieldValueBlankZero(elemNumStoreCurrent[1], fieldValues.storeCurrent[1]);
  WriteFieldValueBlankZero(elemNumStoreCurrent[2], fieldValues.storeCurrent[2]);
  WriteFieldValueBlankZero(elemNumStoreCurrent[3], fieldValues.storeCurrent[3]);
  WriteFieldValueBlankZero(elemNumStoreCurrent[4], fieldValues.storeCurrent[4]);
  WriteFieldValueBlankZero(elemNumStoreCurrent[5], fieldValues.storeCurrent[5]);

  /* ARCHITECT */
  UpdateActGui(elemNumArchitectHousesActualBrick, dataArch.archHousesCurrent[indexBrick]);
  UpdateActGui(elemNumArchitectHousesActualFood, dataArch.archHousesCurrent[indexFood]);
  UpdateActGui(elemNumArchitectHousesActualTool, dataArch.archHousesCurrent[indexTool]);
  UpdateActGui(elemNumArchitectHousesActualWine, dataArch.archHousesCurrent[indexWine]);
  UpdateActGui(elemNumArchitectHousesActualCloth, dataArch.archHousesCurrent[indexCloth]);

  if (fieldValues.archFreeMode) {
    elemNumArchTotalPossible[1].textContent = "";
    elemNumArchTotalPossible[2].textContent = "";
    elemNumArchTotalPossible[3].textContent = "";
    elemNumArchTotalPossible[4].textContent = "";
    elemNumArchTotalPossible[5].textContent = "";
  } else {
    elemNumArchTotalPossible[1].textContent = dataArch.archHousesTotalPossible[1];
    elemNumArchTotalPossible[2].textContent = dataArch.archHousesTotalPossible[2];
    elemNumArchTotalPossible[3].textContent = dataArch.archHousesTotalPossible[3];
    elemNumArchTotalPossible[4].textContent = dataArch.archHousesTotalPossible[4];
    elemNumArchTotalPossible[5].textContent = dataArch.archHousesTotalPossible[5];
  }

  elemNumArchRemainingCash.textContent = dataArch.archRemCash;
  elemNumArchRemainingBrick.textContent = dataArch.archRemBrick;
  elemNumArchRemainingFood.textContent = dataArch.archRemFood;
  elemNumArchRemainingTool.textContent = dataArch.archRemTool;
  elemNumArchRemainingWine.textContent = dataArch.archRemWine;
  elemNumArchRemainingCloth.textContent = dataArch.archRemCloth;

  /* Determine grey backgrounds */
  /* check for negative numbers */
  if (dataArch.archRemCash < 0) {
    elemNumArchRemainingCash.classList.add("red-background");
  } else {
    elemNumArchRemainingCash.classList.remove("red-background");
  }

  if (dataArch.archRemBrick < 0) {
    elemNumArchRemainingBrick.classList.add("red-background");
  } else {
    elemNumArchRemainingBrick.classList.remove("red-background");
  }

  if (dataArch.archRemFood < 0) {
    elemNumArchRemainingFood.classList.add("red-background");
  } else {
    elemNumArchRemainingFood.classList.remove("red-background");
  }

  if (dataArch.archRemTool < 0) {
    elemNumArchRemainingTool.classList.add("red-background");
  } else {
    elemNumArchRemainingTool.classList.remove("red-background");
  }

  if (dataArch.archRemWine < 0) {
    elemNumArchRemainingWine.classList.add("red-background");
  } else {
    elemNumArchRemainingWine.classList.remove("red-background");
  }

  if (dataArch.archRemCloth < 0) {
    elemNumArchRemainingCloth.classList.add("red-background");
  } else {
    elemNumArchRemainingCloth.classList.remove("red-background");
  }

  /* calculate future cash */

  ConvertZeroesToBlank(elemNumArchStoreCostCash, dataArch.archBuildCostCash);
  ConvertZeroesToBlank(elemNumArchStoreCostBrick, dataArch.archBuildCostBrick);
  ConvertZeroesToBlank(elemNumArchStoreCostFood, dataArch.archBuildCostFood);
  ConvertZeroesToBlank(elemNumArchStoreCostTool, dataArch.archBuildCostTool);
  ConvertZeroesToBlank(elemNumArchStoreCostWine, dataArch.archBuildCostWine);
  ConvertZeroesToBlank(elemNumArchStoreCostCloth, dataArch.archBuildCostCloth);

  UpdateRemGui(elemNumArchRemainingCash, fieldValues.storeCurrent[0], dataArch.archRemCash, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingBrick, fieldValues.storeCurrent[1], dataArch.archRemBrick, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingFood, fieldValues.storeCurrent[2], dataArch.archRemFood, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingTool, fieldValues.storeCurrent[3], dataArch.archRemTool, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingWine, fieldValues.storeCurrent[4], dataArch.archRemWine, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingCloth, fieldValues.storeCurrent[5], dataArch.archRemCloth, fieldValues.archFreeMode);

  /* --------------------------------------------------------------------- */
  /* Set grey backgrounds where applicable */
  /* --------------------------------------------------------------------- */
  if (!dataArch.archMoreHousesAvailableCloth) {
    btnIncArchCloth.classList.add("grey-background");
  } else {
    btnIncArchCloth.classList.remove("grey-background");
  }

  if (!dataArch.archMoreHousesAvailableBrick) {
    btnIncArchBrick.classList.add("grey-background");
  } else {
    btnIncArchBrick.classList.remove("grey-background");
  }

  if (!dataArch.archMoreHousesAvailableFood) {
    btnIncArchFood.classList.add("grey-background");
  } else {
    btnIncArchFood.classList.remove("grey-background");
  }

  if (!dataArch.archMoreHousesAvailableWine) {
    btnIncArchWine.classList.add("grey-background");
  } else {
    btnIncArchWine.classList.remove("grey-background");
  }

  if (!dataArch.archMoreHousesAvailableTool) {
    btnIncArchTool.classList.add("grey-background");
  } else {
    btnIncArchTool.classList.remove("grey-background");
  }
}

/* ---------------------------------------------------------------------------------------- */
/* Function: UpdateAll
/* ---------------------------------------------------------------------------------------- */
function UpdateAll() {
  /* Check to see if current architect houses selected are still affordable */

  if (fieldValues.archFreeMode) {
    ProcessArchitectFree();
  } else {
    ProcessArchitectStrict();
  }

  ProcessMerc();

  UpdateGUIArch();
  UpdateGUIMerc();

  fieldValues.archModeFirstPass = false;
}

function SetCardArch() {
  UpdateAll();
}

function SetCardMerc() {
  /* Toggle between MERC3 and MERC5 */
  if (mercActive === MercType.MERC3) {
    mercActive = MercType.MERC5;

    // Add two to the pre and post trade cash
    mercGlobal.mercStorePreTrade[0] += 2;
    mercGlobal.mercStorePostTrade[0] += 2;
  } else {
    // Going to merc 3, but can we take two cash away?
    if (mercGlobal.mercStorePostTrade[0] >= 2) {
      mercGlobal.mercStorePreTrade[0] -= 2;
      mercGlobal.mercStorePostTrade[0] -= 2;
      mercActive = MercType.MERC3;
    }
  }

  elemBtnMerc.textContent = mercActive;

  UpdateAll();
}

function ToggleEditMode() {
  if (fieldValues.archFreeMode) {
    fieldValues.archFreeMode = false;
    btnEditMode.textContent = "S";
  } else {
    fieldValues.archFreeMode = true;
    btnEditMode.textContent = "F";
  }

  fieldValues.archModeFirstPass = true;
  UpdateAll();
}

function BuyActive(resourceId) {
  return mercGlobal.mercStorePostTrade[resourceId] > mercGlobal.mercStorePreTrade[resourceId];
}

function SellActive(resourceId) {
  return mercGlobal.mercStorePostTrade[resourceId] < mercGlobal.mercStorePreTrade[resourceId];
}

function MercMinus(resourceId) {
  ProcessMerc();

  if (BuyActive(resourceId)) {
    // Pressing this will sell resource
    BuyMinus(resourceId);
  }

  if (SellActive(resourceId)) {
    SellMinus(resourceId);
  }
  UpdateAll();
}

// -------------------------------------------------------------------------------
function UpdateGUIMerc() {
  // -------------------------------------------------------------------------------

  let styleTradeAvailable = [
    "",
    "trade-avail-brick",
    "trade-avail-food",
    "trade-avail-tool",
    "trade-avail-wine",
    "trade-avail-cloth",
  ];
  let styleTradeFull = [
    "",
    "trade-full-brick",
    "trade-full-food",
    "trade-full-tool",
    "trade-full-wine",
    "trade-full-cloth",
  ];
  let styleMinus = ["", "minus-brick", "minus-food", "minus-tool", "minus-wine", "minus-cloth"];

  elemNumTrades.textContent = mercGlobal.mercTradeCount;

  elemNumMercStore[0].textContent = mercGlobal.mercStore[0];

  let resourceLookup = ["cash", "brick", "food", "tool", "wine", "cloth"];
  let styleResourceName = "";

  for (let resourceId = 0; resourceId <= 5; resourceId++) {
    styleResourceName = resourceLookup[resourceId];

    //--------------------------------------------------------------------
    // Pre
    //--------------------------------------------------------------------
    if (mercGlobal.mercStorePreTrade[resourceId] === 0) {
      elemNumPreMercStore[resourceId].textContent = "";
      elemNumPreMercStore[resourceId].classList.remove(styleResourceName);
    } else {
      elemNumPreMercStore[resourceId].textContent = mercGlobal.mercStorePreTrade[resourceId];
      elemNumPreMercStore[resourceId].classList.add(styleResourceName);
    }

    //--------------------------------------------------------------------
    // £??
    //--------------------------------------------------------------------
    if (mercGlobal.preMercSellValue[resourceId] === 0) {
      elemNumPreMercSellValue[resourceId].textContent = "";
      elemNumPreMercSellValue[resourceId].classList.remove(styleResourceName);
    } else {
      elemNumPreMercSellValue[resourceId].textContent = mercGlobal.preMercSellValue[resourceId];
      elemNumPreMercSellValue[resourceId].classList.add(styleResourceName);
    }

    //--------------------------------------------------------------------
    // Buy Actual
    //--------------------------------------------------------------------
    if (resourceId === 0) {
      if (mercGlobal.mercBuyCash === 0) {
        elemNumMercBuyAct[resourceId].textContent = " 0";
      } else {
        elemNumMercBuyAct[resourceId].textContent = "-" + mercGlobal.mercBuyCash;
      }
    } else {
      if (MercTradeDelta(resourceId) <= 0) {
        elemNumMercBuyAct[resourceId].textContent = "";
        elemNumMercBuyAct[resourceId].classList.remove(styleResourceName);
      } else {
        elemNumMercBuyAct[resourceId].textContent = MercTradeDelta(resourceId);
        elemNumMercBuyAct[resourceId].classList.add(styleResourceName);
      }
    }

    //--------------------------------------------------------------------
    // Sell Actual
    //--------------------------------------------------------------------
    if (resourceId === 0) {
      if (mercGlobal.mercSellCash === 0) {
        elemNumMercSellAct[resourceId].textContent = " 0";
      } else {
        elemNumMercSellAct[resourceId].textContent = "+" + mercGlobal.mercSellCash;
      }
    } else {
      if (SellActive(resourceId)) {
        elemNumMercSellAct[resourceId].textContent = mercGlobal.mercSellAct[resourceId];
        elemNumMercSellAct[resourceId].classList.add(styleResourceName);
      } else {
        (" Not active");
        elemNumMercSellAct[resourceId].textContent = "";
        elemNumMercSellAct[resourceId].classList.remove(styleResourceName);
      }
    }

    //--------------------------------------------------------------------
    // Post
    //--------------------------------------------------------------------
    if (resourceId === 0) {
      elemNumMercStorePostTrade[resourceId].classList.add(styleResourceName);
      elemNumMercStorePostTrade[resourceId].textContent = mercGlobal.mercStorePostTrade[resourceId];
    } else {
      if (mercGlobal.mercStorePostTrade[resourceId] === 0) {
        elemNumMercStorePostTrade[resourceId].textContent = "";
        elemNumMercStorePostTrade[resourceId].classList.remove(styleResourceName);
      } else {
        elemNumMercStorePostTrade[resourceId].textContent = mercGlobal.mercStorePostTrade[resourceId];
        elemNumMercStorePostTrade[resourceId].classList.add(styleResourceName);
      }
    }

    //--------------------------------------------------------------------
    // Merc Buy button colouring
    //--------------------------------------------------------------------
    if (resourceId != 0) {
      if (SellActive(resourceId)) {
        // Grey
        elemBtnMercBuy[resourceId].classList.remove(styleTradeAvailable[resourceId]);
        elemBtnMercBuy[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercBuy[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercBuy[resourceId].textContent = "";
      } else if (mercGlobal.mercBuyPot[resourceId] > 0) {
        /* style = 'trade-avail-' */
        elemBtnMercBuy[resourceId].classList.add(styleTradeAvailable[resourceId]);
        elemBtnMercBuy[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercBuy[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercBuy[resourceId].textContent = mercGlobal.mercBuyPot[resourceId];
      } else {
        // BuyPot will be zero
        if (mercGlobal.mercBuyAct[resourceId] > 0) {
          // Full
          elemBtnMercBuy[resourceId].classList.remove(styleTradeAvailable[resourceId]);
          elemBtnMercBuy[resourceId].classList.add(styleTradeFull[resourceId]);
          elemBtnMercBuy[resourceId].classList.remove(styleMinus[resourceId]);

          elemBtnMercBuy[resourceId].textContent = "x";
        } else {
          // None available to buy
          elemBtnMercBuy[resourceId].classList.remove(styleTradeAvailable[resourceId]);
          elemBtnMercBuy[resourceId].classList.remove(styleTradeFull[resourceId]);
          elemBtnMercBuy[resourceId].classList.remove(styleMinus[resourceId]);

          elemBtnMercBuy[resourceId].textContent = "";
        }
      }
    }

    //-----------------------------------------------------------------------
    // Merc Sell button colouring
    //-----------------------------------------------------------------------
    if (resourceId != 0) {
      if (BuyActive(resourceId)) {
        // Grey
        elemBtnMercSell[resourceId].classList.remove(styleTradeAvailable[resourceId]);
        elemBtnMercSell[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercSell[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercSell[resourceId].textContent = "";
      } else if (mercGlobal.mercSellPot[resourceId] > 0) {
        // Can still sell
        // Green
        elemBtnMercSell[resourceId].classList.add(styleTradeAvailable[resourceId]);
        elemBtnMercSell[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercSell[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercSell[resourceId].textContent = mercGlobal.mercSellPot[resourceId];
      } else {
        if (mercGlobal.mercSellAct[resourceId] > 0) {
          // full. Clear with x
          elemBtnMercSell[resourceId].classList.remove(styleTradeAvailable[resourceId]);
          elemBtnMercSell[resourceId].classList.add(styleTradeFull[resourceId]);
          elemBtnMercSell[resourceId].classList.remove(styleMinus[resourceId]);

          elemBtnMercSell[resourceId].textContent = "x";
        } else {
          // none available to sell
          // empty element
          elemBtnMercSell[resourceId].classList.remove(styleTradeAvailable[resourceId]);
          elemBtnMercSell[resourceId].classList.remove(styleTradeFull[resourceId]);
          elemBtnMercSell[resourceId].classList.remove(styleMinus[resourceId]);

          elemBtnMercSell[resourceId].textContent = "";
        }
      }
    }

    //-----------------------------------------------------------------------
    // Merc Minus button colouring
    //-----------------------------------------------------------------------
    if (resourceId != 0) {
      if (BuyActive(resourceId) || SellActive(resourceId)) {
        elemBtnMercMinus[resourceId].classList.remove(styleTradeAvailable[resourceId]);
        elemBtnMercMinus[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercMinus[resourceId].classList.add(styleMinus[resourceId]);

        elemBtnMercMinus[resourceId].textContent = "-";
      } else {
        elemBtnMercMinus[resourceId].classList.remove(styleTradeAvailable[resourceId]);
        elemBtnMercMinus[resourceId].classList.remove(styleTradeFull[resourceId]);
        elemBtnMercMinus[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercMinus[resourceId].textContent = " ";
      }
    }
  }
}

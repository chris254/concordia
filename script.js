let elemBtnResetAll;
let elemBtnResetStoreCurrent;
let elemBtnResetArchitect;
let elemBtnResetMerc3;

const styleMinus = ["", "minus-brick", "minus-food", "minus-tool", "minus-wine", "minus-cloth"];

const houseCost = [0,1,2,3,4,5];

let elemBtnArch;
let elemBtnMerc;

const CardType = Object.freeze({
  ARCHITECT: "ARCH",
  MERC3: "MERC3",
  MERC5: "MERC5",
});

const MercType = Object.freeze({
  MERC0: "MERC0",
  MERC3: "MERC3",
  MERC5: "MERC5",
});

const StylesType = Object.freeze({

  CLEAR: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  CLEAR_NORMAL: ["cash","brick","food","tool","wine","cloth"],
  CLEAR_THICK: ["clear-thick-cash","clear-thick-brick","clear-thick-food","clear-thick-tool","clear-thick-wine","clear-thick-cloth"],
  CLEAR_NORMAL_BOLD: ["clear-normal-bold-cash","clear-normal-bold-brick","clear-normal-bold-ood","clear-normal-bold-tool","clear-normal-bold-wine","clear-normal-bold-cloth"],
  CLEAR_THICK_BOLD: ["clear-thick-bold-cash","clear-thick-bold-brick","clear-thick-bold-food","clear-thick-bold-tool","clear-thick-bold-wine","clear-thick-bold-cloth"],


  ORANGE_NORMAL: ["orange-background-cash","orange-background-brick","orange-background-food","orange-background-tool","orange-background-wine","orange-background-cloth"],
  RED_NORMAL: ["red-background-cash","red-background-brick","red-background-food","red-background-tool","red-background-wine","red-background-cloth"],
  GREEN_NORMAL: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"],
  GREY_NORMAL: ["gray-background-cash","gray-background-brick","gray-background-food","gray-background-tool","gray-background-wine","gray-background-cloth"],
  BLUE_NORMAL: ["blue-background-cash","blue-background-brick","blue-background-food","blue-background-tool","blue-background-wine","blue-background-cloth"],

  RESOURCE_SPECIFIC: ["cash-background-black","brick-background-black","food-background-black","tool-background-black","wine-background-black","cloth-background-black"],

})


const MinusButtonType = Object.freeze({
  CLEAR: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  ORANGE_NORMAL: ["orange-background-cash","orange-background-brick","orange-background-food","orange-background-tool","orange-background-wine","orange-background-cloth"],
  RED_NORMAL: ["red-background-cash","red-background-brick","red-background-food","red-background-tool","red-background-wine","red-background-cloth"],
})

const ArchStateType = Object.freeze({
  CLEAR: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  GREEN_NORMAL: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"],
  CLEAR_THICK_BOLD: ["clear-thick-bold-cash","clear-thick-bold-brick","clear-thick-bold-food","clear-thick-bold-tool","clear-thick-bold-wine","clear-thick-bold-cloth"],
  CLEAR: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"],
});

const MercBtnState = Object.freeze({
  CLEAR: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  OTHER_ACTIVE: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  ACTIVE_NOT_FULL: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"], 
  ACTIVE_FULL: ["clear-cash","clear-brick","clear-food","clear-tool","clear-wine","clear-cloth"],
  NOT_ACTIVE_AVAILABLE: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"],
  NOT_AVAILABLE: ["not-selectable-cash","not-selectable-brick","not-selectable-food","not-selectable-tool","not-selectable-wine","not-selectable-cloth"],
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

/* MERC ELEMENTS */
let elemBtnTrade1Mode;
let elemBtnTrade2Mode;

/* MERC GLOBALS */
let mercTrade1Mode;
let mercTrade2Mode;

const minusImgPath = 'minus.png';
const minusInvalidImgPath = 'minus_invalid.png';

"btn-arch-store-brick"

const elemIdsMercStore = [
  "btn-merc-store-cash",
  "btn-merc-store-brick",
  "btn-merc-store-food",
  "btn-merc-store-tool",
  "btn-merc-store-wine",
  "btn-merc-store-cloth",
];

 const elemBtnMercStore = elemIdsMercStore.map((id) => document.getElementById(id));


const elemIdsArchHousesStrict = [
  "num-arch-houses-strict-cash",
  "num-arch-houses-strict-brick",
  "num-arch-houses-strict-food",
  "num-arch-houses-strict-tool",
  "num-arch-houses-strict-wine",
  "num-arch-houses-strict-cloth",
];

 const elemNumArchHousesStrict = elemIdsArchHousesStrict.map((id) => document.getElementById(id));


 const elemIdsArchHousesAdd = [
  "num-arch-houses-add-cash",
  "num-arch-houses-add-brick",
  "num-arch-houses-add-food",
  "num-arch-houses-add-tool",
  "num-arch-houses-add-wine",
  "num-arch-houses-add-cloth",
];

 const elemNumArchHousesAdd = elemIdsArchHousesAdd.map((id) => document.getElementById(id));

 const elemIdsStoreRemainingStrict = [
  "num-storeremaining-strict-cash",
  "num-storeremaining-strict-brick",
  "num-storeremaining-strict-food",
  "num-storeremaining-strict-tool",
  "num-storeremaining-strict-wine",
  "num-storeremaining-strict-cloth",
];

 const elemNumStoreRemainingStrict = elemIdsStoreRemainingStrict.map((id) => document.getElementById(id));


 // btn-dec-store-merc-brick

 const elemIdsBtnDecMercStore = [
  "btn-dec-store-merc-cash",
  "btn-dec-store-merc-brick",
  "btn-dec-store-merc-food",
  "btn-dec-store-merc-tool",
  "btn-dec-store-merc-wine",
  "btn-dec-store-merc-cloth",
];

const elemBtnDecMercStore = elemIdsBtnDecMercStore.map((id) => document.getElementById(id));


  const elemIdsBtnDecStore = [
    "btn-dec-storecurrent-cash",
    "btn-dec-storecurrent-brick",
    "btn-dec-storecurrent-food",
    "btn-dec-storecurrent-tool",
    "btn-dec-storecurrent-wine",
    "btn-dec-storecurrent-cloth",
  ];

  const elemBtnDecStrictStore = elemIdsBtnDecStore.map((id) => document.getElementById(id));

//-------------------------------------------------------------------------
const elemIdsPreMercStore = [
  "num-pre-merc-cash",
  "num-pre-merc-brick",
  "num-pre-merc-food",
  "num-pre-merc-tool",
  "num-pre-merc-wine",
  "num-pre-merc-cloth",
];

const elemNumPreMercStore = elemIdsPreMercStore.map((id) => document.getElementById(id));

//-------------------------------------------------------------------------
const elemIdsMercStoreFinal = [
  "num-final-merc-cash",
  "num-final-merc-brick",
  "num-final-merc-food",
  "num-final-merc-tool",
  "num-final-merc-wine",
  "num-final-merc-cloth",
];

const elemNumMercStoreFinal = elemIdsMercStoreFinal.map((id) => document.getElementById(id));

const elemIdsMercArch = [
  "num-merc-arch-cash",
  "num-merc-arch-brick",
  "num-merc-arch-food",
  "num-merc-arch-tool",
  "num-merc-arch-wine",
  "num-merc-arch-cloth",
];

const elemNumMercArch = elemIdsMercArch.map((id) => document.getElementById(id));

//----------------------------------------------------------------------
const elemIdsMercBuyPot = [
  "num-merc-buypot-cash",
  "num-merc-buypot-brick",
  "num-merc-buypot-food",
  "num-merc-buypot-tool",
  "num-merc-buypot-wine",
  "num-merc-buypot-cloth",
];

const elemNumMercBuyPot = elemIdsMercBuyPot.map((id) => document.getElementById(id));

const elemIdsPreMercSellValue = [
  "num-pre-merc-cashvalue-cash",
  "num-pre-merc-cashvalue-brick",
  "num-pre-merc-cashvalue-food",
  "num-pre-merc-cashvalue-tool",
  "num-pre-merc-cashvalue-wine",
  "num-pre-merc-cashvalue-cloth",
];

const elemNumPreMercCashValue = elemIdsPreMercSellValue.map((id) => document.getElementById(id));

//---------------------------------------------------------------------------------
const elemIdsMercDeltaTotal = [
  "num-merc-delta-total-cash",
  "num-merc-delta-total-brick",
  "num-merc-delta-total-food",
  "num-merc-delta-total-tool",
  "num-merc-delta-total-wine",
  "num-merc-delta-total-cloth",
];

const elemNumMercDeltaTotal = elemIdsMercDeltaTotal.map((id) => document.getElementById(id));

//---------------------------------------------------------------------------------
const elemIdsMercPreBuy = [
  "num-merc-pre-buy-cash",
  "num-merc-pre-buy-brick",
  "num-merc-pre-buy-food",
  "num-merc-pre-buy-tool",
  "num-merc-pre-buy-wine",
  "num-merc-pre-buy-cloth",
];

const elemNumPreBuy = elemIdsMercPreBuy.map((id) => document.getElementById(id));


//---------------------------------------------------------------------------------
const elemIdsMercDeltaBuy = [
  "num-merc-delta-buy-cash",
  "num-merc-delta-buy-brick",
  "num-merc-delta-buy-food",
  "num-merc-delta-buy-tool",
  "num-merc-delta-buy-wine",
  "num-merc-delta-buy-cloth",
];

const elemNumMercDeltaBuy = elemIdsMercDeltaBuy.map((id) => document.getElementById(id));


//---------------------------------------------------------------------------------
const elemIdsBtnMercBuyPlus = [
  "btn-merc-buy-cash",
  "btn-merc-buy-brick",
  "btn-merc-buy-food",
  "btn-merc-buy-tool",
  "btn-merc-buy-wine",
  "btn-merc-buy-cloth",
];

const elemBtnMercBuyPlus = elemIdsBtnMercBuyPlus.map((id) => document.getElementById(id));

const elemIdsBtnMercSell = [
  "btn-merc-sell-cash",
  "btn-merc-sell-brick",
  "btn-merc-sell-food",
  "btn-merc-sell-tool",
  "btn-merc-sell-wine",
  "btn-merc-sell-cloth",
];

const elemBtnMercSell = elemIdsBtnMercSell.map((id) => document.getElementById(id));


//------------------------------------------------------
const elemIdsBtnMercTradeMinus = [
  "btn-merc-trade-minus-cash",
  "btn-merc-trade-minus-brick",
  "btn-merc-trade-minus-food",
  "btn-merc-trade-minus-tool",
  "btn-merc-trade-minus-wine",
  "btn-merc-trade-minus-cloth",
];

const elemBtnMercTradeMinus = elemIdsBtnMercTradeMinus.map((id) => document.getElementById(id));

//------------------------------------------------------------------------
const elemIdsMercSellDelta = [
  "num-merc-sell-delta-cash",
  "num-merc-sell-delta-brick",
  "num-merc-sell-delta-food",
  "num-merc-sell-delta-tool",
  "num-merc-sell-delta-wine",
  "num-merc-sell-delta-cloth",
];

const elemMercSellDelta = elemIdsMercSellDelta.map((id) => document.getElementById(id));

//------------------------------------------------------------------------
const elemIdsMercStoreStart = [
  "num-merc-store-start-cash",
  "num-merc-store-start-brick",
  "num-merc-store-start-food",
  "num-merc-store-start-tool",
  "num-merc-store-start-wine",
  "num-merc-store-start-cloth",
];

const elemMercStoreStart = elemIdsMercStoreStart.map((id) => document.getElementById(id));

//------------------------------------------------------------------------
const elemIdsMercStoreIn = [
  "num-merc-store-in-cash",
  "num-merc-store-in-brick",
  "num-merc-store-in-food",
  "num-merc-store-in-tool",
  "num-merc-store-in-wine",
  "num-merc-store-in-cloth",
];

const elemMercStoreIn = elemIdsMercStoreIn.map((id) => document.getElementById(id));

//------------------------------------------------------------------------
const elemIdsMercStoreOut = [
  "num-merc-store-out-cash",
  "num-merc-store-out-brick",
  "num-merc-store-out-food",
  "num-merc-store-out-tool",
  "num-merc-store-out-wine",
  "num-merc-store-out-cloth",
];

const elemMercStoreOut = elemIdsMercStoreOut.map((id) => document.getElementById(id));


//------------------------------------------------------------------------------------------
const elemIdsStoreFreeCurrent = [
  "num-storecurrent-free-cash",
  "num-storecurrent-free-brick",
  "num-storecurrent-free-food",
  "num-storecurrent-free-tool",
  "num-storecurrent-free-wine",
  "num-storecurrent-free-cloth",
];

const elemNumStoreFreeCurrent = elemIdsStoreFreeCurrent.map((id) => document.getElementById(id));

//------------------------------------------------------------------------------------------
const elemIdsStoreStrictCurrent = [
  "num-storecurrent-strict-cash",
  "num-storecurrent-strict-brick",
  "num-storecurrent-strict-food",
  "num-storecurrent-strict-tool",
  "num-storecurrent-strict-wine",
  "num-storecurrent-strict-cloth",
];

const elemNumStoreStrictCurrent = elemIdsStoreStrictCurrent.map((id) => document.getElementById(id));

//------------------------------------------------------------------------------------------
const elemIdsStoreCost = [
  "num-arch-store-cost-cash",
  "num-arch-store-cost-brick",
  "num-arch-store-cost-food",
  "num-arch-store-cost-tool",
  "num-arch-store-cost-wine",
  "num-arch-store-cost-cloth",
];

const elemNumArchStoreCost = elemIdsStoreCost.map((id) => document.getElementById(id));

const elemIdsNumArchPost = [
  "num-arch-remaining-cash",
  "num-arch-remaining-brick",
  "num-arch-remaining-food",
  "num-arch-remaining-tool",
  "num-arch-remaining-wine",
  "num-arch-remaining-cloth",
];

const elemNumArchPost = elemIdsNumArchPost.map((id) => document.getElementById(id));

const elemIdsNumArchHousesFree = [
  "num-arch-houses-free-cash",
  "num-arch-houses-free-brick",
  "num-arch-houses-free-food",
  "num-arch-houses-free-tool",
  "num-arch-houses-free-wine",
  "num-arch-houses-free-cloth",
];

const elemNumArchHousesFree = elemIdsNumArchHousesFree.map((id) => document.getElementById(id));


const elemIdsBtnDecArchFree = [
  "btn-dec-arch-free-cash",
  "btn-dec-arch-free-brick",
  "btn-dec-arch-free-food",
  "btn-dec-arch-free-tool",
  "btn-dec-arch-free-wine",
  "btn-dec-arch-free-cloth",
];

const elemBtnDecArchFree = elemIdsBtnDecArchFree.map((id) => document.getElementById(id));

btnDecArchBrick = document.getElementById("");
btnDecArchFood = document.getElementById("");
btnDecArchTool = document.getElementById("");
btnDecArchWine = document.getElementById("");
btnDecArchCloth = document.getElementById("");

const elemIdsBtnDecArchStrict = [
  "btn-dec-arch-strict-cash",
  "btn-dec-arch-strict-brick",
  "btn-dec-arch-strict-food",
  "btn-dec-arch-strict-tool",
  "btn-dec-arch-strict-wine",
  "btn-dec-arch-strict-cloth",
];

const elemBtnDecArchStrict = elemIdsBtnDecArchStrict.map((id) => document.getElementById(id));




document.getElementById("btn-inc-arch-cloth");

let elemMercStore = [0, 0, 0, 0, 0];

let elemNumTrades;

document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  document.getElementById("version").textContent = "V3.3";

  elemNumTrades = document.getElementById("num-trades");
  elemBtnMode = document.getElementById("btn-mode");

  elemBtnResetAll = document.getElementById("btn-reset-all");
  elemBtnResetStoreCurrent = document.getElementById("btn-reset-storecurrent");
  elemBtnResetArchitect = document.getElementById("btn-reset-architect");
  elemBtnResetMerc3 = document.getElementById("btn-reset-merc3");


  elemBtnArch = document.getElementById("btn-arch");
  elemBtnMerc = document.getElementById("btn-merc");

  archFreeMode = true;
  editMode = EditModeType.FREE;
  btnEditMode = document.getElementById("btn-edit-mode");

  mercActive = MercType.MERC0;
  lastMercActive = MercType.MERC0;


  dataArch.archHousesCurrentFree.fill(0);
  dataArch.archHousesCurrentStrict.fill(0);

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  elemBtnTrade1Mode = document.getElementById("btn-merc-trade1-mode");
  elemBtnTrade2Mode = document.getElementById("btn-merc-trade2-mode");

  mercTrade1Mode = "SELL";
  mercTrade2Mode = "BUY";

  UpdateAll();
});

function SetNewStyle(fill_, borderSize_, fontSize_) {


}

function ArchStoreStrictDec(resourceId) {
  
  if (dataArch.archStrictStoreRemaining[resourceId] > 0) {
    fieldValues.storeCurrentStrict[resourceId] = Max(0, fieldValues.storeCurrentStrict[resourceId] - 1);
  }

  UpdateAll();

}

function ArchStoreStrictInc(resourceId) {
  fieldValues.storeCurrentStrict[resourceId] += 1;
  UpdateAll();
}


function ArchHousesDecFree(resourceId) {
  dataArch.archHousesCurrentFree[resourceId] = Max(0, dataArch.archHousesCurrentFree[resourceId] - 1);

  UpdateAll();
}
function ArchHousesDecStrict(resourceId) {
  dataArch.archHousesCurrentStrict[resourceId] = Max(0, dataArch.archHousesCurrentStrict[resourceId] - 1);

  UpdateAll();
}

function ArchHousesIncFree(resourceId) {
  dataArch.archHousesCurrentFree[resourceId] += 1;
  UpdateAll();
}

function ArchHousesIncStrict(resourceId) {
  if (dataArch.archMoreHousesAvailable[resourceId]) {
    dataArch.archHousesCurrentStrict[resourceId] += 1;
  }
  UpdateAll();

}

function ArchHousesAddFree(resourceId) {
  if (dataArch.archHousesCurrentFree[resourceId] > 0) {
    dataArch.archHousesAddFree[resourceId] += 1;
  }

  UpdateAll();
}

function ArchHousesAddStrict(resourceId) {
  if (dataArch.archMoreHousesAvailable[resourceId]) {
    dataArch.archHousesAdd[resourceId] = 0;
  }
  UpdateAll();

}




function MercStoreInc(resourceId) {
  mercGlobal.mercStore[resourceId] += 1;
  UpdateAll();
}

function MercStoreDec(resourceId) {

  let sellQty = 0;

  if (resourceId === 0) {
    if (mercGlobal.storeFinal[0] > 0 && mercGlobal.mercStore[0] > 0) {
      mercGlobal.mercStore[resourceId] -= 1;
    }
  }
  else {
    if (mercGlobal.sellInProgress[resourceId]) {
      sellQty = mercGlobal.sellQtyActual[resourceId]
      if (mercGlobal.mercStore[resourceId] > sellQty && mercGlobal.storeFinal[0] >= resourceValue[resourceId]) {
        mercGlobal.mercStore[resourceId] -= 1;
      }
    }
    else if (mercGlobal.mercStore[resourceId] > 0) {
      mercGlobal.mercStore[resourceId] -= 1;
    } 
  }

  UpdateAll();
}

// Function to update the result div with whether the


function GetTotalBuildValue(brickCount, foodCount, toolCount, wineCount, clothCount) {
  return brickCount * 1 + foodCount * 2 + toolCount * 3 + wineCount * 4 + clothCount * 5;
}

function GetIntegerValue(str) {
  return parseInt(str) || 0;
}

/* ---------------------------------------------------------  --------------------------- */
/* STORE */
/* ------------------------------------------------------------------------------------ */
function WriteFieldValueBlankZero(elem, value) {
  if (value === 0) {
    elem.textContent = "";
  } else {
    elem.textContent = value;
  }
}
function ResetStoreCurrentStrict() {

  ResetArchitect();
  fieldValues.storeCurrentStrict[0] = 0;
  fieldValues.storeCurrentStrict[1] = 0;
  fieldValues.storeCurrentStrict[2] = 0;
  fieldValues.storeCurrentStrict[3] = 0;
  fieldValues.storeCurrentStrict[4] = 0;
  fieldValues.storeCurrentStrict[5] = 0;

  UpdateAll();
}

/* ------------------------------------------------------------------------------------ */
/* BUILD */
/* ------------------------------------------------------------------------------------ */

function ResetArchitect() {
  dataArch.archHousesCurrentFree.fill(0);
  dataArch.archHousesCurrentStrict.fill(0);

  UpdateAll();
}

function ProcessArchitectFree() {
  if (fieldValues.archModeFirstPass) {
  }

  for (let resourceId = 1; resourceId<=5; resourceId++)
  {
    if (dataArch.archHousesCurrentFree[resourceId] === 0)
    {
      dataArch.archHousesAddFree[resourceId] = 0;
    }
   }
  
  /* building more houses is always valid */
  dataArch.archMoreHousesAvailable.fill(0);

  /* Calculate store values from houses */
  let storeCurrentLocal = 0;
  let currentCashValue = 0
  for (let resourceId = 1; resourceId<=5; resourceId++)
  {

    currentCashValue = 
      dataArch.archHousesCurrentFree[resourceId] * 
        houseCost[resourceId]*(dataArch.archHousesAddFree[resourceId]+1);

    storeCurrentLocal = storeCurrentLocal + currentCashValue;


  }

  fieldValues.storeCurrentFree[0] = storeCurrentLocal;

  fieldValues.storeCurrentFree[1] =
    dataArch.archHousesCurrentFree[indexFood] +
    dataArch.archHousesCurrentFree[indexTool] +
    dataArch.archHousesCurrentFree[indexCloth] +
    dataArch.archHousesCurrentFree[indexWine];

  fieldValues.storeCurrentFree[2] = dataArch.archHousesCurrentFree[indexBrick] + dataArch.archHousesCurrentFree[indexFood];

  fieldValues.storeCurrentFree[3] = dataArch.archHousesCurrentFree[indexTool];

  fieldValues.storeCurrentFree[4] = dataArch.archHousesCurrentFree[indexWine];

  fieldValues.storeCurrentFree[5] = dataArch.archHousesCurrentFree[indexCloth];

}

function ProcessArchitectStrict() {
  /* -------------------------------------------------------------- */
  /* Write to .archBuildCost */
  /* -------------------------------------------------------------- */
  let buildCostTotal = 0;
  for (let resourceId=1; resourceId <= 5; resourceId++)
  {
    buildCostTotal = buildCostTotal + 
      (dataArch.archHousesCurrentStrict[resourceId] * (dataArch.archHousesAddStrict[resourceId] + 1) * houseCost[resourceId]);
  }
  
  dataArch.archBuildCost[0] = buildCostTotal;

  dataArch.archBuildCost[indexBrick] = 
    dataArch.archHousesCurrentStrict[indexFood] +
    dataArch.archHousesCurrentStrict[indexTool] +
    dataArch.archHousesCurrentStrict[indexWine] +
    dataArch.archHousesCurrentStrict[indexCloth];

  dataArch.archBuildCost[indexFood] = dataArch.archHousesCurrentStrict[indexBrick] + dataArch.archHousesCurrentStrict[indexFood];
  dataArch.archBuildCost[indexTool] = dataArch.archHousesCurrentStrict[indexTool]; 
  dataArch.archBuildCost[indexWine] = dataArch.archHousesCurrentStrict[indexWine]; 
  dataArch.archBuildCost[indexCloth] = dataArch.archHousesCurrentStrict[indexCloth]; 

  /* -------------------------------------------------------------- */
  /* Write to .archRem */
  /* -------------------------------------------------------------- */
  for (let resourceId = 0; resourceId <=5; resourceId++) {
    dataArch.archPost[resourceId] = fieldValues.storeCurrentStrict[resourceId] - dataArch.archBuildCost[resourceId];
  }

  /* -------------------------------------------------------------- */
  /* Write to: */
  /* .archHousesDeltaPossible */
  /* .archMoreHousesAvailable */
  /* -------------------------------------------------------------- */
  for (let resourceId = 0; resourceId <=5; resourceId++) {
    dataArch.runOutOf[resourceId] = fieldValues.storeCurrentStrict[resourceId] > 0 && dataArch.archPost[resourceId] <= 0;
  }

  /* --------------------------------------------------------------------- */
  /* BRICK HOUSES */
  /* --------------------------------------------------------------------- */
  for (let resourceId = 1; resourceId <= 5; resourceId++) {
    dataArch.archHousesDeltaPossible[resourceId] = Math.min(Math.floor(dataArch.archPost[resourceId] / houseCost[resourceId]), dataArch.archPost[2]);
  }

  dataArch.archHousesDeltaPossible[indexBrick] = Math.min(Math.floor(dataArch.archPost[0] / houseCost[indexBrick]), dataArch.archPost[2]);
  dataArch.archHousesDeltaPossible[indexFood] = Min3(
    Math.floor(dataArch.archPost[indexCash] / houseCost[indexFood]),
    dataArch.archPost[indexBrick],
    dataArch.archPost[indexFood]
  );
  dataArch.archHousesDeltaPossible[indexTool] = Min3(
    Math.floor(dataArch.archPost[indexCash] / houseCost[indexTool]),
    dataArch.archPost[indexBrick],
    dataArch.archPost[indexTool]
  );

  dataArch.archHousesDeltaPossible[indexWine] = Min3(
    Math.floor(dataArch.archPost[indexCash] / houseCost[indexWine]),
    dataArch.archPost[indexBrick],
    dataArch.archPost[indexWine]
  );
  dataArch.archHousesDeltaPossible[indexCloth] = Min3(
    Math.floor(dataArch.archPost[indexCash] / houseCost[indexCloth]),
    dataArch.archPost[indexBrick],
    dataArch.archPost[indexCloth]
  );

  for (let resourceId = 1; resourceId <= 5; resourceId++) {
    
    dataArch.archHousesTotalPossible[resourceId] = dataArch.archHousesDeltaPossible[resourceId] + dataArch.archHousesCurrentStrict[resourceId];
    dataArch.archMoreHousesAvailable[resourceId] = dataArch.archHousesDeltaPossible[resourceId] > 0;

  }

  for (let resourceId = 0; resourceId <= 5; resourceId++) {
    dataArch.archStrictStoreRemaining[resourceId] = fieldValues.storeCurrentStrict[resourceId] - dataArch.archBuildCost[resourceId];
  }

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

function SetBackgroundColor(elem, colour) {
  elem.style.backgroundColor = colour;

}

function ApplyBackground(elem) {
  elem.backgroundColor = "gray";
  /* elem.classList.add('grey-background');*/
}


function MercTradeDelta(resourceId) {
  return mercGlobal.storeFinal[resourceId] - mercGlobal.mercStorePreTrade[resourceId];
}

function CanBuyResource(resourceId) {
  // Money is available to buy a single resource
  return mercGlobal.storeFinal[0] >= resourceValue[resourceId];
}

function CanSellResource(resourceId) {
  // Post trade resouirce count is > 0
  return mercGlobal.storeFinal[resourceId] > 0;
}

function CalcMercHouseBuild() {

  mercGlobal.mercHouses[indexBrick] = 
    Math.min(Math.floor(mercGlobal.storeFinal[0] / houseCost[indexBrick]), mercGlobal.storeFinal[indexFood]);

  mercGlobal.mercHouses[indexFood] = Min3(
    Math.floor(mercGlobal.storeFinal[indexCash] / houseCost[indexFood]),
    mercGlobal.storeFinal[indexBrick],
    mercGlobal.storeFinal[indexFood]
  );
  mercGlobal.mercHouses[indexTool] = Min3(
    Math.floor(mercGlobal.storeFinal[indexCash] / houseCost[indexTool]),
    mercGlobal.storeFinal[indexBrick],
    mercGlobal.storeFinal[indexTool]
  );

  mercGlobal.mercHouses[indexWine] = Min3(
    Math.floor(mercGlobal.storeFinal[indexCash] / houseCost[indexWine]),
    mercGlobal.storeFinal[indexBrick],
    mercGlobal.storeFinal[indexWine]
  );
  mercGlobal.mercHouses[indexCloth] = Min3(
    Math.floor(mercGlobal.storeFinal[indexCash] / houseCost[indexCloth]),
    mercGlobal.storeFinal[indexBrick],
    mercGlobal.storeFinal[indexCloth]
  );

  for (let resourceId=0; resourceId <= 5; resourceId++) {
    mercGlobal.mercHouses[resourceId] = fieldValues.storeCurrentFree[resourceId];
  }
}
// -------------------------------------------------------------------------
// FUNCTION BUY RESOURCE
// -------------------------------------------------------------------------
function ClickMercBuyResourcePlus(resourceId) {

  let enoughCash = mercGlobal.storeFinal[0] >= resourceValue[resourceId];

  if (enoughCash && !mercGlobal.sellInProgress[resourceId]) {

    if (mercGlobal.buyInProgress[resourceId]) {
      mercGlobal.buyQtyActual[resourceId]++;
    }
    else if (mercGlobal.totalTradeCount < 2) {

      // Not in progress so a new trade is to be created
      // if sellcount is zero, then place the new trade at the first element, i.e. zero
      mercGlobal.buyQtyActual[resourceId]++;
    }

  }

  UpdateAll();
}

function BuyMinus(resourceId) {
  mercGlobal.storeFinal[resourceId] -= 1;
  mercGlobal.storeFinal[0] += resourceValue[resourceId];

  UpdateAll();
}

function SellMinus(resourceId) {
  mercGlobal.storeFinal[resourceId] += 1;
  mercGlobal.storeFinal[0] -= resourceValue[resourceId];

  UpdateAll();
}

function TradeActive(resourceId) {
  return MercTradeDelta(resourceId) != 0;
}

let firstPass = true;



function ResetArchitect() {
  dataArch.archHousesCurrentFree.fill(0);
  dataArch.archHousesCurrentStrict.fill(0);
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

function ResetMercTrades() {

  for (let resourceId = 1; resourceId <=5; resourceId++) {
    mercGlobal.buyQtyActual[resourceId] = 0;
    mercGlobal.sellQtyActual[resourceId] = 0;
  }

  UpdateAll();
}

function ResetStoreFree() 
{
  for (let resourceId=0; resourceId <= 5; resourceId++)
  {
    dataArch.archHousesCurrentFree[resourceId] = 0;
    if (resourceId != 0) {
      fieldValues.storeCurrentFree[resourceId]  = 0;   
    }
  }


  ResetStoreAdd();


  UpdateAll();
}


function ResetStoreAdd() 
{
  for (let resourceId=1; resourceId <= 5; resourceId++)
  {
    dataArch.archHousesAddFree[resourceId] = 0;
  }

  UpdateAll();
}

function ResetMercStore() {

  ResetMercTrades();

  for (let resourceId = 0; resourceId <=5; resourceId++) {
    mercGlobal.mercStore[resourceId] = 0;
  }

  UpdateAll();
}

function UpdateArchPostGui(elemArray, storeCurrent, storePost, archFreeMode, resourceId) {

  let archPostState = StylesType.CLEAR;
  let archPostStyle = archPostState[resourceId];

  if (archFreeMode) {
    elemArray[resourceId].textContent = "";
    archPostState = StylesType.CLEAR;    

  } 
  else {
    if ((storePost === 0 && storeCurrent > 0) || storePost > 0) {
      /* Must have spent it all */
      elemArray[resourceId].textContent = storePost;
      archPostState = StylesType.CLEAR_NORMAL;
    } else {
      elemArray[resourceId].textContent = "";
      archPostState = StylesType.CLEAR;
    }

  }

  archPostStyle = archPostState[resourceId];
  SetStyle(elemArray,archPostStyle,resourceId);


}

function WriteNormal(elem_, number_, fontSize_, bold_, color_,displaySign_,displayZero_) {
  elem_.style.fontSize = fontSize_ + "px";

  if (bold_) elem_.style.fontWeight = "bold";
  else elem_.style.fontWeight = "normal";

  elem_.style.color = color_;

  let signText = "";
  if (displaySign_ && number_ > 0) {
    signText = "+";
  }

  if (number_ === 0 && !displayZero_) {
    elem_.textContent = "";
  }
  else {
    elem_.textContent = signText + number_;
  }
}

function WriteSlashArray(elem_, numbers_, fonts_, bolds_, separator_,color_) {
  let arrayLength = numbers_.length;

  const textArray = Array.from({ length: arrayLength }, () => document.createElement('span'));

  elem_.textContent = '';

  for (let index=0; index<=length; index++) {
    
    textArray[index].className = 'normal-text';
    textArray[index].fontSize = fonts_[index] + "px";
    if (bolds_[index]) textArray[index].style.fontWeight = "bold";
    else textArray[index].style.fontWeight = "normal";
 
    if (index===0 || index === length-1) elem_.append(textArray[index]);
    else elem_.append(separator_ + textArray[index]);
    

  }

  elem_.color = color_;


}

function WriteSingle(elem_, number_, fontSize_, bold_) {

  const text = document.createElement('span');
  text.className = 'normal-text';

  let leftFontSizeStr = fontSize_ + "px";

  text.style.fontSize = leftFontSizeStr;

  if (bold_) text.style.fontWeight = "bold";
  else text.style.fontWeight = "normal";

  text.textContent = number_;

  elem_.textContent = '';
  elem_.appendChild(text);

}


function WriteSlash(elem_, leftNumber_, leftFontSize_, leftBold_, rightNumber_, rightFontSize_, rightBold_, color_, leftSign_, rightSign_) {

  const leftText = document.createElement('span');
  leftText.className = 'normal-text';
  leftText.style.color = color_;
  const rightText = document.createElement('span');
  rightText.className = 'normal-text';
  rightText.style.color = color_;

  let leftFontSizeStr = leftFontSize_ + "px";
  let rightFontSizeStr = rightFontSize_ + "px";

  leftText.style.fontSize = leftFontSizeStr;
  rightText.style.fontSize = rightFontSizeStr;

  if (leftBold_) leftText.style.fontWeight = "bold";
  else leftText.style.fontWeight = "normal";
  if (rightBold_) rightText.style.fontWeight = "bold";
  else rightText.style.fontWeight = "normal";

  let leftSignText = "";
  if (leftNumber_ > 0 && leftSign_) leftSignText = "+";
  let rightSignText = "";
  if (rightNumber_ > 0 && rightSign_) rightSignText = "+";


  leftText.textContent = leftSignText + leftNumber_;
  rightText.textContent = "/" + rightSignText + rightNumber_;

  elem_.textContent = '';
  elem_.appendChild(leftText);
  elem_.appendChild(rightText);

  elem_.color = color_

}

//--------------------------------------------------------------------
// FUNCTION: UpdateGUIArch
//--------------------------------------------------------------------
function UpdateGUIArch() {
  /* ------------------------------------------------------------- */
  /* Set store current decrement colour:                           */
  /*    orange - if none Left (it's all been spent)                */
  /*    transparent - all other times                              */
  /* ------------------------------------------------------------- */

  for (let resourceId = 0; resourceId <=5; resourceId++) {

    SetBorderRadius(elemNumStoreStrictCurrent[resourceId],'15px');
    WriteFieldValueBlankZero(elemNumStoreStrictCurrent[resourceId], fieldValues.storeCurrentStrict[resourceId]);

    if (fieldValues.storeCurrentStrict[resourceId] > 0) {
      SetStyle(elemNumStoreStrictCurrent,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }
    else
    {
      SetStyle(elemNumStoreStrictCurrent,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }

    // ARCH STORE MINUS BUTTON
    if (fieldValues.storeCurrentStrict[resourceId] === 0) {
        elemBtnDecStrictStore[resourceId].style.backgroundImage = `none`;

      elemBtnDecStrictStore[resourceId].textContent = ""

    }
    else if (dataArch.runOutOf[resourceId]) {
      elemBtnDecStrictStore[resourceId].style.backgroundImage = `url('${minusInvalidImgPath}')`;
      // SetMinusStyle(elemBtnDecStrictStore[resourceId],MinusButtonType.RED_NORMAL[resourceId],resourceId);

    }
    else {
        elemBtnDecStrictStore[resourceId].style.backgroundImage = `url('${minusImgPath}')`;
    }

    // ARCH BUILD MINUS BUTTON
    if (resourceId != 0)
    {

      if (dataArch.archHousesCurrentFree[resourceId] > 0 ) {
        elemBtnDecArchFree[resourceId].style.backgroundImage = `url('${minusImgPath}')`;
      }
      else {
        elemBtnDecArchFree[resourceId].style.backgroundImage = 'none';
      }

    }

    // ARCH BUILD MINUS BUTTON
    if (resourceId != 0)
    {

      if (dataArch.archHousesCurrentStrict[resourceId] > 0 ) {
        elemBtnDecArchStrict[resourceId].style.backgroundImage = `url('${minusImgPath}')`;
      }
      else {
        elemBtnDecArchStrict[resourceId].style.backgroundImage = 'none';
      }

    }

    if (dataArch.archStrictStoreRemaining[resourceId] === 0) {
        elemNumStoreRemainingStrict[resourceId].textContent = "";
        SetStyle(elemNumStoreRemainingStrict,StylesType.CLEAR[resourceId],resourceId)

    }
    else {

      elemNumStoreRemainingStrict[resourceId].textContent = dataArch.archStrictStoreRemaining[resourceId];
        SetStyle(elemNumStoreRemainingStrict,StylesType.CLEAR_NORMAL[resourceId],resourceId)

    }

  }


  /* ------------------------------------------------------------- */
  /* Set arch build actual colour:                           */
  /*    red - if none Left (it's all been spent)                */
  /* ------------------------------------------------------------- */
  for (let resourceId = 0; resourceId <= 5; resourceId++) {
-``
    //--------------------------------------------------------------
    // ARCH HOUSES ACTUAL
    //--------------------------------------------------------------
    WriteFieldValueBlankZero(elemNumStoreFreeCurrent[resourceId], fieldValues.storeCurrentFree[resourceId]);
    if (fieldValues.storeCurrentFree[resourceId] === 0) {
      SetStyle(elemNumStoreFreeCurrent,StylesType.CLEAR[resourceId],resourceId);
    }
    else 
    {
      SetStyle(elemNumStoreFreeCurrent,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
    }


    let tradeCountReached = mercGlobal.totalTradeCount >= 2;

    if (resourceId != 0) {
 

      //------------------------------------------------------------ 
      // ARCH BUILD ACTUAL
      //------------------------------------------------------------ 
//      ClearAllStyles(elemNumArchHousesStrict,resourceId);

      let archStyleState = StylesType.CLEAR;
      
      elemNumArchHousesFree[resourceId].style.borderRadius = '15px';

      archStyleState = ArchStateType.GREEN_NORMAL;
      WriteNormal(elemNumArchHousesFree[resourceId],
        dataArch.archHousesCurrentFree[resourceId],16,true,"black",false,false);

      if (dataArch.archHousesCurrentFree[resourceId] > 0) {
        SetStyle(elemNumArchHousesFree,StylesType.CLEAR_NORMAL[resourceId],resourceId);
      }
      else
      {
        SetStyle(elemNumArchHousesFree,StylesType.CLEAR_NORMAL[resourceId],resourceId);
      }

      // Arch strict
      if (dataArch.archHousesDeltaPossible[resourceId] > 0 || dataArch.archHousesCurrentStrict[resourceId] > 0) {

        // 
        if (dataArch.archHousesCurrentStrict[resourceId] > 0) {
          SetStyle(elemNumArchHousesStrict,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
        } 
        else {
          SetStyle(elemNumArchHousesStrict,StylesType.CLEAR_NORMAL[resourceId],resourceId);          
        }

        WriteSlash(elemNumArchHousesStrict[resourceId],
          dataArch.archHousesCurrentStrict[resourceId], 18, true,
          dataArch.archHousesTotalPossible[resourceId], 10, false, "black", false, false);

        if (dataArch.archHousesDeltaPossible[resourceId] > 0) {
        elemNumArchHousesStrict[resourceId].style.borderRadius = '15px';
        } 
        else {
          elemNumArchHousesStrict[resourceId].style.borderRadius = '0px';
        }
      }
      else if (dataArch.archHousesCurrentStrict[resourceId] > 0) {
        // Not possible
        archStyleState = ArchStateType.CLEAR_THICK_BOLD;
        WriteNormal(elemNumArchHousesStrict[resourceId],
          dataArch.archHousesCurrentStrict[resourceId],16,true,"black",false,false);
        elemNumArchHousesStrict[resourceId].style.borderRadius = '0px';
      }
      else if (dataArch.archHousesDeltaPossible[resourceId] === 0) {
        // Can't build
        SetStyle(elemNumArchHousesStrict,StylesType.CLEAR[resourceId],resourceId);          
        elemNumArchHousesStrict[resourceId].textContent = "";
        elemNumArchHousesStrict[resourceId].style.borderRadius = '0px';
      }
      else {
        archStyleState = StylesType.CLEAR;
        elemNumArchHousesStrict[resourceId].textContent = "";
        elemNumArchHousesStrict[resourceId].style.borderRadius = '0px';
      }


      //------------------------------------------------------------ 
      // ARCH BUILD ADDITIONAL
      //------------------------------------------------------------ 
      let archAddStyle = StylesType.CLEAR[resourceId];

      if (dataArch.archHousesCurrentFree[resourceId] > 0) {
        archAddStyle = StylesType.CLEAR_THICK[resourceId];
        elemNumArchHousesAdd[resourceId].style.borderRadius = '15px' ;
      }
      else
      {
        archAddStyle = StylesType.CLEAR[resourceId];
        elemNumArchHousesAdd[resourceId].style.borderRadius = '0px' ;
      }

      // Additional houses
      SetStyle(elemNumArchHousesAdd,archAddStyle,resourceId); 

      if (dataArch.archHousesCurrentFree[resourceId] > 0) {
        if (dataArch.archHousesAddFree[resourceId] > 0)
        {
          WriteNormal(elemNumArchHousesAdd[resourceId],
            dataArch.archHousesAddFree[resourceId],16,true,"black",false,false);
        }
        else 
        {
          WriteNormal(elemNumArchHousesAdd[resourceId],
            dataArch.archHousesAddFree[resourceId],10,false,"black",false,false);
        }

      } 
      else {
        elemNumArchHousesAdd[resourceId].textContent = "";
      }

    }

    //-----------------------------------------------------------
    // ARCH POST
    //-----------------------------------------------------------
    if (dataArch.archPost[resourceId] < 0) {
      elemNumArchPost[resourceId].classList.add("red-background");
    } 
    else {
      elemNumArchPost[resourceId].classList.remove("red-background");
    }

    // ARCH COST
    let archCostState = StylesType.CLEAR;
    if (fieldValues.archFreeMode) archCostState = StylesType.CLEAR;
    else if (dataArch.archBuildCost[resourceId] === 0) archCostState = StylesType.CLEAR;
    else archCostState = StylesType.CLEAR_NORMAL;

    let archCostStyle = archCostState[resourceId];
    SetArchCostStyle(elemNumArchStoreCost[resourceId],archCostStyle,resourceId);

    if (dataArch.archBuildCost[resourceId] === 0 || fieldValues.archFreeMode) {
      elemNumArchStoreCost[resourceId].textContent = "";
    }
    else {
      WriteNormal(elemNumArchStoreCost[resourceId],-dataArch.archBuildCost[resourceId],14,true,"black",false,true);
    }

    UpdateArchPostGui(elemNumArchPost, fieldValues.storeCurrentStrict[resourceId], dataArch.archPost[resourceId], fieldValues.archFreeMode, resourceId);

    // ARCH REQD


  }



}


/* ---------------------------------------------------------------------------------------- */
/* Function: UpdateAll
/* ---------------------------------------------------------------------------------------- */
function UpdateAll() {
  /* Check to see if current architect houses selected are still affordable */

  ProcessArchitectFree();
  ProcessArchitectStrict();

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
  if (mercActive === MercType.MERC0) {
    mercActive = MercType.MERC3;
  } 
  else if (mercActive === MercType.MERC3) {

    mercActive = MercType.MERC5;
  }
  else {  
    if (mercGlobal.storeFinal[0] >= 5) {
      mercActive = MercType.MERC0;
    }
  }


  elemBtnMerc.textContent = mercActive;

  UpdateAll();
}

function HideShow(index_) {

  if (index_ === 0)
  {
    mercGlobal.hideArchFree = !mercGlobal.hideArchFree;

    if (mercGlobal.hideArchFree) {
      document.getElementById("arch-free-group").style.display = "none";
    }
    else {
      document.getElementById("arch-free-group").style.display = "block";
    }
  }

  if (index_ === 1)
  {
    mercGlobal.hideArchStrict = !mercGlobal.hideArchStrict;

    if (mercGlobal.hideArchStrict) {
      document.getElementById("arch-strict-group").style.display = "none";
    }
    else {
      document.getElementById("arch-strict-group").style.display = "block";
  }
}

//  UpdateAll();

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
  return mercGlobal.storeFinal[resourceId] > mercGlobal.mercStorePreTrade[resourceId];
}

function SellActive(resourceId) {
  return mercGlobal.storeFinal[resourceId] < mercGlobal.mercStorePreTrade[resourceId];
}

function ClickMercTradeMinus(resourceId) {

  // Only if there's an active sell already and you can afford to "unsell" this resource
  if (mercGlobal.sellInProgress[resourceId] && mercGlobal.storeFinal[0] >= resourceValue[resourceId]) {

    // sell is already in progress and there's enough cash left to "unsell" this resource 
    // Delta array is -ve if sell is in progress
    mercGlobal.sellQtyActual[resourceId]--;

  }

  if (mercGlobal.buyInProgress[resourceId]) {
    // Pressing this will sell resource
    mercGlobal.buyQtyActual[resourceId]--;
  }

  UpdateAll();
}

function MercBuyMinus(resourceId) {

  if (mercGlobal.buyInProgress[resourceId]) {
    // Pressing this will sell resource
    mercGlobal.buyQtyActual[resourceId]--;
  }

  UpdateAll();
}


// -------------------------------------------------------------------------------
function UpdateGUIMerc() {
  // -------------------------------------------------------------------------------

  const smallText = document.createElement('span');
  const smallTextGrey = document.createElement('span');
  smallText.className = 'small-text';
  smallTextGrey.className = 'small-text-black';
  const largeText = document.createElement('span');
  largeText.className = 'large-text';

  elemNumTrades.textContent = mercGlobal.totalTradeCount;
  //elemNumTrades.style.color = "grey";

  //elemNumMercStore[0].textContent = mercGlobal.mercStore[0];

  let resourceLookup = ["cash", "brick", "food", "tool", "wine", "cloth"];
  let styleResourceName = "";

  for (let resourceId = 0; resourceId <= 5; resourceId++) {

    SetBorderRadius(elemBtnMercStore[resourceId],'25%');

    styleResourceName = resourceLookup[resourceId];

    // MERC STORE MINUS BUTTON
    let minusButtonState = MinusButtonType.ORANGE_NORMAL;

    // use different store values dependent upon cash or resource
    let storeValue = 0;
    storeValue = mercGlobal.mercStore[resourceId];

    if (storeValue === 0) {
      elemBtnDecMercStore[resourceId].style.backgroundImage = 'none';
      //minusButtonState = MinusButtonType.CLEAR;
    }
    else {
      elemBtnDecMercStore[resourceId].style.backgroundImage = `url('${minusImgPath}')`;

    }
    
    //let newStyle = minusButtonState[resourceId];
    //SetMinusStyle(elemBtnDecMercStore[resourceId],newStyle,resourceId);

    //--------------------------------------------------------------------
    // Pre Sell
    //--------------------------------------------------------------------
    if (resourceId === 0) {

      if (mercActive === MercType.MERC0) {
        elemNumPreMercStore[resourceId].textContent = mercGlobal.mercStore[resourceId];

      }
      else {
        largeText.textContent = mercGlobal.mercStore[resourceId];
        smallTextGrey.textContent = "/" + mercGlobal.storePreSell[resourceId];

        elemNumPreMercStore[resourceId].textContent = '';
        elemNumPreMercStore[resourceId].appendChild(largeText);
        elemNumPreMercStore[resourceId].appendChild(smallTextGrey);
      }

      if (mercGlobal.storePreSell[resourceId] === 0 && mercActive === MercType.MERC0) {
        SetStyle(elemNumPreMercStore,StylesType.CLEAR[resourceId],resourceId);
        elemNumPreMercStore[resourceId].textContent = '';
      }
      else {
        SetStyle(elemNumPreMercStore,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
      }

    }
    else {
      if (mercGlobal.storePreSell[resourceId] === 0) {
        elemNumPreMercStore[resourceId].textContent = "";
        SetStyle(elemNumPreMercStore,StylesType.CLEAR[resourceId],resourceId);
        //elemNumPreMercStore[resourceId].classList.remove(styleResourceName);
      } else {
        elemNumPreMercStore[resourceId].textContent = mercGlobal.storePreSell[resourceId];

        SetStyle(elemNumPreMercStore,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
        //elemNumPreMercStore[resourceId].classList.add(styleResourceName);
      }

    }

    //--------------------------------------------------------------------
    // £??
    //--------------------------------------------------------------------
    if (resourceId === 0) {

      let totalValue = mercGlobal.storePreSell[0] + mercGlobal.totalStoreCashValue;
      elemNumPreMercCashValue[resourceId].textContent = 
        mercGlobal.storePreSell[0] + "+" +
          mercGlobal.totalStoreCashValue + "=" +
          totalValue;

    }
    else if (mercGlobal.storePreSell[resourceId] === 0) {
      elemNumPreMercCashValue[resourceId].textContent = "";
      elemNumPreMercCashValue[resourceId].classList.remove(styleResourceName);
    } 
    else {
      elemNumPreMercCashValue[resourceId].textContent = mercGlobal.storeCashValue[resourceId];
      elemNumPreMercCashValue[resourceId].classList.remove(styleResourceName);
    }

    //-----------------------------------------------------------------------
    // SELL PLUS BUTTON
    //-----------------------------------------------------------------------
    let newSellStyle = "";

    let sellActive = mercGlobal.sellInProgress[resourceId];
    let buyActive = mercGlobal.buyInProgress[resourceId];

    if (resourceId != 0) {


      let fontColor = "";
      if (mercGlobal.totalTradeCount >= 2 && !sellActive) fontColor = "grey" ;
      else fontColor = "black";
    
      if (buyActive && mercGlobal.storePreSell[resourceId] > 0) {
        WriteSingle(elemBtnMercSell[resourceId],"x",12,false,fontColor);  

        newSellStyle = StylesType.CLEAR[resourceId];
      }
      else if (mercGlobal.storePreSell[resourceId] === 0) {
        // none to sell
        elemBtnMercSell[resourceId].textContent = "";
        newSellStyle = StylesType.CLEAR[resourceId];

      }
      else {
        if (mercGlobal.sellQtyActual[resourceId] === mercGlobal.storePreSell[resourceId]) {   
          WriteSingle(elemBtnMercSell[resourceId],mercGlobal.sellQtyActual[resourceId],16,true,fontColor);

          newSellStyle = StylesType.RESOURCE_SPECIFIC[resourceId];

        }
        else {
          if (sellActive) {
            WriteSlash(elemBtnMercSell[resourceId],mercGlobal.sellQtyActual[resourceId],16,true,mercGlobal.storePreSell[resourceId],12,false, fontColor, false, false);
            newSellStyle = StylesType.RESOURCE_SPECIFIC[resourceId];

          }
          else {
            WriteSlash(elemBtnMercSell[resourceId],mercGlobal.sellQtyActual[resourceId],12,false,mercGlobal.storePreSell[resourceId],16,true,fontColor, false, false);
            newSellStyle = StylesType.CLEAR_NORMAL[resourceId];
          }
        }

      }

      if (mercGlobal.totalTradeCount >= 2 && !sellActive) { newSellStyle = StylesType.CLEAR[resourceId]} ;

      SetStyle(elemBtnMercSell,newSellStyle,resourceId);
    }
    else {
      // cash entry
      let deltaCash = mercGlobal.storePreBuy[resourceId] - mercGlobal.storePreSell[resourceId];

      if (deltaCash != 0) {
        WriteSlash(elemBtnMercSell[resourceId],deltaCash,12,false,mercGlobal.storePreBuy[resourceId],16,true,"black", true, false);
        SetStyle(elemBtnMercSell,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
      }
      else {
        elemBtnMercSell[resourceId].textContent = "";
        SetStyle(elemBtnMercSell,StylesType.CLEAR[resourceId],resourceId);
      }

    }

    //-----------------------------------------------------------------------
    // TRADE MINUS BUTTON
    //-----------------------------------------------------------------------
    if (resourceId != 0 && (mercGlobal.sellQtyActual[resourceId] > 0 || mercGlobal.buyQtyActual[resourceId] > 0)) {
      elemBtnMercTradeMinus[resourceId].style.backgroundImage = `url('${minusImgPath}')`;

    } 
    else {
      elemBtnMercTradeMinus[resourceId].style.backgroundImage = 'none';
    }

    //-----------------------------------------------------------------------
    // BUY PLUS
    // -------------------------------------------
    if (resourceId != 0) {

      let sellActive = mercGlobal.sellInProgress[resourceId];
      let buyActive = mercGlobal.buyInProgress[resourceId];
    
      let fontColor = "";
      if (mercGlobal.totalTradeCount >= 2 && !buyActive) fontColor = "grey" ;
      else fontColor = "black";

      // UPDATE BUY BUTTON
      let buyAct = mercGlobal.storeFinal[resourceId] - mercGlobal.storePreBuy[resourceId];
      let buyPoss = mercGlobal.buyQtyPossible[resourceId];

      if (buyPoss === 0) {
        elemBtnMercBuyPlus[resourceId].textContent = "";
        SetStyle(elemBtnMercBuyPlus,StylesType.CLEAR[resourceId],resourceId);
      }
      else if (sellActive && buyPoss > 0) {
        SetStyle(elemBtnMercBuyPlus,StylesType.CLEAR[resourceId],resourceId);
        WriteSingle(elemBtnMercBuyPlus[resourceId],"x",12,false,fontColor); 
      }
      else {
        if (buyAct === buyPoss) {   
          SetStyle(elemBtnMercBuyPlus,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
          WriteSingle(elemBtnMercBuyPlus[resourceId],buyAct,16,true,fontColor);    
        }
        else {
          if (buyActive) {
            SetStyle(elemBtnMercBuyPlus,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
            WriteSlash(elemBtnMercBuyPlus[resourceId],mercGlobal.buyQtyActual[resourceId],16,true,mercGlobal.buyQtyPossible[resourceId],12,false,fontColor);
          }
          else {
            if (mercGlobal.totalTradeCount >= 2) {
              SetStyle(elemBtnMercBuyPlus,StylesType.CLEAR[resourceId],resourceId);
              WriteSlash(elemBtnMercBuyPlus[resourceId],mercGlobal.buyQtyActual[resourceId],12,false,mercGlobal.buyQtyPossible[resourceId],16,true,fontColor); 
            }           
            else {
              SetStyle(elemBtnMercBuyPlus,StylesType.CLEAR_NORMAL[resourceId],resourceId);
              WriteSlash(elemBtnMercBuyPlus[resourceId],mercGlobal.buyQtyActual[resourceId],12,false,mercGlobal.buyQtyPossible[resourceId],16,true,fontColor); 
            }
          }
        }
      }

    }
    else {
      // cash entry
      let deltaCash = mercGlobal.storeFinal[resourceId] - mercGlobal.storePreBuy[resourceId];

      if (deltaCash != 0) {
        WriteSlash(elemBtnMercBuyPlus[resourceId],deltaCash,12,false,mercGlobal.storeFinal[resourceId],16,true,"black", true, false);
        SetStyle(elemBtnMercBuyPlus,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
      }
      else {
        elemBtnMercBuyPlus[resourceId].textContent = "";
        SetStyle(elemBtnMercBuyPlus,StylesType.CLEAR[resourceId],resourceId);

      }
    }

    /*
    //-----------------------------------------------------------------------
    // BUY MINUS
    //-----------------------------------------------------------------------
    if (resourceId != 0 && mercGlobal.buyQtyActual[resourceId] > 0) {
      elemBtnMercBuyMinus[resourceId].style.backgroundImage = `url('${minusImgPath}')`;

    } 
    else {
      elemBtnMercBuyMinus[resourceId].style.backgroundImage = 'none';
    }
    */

    //--------------------------------------------------------------------
    // BUY DELTA
    //--------------------------------------------------------------------
    let localDeltaBuy = 0;
    if (resourceId === 0) localDeltaBuy = mercGlobal.storeFinal[resourceId] - mercGlobal.storePreBuy[resourceId];
    else localDeltaBuy = mercGlobal.buyQtyActual[resourceId];

    //if (localDeltaBuy === 0)  elemNumMercDeltaBuy[resourceId].textContent = "";
    //else if (localDeltaBuy > 0)  elemNumMercDeltaBuy[resourceId].textContent = "+" + localDeltaBuy;
    //else elemNumMercDeltaBuy[resourceId].textContent = localDeltaBuy;  


    //--------------------------------------------------------------------
    // Total Delta GUI
    //--------------------------------------------------------------------
    //if (mercGlobal.totalTradeDelta[resourceId] === 0) {
    //  elemNumMercDeltaTotal[resourceId].textContent = "";
    //} else if (localDeltaBuy > 0) {
    //  elemNumMercDeltaTotal[resourceId].textContent = "+" + mercGlobal.totalTradeDelta[resourceId];
   // }
   // else 
    //{
    //  elemNumMercDeltaTotal[resourceId].textContent = mercGlobal.totalTradeDelta[resourceId];
   // }

    //--------------------------------------------------------------------
    // STORE START
    //--------------------------------------------------------------------
    /*if (mercGlobal.storePreSell[resourceId] === 0) {
      elemMercStoreStart[resourceId].textContent = "";
    }   
    else {
      elemMercStoreStart[resourceId].textContent = mercGlobal.storePreSell[resourceId];
    }
    */

    let storeInOutCash = mercGlobal.totalTradeDelta[0] + mercGlobal.cashBonus;

    //--------------------------------------------------------------------
    // STORE IN
    //--------------------------------------------------------------------
    if (resourceId === 0) {
      if (storeInOutCash > 0) {
        elemMercStoreIn[resourceId].textContent = "+" + storeInOutCash;
        SetStyle(elemMercStoreIn,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);

      }
      else {
        elemMercStoreIn[resourceId].textContent = "";
        SetStyle(elemMercStoreIn,StylesType.CLEAR[resourceId],resourceId);

      }
    }
    else {
      if (mercGlobal.storeIn[resourceId] === 0) {
        elemMercStoreIn[resourceId].textContent = "";
        SetStyle(elemMercStoreIn,StylesType.CLEAR[resourceId],resourceId);
      } 
      else {
        elemMercStoreIn[resourceId].textContent = "+" + mercGlobal.storeIn[resourceId];
        SetStyle(elemMercStoreIn,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);

      }
    }

    //--------------------------------------------------------------------
    // STORE OUT
    //--------------------------------------------------------------------
    if (resourceId === 0) {
      if (storeInOutCash < 0) {
        elemMercStoreOut[resourceId].textContent = storeInOutCash;
        SetStyle(elemMercStoreOut,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);

      }
      else {
        elemMercStoreOut[resourceId].textContent = "";
        SetStyle(elemMercStoreOut,StylesType.CLEAR[resourceId],resourceId);
      }

    }
    else {
      if (mercGlobal.storeOut[resourceId] === 0) {
        elemMercStoreOut[resourceId].textContent = "";
        SetStyle(elemMercStoreOut,StylesType.CLEAR[resourceId],resourceId);

      } 
      else {
        elemMercStoreOut[resourceId].textContent = -mercGlobal.storeOut[resourceId];
        SetStyle(elemMercStoreOut,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);

      }
    }

    //--------------------------------------------------------------------
    // Final
    //---------xxx-----------------------------------------------------------
    if (mercGlobal.storeFinal[resourceId] === 0) {
      SetStyle(elemNumMercStoreFinal,StylesType.CLEAR[resourceId],resourceId);
      elemNumMercStoreFinal[resourceId].textContent = "";
    } 
    else {
      SetStyle(elemNumMercStoreFinal,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);

      elemNumMercStoreFinal[resourceId].textContent = mercGlobal.storeFinal[resourceId];
    }

    let mercResourceDelta = mercGlobal.storeFinal[resourceId] - fieldValues.storeCurrentFree[resourceId];
    let leftBold = false;
    let leftSize = 14;
    if (fieldValues.storeCurrentFree[resourceId] === 0) {
     SetStyle(elemNumMercArch,StylesType.BLUE_NORMAL[resourceId],resourceId);
     leftBold = mercResourceDelta > 0;
    }
    else if (mercResourceDelta >= 0) {
      SetStyle(elemNumMercArch,StylesType.GREEN_NORMAL[resourceId],resourceId);
      leftBold = true;
    }
    else if (mercResourceDelta < -1) {
      SetStyle(elemNumMercArch,StylesType.RED_NORMAL[resourceId],resourceId);
      leftBold=false;
    }
    else if (mercResourceDelta < 0) {
      SetStyle(elemNumMercArch,StylesType.ORANGE_NORMAL[resourceId],resourceId);
      leftBold=false;
    }

    if (leftBold) leftSize = 16;
    else leftSize = 14;

    WriteSlash(
      elemNumMercArch[resourceId],
      mercGlobal.storeFinal[resourceId],leftSize,leftBold,
      fieldValues.storeCurrentFree[resourceId],14,false);

  }
}

//------------------------------------------------------------------
// ClearAllMinusStyles
//------------------------------------------------------------------
function ClearAllMinusStyles(elem, resourceId) {

  elem.classList.remove(MinusButtonType.ORANGE_NORMAL[resourceId]);
  elem.classList.remove(MinusButtonType.CLEAR[resourceId]);
  elem.classList.remove(MinusButtonType.RED_NORMAL[resourceId]);

}

//------------------------------------------------------------------
// SetMinusStyle
//------------------------------------------------------------------
function SetMinusStyle(elem, newStyle, resourceId) {

  ClearAllMinusStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

}

//------------------------------------------------------------------
// ClearAllArchResNumStyles
//------------------------------------------------------------------
function ClearAllArchResNumStyles(elem, resourceId) {

  elem.classList.remove(StylesType.CLEAR_NORMAL[resourceId]);
  elem.classList.remove(StylesType.CLEAR[resourceId]);
}

//------------------------------------------------------------------
// SetArchResNumStyle
//------------------------------------------------------------------
function SetArchResNumStyle(elem, newStyle, resourceId) {

  ClearAllArchResNumStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

}

//------------------------------------------------------------------
// ClearAllArchCostStyles
//------------------------------------------------------------------
function ClearAllArchCostStyles(elem, resourceId) {

  elem.classList.remove(StylesType.CLEAR[resourceId]);
  elem.classList.remove(StylesType.CLEAR_NORMAL[resourceId]);
  elem.classList.remove(StylesType.CLEAR[resourceId]);
}

//------------------------------------------------------------------
// SetArchCostStyle
//------------------------------------------------------------------
function SetArchCostStyle(elem, newStyle, resourceId) {

  ClearAllArchCostStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

}


function ClearAllStyles(elemArray,resourceId) {

  elemArray[resourceId].classList.remove(StylesType.CLEAR[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.CLEAR_NORMAL[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.CLEAR_THICK[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.CLEAR_NORMAL_BOLD[resourceId]);

  elemArray[resourceId].classList.remove(StylesType.ORANGE_NORMAL[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.RED_NORMAL[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.GREEN_NORMAL[resourceId]);
  elemArray[resourceId].classList.remove(StylesType.BLUE_NORMAL[resourceId]);

  elemArray[resourceId].classList.remove(StylesType.RESOURCE_SPECIFIC[resourceId]);

}

function SetStyle(elemArray,newStyle, resourceId) {
  ClearAllStyles(elemArray, resourceId);

  elemArray[resourceId].classList.add(newStyle);

}


//------------------------------------------------------------------
// SetArchAddStyle
//------------------------------------------------------------------
function SetArchAddStyle(elemArray, newStyle, resourceId) {

  ClearAllArchAddStyles(elemArray, resourceId);

  elem.classList.add(newStyle);

}

//------------------------------------------------------------------
// ClearAllArchStyles
//------------------------------------------------------------------
function ClearAllArchStyles(elem, resourceId) {

  elem.classList.remove(ArchStateType.CLEAR[resourceId]);
  elem.classList.remove(ArchStateType.GREEN_NORMAL[resourceId]);
  elem.classList.remove(ArchStateType.CLEAR_THICK_BOLD[resourceId]);
}


//------------------------------------------------------------------
// SetArchStyle
//------------------------------------------------------------------
function SetArchStyle(elem, newStyle, resourceId) {

  ClearAllArchStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

}


//------------------------------------------------------------------
// ClearAllMercBtnStyles
//------------------------------------------------------------------
function ClearAllMercBtnStyles(elem, resourceId) {

  elem.classList.remove(MercBtnState.CLEAR[resourceId]);
  elem.classList.remove(MercBtnState.OTHER_ACTIVE[resourceId]);
  elem.classList.remove(MercBtnState.ACTIVE_FULL[resourceId]);
  elem.classList.remove(MercBtnState.NOT_ACTIVE_AVAILABLE[resourceId]);
  elem.classList.remove(MercBtnState.NOT_AVAILABLE[resourceId]);
}

//------------------------------------------------------------------
// SetMercSellBuyStyle
//------------------------------------------------------------------
function SetMercSellBuyStyle(elem, newStyle, resourceId, fontSize_) {

  ClearAllMercBtnStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

  let fontSizeStr = fontSize_.toString() + "px";
  elem.style.fontSize = fontSizeStr;

}

function ProcessMerc() {

  let localTradeId = 0;

  // Calculate:
  // mercGlobal.sellInProgress[resourceId]
  // mercGlobal.sellTradeCount
  // mercGlobal.buyTradeCount
  // mercGlobal.totalTradeCount

  let localSellCount = 0;
  let localBuyCount = 0;

  mercGlobal.sellInProgress.fill(false);
  mercGlobal.buyInProgress.fill(false);

  for (let resourceId=1; resourceId<=5; resourceId++) {
    if (mercGlobal.sellQtyActual[resourceId] > 0) {
      localSellCount++;
      mercGlobal.sellInProgress[resourceId] = true;
    }

    if (mercGlobal.buyQtyActual[resourceId] > 0) {
      localBuyCount++; 
      mercGlobal.buyInProgress[resourceId] = true;
    }

  }

  mercGlobal.sellTradeCount = localSellCount;
  mercGlobal.buyTradeCount = localBuyCount;
  mercGlobal.totalTradeCount = localSellCount + localBuyCount;



  //-------------------------------------------------------
  // Calculate mercGlobal.storePreSell
  //-------------------------------------------------------
  // mercGlobal.mercStore ->
  //   mercGlobal.storePreSell ->
  //     mercGlobal.storeTradeSellArray ->
  //       mercGlobal.storePreBuy ->
  //         mercGlobal.storeTradeBuyArray ->
  //           mercGlobal.storeFinal ->
  //      
  // MERC3 or MERC5
  if (mercActive === MercType.MERC0) mercGlobal.cashBonus = 0;
  else if (mercActive === MercType.MERC3) mercGlobal.cashBonus = 3;
  else mercGlobal.cashBonus = 5;
  
  mercGlobal.storePreSell[0] = mercGlobal.mercStore[0] + mercGlobal.cashBonus;     
  
  // Jst coopy all of teh resoyrce values across as not impacted by merc3 or merc5
  for (let resourceId = 1; resourceId <=5; resourceId++) {
    mercGlobal.storePreSell[resourceId] = mercGlobal.mercStore[resourceId];
  }

  let totalSellCashDelta = 0;
  let totalBuyCashDelta = 0;
  // Go through each phase of the merc: store, sell, buy
  for (let resourceId = 1; resourceId <= 5; resourceId++) {

    //-------------------------------------------------------
    // Calculate mercGlobal.storePreBuy
    //-------------------------------------------------------
    let localSellQty = mercGlobal.sellQtyActual[resourceId];

    // Remove the resource as it's been sold
    mercGlobal.storePreBuy[resourceId] = mercGlobal.storePreSell[resourceId] - localSellQty;
 

    // Cash is added as it's been sold
    totalSellCashDelta = totalSellCashDelta + (localSellQty * resourceValue[resourceId]);  


    //-------------------------------------------------------
    // Calculate mercGlobal.storeFinal
    //-------------------------------------------------------
    let localBuyQty = mercGlobal.buyQtyActual[resourceId];
    // Add the resource as it's been bought
    mercGlobal.storeFinal[resourceId] = 
      mercGlobal.storePreSell[resourceId] + localBuyQty - localSellQty;

    // Take away the cash
    totalBuyCashDelta = totalBuyCashDelta - (localBuyQty * resourceValue[resourceId]);

    mercGlobal.storeOut[resourceId] = Math.max(localSellQty - localBuyQty,0);
    mercGlobal.storeIn[resourceId] = Math.max(localBuyQty - localSellQty,0);

    mercGlobal.totalTradeDelta[resourceId] = mercGlobal.storeFinal[resourceId] - mercGlobal.storePreSell[resourceId];

  }

  mercGlobal.storePreBuy[0] = mercGlobal.storePreSell[0] + totalSellCashDelta;
  mercGlobal.storeFinal[0] = mercGlobal.storePreBuy[0] + totalBuyCashDelta;

  //+ve = money into the store
  mercGlobal.totalTradeDelta[0] = totalSellCashDelta + totalBuyCashDelta;

  mercGlobal.storeOut[0] = Math.max(-mercGlobal.totalTradeDelta[0],0);
  mercGlobal.storeIn[0] = mercGlobal.cashBonus + Math.max(mercGlobal.totalTradeDelta[0],0);

  let currentCashValue = 0;
  mercGlobal.totalStoreCashValue = 0;
  mercGlobal.storeCashValue[0] = 0; // Start with zero before getting the sell value for all resources

  // -------------------------------------------------------------------
  // Calculate sell values for pre trade numbers
  // -------------------------------------------------------------------
  for (let index = 1; index <= 5; index++) {
    // currentCashValue is the value if all of this resource was sold
    currentCashValue = mercGlobal.storePreSell[index] * resourceValue[index];
    mercGlobal.storeCashValue[index] = currentCashValue;

    mercGlobal.totalStoreCashValue += currentCashValue;

    // Potential buy
    mercGlobal.mercBuyPot[index] = 
      Math.floor(mercGlobal.storeFinal[0] / resourceValue[index]);
    mercGlobal.buyQtyPossible[index] = mercGlobal.buyQtyActual[index] + mercGlobal.mercBuyPot[index];

    CalcMercHouseBuild();

  }

  mercGlobal.storeCashValue[0] = mercGlobal.totalStoreCashValue;



}



function ClickMercSellResourcePlus(resourceId) {

  if (!mercGlobal.buyInProgress[resourceId]) {

    if (mercGlobal.sellInProgress[resourceId] && mercGlobal.storePreBuy[resourceId] > 0) {
      mercGlobal.sellQtyActual[resourceId]++;
    }
    else if (mercGlobal.totalTradeCount < 2 && mercGlobal.storePreBuy[resourceId] > 0) {
      // Not in progress so a new trade is to be created
      // if sellcount is zero, then place the new trade at the first element, i.e. zero
      mercGlobal.sellQtyActual[resourceId]++;
    }

  }

  UpdateAll();
}

function ClickBuyResource(resourceId) {

  let localTradeId = 0;
  if (mercGlobal.buyInProgress[resourceId] && mercGlobal.storePreBuy[0] > resourceValue[resourceId]) {
    localTradeId = mercGlobal.buyInProgressTradeId[resourceId];
    mercGlobal.storeTradeBuyArray[localTradeId][resourceId]++;
  }
  else if (mercGlobal.totalTradeCount < 2 && mercGlobal.storePreBuy[0] > resourceValue[resourceId]) {
    // Not in progress so a new trade is to be created
    // if sellcount is zero, then place the new trade at the first element, i.e. zero
    localTradeId = mercGlobal.buyTradeCount;
    mercGlobal.storeTradeBuyArray[localTradeId][resourceId]++;
  }

  UpdateAll();
}

  function SetBorderRadius(elem_, radius_) {

    elem_.style.borderRadius = radius_;
  }


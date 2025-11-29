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


  ORANGE_BLACK: ["orange-background-black","orange-background-black","orange-background-black","orange-background-black","orange-background-black","orange-background-black"],
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

 //--------------------------------------------------------------------
 const elemIdssenatorStoreReqd = [
  "senator-cost-mystery",
  "senator-cost-brick",
  "senator-cost-food",
  "senator-cost-tool",
  "senator-cost-wine",
  "senator-cost-cloth",
];

 const elemNumsenatorStoreReqd = elemIdssenatorStoreReqd.map((id) => document.getElementById(id));

 //--------------------------------------------------------------------
 const elemIdstotalStoreReqd = [
  "num-store-total-reqd-cash",
  "num-store-total-reqd-brick",
  "num-store-total-reqd-food",
  "num-store-total-reqd-tool",
  "num-store-total-reqd-wine",
  "num-store-total-reqd-cloth",
];

 const elemNumStoreTotalReqd = elemIdstotalStoreReqd.map((id) => document.getElementById(id));





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

//-----------------------------------------------------------------------------
const elemIdsMercQuickAct = [
  "merc-quick-cash-act",
  "merc-quick-brick-act",
  "merc-quick-food-act",
  "merc-quick-tool-act",
  "merc-quick-wine-act",
  "merc-quick-cloth-act",
];

const elemNumQuickMercAct = elemIdsMercQuickAct.map((id) => document.getElementById(id));

//-----------------------------------------------------------------------------
const elemIdsMercQuickReq = [
  "merc-quick-cash-req",
  "merc-quick-brick-req",
  "merc-quick-food-req",
  "merc-quick-tool-req",
  "merc-quick-wine-req",
  "merc-quick-cloth-req",
];

const elemNumQuickMercReq = elemIdsMercQuickReq.map((id) => document.getElementById(id));


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
  "num-arch-store-reqd-cash",
  "num-arch-store-reqd-brick",
  "num-arch-store-reqd-food",
  "num-arch-store-reqd-tool",
  "num-arch-store-reqd-wine",
  "num-arch-store-reqd-cloth",
];

const elemNumArchStoreReqd = elemIdsStoreFreeCurrent.map((id) => document.getElementById(id));

//------------------------------------------------------------------------------------------
// -------------------- CURRENT STORE STATUS ---------------------------------
const elemIdsStoreTotalDelta = [
  "num-store-total-delta-cash",
  "num-store-total-delta-brick",
  "num-store-total-delta-food",
  "num-store-total-delta-tool",
  "num-store-total-delta-wine",
  "num-store-total-delta-cloth",
];

const elemNumStoreTotalDelta = elemIdsStoreTotalDelta.map((id) => document.getElementById(id));


const elemIdsStoreFreeMercCurrent = [
  "num-post-merc-delta-cash",
  "num-post-merc-delta-brick",
  "num-post-merc-delta-food",
  "num-post-merc-delta-tool",
  "num-post-merc-delta-wine",
  "num-post-merc-delta-cloth",
];

const elemNumPostMercDelta = elemIdsStoreFreeMercCurrent.map((id) => document.getElementById(id));


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

const elemIdsStrictBuildRem = [
  "num-arch-strict-rem-cash",
  "num-arch-strict-rem-brick",
  "num-arch-strict-rem-food",
  "num-arch-strict-rem-tool",
  "num-arch-strict-rem-wine",
  "num-arch-strict-rem-cloth",
];

const elemNumStrictBuildRem = elemIdsStrictBuildRem.map((id) => document.getElementById(id));




document.getElementById("btn-inc-arch-cloth");

let elemMercStore = [0, 0, 0, 0, 0];

let elemNumTrades;

document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  document.getElementById("version").textContent = "V7.11";

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

  mercActive = MercType.MERC3;
  lastMercActive = MercType.MERC3;


  dataArch.archHousesReqd.fill(0);
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
  
  if (dataArch.archStrictStoreRemaining[resourceId] > 0 && mercGlobal.storeFinal[resourceId] > 0) {
    fieldValues.storeCurrentStrict[resourceId] = Max(0, fieldValues.storeCurrentStrict[resourceId] - 1);
  }

  UpdateAll();

}

function ArchStoreStrictInc(resourceId) {
  fieldValues.storeCurrentStrict[resourceId] += 1;
  UpdateAll();
}


function ArchHousesDecFree(resourceId) {
  dataArch.archHousesReqd[resourceId] = Max(0, dataArch.archHousesReqd[resourceId] - 1);

  UpdateAll();
}
function ArchHousesDecStrict(resourceId) {
  dataArch.archHousesCurrentStrict[resourceId] = Max(0, dataArch.archHousesCurrentStrict[resourceId] - 1);

  UpdateAll();
}

function ArchHousesIncFree(resourceId) {
  dataArch.archHousesReqd[resourceId] += 1;
  UpdateAll();
}

function ArchHousesIncStrict(resourceId) {
  if (dataArch.archMoreHousesAvailable[resourceId]) {
    dataArch.archHousesCurrentStrict[resourceId] += 1;
  }
  UpdateAll();

}

function ArchHousesAddFree(resourceId) {
  if (dataArch.archHousesReqd[resourceId] > 0) {
    dataArch.archHousesAddFree[resourceId] += 1;
  }

  UpdateAll();
}

function SenatorAdd(resourceId) {
  if (resourceId != 0) {
    dataArch.senatorStoreReqd[resourceId]++;
  }
  else {
    fieldValues.senatorMysteryReqd++;
  }

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
  dataArch.archHousesReqd.fill(0);
  dataArch.archHousesCurrentStrict.fill(0);

  UpdateAll();
}


function CalculateStoreReqdTotal() {
  if (fieldValues.archModeFirstPass) {
  }

  for (let resourceId = 1; resourceId<=5; resourceId++)
  {
    if (dataArch.archHousesReqd[resourceId] === 0)
    {
      dataArch.archHousesAddFree[resourceId] = 0;
    }
   }
  
  /* building more houses is always valid */
  dataArch.archMoreHousesAvailable.fill(0);

  /* Calculate store values from houses */
  let storeCurrentLocal = 0;
  let currentCashValue = 0;
  for (let resourceId = 1; resourceId<=5; resourceId++)
  {

    currentCashValue = 
        dataArch.archHousesReqd[resourceId]*houseCost[resourceId] + 
        houseCost[resourceId]*(dataArch.archHousesAddFree[resourceId]);

    storeCurrentLocal = storeCurrentLocal + currentCashValue;


  }

  fieldValues.archStoreReqd[0] = storeCurrentLocal;

  fieldValues.archStoreReqd[1] =
    dataArch.archHousesReqd[indexFood] +
    dataArch.archHousesReqd[indexTool] +
    dataArch.archHousesReqd[indexCloth] +
    dataArch.archHousesReqd[indexWine];

  fieldValues.archStoreReqd[2] = dataArch.archHousesReqd[indexBrick] + dataArch.archHousesReqd[indexFood];

  fieldValues.archStoreReqd[3] = dataArch.archHousesReqd[indexTool];

  fieldValues.archStoreReqd[4] = dataArch.archHousesReqd[indexWine];

  fieldValues.archStoreReqd[5] = dataArch.archHousesReqd[indexCloth];

    // Calculate the delta store values
  for (let resourceId=0; resourceId<=5; resourceId++) {
    fieldValues.storeTotalReqd[resourceId] = fieldValues.archStoreReqd[resourceId] + dataArch.senatorStoreReqd[resourceId];
    fieldValues.storeStrictMinusFree[resourceId] = fieldValues.storeCurrentStrict[resourceId] - fieldValues.archStoreReqd[resourceId];

  }


} // CalculateStoreTotalReqd

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


let firstPass = true;



function ResetArchitect() {
  dataArch.archHousesReqd.fill(0);
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

function ResetStrictBuild()
{
  for (let resourceId=1; resourceId <= 5; resourceId++)
  {
    dataArch.archHousesCurrentStrict[resourceId] = 0;
}


  ResetStoreAdd();


  UpdateAll();
}

function ResetStoreFree() 
{
  for (let resourceId=0; resourceId <= 5; resourceId++)
  {
    dataArch.archHousesReqd[resourceId] = 0;
    if (resourceId != 0) {
      fieldValues.archStoreReqd[resourceId]  = 0;   
    }
  }


  ResetStoreAdd();


  UpdateAll();
}

function ResetStoreCurrent() 
{
  for (let resourceId=0; resourceId <= 5; resourceId++)
  {
    fieldValues.storeCurrentStrict[resourceId] = 0;
  }

  ResetMercTrades();

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

function ResetSenator() 
{
  for (let resourceId=0; resourceId <= 5; resourceId++)
  {
    dataArch.senatorStoreReqd[resourceId] = 0;
  }

  fieldValues.senatorMysteryReqd = 0;

  UpdateAll();
}


function WriteSingleString(elem_, string_, fontSize_, bold_, color_) {
  elem_.style.fontSize = fontSize_ + "px";

  if (bold_) elem_.style.fontWeight = "bold";
  else elem_.style.fontWeight = "normal";

  elem_.style.color = color_;

  elem_.textContent = string_;

}

function WriteSingleNumber(elem_, number_, fontSize_, bold_, color_,displaySign_,displayZero_) {
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

  // a count of the number of resources that are below their reqd values

  for (let resourceId = 0; resourceId <=5; resourceId++) {

    let archStoreReqd = fieldValues.archStoreReqd[resourceId];
    let storeCurrentStrict = fieldValues.storeCurrentStrict[resourceId];
    let senatorReqd = dataArch.senatorStoreReqd[resourceId];
    let storeTotalDelta = storeCurrentStrict - fieldValues.storeTotalReqd[resourceId];
    let storeTotalReqd = fieldValues.storeTotalReqd[resourceId];
    var bothZero = false;
    bothZero = archStoreReqd === 0 && storeCurrentStrict === 0 && senatorReqd === 0;

    //-----------------------------------------------------------------------------------
    // STORE CURRENT
    //-----------------------------------------------------------------------------------
    SetBorderRadius(elemNumStoreStrictCurrent[resourceId],'15px');
    WriteFieldValueBlankZero(elemNumStoreStrictCurrent[resourceId], fieldValues.storeCurrentStrict[resourceId]);

    if (fieldValues.storeCurrentStrict[resourceId] > 0) {
      SetStyle(elemNumStoreStrictCurrent,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }
    else
    {
      SetStyle(elemNumStoreStrictCurrent,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }

    //-----------------------------------------------------------------------------------
    // STORE FREE
    //-----------------------------------------------------------------------------------
    WriteFieldValueBlankZero(elemNumArchStoreReqd[resourceId],archStoreReqd,18,true);

    if (fieldValues.archStoreReqd[resourceId] == 0) {
      SetStyle(elemNumArchStoreReqd,StylesType.CLEAR[resourceId],resourceId);
    }
    else {
      SetStyle(elemNumArchStoreReqd,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }

    //-----------------------------------------------------------------------------------------------
    // CURRENT STORE STATUS
    //-----------------------------------------------------------------------------------
    if (bothZero) {
      WriteFieldValueBlankZero(elemNumStoreTotalDelta[resourceId],storeCurrentStrict,18,true);
      SetStyle(elemNumStoreTotalDelta,StylesType.CLEAR[resourceId],resourceId);
    }
    else if (fieldValues.storeCurrentStatusDelta[resourceId] === 0) {
      // just enough
      //elemNumStoreTotalDelta[resourceId].style.opacity = 1.0;
      WriteSingleNumber(elemNumStoreTotalDelta[resourceId],storeTotalReqd,18,true,"black",false,true);
      SetStyle(elemNumStoreTotalDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
      elemNumStoreTotalDelta[resourceId].style.borderRadius = '0%';
    }
    else {
      // Non zero, either negative or positive
      // either have more than required or less
      if (fieldValues.storeCurrentStatusDelta[resourceId] < 0) {
        //WriteSlash(elemNumStoreTotalDelta[resourceId],storeCurrentStrict,16,true,fieldValues.storeCurrentStatusDelta[resourceId],16,true,"black",false,true);
        SetStyle(elemNumStoreTotalDelta,StylesType.ORANGE_BLACK[resourceId],resourceId);
        elemNumStoreTotalDelta[resourceId].style.borderRadius = '50%';
        WriteSlash(elemNumStoreTotalDelta[resourceId],storeCurrentStrict,14,false,storeTotalReqd,16,true,"black",false,false);

      }
      else {
        // more than enough
        SetStyle(elemNumStoreTotalDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
        elemNumStoreTotalDelta[resourceId].style.borderRadius = '0%';
        WriteSlash(elemNumStoreTotalDelta[resourceId],storeCurrentStrict,16,true,storeTotalReqd,14,false,"black",false,false);
      }
    }


    //-----------------------------------------------------------------------------------
    // STRICT BUILD MINUS BUTTON
    if (dataArch.archStrictStoreRemaining[resourceId] > 0 ) {
      elemNumStrictBuildRem[resourceId].textContent = dataArch.archStrictStoreRemaining[resourceId];
      SetStyle(elemNumStrictBuildRem,StylesType.CLEAR_NORMAL[resourceId],resourceId);
    }
    else {
      SetStyle(elemNumStrictBuildRem,StylesType.CLEAR[resourceId],resourceId);
      elemNumStrictBuildRem[resourceId].textContent = "";
    }

    //-----------------------------------------------------------------------------------
    // FREE BUILD MINUS BUTTON
    if (resourceId != 0)
    {
      if (dataArch.archHousesReqd[resourceId] > 0 ) {
        elemBtnDecArchFree[resourceId].style.backgroundImage = `url('${minusImgPath}')`;
      }
      else {
        elemBtnDecArchFree[resourceId].style.backgroundImage = 'none';
      }

    }


  }

  // Can I achieve the required build + senator??
  if (fieldValues.storeCurrentResourceTypeFailCount === 0 && 
      !fieldValues.storeCurrentCashFail && 
      !fieldValues.storeCurrentMysteryFail) {
    // Everything good
    WriteSingleString(document.getElementById("linewithtext-current-store-status"),
                    fieldValues.storeCurrentStatusString,16,true,"black");
    document.getElementById("linewithtext-current-store-status").style.backgroundColor = "lightgreen";                

  }
  else {
    WriteSingleString(document.getElementById("linewithtext-current-store-status"),
                    fieldValues.storeCurrentStatusString,16,true,"black");
    document.getElementById("linewithtext-current-store-status").style.backgroundColor = mercFailColour;                
  }





  /* ------------------------------------------------------------- */
  /* Set arch build actual colour:                           */
  /*    red - if none Left (it's all been spent)                */
  /* ------------------------------------------------------------- */
  let failCountPostMerc = 0;
  for (let resourceId = 0; resourceId <= 5; resourceId++) {

    //--------------------------------------------------------------
    // ARCH HOUSES ACTUAL
    //--------------------------------------------------------------

    let archStoreReqd = fieldValues.archStoreReqd[resourceId];
    let storeCurrentStrict = fieldValues.storeCurrentStrict[resourceId];
    let senatorReqd = dataArch.senatorStoreReqd[resourceId];
    let mercFinal = mercGlobal.storeFinal[resourceId]; 
    let storeTotalReqd = fieldValues.storeTotalReqd[resourceId];
    var allZero = false;
    allZero = archStoreReqd === 0 && storeCurrentStrict === 0 && senatorReqd === 0;

    //-----------------------------------------------------------------------------------------------
    // MERC FINAL / POST MERC
    let mercFinalDelta = mercFinal - archStoreReqd - senatorReqd;
    let totalStoreReqd = archStoreReqd + senatorReqd;
    mercGlobal.mercFinalReqdDelta[resourceId] = mercFinalDelta;

    if (allZero && mercFinal === 0) {
      /// No reqt for any, and don't have any
      // Blank as no requirement for any of this resource
      elemNumPostMercDelta[resourceId].textContent = "";
      SetStyle(elemNumPostMercDelta,StylesType.CLEAR[resourceId],resourceId);
      elemNumPostMercDelta[resourceId].style.border = 'none';
    }
    else if (mercFinalDelta === 0) {
      // Required = Have

      WriteSingleNumber(elemNumPostMercDelta[resourceId],storeTotalReqd,18,true,"black",false,true);
      SetStyle(elemNumPostMercDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
      elemNumPostMercDelta[resourceId].style.borderRadius = '0%';
      elemNumPostMercDelta[resourceId].style.border = 'solid';

    }
    else {

      // mercFinalDelta is non zero
      // Either have too many or not enough
      
      if (mercFinalDelta < 0) {

        // short on this one
        failCountPostMerc++;
        SetStyle(elemNumPostMercDelta,StylesType.ORANGE_NORMAL[resourceId],resourceId);
       // elemNumPostMercDelta[resourceId].style.backgroundColor = mercFailColour;
        elemNumPostMercDelta[resourceId].style.border = 'solid';
        if (CanBuyResource(resourceId) && resourceId != 0) {
          elemNumPostMercDelta[resourceId].style.borderRadius = '15px';
        }
        else {
          elemNumPostMercDelta[resourceId].style.borderRadius = '50%';
        }
        WriteSlash(elemNumPostMercDelta[resourceId],mercFinal,14,false,storeTotalReqd,16,true,"black",false,false);
//        WriteSlash(elemNumPostMercDelta[resourceId],mercFinal,14,false,mercFinalDelta,16,true,"black",false,true);
      }
      else if (mercFinalDelta > 0) {

        WriteSlash(elemNumPostMercDelta[resourceId],mercFinal,16,true,storeTotalReqd,14,false,"black",false,false);
//        WriteSlash(elemNumPostMercDelta[resourceId],mercFinal,14,false,mercFinalDelta,16,true,"black",false,true);

        if (resourceId === 0) {
          // Cash treated differently
          SetStyle(elemNumPostMercDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
          elemNumPostMercDelta[resourceId].style.borderRadius = '0%';
          elemNumPostMercDelta[resourceId].style.border = 'solid';

        }
        else {

          if (CanSellResource(resourceId)) {
            elemNumPostMercDelta[resourceId].style.borderRadius = '15px';
            SetStyle(elemNumPostMercDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
            elemNumPostMercDelta[resourceId].style.border = 'solid';

          }
          else {
            SetStyle(elemNumPostMercDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
            elemNumPostMercDelta[resourceId].style.borderRadius = '50%';
            elemNumPostMercDelta[resourceId].style.border = 'solid';
          }
        }
      }
      else {
        SetStyle(elemNumPostMercDelta,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
        elemNumPostMercDelta[resourceId].style.border = 'solid';
        elemNumPostMercDelta[resourceId].style.borderRadius = '0%';
          elemNumPostMercDelta[resourceId].style.borderRadius = '0px';
      }
    }


    if (mercGlobal.buyInProgress[resourceId] || mercGlobal.sellInProgress[resourceId]) {
      elemNumPostMercDelta[resourceId].style.border = 'dashed';
    }

    //---------------------------------------------------------------------
    let tradeCountReached = mercGlobal.totalTradeCount >= 2;

    if (resourceId != 0) {
 
      //------------------------------------------------------------ 
      // HOUSES REQD
      //------------------------------------------------------------ 
      elemNumArchHousesFree[resourceId].style.borderRadius = '15px';

      WriteSingleNumber(elemNumArchHousesFree[resourceId],
        dataArch.archHousesReqd[resourceId],16,true,"black",false,false);

      if (dataArch.archHousesReqd[resourceId] > 0) {
        SetStyle(elemNumArchHousesFree,StylesType.CLEAR_NORMAL[resourceId],resourceId);
      }
      else
      {
        SetStyle(elemNumArchHousesFree,StylesType.CLEAR_NORMAL[resourceId],resourceId);
      }

    }
    
    if (resourceId != 0) {

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
        WriteSingleNumber(elemNumArchHousesStrict[resourceId],
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
        elemNumArchHousesStrict[resourceId].textContent = "";
        elemNumArchHousesStrict[resourceId].style.borderRadius = '0px';
      }


      //------------------------------------------------------------ 
      // ARCH BUILD ADDITIONAL
      //------------------------------------------------------------ 
      if (dataArch.archHousesReqd[resourceId] > 0) {
        SetStyle(elemNumArchHousesAdd,StylesType.CLEAR_NORMAL[resourceId],resourceId); 

        elemNumArchHousesAdd[resourceId].style.borderRadius = '15px' ;
        if (dataArch.archHousesAddFree[resourceId] > 0)
        {
          WriteSingleNumber(elemNumArchHousesAdd[resourceId],
            dataArch.archHousesAddFree[resourceId],16,true,"black",true,false);
        }
        else 
        {
          WriteSingleNumber(elemNumArchHousesAdd[resourceId],
            dataArch.archHousesAddFree[resourceId],10,false,"black",false,false);
        }
      }
      else
      {
        SetStyle(elemNumArchHousesAdd,StylesType.CLEAR[resourceId],resourceId); 
        elemNumArchHousesAdd[resourceId].style.borderRadius = '0px' ;
        elemNumArchHousesAdd[resourceId].textContent = "";
      }

    } // if resourceId != 0

    //-----------------------------------------------------------
    // SENATOR STORE REQD
    //-----------------------------------------------------------
    SetStyle(elemNumsenatorStoreReqd,StylesType.CLEAR_NORMAL[resourceId],resourceId); 

    elemNumsenatorStoreReqd[resourceId].style.borderRadius = '15px' ;

    if (resourceId === 0 && fieldValues.senatorMysteryReqd === 0) {
      elemNumsenatorStoreReqd[resourceId].textContent = '?';
    }
    else if (resourceId === 0) {
      if (fieldValues.senatorMysteryReqd != 0) {
        elemNumsenatorStoreReqd[resourceId].textContent = '? ' + fieldValues.senatorMysteryReqd + ' ?';
      }
      else {
        elemNumsenatorStoreReqd[resourceId].textContent = '';

      }
    }
    else {
      WriteFieldValueBlankZero(elemNumsenatorStoreReqd[resourceId],dataArch.senatorStoreReqd[resourceId]);
    }

    //-----------------------------------------------------------
    // TOTAL STORE REQD
    //-----------------------------------------------------------
    elemNumStoreTotalReqd[resourceId].style.borderRadius = '0px';

    WriteSingleNumber(elemNumStoreTotalReqd[resourceId],
      fieldValues.storeTotalReqd[resourceId],16,true,"black",false,false);

    if (fieldValues.storeTotalReqd[resourceId] > 0) {
      SetStyle(elemNumStoreTotalReqd,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
    }
    else
    {
      // zero required
      SetStyle(elemNumStoreTotalReqd,StylesType.CLEAR[resourceId],resourceId);
    }

    
  } // 0 to 5


    // Can I achieve the required build + senator??
  if (fieldValues.postMercResourceTypeFailCount === 0 && 
      !fieldValues.postMercCashFail && 
      !fieldValues.postMercMysteryFail) {
    // Everything good
    WriteSingleString(document.getElementById("linewithtext-post-merc-status"),
                    fieldValues.postMercStatusString,16,true,"black");
    document.getElementById("linewithtext-post-merc-status").style.backgroundColor = "lightgreen";                

  }
  else {
    WriteSingleString(document.getElementById("linewithtext-post-merc-status"),
                    fieldValues.postMercStatusString,16,true,"black");
    document.getElementById("linewithtext-post-merc-status").style.backgroundColor = mercFailColour;                
  }


} // UPdateGUIArch

function CreateStoreStatusString(caption_, cashFail_, cashDelta_, resourceTypeFailCount_, mysteryDelta_) {

  let cashStatus = "";
  
  if (cashFail_) {
    cashStatus = "£:" + cross + "(" + cashDelta_ + ")";
  } 
  else if (cashDelta_ > 0) 
  {
    cashStatus = "£:" + tick + "(+" + cashDelta_ + ")";
  }
  else {
    cashStatus = "£:" + tick + "      ";
  }

  // Resource status
  let resourceTypeStatus = "";
  let mysteryStatus = "";
  if (resourceTypeFailCount_ > 0) {
    resourceTypeStatus = "Res:" + cross;
  }
  else {
    resourceTypeStatus = "Res:" + tick;
  }

  // mystery status
  if (mysteryDelta_ < 0) {
    mysteryStatus = "?:" + cross;
  }
  else {
    mysteryStatus = "?:" + tick;
  }

  return caption_ +
    cashStatus + "       " +
    resourceTypeStatus + "       " +
    mysteryStatus;
    //"Res Total Delta: " + fieldValues.storeCurrentResourceFailCount;
}

function CalculateMercSuccessFuture() {

  //mercGlobal.totalTradeCount;
  //fieldValues.postMercResourceTypeFailCount;
  //fieldValues.postMercResourceFailCount;
  //fieldValues.postMercStatusDelta[0];
  //fieldValues.postMercSuccessNow;
  //mercGlobal.postMercMysteryAvailable;
  //mercGlobal.mercFinalReqdDelta[resourceId];
  //function MercBuyResourceId
  //function MercBuyResourceId

  let cashOK = fieldValues.postMercStatusDelta[0] >= 0;
  let cashDelta = fieldValues.postMercStatusDelta[0];
  let mysteryOK = mercGlobal.postMercMysteryAvailable >= 0;
  let mysteryDelta = mercGlobal.postMercMysteryAvailable;
  let resourcesOk = fieldValues.postMercResourceTypeFailCount <= 0;
  let resourceTypeFailCount = fieldValues.postMercResourceTypeFailCount;
  let totalResourceFailCount = fieldValues.postMercResourceFailCount;
  let result = false;

  let spareResourceCashValue = [0,0,0,0,0,0];
  let missingResourceCashValue = [0,0,0,0,0,0];
  let missingResourcesTotalValue = 0;
  for (resourceId = 1; resourceId <=5; resourceId++) {
    spareResourceCashValue[resourceId] = Math.max(0,fieldValues.postMercStatusDelta[resourceId]) * resourceValue[resourceId] ;
    if (fieldValues.postMercStatusDelta[resourceId] < 0) {
      // This resource is missing
      missingResourceCashValue[resourceId] = Math.abs(fieldValues.postMercStatusDelta[resourceId])*resourceValue[resourceId];
      missingResourcesTotalValue += missingResourceCashValue[resourceId];
    }
    else {
      // Not short on this resource
      missingResourceCashValue[resourceId] = 0;
    }
  }

  result = false;

  if (fieldValues.postMercSuccessNow) {
    // Already achieved it
    result = true;
  }
  else if (mercGlobal.totalTradeCount === 2) {
    // Now = false and run out of trades. So not possible
    result = false;
  }
  else if (mercGlobal.totalTradeCount === 1) {

    // How many resources are we missing
    if (resourcesOk && cashOK && mysteryOK) {
        // everything fine
        result = true;
    }
    else if (resourcesOk && cashOK && !mysteryOK) { 110
      // Got a trade left, so can we buy any
      result = (cashDelta >= 3);
    }    
    else if (resourcesOk && !cashOK && mysteryOK) {//101
      // Need to sell to get more cash
      if (mercGlobal.mercFinalReqdDelta[1]*3 >= Math.abs(cashDelta) ||
          mercGlobal.mercFinalReqdDelta[2]*4 >= Math.abs(cashDelta) ||
          mercGlobal.mercFinalReqdDelta[3]*5 >= Math.abs(cashDelta) ||
          mercGlobal.mercFinalReqdDelta[4]*6 >= Math.abs(cashDelta) ||
          mercGlobal.mercFinalReqdDelta[5]*7 >= Math.abs(cashDelta)) {

          result = true;
      }
    }
    else if (resourcesOk && !cashOK && !mysteryOK) {//100
        // Cannot fix this with just one trade
        result = false;
    }
    else if (!resourcesOk && cashOK && mysteryOK && resourceTypeFailCount < 2) { //100
      // Can we buy just one type of resource?
      // find out which resource we need more of
      let resourceFailId = 0;
      for (resourceId=1; resourceId<=5; resourceId++) {
        if (fieldValues.postMercStatusDelta[resourceId] < 0) {
          resourceFailId = resourceId
        }
      }
      // Error if failId is zero!!!!!
      result = cashDelta >= Math.abs((fieldValues.postMercStatusDelta[resourceFailId] * resourceValue[resourceFailId]));
    }  
  }
  else {
    ////////////////////////////////////////////////////////////////////////////////
    // 2 trades remaining
    ////////////////////////////////////////////////////////////////////////////////
    if (resourceTypeFailCount > 2) {
      // Not possible
      result = false;
    }
    else if (resourceTypeFailCount == 1) {
      // Need to buy one resource. Mystery not checked at this point
      // Get the resource id and cost
      let resourceFailId = 0;
      for (resourceId=1; resourceId<=5; resourceId++) {
        if (fieldValues.postMercStatusDelta[resourceId] < 0) {
          resourceFailId = resourceId
        }
      }
      let resourceCost = Math.abs(fieldValues.postMercStatusDelta[resourceFailId]) * resourceValue[resourceFailId];
      if (cashDelta >= resourceCost && mysteryOK) {
        // can buy more resource
        result = true;
      }
      else if (cashDelta >= resourceCost && !mysteryOK) {
        // only one trade left here. buy the mystery?
        reult = cashDelta >= Math.abs(mysteryDelta)*3;

      }
    }
    else if (resourceTypeFailCount == 2) {
      // Can only do this with cash
      if (cashDelta >= missingResourcesTotalValue && mysteryOK) {
        // Enough cas to buy the resource and mystery is also good (on another resource)
        result = true;
      }
      //else if (cashDelta >= missingResourcesTotalValue && !mysteryOK) {
      //  let cashRemaining = cashDelta - missingResourcesTotalValue;
      //  if (cashRemaining >= 3) {
      //    // Check if we can continue to buy the resources that are being bought already
      //  }
     // }
     // let mysteryBuyOK = false;
     // for (resourceId=1; resourceId<=5; resourceId++) {
     //   if (fieldValues.postMercStatusDelta[resourceId] < 0) {
     //     // This is one of the resources. Can we afford more for mystery?
     //     if (cashRemaining >= mercGlobal.postMercMysteryAvailable[resourceId] * resourceValue[resourceId]) {

     //     }

    }
  }

  fieldValues.postMercSuccessFuture = result;

}

function CalculatePostMercStatus() {

  ////////////////////////////////////////////////////////////////////////
  // Calculate post merc status
  ////////////////////////////////////////////////////////////////////////
  fieldValues.postMercResourceTypeFailCount = 0;
  fieldValues.postMercResourceFailCount = 0;
  fieldValues.postMercCashFail = false;
  fieldValues.postMercMysteryAvailable = 0;
  // ????
  mercGlobal.postMercMysteryAvailable = 0;


  // Calculate all the deltas
  for (let resourceId=0; resourceId<=5; resourceId++) {

    fieldValues.postMercStatusDelta[resourceId] = 
      mercGlobal.storeFinal[resourceId] - 
      fieldValues.archStoreReqd[resourceId] - 
      dataArch.senatorStoreReqd[resourceId];

    let deltaThisResource = fieldValues.postMercStatusDelta[resourceId];
    if (resourceId != 0 )  {
      if (deltaThisResource < 0) {
        fieldValues.postMercResourceTypeFailCount += 1;
        fieldValues.postMercResourceFailCount += Math.abs(deltaThisResource) ;
      }
      fieldValues.postMercMysteryAvailable += Math.max(0,fieldValues.postMercStatusDelta[resourceId]);
      mercGlobal.postMercMysteryAvailable += Math.max(0,fieldValues.storePostMercDelta[resourceId]);
      
    }
    else {
      // cash
      if (deltaThisResource < 0) {
        fieldValues.postMercCashFail = true;
      }
      else {
        fieldValues.postMercCashFail = false;
      }

    }

    fieldValues.postMercResourceFail = fieldValues.postMercResourceFailCount > 0;

    fieldValues.storePostMercDelta[resourceId] = 
      mercGlobal.storeFinal[resourceId] - 
      fieldValues.archStoreReqd[resourceId] - 
      dataArch.senatorStoreReqd[resourceId];

  } // 0..5

  fieldValues.postMercSuccessNow = 
    fieldValues.postMercResourceTypeFailCount === 0 &&   
    !fieldValues.postMercCashFail && 
    fieldValues.postMercStatusDelta[0] >= 0 && 
    fieldValues.postMercResourceTypeFailCount <= 0 &&
    fieldValues.postMercMysteryDelta >=0; 


  fieldValues.postMercMysteryDelta = fieldValues.postMercMysteryAvailable - fieldValues.senatorMysteryReqd
  fieldValues.postMercMysteryFail = fieldValues.postMercMysteryDelta < 0;

  CalculateMercSuccessFuture();

  let mercSuccessString = "";
  if (fieldValues.postMercSuccessFuture) {
    mercSuccessString = tick; 
  }
  else {
    mercSuccessString = cross; 
  }

  fieldValues.postMercStatusString = CreateStoreStatusString(
    mercSuccessString + mercActive + ":     ",
    fieldValues.postMercCashFail, 
    fieldValues.postMercStatusDelta[0], 
    fieldValues.postMercResourceTypeFailCount, 
    fieldValues.postMercMysteryDelta);




} // CalculatePostMercStatus

function CalculateCurrentStoreStatus() {

  ////////////////////////////////////////////////////////////////////////
  // Calculate current status
  ////////////////////////////////////////////////////////////////////////
  fieldValues.storeCurrentResourceTypeFailCount = 0;
  fieldValues.storeCurrentResourceFailCount = 0;
  fieldValues.storeCurrentCashFail = false;
  fieldValues.storeCurrentMysteryAvailable = 0;
  mercGlobal.postMercMysteryAvailable = 0;


  // Calculate all the deltas
  for (let resourceId=0; resourceId<=5; resourceId++) {

    fieldValues.storeCurrentStatusDelta[resourceId] = 
      fieldValues.storeCurrentStrict[resourceId] - 
      fieldValues.archStoreReqd[resourceId] - 
      dataArch.senatorStoreReqd[resourceId];

    let deltaThisResource = fieldValues.storeCurrentStatusDelta[resourceId];
    if (resourceId != 0 )  {
      if (deltaThisResource < 0) {
        fieldValues.storeCurrentResourceTypeFailCount += 1;
        fieldValues.storeCurrentResourceFailCount += Math.abs(deltaThisResource) ;
      }
      fieldValues.storeCurrentMysteryAvailable += Math.max(0,fieldValues.storeCurrentStatusDelta[resourceId]);
      mercGlobal.postMercMysteryAvailable += Math.max(0,fieldValues.storePostMercDelta[resourceId]);
      
    }
    else {
      // cash
      if (deltaThisResource < 0) {
        fieldValues.storeCurrentCashFail = true;
      }
      else {
        fieldValues.storeCurrentCashFail = false;
      }

    }

    fieldValues.storeCurrentResourceFail = fieldValues.storeCurrentResourceFailCount > 0;

    fieldValues.storePostMercDelta[resourceId] = 
      mercGlobal.storeFinal[resourceId] - 
      fieldValues.archStoreReqd[resourceId] - 
      dataArch.senatorStoreReqd[resourceId];
  } // 0..5

  fieldValues.storeCurrentMysteryDelta = fieldValues.storeCurrentMysteryAvailable - fieldValues.senatorMysteryReqd
  fieldValues.storeCurrentMysteryFail = fieldValues.storeCurrentMysteryDelta < 0;



  fieldValues.storeCurrentStatusString = CreateStoreStatusString(
    "         CURR:    ",
    fieldValues.storeCurrentCashFail, 
    fieldValues.storeCurrentStatusDelta[0], 
    fieldValues.storeCurrentResourceTypeFailCount, 
    fieldValues.storeCurrentMysteryDelta);

} // CalculateCurrentStoreStatus

function WriteElemBlank(elem_) {
  elem_.textContent = "";
}

/* ---------------------------------------------------------------------------------------- */
/* Function: UpdateAll
/* ---------------------------------------------------------------------------------------- */
function UpdateAll() {
  /* Check to see if current architect houses selected are still affordable */

  CalculateStoreReqdTotal();
  ProcessArchitectStrict();


  ProcessMerc();

  CalculateCurrentStoreStatus();
  CalculatePostMercStatus();

  UpdateGUIArch();
  UpdateGUIMerc();

  // ------------------------------------------------------------
  // SENATOR STORE REQD row
  // Senator mystery
  let elemMysteryTotalReqd = document.getElementById("num-store-total-reqd-mystery");
  elemMysteryTotalReqd.classList.remove('mystery-reqd-non-zero');
  elemMysteryTotalReqd.classList.remove('mystery-reqdd-zero');

  if (fieldValues.senatorMysteryReqd > 0) {
    elemMysteryTotalReqd.classList.add('mystery-reqd-non-zero');
    elemMysteryTotalReqd.textContent = '? ' + fieldValues.senatorMysteryReqd + ' ?';

  }
  else {
    elemMysteryTotalReqd.classList.add('mystery-reqd-zero');
    elemMysteryTotalReqd.textContent = '';
    
  }

  // Write to CURRENT STORE STATUS MYSTERY and MERC STATUS MYSTERY
  let elemMysteryStoreTotalDelta = document.getElementById("num-store-total-delta-mystery");
  let elemMysteryPostMercTotalDelta = document.getElementById("num-post-merc-total-delta-mystery");
  
  let deltaCurrent = 0;
  let deltaPostMerc = 0;
  if (fieldValues.senatorMysteryReqd === 0) {
    WriteElemBlank(elemMysteryStoreTotalDelta)
    WriteElemBlank(elemMysteryPostMercTotalDelta)
  }
  else {
    deltaCurrent = fieldValues.storeCurrentMysteryAvailable - fieldValues.senatorMysteryReqd;
    deltaPostMerc = mercGlobal.postMercMysteryAvailable - fieldValues.senatorMysteryReqd;

    // delta Current
    if (deltaCurrent === 0) {
      WriteSingleNumber(elemMysteryStoreTotalDelta,fieldValues.senatorMysteryReqd,16,false,"black",false,false);
    }
    else if (deltaCurrent > 0) {
      WriteSlash(elemMysteryStoreTotalDelta,fieldValues.storeCurrentMysteryAvailable,16,true,fieldValues.senatorMysteryReqd,14,false,"black",false, false);
    }
    else if (deltaCurrent < 0) {
      WriteSlash(elemMysteryStoreTotalDelta,fieldValues.storeCurrentMysteryAvailable,14,false,fieldValues.senatorMysteryReqd,16,true,"black",false, false);
    }

    // delta Current
    if (deltaPostMerc === 0) {
      WriteSingleNumber(elemMysteryPostMercTotalDelta,fieldValues.senatorMysteryReqd,16,false,"black",false,false);
    }
    else if (deltaPostMerc > 0) {
      WriteSlash(elemMysteryPostMercTotalDelta,fieldValues.postMercMysteryAvailable,16,true,fieldValues.senatorMysteryReqd,14,false,"black",false, false);
    }
    else if (deltaPostMerc < 0) {
      WriteSlash(elemMysteryPostMercTotalDelta,fieldValues.postMercMysteryAvailable,14,false,fieldValues.senatorMysteryReqd,16,true,"black",false, false);
    }

  }

  //let mysteryDelta = mercGlobal.spareResourceCount - fieldValues.senatorMysteryReqd;
  //WriteSlash(elemMysteryStoreTotalDelta,mercGlobal.spareResourceCount,12,false,mysteryDelta,14,FinalizationRegistry,"black",false,true); 
  let pareResourceCOunt = 
  // if (fieldValues.senatorMysteryReqd === 0 && mercGlobal.spareResourceCount === 0) {
    //elemMysteryTotalReqd.textContent = '';
  //}
  //else if (mysteryDelta >= 0) {
  //  //elemMysteryTotalReqd.classList.remove('mystery-achieved');

  // }

  fieldValues.archModeFirstPass = false;
} // UpdateAll

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
  if (mercGlobal.totalTradeCount === 2) {
    elemNumTrades.style.backgroundColor = "red";
  }
  else if (mercGlobal.totalTradeCount === 1) {
    elemNumTrades.style.backgroundColor = "orange";
  }
  else
  {
    elemNumTrades.style.backgroundColor = "lightgreen";
  }
  //elemNumTrades.style.color = "grey";

  //elemNumMercStore[0].textContent = mercGlobal.mercStore[0];

  let resourceLookup = ["cash", "brick", "food", "tool", "wine", "cloth"];
  let styleResourceName = "";

  for (let resourceId = 0; resourceId <= 5; resourceId++) {

    styleResourceName = resourceLookup[resourceId];

    // MERC STORE MINUS BUTTON
    let minusButtonState = MinusButtonType.ORANGE_NORMAL;

    // use different store values dependent upon cash or resource
    
    //let newStyle = minusButtonState[resourceId];
    //SetMinusStyle(elemBtnDecMercStore[resourceId],newStyle,resourceId);

    if (resourceId === 0) {

      if (mercActive === MercType.MERC0) {
        WriteSingleNumber(elemNumPreMercStore[resourceId],mercGlobal.mercStore[resourceId],16,true,"black",false,false);
      }
      else {
        WriteSlash(elemNumPreMercStore[resourceId],mercGlobal.mercStore[resourceId],12,true,mercGlobal.storePreSell[resourceId],16,true,"black",false,false);
      }

      if (mercGlobal.storePreSell[resourceId] === 0 && mercActive === MercType.MERC0) {
        SetStyle(elemNumPreMercStore,StylesType.CLEAR[resourceId],resourceId);
        elemNumPreMercStore[resourceId].textContent = '';
      }
      else {
        SetStyle(elemNumPreMercStore,StylesType.CLEAR_NORMAL[resourceId],resourceId);
      }

    }
    else {
      WriteSingleNumber(elemNumPreMercStore[resourceId],mercGlobal.mercStore[resourceId],16,true,"black",false,false);

      if (mercGlobal.storePreSell[resourceId] === 0) {
        SetStyle(elemNumPreMercStore,StylesType.CLEAR[resourceId],resourceId);
      } 
      else {

        SetStyle(elemNumPreMercStore,StylesType.CLEAR_NORMAL[resourceId],resourceId);
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

      SetBorderRadius(elemBtnMercSell[resourceId],'15px');

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

      SetBorderRadius(elemBtnMercBuyPlus[resourceId],'15px');

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

/*
    let mercResourceDelta = mercGlobal.storeFinal[resourceId] - fieldValues.archStoreReqd[resourceId];
    let leftBold = false;
    let leftSize = 14;
    if (fieldValues.archStoreReqd[resourceId] === 0) {
      // Don't need any
      if (mercGlobal.storeFinal[resourceId] === 0) {
        SetStyle(elemNumQuickMercAct,StylesType.CLEAR[resourceId],resourceId);
       elemNumQuickMercAct[resourceId].textContent = "";
      }
      else {
        SetStyle(elemNumQuickMercAct,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
       elemNumQuickMercAct[resourceId].textContent = mercGlobal.storeFinal[resourceId];
      }
     leftBold = mercResourceDelta > 0;
    }
    else if (mercResourceDelta >= 0) {
     SetStyle(elemNumQuickMercAct,StylesType.RESOURCE_SPECIFIC[resourceId],resourceId);
     //SetStyle(elemNumQuickMercReq,StylesType.GREEN_NORMAL[resourceId],resourceId);
      leftBold = true;
      elemNumQuickMercAct[resourceId].textContent = mercGlobal.storeFinal[resourceId];
    }
    else if (mercResourceDelta < -1) {
      SetStyle(elemNumQuickMercAct,StylesType.RED_NORMAL[resourceId],resourceId);
      //SetStyle(elemNumQuickMercReq,StylesType.RED_NORMAL[resourceId],resourceId);
      leftBold=false;
      elemNumQuickMercAct[resourceId].textContent = mercGlobal.storeFinal[resourceId];
    }
    else if (mercResourceDelta < 0) {
      SetStyle(elemNumQuickMercAct,StylesType.ORANGE_NORMAL[resourceId],resourceId);
      //etStyle(elemNumQuickMercReq,StylesType.ORANGE_NORMAL[resourceId],resourceId);
      leftBold=false;
      elemNumQuickMercAct[resourceId].textContent = mercGlobal.storeFinal[resourceId];
    }
*/
    //elemNumQuickMercReq[resourceId].textContent = fieldValues.archStoreReqd[resourceId];

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

  elemArray[resourceId].classList.remove(StylesType.ORANGE_BLACK[resourceId]);
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
  // mercGlobal.buyTradeCount
  // mercGlobal.totalTradeCount

  let localSellCount = 0;
  let localBuyCount = 0;

  for (let resourceId=0; resourceId<=5; resourceId++) {

    //--------------------------------------------------------------------
    // Pre Sell
    //--------------------------------------------------------------------
    mercGlobal.mercStore[resourceId] = fieldValues.storeCurrentStrict[resourceId];

  }

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

  mercGlobal.totalTradeCount = localSellCount + localBuyCount;



  //-------------------------------------------------------
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


  }

  mercGlobal.storeCashValue[0] = mercGlobal.totalStoreCashValue;


}

function MercBuyResourceId() {
  // Only gets the first buy
  for (resourceId = 1; resourceId <=5 ; resourceId++) {
    if (mercGlobal.buyInProgress[resourceId]) {
      return resourceId;
    }
  }
  return 0;
}

function MercSellResourceId() {
  // Only gets the first buy
  for (resourceId = 1; resourceId <=5 ; resourceId++) {
    if (mercGlobal.sellInProgress[resourceId]) {
      return resourceId;
    }
  }
  return 0;
}

function ArchMercClick(resourceId) {

  if (resourceId != 0) {
      let archStoreReqd = fieldValues.archStoreReqd[resourceId];
      let mercFinal = mercGlobal.storeFinal[resourceId];
      let senatorReqd = dataArch.senatorStoreReqd[resourceId];
      let diffMercFinalToFree = mercFinal - archStoreReqd - senatorReqd;

      if (diffMercFinalToFree > 0) {
        // Sell
        ClickMercSellResourcePlus(resourceId);
      }
      else if (diffMercFinalToFree < 0) {
        // Buy
        ClickMercBuyResourcePlus(resourceId);
      }
  }

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


  function SetBorderRadius(elem_, radius_) {

    elem_.style.borderRadius = radius_;
  }


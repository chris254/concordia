let elemBtnResetAll;
let elemBtnResetStoreCurrent;
let elemBtnResetArchitect;
let elemBtnResetMerc3;

const styleGreenWithBorder = [
  "",
  "green-background-brick",
  "green-background-food",
  "green-background-tool",
  "green-background-wine",
  "green-background-cloth",
];

const styleClearWithBorder = [
  "",
  "clear-brick",
  "clear-food",
  "clear-tool",
  "clear-wine",
  "clear-cloth",
];
  const styleMinus = ["", "minus-brick", "minus-food", "minus-tool", "minus-wine", "minus-cloth"];

  const styleNotSelectable = [
    "",
    "not-selectable-brick",
    "not-selectable-food",
    "not-selectable-tool",
    "not-selectable-wine",
    "not-selectable-cloth",
  ];


const houseCost = [0,1,2,3,4,5];

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

const ArchActState = Object.freeze({
  NONE_AVAILABLE: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
  AVAILABLE: ["green-background-cash","green-background-brick","green-background-food","green-background-tool","green-background-wine","green-background-cloth"],
});

const MercBtnState = Object.freeze({
  NONE_AVAILABLE: ["clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border","clear-no-border"],
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

let elemBtnMercSellBrick;

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

const elemIdsArchHousesAct = [
  "num-arch-houses-act-cash",
  "num-arch-houses-act-brick",
  "num-arch-houses-act-food",
  "num-arch-houses-act-tool",
  "num-arch-houses-act-wine",
  "num-arch-houses-act-cloth",
];

 const elemNumArchHousesAct = elemIdsArchHousesAct.map((id) => document.getElementById(id));



  const elemIdsBtnDecStore = [
    "btn-dec-storecurrent-cash",
    "btn-dec-storecurrent-brick",
    "btn-dec-storecurrent-food",
    "btn-dec-storecurrent-tool",
    "btn-dec-storecurrent-wine",
    "btn-dec-storecurrent-cloth",
  ];

  const elemBtnDecStore = elemIdsBtnDecStore.map((id) => document.getElementById(id));

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

const elemNumPreMercSellValue = elemIdsPreMercSellValue.map((id) => document.getElementById(id));

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
const elemIdsMercDeltaSell = [
  "num-merc-delta-sell-cash",
  "num-merc-delta-sell-brick",
  "num-merc-delta-sell-food",
  "num-merc-delta-sell-tool",
  "num-merc-delta-sell-wine",
  "num-merc-delta-sell-cloth",
];

const elemNumMercDeltaSell = elemIdsMercDeltaSell.map((id) => document.getElementById(id));


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

const elemIdsBtnMercBuyMinus = [
  "btn-merc-buy-minus-cash",
  "btn-merc-buy-minus-brick",
  "btn-merc-buy-minus-food",
  "btn-merc-buy-minus-tool",
  "btn-merc-buy-minus-wine",
  "btn-merc-buy-minus-cloth",
];

const elemBtnMercBuyMinus = elemIdsBtnMercBuyMinus.map((id) => document.getElementById(id));

const elemIdsBtnMercSellMinus = [
  "btn-merc-sell-minus-cash",
  "btn-merc-sell-minus-brick",
  "btn-merc-sell-minus-food",
  "btn-merc-sell-minus-tool",
  "btn-merc-sell-minus-wine",
  "btn-merc-sell-minus-cloth",
];

const elemBtnMercSellMinus = elemIdsBtnMercSellMinus.map((id) => document.getElementById(id));


const elemIdsStoreCurrent = [
  "num-storecurrent-cash",
  "num-storecurrent-brick",
  "num-storecurrent-food",
  "num-storecurrent-tool",
  "num-storecurrent-wine",
  "num-storecurrent-cloth",
];

const elemNumStoreCurrent = elemIdsStoreCurrent.map((id) => document.getElementById(id));

const elemIdsStoreCost = [
  "num-arch-store-cost-cash",
  "num-arch-store-cost-brick",
  "num-arch-store-cost-food",
  "num-arch-store-cost-tool",
  "num-arch-store-cost-wine",
  "num-arch-store-cost-cloth",
];

const elemNumArchStoreCost = elemIdsStoreCost.map((id) => document.getElementById(id));

const elemIdsBtnIncArch = [
  "btn-inc-arch-cash",
  "btn-inc-arch-brick",
  "btn-inc-arch-food",
  "btn-inc-arch-tool",
  "btn-inc-arch-wine",
  "btn-inc-arch-cloth",
];

const elemBtnIncArch = elemIdsBtnIncArch.map((id) => document.getElementById(id));

const elemIdsNumArchRemaining = [
  "num-arch-remaining-cash",
  "num-arch-remaining-brick",
  "num-arch-remaining-food",
  "num-arch-remaining-tool",
  "num-arch-remaining-wine",
  "num-arch-remaining-cloth",
];

const elemNumArchRemaining = elemIdsNumArchRemaining.map((id) => document.getElementById(id));

const elemIdsNumArchHouses = [
  "num-arch-houses-act-cash",
  "num-arch-houses-act-brick",
  "num-arch-houses-act-food",
  "num-arch-houses-act-tool",
  "num-arch-houses-act-wine",
  "num-arch-houses-act-cloth",
];

const elemNumArchHouses = elemIdsNumArchHouses.map((id) => document.getElementById(id));



document.getElementById("btn-inc-arch-cloth");

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


  elemBtnArch = document.getElementById("btn-arch");
  elemBtnMerc = document.getElementById("btn-merc");

  archFreeMode = false;
  editMode = EditModeType.STRICT;
  btnEditMode = document.getElementById("btn-edit-mode");

  mercActive = MercType.MERC3;
  lastMercActive = MercType.MERC3;


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

  dataArch.archHousesCurrent.fill(0);
  dataArch.archHousesCurrent[indexBrick] = 0;
  dataArch.archHousesCurrent[indexFood] = 0;
  dataArch.archHousesCurrent[indexTool] = 0;
  dataArch.archHousesCurrent[indexWine] = 0;
  dataArch.archHousesCurrent[indexCloth] = 0;

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  elemBtnTrade1Mode = document.getElementById("btn-merc-trade1-mode");
  elemBtnTrade2Mode = document.getElementById("btn-merc-trade2-mode");

  mercTrade1Mode = "SELL";
  mercTrade2Mode = "BUY";

  UpdateAll();
});

function ArchStoreDec(resourceId) {
  fieldValues.storeCurrent[resourceId] = Max(0, fieldValues.storeCurrent[resourceId] - 1);

  UpdateAll();

}

function ArchStoreInc(resourceId) {
  fieldValues.storeCurrent[resourceId] += 1;
  UpdateAll();
}


function ArchHousesDec(resourceId) {
  dataArch.archHousesCurrent[resourceId] = Max(0, dataArch.archHousesCurrent[resourceId] - 1);

  UpdateAll();
}

function ArchHousesInc(resourceId) {
  if (fieldValues.archFreeMode) {
    dataArch.archHousesCurrent[resourceId] += 1;
  }
  else {
    if (dataArch.archMoreHousesAvailable[resourceId]) {
      dataArch.archHousesCurrent[resourceId] += 1;
    }
  }

  UpdateAll();

}


function MercStoreInc(resourceId) {
  if (resourceId === 0) {
    mercGlobal.mercStore[resourceId] += 1;
    mercGlobal.mercStorePreTrade[resourceId] += 1;
    mercGlobal.mercStorePostTrade[resourceId] += 1;
  } else {
    mercGlobal.mercStorePreTrade[resourceId] += 1;
    mercGlobal.mercStorePostTrade[resourceId] += 1;
  }

  UpdateAll();
}

function MercStoreDec(resourceId) {
  if (resourceId === 0) {
    if (mercGlobal.mercStorePostTrade[0] > 0 && mercGlobal.mercStore[resourceId] > 0) {
      mercGlobal.mercStore[resourceId] -= 1;
      mercGlobal.mercStorePreTrade[resourceId] -= 1;
      mercGlobal.mercStorePostTrade[resourceId] -= 1;
    }
  } else {
    // Normal resource
    if (mercGlobal.mercStorePreTrade[resourceId] > 0) {
      mercGlobal.mercStorePreTrade[resourceId] -= 1;

      if (mercGlobal.mercStorePostTrade[resourceId] > 0) mercGlobal.mercStorePostTrade[resourceId] -= 1;

      //mercGlobal.mercStorePreTrade[resourceId] -= 1;
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
  dataArch.archMoreHousesAvailable.fill(0);

  dataArch.archMoreHousesAvailableBrick = true;
  dataArch.archMoreHousesAvailableFood = true;
  dataArch.archMoreHousesAvailableTool = true;
  dataArch.archMoreHousesAvailableWine = true;
  dataArch.archMoreHousesAvailableCloth = true;

  /* Calculate store values from houses */
  fieldValues.storeCurrent[0] =
    dataArch.archHousesCurrent[indexBrick] * houseCost[indexBrick] +
    dataArch.archHousesCurrent[indexFood] * houseCost[indexFood] +
    dataArch.archHousesCurrent[indexTool] * houseCost[indexTool] +
    dataArch.archHousesCurrent[indexWine] * houseCost[indexWine] +
    dataArch.archHousesCurrent[indexCloth] * houseCost[indexCloth];

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
  dataArch.archBuildCost[0] = 
    dataArch.archHousesCurrent[indexBrick]*1 + 
    dataArch.archHousesCurrent[indexFood]*2 +
    dataArch.archHousesCurrent[indexTool]*3 +
    dataArch.archHousesCurrent[indexWine]*4 +
    dataArch.archHousesCurrent[indexCloth]*5

  dataArch.archBuildCost[1] = 
    dataArch.archHousesCurrent[indexFood] +
    dataArch.archHousesCurrent[indexTool] +
    dataArch.archHousesCurrent[indexWine] +
    dataArch.archHousesCurrent[indexCloth];

  dataArch.archBuildCost[2] =  dataArch.archHousesCurrent[indexBrick] + dataArch.archHousesCurrent[indexFood];
  dataArch.archBuildCost[3] = dataArch.archHousesCurrent[indexTool]; 
  dataArch.archBuildCost[4] = dataArch.archHousesCurrent[indexWine]; 
  dataArch.archBuildCost[5] = dataArch.archHousesCurrent[indexCloth]; 

  /* -------------------------------------------------------------- */
  /* Write to .archRem */
  /* -------------------------------------------------------------- */
  for (let resourceId = 0; resourceId <=5; resourceId++) {
    dataArch.archRem[resourceId] = fieldValues.storeCurrent[resourceId] - dataArch.archBuildCost[resourceId];
  }

  /* -------------------------------------------------------------- */
  /* Write to: */
  /* .archHousesDeltaPossible */
  /* .archMoreHousesAvailable */
  /* -------------------------------------------------------------- */
  for (let resourceId = 0; resourceId <=5; resourceId++) {
    dataArch.runOutOf[resourceId] = fieldValues.storeCurrent[resourceId] > 0 && dataArch.archRem[resourceId] <= 0;
  }

  /* --------------------------------------------------------------------- */
  /* BRICK HOUSES */
  /* --------------------------------------------------------------------- */
  for (let resourceId = 1; resourceId <= 5; resourceId++) {
    dataArch.archHousesDeltaPossible[resourceId] = Min(Math.floor(dataArch.archRem[resourceId] / houseCost[resourceId]), dataArch.archRem[2]);
  }

  dataArch.archHousesDeltaPossible[indexBrick] = Min(Math.floor(dataArch.archRem[0] / houseCost[indexBrick]), dataArch.archRem[2]);
  dataArch.archHousesDeltaPossible[indexFood] = Min3(
    Math.floor(dataArch.archRem[indexCash] / houseCost[indexFood]),
    dataArch.archRem[indexBrick],
    dataArch.archRem[indexFood]
  );
  dataArch.archHousesDeltaPossible[indexTool] = Min3(
    Math.floor(dataArch.archRem[indexCash] / houseCost[indexTool]),
    dataArch.archRem[indexBrick],
    dataArch.archRem[indexTool]
  );

  dataArch.archHousesDeltaPossible[indexWine] = Min3(
    Math.floor(dataArch.archRem[indexCash] / houseCost[indexWine]),
    dataArch.archRem[indexBrick],
    dataArch.archRem[indexWine]
  );
  dataArch.archHousesDeltaPossible[indexCloth] = Min3(
    Math.floor(dataArch.archRem[indexCash] / houseCost[indexCloth]),
    dataArch.archRem[indexBrick],
    dataArch.archRem[indexCloth]
  );

  for (let resourceId = 1; resourceId <= 5; resourceId++) {
    
    dataArch.archHousesTotalPossible[resourceId] = dataArch.archHousesDeltaPossible[resourceId] + dataArch.archHousesCurrent[resourceId];
    dataArch.archMoreHousesAvailable[resourceId] = dataArch.archHousesDeltaPossible[resourceId] > 0;

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

// -------------------------------------------------------------------------
// FUNCTION CalcTradeCount
// -------------------------------------------------------------------------
function CalcTradeCount() {
  let tradeCountLocal = 0;

  mercGlobal.mercTotalDelta[0] = 0;
  mercGlobal.mercBuyDelta[0] = 0;
  mercGlobal.mercSellDelta[0] = 0;

  for (let resourceId = 1; resourceId <= 5; resourceId++) {

    let deltaResource = mercGlobal.mercStorePostTrade[resourceId] - mercGlobal.mercStorePreTrade[resourceId];

    let sellActive = deltaResource < 0;
    let buyActive = deltaResource > 0;

    mercGlobal.mercBuyDelta[resourceId] = Math.max(deltaResource,0);
    mercGlobal.mercSellDelta[resourceId] = Math.min(deltaResource,0);

    mercGlobal.mercTotalDelta[resourceId] = deltaResource;

    let deltaCash = -mercGlobal.mercTotalDelta[resourceId] * resourceValue[resourceId];
    mercGlobal.mercTotalDelta[0] += deltaCash;

    if (sellActive) mercGlobal.mercSellDelta[0] += deltaCash;
    if (buyActive) mercGlobal.mercBuyDelta[0] += deltaCash;

  
    if (mercGlobal.mercTotalDelta[resourceId] != 0) {
      tradeCountLocal++;
    }


    mercGlobal.mercTradeCount = tradeCountLocal;
  }

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

  UpdateAll();
}

function SellMinus(resourceId) {
  mercGlobal.mercStorePostTrade[resourceId] += 1;
  mercGlobal.mercStorePostTrade[0] -= resourceValue[resourceId];

  UpdateAll();
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

  //CalcTradeCount();
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

  for (let resourceId = 0; resourceId <=5; resourceId++) {
    mercGlobal.mercStorePostTrade[resourceId] = mercGlobal.mercStorePreTrade[resourceId];
  }
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

function WriteSlashLargeSmall(elem_, left_, right_) {

  const largeText = document.createElement('span');
  largeText.className = 'large-text';
  const smallText = document.createElement('span');
  smallText.className = 'small-text';

  largeText.textContent = left_.toString();
  smallText.textContent = "/" + right_;

  elem_.textContent = '';
  elem_.appendChild(largeText);
  elem_.appendChild(smallText);


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

  for (let resourceId = 0; resourceId <=5; resourceId++) {
    SetArchStoreDecColour(elemBtnDecStore[resourceId], dataArch.runOutOf[resourceId], dataArch.archRem[resourceId]);

  }

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
  for (let resourceId = 0; resourceId <= 5; resourceId++) {

    WriteFieldValueBlankZero(elemNumStoreCurrent[resourceId], fieldValues.storeCurrent[resourceId]);

    if (resourceId != 0) {
      ClearAllArchActStyles(elemNumArchHousesAct[resourceId],resourceId);

      let archActState = ArchActState.NONE_AVAILABLE;
      if (dataArch.archHousesDeltaPossible[resourceId] > 0 ) archActState = ArchActState.AVAILABLE;
      else if (dataArch.archHousesCurrent[resourceId] > 0) archActState = ArchActState.AVAILABLE;
      else {
        archActState = ArchActState.NONE_AVAILABLE;
      }

      let newStyleAct = archActState[resourceId];
      // ARCH ACT GUI
      SetArchActStyle(elemNumArchHousesAct[resourceId],newStyleAct); 

      if (dataArch.archHousesTotalPossible[resourceId] === 0) {
        elemNumArchHousesAct[resourceId].textContent = "";
      } else {
        WriteSlashLargeSmall(elemNumArchHousesAct[resourceId],
          dataArch.archHousesCurrent[resourceId],
          dataArch.archHousesTotalPossible[resourceId]);
        //elemNumArchHousesAct[resourceId].textContent = 
        //  dataArch.archHousesCurrent[resourceId] + "/" + dataArch.archHousesTotalPossible[resourceId];
      }
    
      // ARCH POT GUI

    }

    elemNumArchRemaining[resourceId].textContent = dataArch.archRem[resourceId];

    if (dataArch.archRem[resourceId] < 0) {
      elemNumArchRemaining[resourceId].classList.add("red-background");
    } 
    else {
      elemNumArchRemaining[resourceId].classList.remove("red-background");
    }

    ConvertZeroesToBlank(elemNumArchStoreCost[resourceId], dataArch.archBuildCost[resourceId]);

    UpdateRemGui(elemNumArchRemaining[resourceId], fieldValues.storeCurrent[resourceId], dataArch.archRem[resourceId], fieldValues.archFreeMode);

    if (resourceId != 0) {
      if (dataArch.archMoreHousesAvailable[resourceId]) {
        elemBtnIncArch[resourceId].classList.remove("grey-background");
      }
      else {
        elemBtnIncArch[resourceId].classList.add("grey-background");
      }  

    }

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

function MercSellMinus(resourceId) {
  ProcessMerc();

  if (SellActive(resourceId) && mercGlobal.mercStorePostTrade[0] >= resourceValue[resourceId]) {
    SellMinus(resourceId);
  }
  UpdateAll();
}

function MercBuyMinus(resourceId) {
  ProcessMerc();

  if (BuyActive(resourceId)) {
    // Pressing this will sell resource
    BuyMinus(resourceId);
  }

  UpdateAll();
}


// -------------------------------------------------------------------------------
function UpdateGUIMerc() {
  // -------------------------------------------------------------------------------

  const smallText = document.createElement('span');
  const smallTextGrey = document.createElement('span');
  smallText.className = 'small-text';
  smallTextGrey.className = 'small-text-grey';
  const largeText = document.createElement('span');
  largeText.className = 'large-text';

  elemNumTrades.textContent = mercGlobal.mercTradeCount;

  //elemNumMercStore[0].textContent = mercGlobal.mercStore[0];

  let resourceLookup = ["cash", "brick", "food", "tool", "wine", "cloth"];
  let styleResourceName = "";

  for (let resourceId = 0; resourceId <= 5; resourceId++) {
    styleResourceName = resourceLookup[resourceId];

    //--------------------------------------------------------------------
    // Pre
    //--------------------------------------------------------------------
    if (resourceId === 0) {

      smallTextGrey.textContent = mercGlobal.mercStore[resourceId];
      largeText.textContent = "/" + mercGlobal.mercStorePreTrade[resourceId];

      elemNumPreMercStore[resourceId].textContent = '';
      elemNumPreMercStore[resourceId].appendChild(smallTextGrey);
      elemNumPreMercStore[resourceId].appendChild(largeText);

    }
    else {
      if (mercGlobal.mercStorePreTrade[resourceId] === 0) {
        elemNumPreMercStore[resourceId].textContent = "";
        elemNumPreMercStore[resourceId].classList.remove(styleResourceName);
      } else {
        elemNumPreMercStore[resourceId].textContent = mercGlobal.mercStorePreTrade[resourceId];
        elemNumPreMercStore[resourceId].classList.add(styleResourceName);
      }

    }

    //--------------------------------------------------------------------
    // £??
    //--------------------------------------------------------------------
    if (mercGlobal.preMercSellValue[resourceId] === 0) {
      elemNumPreMercSellValue[resourceId].textContent = "";
      elemNumPreMercSellValue[resourceId].classList.remove(styleResourceName);
    } else {
      elemNumPreMercSellValue[resourceId].textContent = mercGlobal.preMercSellValue[resourceId];
      elemNumPreMercSellValue[resourceId].classList.remove(styleResourceName);
    }

    //--------------------------------------------------------------------
    // Delta Sell GUI
    //--------------------------------------------------------------------
    if (mercGlobal.mercSellDelta[resourceId] === 0) {
      elemNumMercDeltaSell[resourceId].textContent = "";
    } else if (mercGlobal.mercSellDelta[resourceId] > 0) {
      elemNumMercDeltaSell[resourceId].textContent = "+" + mercGlobal.mercSellDelta[resourceId];
    }
    else 
    {
      elemNumMercDeltaSell[resourceId].textContent = mercGlobal.mercSellDelta[resourceId];
    }
    //--------------------------------------------------------------------
    // Delta Buy GUI
    //--------------------------------------------------------------------
    if (mercGlobal.mercBuyDelta[resourceId] === 0) {
      elemNumMercDeltaBuy[resourceId].textContent = "";
    } else if (mercGlobal.mercBuyDelta[resourceId] > 0) {
      elemNumMercDeltaBuy[resourceId].textContent = "+" + mercGlobal.mercBuyDelta[resourceId];
    }
    else 
    {
      elemNumMercDeltaBuy[resourceId].textContent = mercGlobal.mercBuyDelta[resourceId];
    }

    //--------------------------------------------------------------------
    // Delta Actual GUI
    //--------------------------------------------------------------------
    if (mercGlobal.mercTotalDelta[resourceId] === 0) {
      elemNumMercDeltaTotal[resourceId].textContent = "";
    } else if (mercGlobal.mercTotalDelta[resourceId] > 0) {
      elemNumMercDeltaTotal[resourceId].textContent = "+" + mercGlobal.mercTotalDelta[resourceId];
    }
    else 
    {
      elemNumMercDeltaTotal[resourceId].textContent = mercGlobal.mercTotalDelta[resourceId];
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

    let sellActive = mercGlobal.mercStorePostTrade[resourceId] < mercGlobal.mercStorePreTrade[resourceId];
    let buyActive = mercGlobal.mercStorePostTrade[resourceId] > mercGlobal.mercStorePreTrade[resourceId];

    //-----------------------------------------------------------------------
    // Merc Sell and Buy button colouring
    //-----------------------------------------------------------------------
    if (resourceId != 0) {

      let sellActive = mercGlobal.mercStorePostTrade[resourceId] < mercGlobal.mercStorePreTrade[resourceId];
      let buyActive = mercGlobal.mercStorePostTrade[resourceId] > mercGlobal.mercStorePreTrade[resourceId];
    
      // UPDATE SELL BUTTON
      UpdateMercBuySellButton(elemBtnMercSell,  resourceId, sellActive, buyActive, mercGlobal.mercSellPot[resourceId], mercGlobal.mercSellAct[resourceId]);

      // UPDATE BUY BUTTON
      UpdateMercBuySellButton(elemBtnMercBuy,  resourceId, buyActive, sellActive, mercGlobal.mercBuyPot[resourceId], mercGlobal.mercBuyAct[resourceId]);
      //console.log ("-----------------------------------------------------------");


    }

    //-----------------------------------------------------------------------
    // Merc Minus button colouring
    //-----------------------------------------------------------------------
    if (resourceId != 0) {
      if (BuyActive(resourceId)) {
        elemBtnMercBuyMinus[resourceId].classList.add(styleMinus[resourceId]);

        elemBtnMercBuyMinus[resourceId].textContent = "\u25BC";
      } else {
        elemBtnMercBuyMinus[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercBuyMinus[resourceId].textContent = " ";
      }
    }
    if (resourceId != 0) {
      if (SellActive(resourceId)) {
        elemBtnMercSellMinus[resourceId].classList.add(styleMinus[resourceId]);

        elemBtnMercSellMinus[resourceId].textContent = "\u25BC";
      } else {
        elemBtnMercSellMinus[resourceId].classList.remove(styleMinus[resourceId]);

        elemBtnMercSellMinus[resourceId].textContent = " ";
      }
    }
  }
}

//------------------------------------------------------------------
// ClearAllArchActStyles
//------------------------------------------------------------------
function ClearAllArchActStyles(elem, resourceId) {

  elem.classList.remove(ArchActState.NONE_AVAILABLE[resourceId]);
  elem.classList.remove(ArchActState.AVAILABLE[resourceId]);
}

//------------------------------------------------------------------
// SetArchActStyle
//------------------------------------------------------------------
function SetArchActStyle(elem, newStyle, resourceId) {

  ClearAllArchActStyles(elem, resourceId);
  
  elem.classList.add(newStyle);

}


//------------------------------------------------------------------
// ClearAllMercBtnStyles
//------------------------------------------------------------------
function ClearAllMercBtnStyles(elem, resourceId) {

  elem.classList.remove(MercBtnState.NONE_AVAILABLE[resourceId]);
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

//------------------------------------------------------------------
// UPDATE SELL BUTTON
//------------------------------------------------------------------
function UpdateMercBuySellButton(elemBtn_, resourceId, thisActive, otherActive, tradePotential_, tradeAct_) {

  const smallText = document.createElement('span');
  smallText.className = 'small-text';
  const largeText = document.createElement('span');
  largeText.className = 'large-text';

  let tradeCount = mercGlobal.mercTradeCount;
  let localStatus = MercBtnState.NOT_AVAILABLE;

  if (!thisActive && tradePotential_ === 0) {
    localStatus = MercBtnState.NONE_AVAILABLE;
  }
  else if (otherActive) {
    localStatus = MercBtnState.OTHER_ACTIVE;
  }
  else {
    if (thisActive) {
      if (tradePotential_ === 0) {
        localStatus = MercBtnState.ACTIVE_FULL;
        //console.log("sdgfhskfgskghaskgasd");
      }
      else {
        localStatus = MercBtnState.ACTIVE_NOT_FULL;
      }
    }
    else if (!thisActive) {
      if (tradeCount >= 2 || tradePotential_ === 0)  {
        localStatus = MercBtnState.NOT_AVAILABLE;
      }

      else if (tradePotential_ > 0 && tradeCount < 2) {
        localStatus = MercBtnState.NOT_ACTIVE_AVAILABLE;
      }
      else {
        //console.log ("ERROR") ;
      }

    }
  }

  // WRITE TO BUTTON TEXT
  if (localStatus === MercBtnState.NONE_AVAILABLE) {

    let btnStyle = localStatus[resourceId];

    SetMercSellBuyStyle(elemBtn_[resourceId], btnStyle, resourceId, 16);
    elemBtn_[resourceId].textContent = "";
  }
  else if (localStatus === MercBtnState.OTHER_ACTIVE) {

    let btnStyle = localStatus[resourceId];

    SetMercSellBuyStyle(elemBtn_[resourceId], btnStyle, resourceId, 16);
    elemBtn_[resourceId].textContent = "";

  }
  else if (localStatus === MercBtnState.ACTIVE_NOT_FULL || localStatus === MercBtnState.NOT_ACTIVE_AVAILABLE) {

    let btnStyle = localStatus[resourceId];
    
    // Can sell some
    SetMercSellBuyStyle(elemBtn_[resourceId], btnStyle, resourceId, 16);

    elemBtn_[resourceId].textContent = '';
    largeText.textContent = tradeAct_;
    let total = tradePotential_ + tradeAct_;
    smallText.textContent = "/" + total;

    elemBtn_[resourceId].appendChild(largeText);
    elemBtn_[resourceId].appendChild(smallText);

  }
  else if (localStatus === MercBtnState.ACTIVE_FULL) {

    let btnStyle = localStatus[resourceId];
    SetMercSellBuyStyle(elemBtn_[resourceId], styleClearWithBorder[resourceId], resourceId, 16);

    elemBtn_[resourceId].textContent = tradeAct_;

  }
  else if (localStatus === MercBtnState.NOT_AVAILABLE) {

    let btnStyle = localStatus[resourceId];
    SetMercSellBuyStyle(elemBtn_[resourceId], btnStyle, resourceId, 16);
    
    elemBtn_[resourceId].textContent = '';
    largeText.textContent = tradeAct_;
    let total = tradePotential_ + tradeAct_;
    smallText.textContent = "/" + total;

    elemBtn_[resourceId].appendChild(largeText);
    elemBtn_[resourceId].appendChild(smallText);

  }


}
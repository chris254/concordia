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

  const styleTradeAvailable = [
    "",
    "trade-avail-brick",
    "trade-avail-food",
    "trade-avail-tool",
    "trade-avail-wine",
    "trade-avail-cloth",
  ];
  const styleTradeFull = [
    "",
    "trade-full-brick",
    "trade-full-food",
    "trade-full-tool",
    "trade-full-wine",
    "trade-full-cloth",
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

const MercBuyStatus = Object.freeze({
  SELL_ACTIVE: "SELL_ACTIVE",
  ACTIVE_NOT_FULL: "ACTIVE_NOT_FULL",
  ACTIVE_FULL: "ACTIVE_FULL",
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
});

const MercSellStatus = Object.freeze({
  SELL_ACTIVE: "BUY_ACTIVE",
  ACTIVE_NOT_FULL: "ACTIVE_NOT_FULL",
  ACTIVE_FULL: "ACTIVE_FULL",
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
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
const elemIdsMercDeltaAct = [
  "num-merc-delta-cash",
  "num-merc-delta-brick",
  "num-merc-delta-food",
  "num-merc-delta-tool",
  "num-merc-delta-wine",
  "num-merc-delta-cloth",
];

const elemNumMercDeltaAct = elemIdsMercDeltaAct.map((id) => document.getElementById(id));

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

const elemIdsNumArchPos = [
  "",
  "num-arch-brickhouses-potential",
  "num-arch-foodhouses-potential",
  "num-arch-toolhouses-potential",
  "num-arch-winehouses-potential",
  "num-arch-clothhouses-potential",
];

const elemNumArchTotalPos = elemIdsNumArchPos.map((id) => document.getElementById(id));



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


function MercStoreInc(resourceId_) {
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

function MercStoreDec(resourceId_) {
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
      SetArchBuilActColour(elemNumArchHousesAct[resourceId], dataArch.archHousesDeltaPossible[resourceId], dataArch.archRem[resourceId]);
      UpdateActGui(elemNumArchHousesAct[resourceId], dataArch.archHousesCurrent[resourceId]);

      if (fieldValues.archFreeMode) {
        elemNumArchTotalPos[resourceId].textContent = "";

      }
      else {
        elemNumArchTotalPos[resourceId].textContent = dataArch.archHousesTotalPossible[resourceId];

      }

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

  if (SellActive(resourceId)) {
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
    // Delta Actual GUI
    //--------------------------------------------------------------------
    let delta = 0;
    if (mercGlobal.mercDeltaResource[resourceId] === 0) {
      elemNumMercDeltaAct[resourceId].textContent = "";
    } else if (mercGlobal.mercDeltaResource[resourceId] > 0) {
      elemNumMercDeltaAct[resourceId].textContent = "+" + mercGlobal.mercDeltaResource[resourceId];
    }
    else 
    {
      elemNumMercDeltaAct[resourceId].textContent = mercGlobal.mercDeltaResource[resourceId];
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

      let localBuyStatus = 
        CalcMercBuyStatus(resourceId, 
                          SellActive(resourceId), 
                          BuyActive(resourceId), 
                          mercGlobal.mercBuyPot[resourceId], 
                          mercGlobal.mercTradeCount);

      UpdateBuyButton(resourceId, localBuyStatus);

      //if (mercGlobal.mercBuyPot[resourceId] === 0) {
       // elemNumMercBuyPot[resourceId].textContent = "";
      //} 
      //else {
      //  elemNumMercBuyPot[resourceId].textContent = mercGlobal.mercBuyPot[resourceId];
     // }
    }

    //-----------------------------------------------------------------------
    // Merc Sell button colouring
    //-----------------------------------------------------------------------
    if (resourceId != 0) {

      let localSellStatus = 
        CalcMercSellStatus(resourceId, 
                          SellActive(resourceId), 
                          BuyActive(resourceId), 
                          mercGlobal.mercSellPot[resourceId], 
                          mercGlobal.mercTradeCount);

      UpdateSellButton(resourceId, localSellStatus);

      //if (mercGlobal.mercSell[resourceId] === 0) {
      //  elemBtnMercSell[resourceId].textContent = "";
      //} else {
      //  elemBtnMercSell[resourceId].textContent = mercGlobal.mercSellAct[resourceId];
     // }
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

function UpdateSellButton(resourceId_, btnStatus_) {

  const smallText = document.createElement('span');
  smallText.className = 'small-text';
  const largeText = document.createElement('span');
  largeText.className = 'large-text';

  elemBtnMercSell[resourceId_].classList.remove(styleTradeAvailable[resourceId_]);
  elemBtnMercSell[resourceId_].classList.remove(styleTradeFull[resourceId_]);
  elemBtnMercSell[resourceId_].classList.remove(styleMinus[resourceId_]);
  elemBtnMercSell[resourceId_].classList.remove(styleNotSelectable[resourceId_]);


  if (btnStatus_ === MercBuyStatus.BUY_ACTIVE) {

    elemBtnMercSell[resourceId_].textContent = "";

  }
  else if (btnStatus_ === MercBuyStatus.ACTIVE_NOT_FULL || btnStatus_ === MercBuyStatus.AVAILABLE) {

    elemBtnMercSell[resourceId_].classList.add(styleTradeAvailable[resourceId_]);

    elemBtnMercSell[resourceId_].textContent = '';
    largeText.textContent = mercGlobal.mercSellAct[resourceId_];
    let total = mercGlobal.mercStorePreTrade[resourceId_] + mercGlobal.mercBuyAct[resourceId_];
    smallText.textContent = "/" + total;

    elemBtnMercSell[resourceId_].appendChild(largeText);
    elemBtnMercSell[resourceId_].appendChild(smallText);

  }
  else if (btnStatus_ === MercBuyStatus.ACTIVE_FULL) {

    elemBtnMercSell[resourceId_].classList.add(styleTradeFull[resourceId_]);

    elemBtnMercSell[resourceId_].textContent = mercGlobal.mercSellAct[resourceId_];

  }
  else if (btnStatus_ === MercBuyStatus.NOT_AVAILABLE) {

    elemBtnMercSell[resourceId_].classList.add(styleNotSelectable[resourceId_]);

    elemBtnMercSell[resourceId_].textContent = '';
    largeText.textContent = mercGlobal.mercSellAct[resourceId_];
    let total = mercGlobal.mercStorePreTrade[resourceId_];
    smallText.textContent = "/" + total;

    elemBtnMercSell[resourceId_].appendChild(largeText);
    elemBtnMercSell[resourceId_].appendChild(smallText);

  }

}

function UpdateBuyButton(resourceId_, btnStatus_) {

  const smallText = document.createElement('span');
  smallText.className = 'small-text';
  const largeText = document.createElement('span');
  largeText.className = 'large-text';


  if (btnStatus_ === MercBuyStatus.SELL_ACTIVE) {

    elemBtnMercBuy[resourceId_].classList.remove(styleTradeAvailable[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleTradeFull[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleMinus[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleNotSelectable[resourceId_]);

    elemBtnMercBuy[resourceId_].textContent = "";

  }
  else if (btnStatus_ === MercBuyStatus.ACTIVE_NOT_FULL || btnStatus_ === MercBuyStatus.AVAILABLE) {

    elemBtnMercBuy[resourceId_].classList.add(styleTradeAvailable[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleTradeFull[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleMinus[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleNotSelectable[resourceId_]);

    elemBtnMercBuy[resourceId_].textContent = '';
    largeText.textContent = mercGlobal.mercBuyAct[resourceId_];
    let total = mercGlobal.mercBuyPot[resourceId_] + mercGlobal.mercBuyAct[resourceId_];
    smallText.textContent = "/" + total;

    elemBtnMercBuy[resourceId_].appendChild(largeText);
    elemBtnMercBuy[resourceId_].appendChild(smallText);

    // elemBtnMercBuy[resourceId_].textContent = mercGlobal.mercBuyAct[resourceId_];

  }
  else if (btnStatus_ === MercBuyStatus.ACTIVE_FULL) {

    elemBtnMercBuy[resourceId_].classList.remove(styleTradeAvailable[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.add(styleTradeFull[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleMinus[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleNotSelectable[resourceId_]);

    elemBtnMercBuy[resourceId_].textContent = mercGlobal.mercBuyAct[resourceId_];

  }
  else if (btnStatus_ === MercBuyStatus.NOT_AVAILABLE) {

    elemBtnMercBuy[resourceId_].classList.remove(styleTradeAvailable[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleTradeFull[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.remove(styleMinus[resourceId_]);
    elemBtnMercBuy[resourceId_].classList.add(styleNotSelectable[resourceId_]);

    elemBtnMercBuy[resourceId_].textContent = '';
    smallText.textContent = mercGlobal.mercBuyAct[resourceId_];
    let total = mercGlobal.mercBuyPot[resourceId_] - mercGlobal.mercSellAct[resourceId_];
    largeText.textContent = "/" + total;

    elemBtnMercBuy[resourceId_].appendChild(smallText);
    elemBtnMercBuy[resourceId_].appendChild(largeText);

//    elemBtnMercBuy[resourceId_].textContent = mercGlobal.mercBuyAct[resourceId_];

  }

}

function CalcMercBuyStatus(resourceId_, sellActive_, buyActive_, buyPot_, tradeCount_) {
  statusLocal = MercBuyStatus.AVAILABLE;

  // SELL_ACTIVE: "SELL_ACTIVE",
  // ACTIVE_NOT_FULL: "ACTIVE_NOT_FULL",
  // ACTIVE_FULL: "ACTIVE_FULL",
  // AVAILABLE: "AVAILABLE",
  // NOT_AVAILABLE: "NOT_AVAILABLE",

  if (sellActive_) statusLocal = MercBuyStatus.NOT_AVAILABLE;
  else if (buyActive_ && buyPot_ === 0) statusLocal = MercBuyStatus.ACTIVE_FULL;
  else if (buyActive_ && buyPot_ > 0) statusLocal = MercBuyStatus.ACTIVE_NOT_FULL;
  else if (!buyActive_ && (tradeCount_ >= 2 || buyPot_ === 0)) statusLocal = MercBuyStatus.NOT_AVAILABLE;
  else if (!buyActive_ && buyPot_ > 0 && tradeCount_ < 2) statusLocal = MercBuyStatus.AVAILABLE;

  return statusLocal;
}

function CalcMercSellStatus(resourceId_, sellActive_, buyActive_, sellPot_, tradeCount_) {
  statusLocal = MercBuyStatus.AVAILABLE;

  // SELL_ACTIVE: "SELL_ACTIVE",
  // ACTIVE_NOT_FULL: "ACTIVE_NOT_FULL",
  // ACTIVE_FULL: "ACTIVE_FULL",
  // AVAILABLE: "AVAILABLE",
  // NOT_AVAILABLE: "NOT_AVAILABLE",

  if (buyActive_) statusLocal = MercBuyStatus.NOT_AVAILABLE;
  else if (sellActive_ && sellPot_ === 0) statusLocal = MercBuyStatus.ACTIVE_FULL;
  else if (sellActive_ && sellPot_ > 0) statusLocal = MercBuyStatus.ACTIVE_NOT_FULL;
  else if (!sellActive_ && (tradeCount_ >= 2 || sellPot_ === 0)) statusLocal = MercBuyStatus.NOT_AVAILABLE;
  else if (!sellActive_ && sellPot_ > 0 && tradeCount_ < 2) statusLocal = MercBuyStatus.AVAILABLE;

  return statusLocal;
}

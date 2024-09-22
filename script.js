/* local data */
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

  archRemCash:0,
  archRemBrick:0,
  archRemFood:0,
  archRemTool:0,
  archRemWine:0,
  archRemCloth:0,

}

let elemBtnResetAll;
let elemBtnResetStoreCurrent;
let elemBtnResetArchitect;
let elemBtnResetMerc3;

let elemNumStorecurrentCash;
let elemNumStorecurrentBrick;
let elemNumStorecurrentFood;
let elemNumStorecurrentTool;
let elemNumStorecurrentWine;
let elemNumStorecurrentCloth;

let numStoreCurrentCash;
let numStoreCurrentBrick;
let numStoreCurrentFood;
let numStoreCurrentTool;
let numStoreCurrentWine;
let numStoreCurrentCloth;

let elemNumArchCostCash;
let elemNumArchCostBrick;
let elemNumArchCostFood;
let elemNumArchCostTool;
let elemNumArchCostWine;
let elemNumArchCostCloth;

let elemNumArchRemainingCash;
let elemNumArchRemainingBrick;
let elemNumArchRemainingFood;
let elemNumArchRemainingTool;
let elemNumArchRemainingWine;
let elemNumArchRemainingCloth;

let elemNumStorecurrentMercCash;
let elemNumStorecurrentMercBrick;
let elemNumStorecurrentMercFood;
let elemNumStorecurrentMercTool;
let elemNumStorecurrentMercWine;
let elemNumStorecurrentMercCloth;

let elemNumStorecurrentArchCash;
let elemNumStorecurrentArchBrick;
let elemNumStorecurrentArchFood;
let elemNumStorecurrentArchTool;
let elemNumStorecurrentArchWine;
let elemNumStorecurrentArchCloth;

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


let elemNumArchitectBrickHouses;
let elemNumArchitectFoodHouses;
let elemNumArchitectToolHouses;
let elemNumArchitectWineHouses;
let elemNumArchitectClothHouses;

let elemNumArchitectCashReqd;


let elemBtnArch;
let elemBtnMerc;

const CardType = Object.freeze({
  ARCHITECT: "ARCH",
  MERC3: "MERC3",
  MERC5: "MERC5"
});

let cardActive;

const MercType = Object.freeze({
  MERC3: "MERC3",
  MERC5: "MERC5"
});

let mercActive;


const EditModeType = Object.freeze({
  STRICT: "STRICT",
  FREE: "FREE",
});

let elemBtnMode;
let editMode;
let btnEditMode;


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

let  archBrickHouseCount;
let  archFoodHouseCount;
let  archToolHouseCount;
let  archWineHouseCount;
let  archClothHouseCount;

let btnSellMercBrick;
let btnSellMercFood;
let btnSellMercTool;
let btnSellMercWine;
let btnSellMercCloth;

document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  elemBtnMode = document.getElementById("btn-mode");
  elemBtnResetAll = document.getElementById("btn-reset-all");
  elemBtnResetStoreCurrent = document.getElementById("btn-reset-storecurrent");
  elemBtnResetArchitect = document.getElementById("btn-reset-architect");
  elemBtnResetMerc3 = document.getElementById("btn-reset-merc3");

  elemNumStorecurrentCash = document.getElementById("num-storecurrent-cash");
  elemNumStorecurrentBrick = document.getElementById("num-storecurrent-brick");
  elemNumStorecurrentFood = document.getElementById("num-storecurrent-food");
  elemNumStorecurrentTool = document.getElementById("num-storecurrent-tool");
  elemNumStorecurrentWine = document.getElementById("num-storecurrent-wine");
  elemNumStorecurrentCloth = document.getElementById("num-storecurrent-cloth");

  elemNumStorecurrentMercCash = document.getElementById("num-storecurrent-merc-cash");
  elemNumStorecurrentMercBrick = document.getElementById("num-storecurrent-merc-brick");
  elemNumStorecurrentMercFood = document.getElementById("num-storecurrent-merc-food");
  elemNumStorecurrentMercTool = document.getElementById("num-storecurrent-merc-tool");
  elemNumStorecurrentMercWine = document.getElementById("num-storecurrent-merc-wine");
  elemNumStorecurrentMercCloth = document.getElementById("num-storecurrent-merc-cloth");

  elemNumStorecurrentArchCash = document.getElementById("num-storecurrent-arch-cash");
  elemNumStorecurrentArchBrick = document.getElementById("num-storecurrent-arch-brick");
  elemNumStorecurrentArchFood = document.getElementById("num-storecurrent-arch-food");
  elemNumStorecurrentArchTool = document.getElementById("num-storecurrent-arch-tool");
  elemNumStorecurrentArchWine = document.getElementById("num-storecurrent-arch-wine");
  elemNumStorecurrentArchCloth = document.getElementById("num-storecurrent-arch-cloth");


  elemNumArchCostCash = document.getElementById("num-arch-store-cost-cash");
  elemNumArchCostBrick = document.getElementById("num-arch-store-cost-brick");
  elemNumArchCostFood = document.getElementById("num-arch-store-cost-food");
  elemNumArchCostTool = document.getElementById("num-arch-store-cost-tool");
  elemNumArchCostWine = document.getElementById("num-arch-store-cost-wine");
  elemNumArchCostCloth = document.getElementById("num-arch-store-cost-cloth");

  elemNumArchRemainingCash = document.getElementById("num-arch-remaining-cash");
  elemNumArchRemainingBrick = document.getElementById("num-arch-remaining-brick");
  elemNumArchRemainingFood = document.getElementById("num-arch-remaining-food");
  elemNumArchRemainingTool = document.getElementById("num-arch-remaining-tool");
  elemNumArchRemainingWine = document.getElementById("num-arch-remaining-wine");
  elemNumArchRemainingCloth = document.getElementById("num-arch-remaining-cloth");

  elemNumMercStoreOutCash = document.getElementById("num-merc-store-out-cash");
  elemNumMercStoreOutBrick = document.getElementById("num-merc-store-out-brick");
  elemNumMercStoreOutFood = document.getElementById("num-merc-store-out-food");
  elemNumMercStoreOutTool = document.getElementById("num-merc-store-out-tool");
  elemNumMercStoreOutWine = document.getElementById("num-merc-store-out-wine");
  elemNumMercStoreOutCloth = document.getElementById("num-merc-store-out-cloth");

  elemNumMercStoreInCash = document.getElementById("num-merc-store-in-cash");
  elemNumMercStoreInBrick = document.getElementById("num-merc-store-in-brick");
  elemNumMercStoreInFood = document.getElementById("num-merc-store-in-food");
  elemNumMercStoreInTool = document.getElementById("num-merc-store-in-tool");
  elemNumMercStoreInWine = document.getElementById("num-merc-store-in-wine");
  elemNumMercStoreInCloth = document.getElementById("num-merc-store-in-cloth");


  elemNumMercRemainingCash = document.getElementById("num-merc-remaining-cash");
  elemNumMercDeltaBrick = document.getElementById("num-merc-delta-brick");
  elemNumMercDeltaFood = document.getElementById("num-merc-delta-food");
  elemNumMercDeltaTool = document.getElementById("num-merc-delta-tool");
  elemNumMercDeltaWine = document.getElementById("num-merc-delta-wine");
  elemNumMercDeltaCloth = document.getElementById("num-merc-delta-cloth");

  elemNumMercRemaining2Cash = document.getElementById("num-merc-remaining2-cash");
  elemNumMercRemaining2Brick = document.getElementById("num-merc-remaining2-brick");
  elemNumMercRemaining2Food = document.getElementById("num-merc-remaining2-food");
  elemNumMercRemaining2Tool = document.getElementById("num-merc-remaining2-tool");
  elemNumMercRemaining2Wine = document.getElementById("num-merc-remaining2-wine");
  elemNumMercRemaining2Cloth = document.getElementById("num-merc-remaining2-cloth");

  elemNumArchitectBrickHouses = document.getElementById("num-architect-brickhouses");
  elemNumArchitectFoodHouses = document.getElementById("num-architect-foodhouses");
  elemNumArchitectToolHouses = document.getElementById("num-architect-toolhouses");
  elemNumArchitectWineHouses = document.getElementById("num-architect-winehouses");
  elemNumArchitectClothHouses = document.getElementById("num-architect-clothhouses");

  elemNumArchitectCashReqd = document.getElementById("num-architect-cash-reqd");

  elemBtnArch = document.getElementById("btn-architect");
  elemBtnMerc = document.getElementById("btn-merc");

  cardActive = CardType.ARCHITECT;
  editMode = EditModeType.STRICT;
  btnEditMode = document.getElementById("btn-edit-mode"); 

  mercActive = MercType.MERC3;

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

  mercBrickDelta=0;
  mercFoodDelta=0;
  mercToolDelta=0;
  mercWineDelta=0;
  mercClothDelta=0;

  archBrickHouseCount=0;
  archFoodHouseCount=0;
  archToolHouseCount=0;
  archWineHouseCount=0;
  archClothHouseCount=0;

  fieldValues.mercBuyBrick=0;
  fieldValues.mercBuyFood=0;
  fieldValues.mercBuyTool=0;
  fieldValues.mercBuyWine=0;
  fieldValues.mercBuyCloth=0;

  fieldValues.mercSellBrick=0;
  fieldValues.mercSellFood=0;
  fieldValues.mercSellTool=0;
  fieldValues.mercSellWine=0;
  fieldValues.mercSellCloth=0;

  UpdateAll();
});


function Dec(idNum) {

  if (idNum.includes("num-architect-brickhouses"))  archBrickHouseCount = Max(0,  archBrickHouseCount-1);
  if (idNum.includes("num-architect-foodhouses"))  archFoodHouseCount = Max(0,  archFoodHouseCount-1);
  if (idNum.includes("num-architect-toolhouses"))  archToolHouseCount = Max(0,  archToolHouseCount-1);
  if (idNum.includes("num-architect-winehouses"))  archWineHouseCount = Max(0,  archWineHouseCount-1);
  if (idNum.includes("num-architect-clothhouses"))  archClothHouseCount = Max(0,  archClothHouseCount-1);

  if (idNum.includes("num-storecurrent-cash")) fieldValues.storeCurrentCash = Max(0, fieldValues.storeCurrentCash-1);
  if (idNum.includes("num-storecurrent-brick")) fieldValues.storeCurrentBrick = Max(0, fieldValues.storeCurrentBrick-1);
  if (idNum.includes("num-storecurrent-food")) fieldValues.storeCurrentFood = Max(0, fieldValues.storeCurrentFood-1);
  if (idNum.includes("num-storecurrent-tool")) fieldValues.storeCurrentTool = Max(0, fieldValues.storeCurrentTool-1);
  if (idNum.includes("num-storecurrent-wine")) fieldValues.storeCurrentWine = Max(0, fieldValues.storeCurrentWine-1);
  if (idNum.includes("num-storecurrent-cloth")) fieldValues.storeCurrentCloth = Max(0, fieldValues.storeCurrentCloth-1);

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

  if (id.includes("num-storecurrent-cash")) fieldValues.storeCurrentCash += 1;
  if (id.includes("num-storecurrent-brick")) fieldValues.storeCurrentBrick = Min(10, fieldValues.storeCurrentBrick+1);
  if (id.includes("num-storecurrent-food")) fieldValues.storeCurrentFood = Min(10, fieldValues.storeCurrentFood+1);
  if (id.includes("num-storecurrent-tool")) fieldValues.storeCurrentTool = Min(10, fieldValues.storeCurrentTool+1);
  if (id.includes("num-storecurrent-wine")) fieldValues.storeCurrentWine = Min(10, fieldValues.storeCurrentWine+1);
  if (id.includes("num-storecurrent-cloth")) fieldValues.storeCurrentCloth = Min(10, fieldValues.storeCurrentCloth+1);
  
  UpdateAll();
}

function IsGreyBackground(element) {
    const computedStyle = window.getComputedStyle(element);
    const backgroundColor = computedStyle.backgroundColor;

    // Standard grey colors
    const standardGreyRGB = 'rgb(128, 128, 128)';
    const standardGreyHex = '#808080';
    
    // Check if the background color matches standard grey
    return backgroundColor === standardGreyRGB || backgroundColor.toLowerCase() === standardGreyHex;
}

// Function to update the result div with whether the 
 



function Inc(idItem, idButton) {

  const elemItem = document.getElementById(idItem);
  const elemButton = document.getElementById(idButton);

  let currentNumber = GetIntegerValue(elemItem.textContent);
  let buttonText = elemButton.textContent;


  if (!IsGreyBackground(elemButton) && idItem.includes("architect-brickhouses"))  archBrickHouseCount += 1;
  if (!IsGreyBackground(elemButton) && idItem.includes("architect-foodhouses"))  archFoodHouseCount += 1;
  if (!IsGreyBackground(elemButton) && idItem.includes("architect-toolhouses"))  archToolHouseCount += 1;
  if (!IsGreyBackground(elemButton) && idItem.includes("architect-winehouses"))  archWineHouseCount += 1;
  if (!IsGreyBackground(elemButton) && idItem.includes("architect-clothhouses"))  archClothHouseCount += 1;

  if (!IsGreyBackground(elemButton)) {
    currentNumber += 1;
  }

  /* currentNumber = Min(10, currentNumber); */
  /* elemItem.textContent = currentNumber; */

  UpdateAll();
}

function BuyBrick() {

  /* Allow if buy is already in progress OR we haven't got the max trades */
  if ((fieldValues.mercBuyBrick > 0 || fieldValues.mercTradeCount < 2) && fieldValues.mercRemCash >= 3) {
    if (!IsGreyBackground(btnBuyMercBrick)) fieldValues.mercBuyBrick += 1; 

  }
  UpdateAll();

}

function BuyFood() {

  if ((fieldValues.mercBuyFood > 0 || fieldValues.mercTradeCount < 2) && fieldValues.mercRemCash >= 4) {
    if (!IsGreyBackground(btnBuyMercFood)) fieldValues.mercBuyFood += 1; 
  }
  UpdateAll();

}

function BuyTool() {

  if ((fieldValues.mercBuyTool > 0 || fieldValues.mercTradeCount < 2) && fieldValues.mercRemCash >= 5) {
    if (!IsGreyBackground(btnBuyMercTool)) fieldValues.mercBuyTool += 1; 
  }

  UpdateAll();

}

function BuyWine() {

  if ((fieldValues.mercBuyWine > 0 || fieldValues.mercTradeCount < 2) && fieldValues.mercRemCash >= 6) {
  
    if (!IsGreyBackground(btnBuyMercWine)) fieldValues.mercBuyWine += 1; 
  }
  UpdateAll();

}

function BuyCloth() {

  if ((fieldValues.mercBuyCloth > 0 || fieldValues.mercTradeCount < 2) && fieldValues.mercRemCash >= 7) {

    if (!IsGreyBackground(btnBuyMercCloth)) fieldValues.mercBuyCloth += 1; 
  }
  UpdateAll();

}


function GetTotalResourceValue(
  brickCount,
  foodCount,
  toolCount,
  wineCount,
  clothCount
) {
  return (
    brickCount * 3 +
    foodCount * 4 +
    toolCount * 5 +
    wineCount * 6 +
    clothCount * 7
  );
}

function GetTotalHouseCost(
  brickCount,
  foodCount,
  toolCount,
  wineCount,
  clothCount
) {
  return (
    brickCount * 1 +
    foodCount * 2 +
    toolCount * 3 +
    wineCount * 4 +
    clothCount * 5
  );
}

function GetTotalBuildValue(
  brickCount,
  foodCount,
  toolCount,
  wineCount,
  clothCount
) {
  return (
    brickCount * 1 +
    foodCount * 2 +
    toolCount * 3 +
    wineCount * 4 +
    clothCount * 5
  );
}

function GetIntegerValue(str) {
  return parseInt(str) || 0;
}


/* ---------------------------------------------------------  --------------------------- */
/* STORE */
/* ------------------------------------------------------------------------------------ */
function GetStoreCashValue() {
  /* calculate cash */

  return GetTotalResourceValue(fieldValues.storeCurrentBrick, fieldValues.storeCurrentFood, 
                               fieldValues.storeCurrentTool, fieldValues.storeCurrentWine,
                               fieldValues.storeCurrentCloth);
}

function WriteFieldValueBlankZero(elem, value) {
  if (value === 0) {
    elem.textContent = '';
  }
  else {
    elem.textContent = value;
  }

}
function ResetStoreCurrent() {

  fieldValues.storeCurrentCash = 0;
  fieldValues.storeCurrentBrick = 0;
  fieldValues.storeCurrentFood = 0;
  fieldValues.storeCurrentTool = 0;
  fieldValues.storeCurrentWine = 0;
  fieldValues.storeCurrentCloth = 0;

  UpdateAll();
}

/* ------------------------------------------------------------------------------------ */
/* BUILD */
/* ------------------------------------------------------------------------------------ */

function ResetArchitect() {
  archBrickHouseCount=0;
  archFoodHouseCount=0;
  archToolHouseCount=0;
  archWineHouseCount=0;
  archClothHouseCount=0;

  UpdateAll();
}


function ProcessArchitect() {

  elemNumStorecurrentArchCash.textContent = fieldValues.storeCurrentCash;
  elemNumStorecurrentArchBrick.textContent=fieldValues.storeCurrentBrick;  
  elemNumStorecurrentArchFood.textContent=fieldValues.storeCurrentFood;  
  elemNumStorecurrentArchTool.textContent=fieldValues.storeCurrentTool;  
  elemNumStorecurrentArchWine.textContent=fieldValues.storeCurrentWine;  
  elemNumStorecurrentArchCloth.textContent=fieldValues.storeCurrentCloth;  


  /* brick reqd to build all of the houses */
  let brickReqd =
     archFoodHouseCount +  archToolHouseCount +  archWineHouseCount +  archClothHouseCount;


  let foodReqd =  archBrickHouseCount +  archFoodHouseCount;
  let toolReqd =  archToolHouseCount;
  let wineReqd =  archWineHouseCount;
  let clothReqd =  archClothHouseCount;

  let brickDelta = fieldValues.storeCurrentBrick - brickReqd;
  let foodDelta = fieldValues.storeCurrentFood - foodReqd;
  let toolDelta = fieldValues.storeCurrentTool - toolReqd;
  let wineDelta = fieldValues.storeCurrentWine - wineReqd;
  let clothDelta = fieldValues.storeCurrentCloth - clothReqd;

  elemNumArchitectBrickHouses.textContent =  archBrickHouseCount;
  elemNumArchitectFoodHouses.textContent =  archFoodHouseCount;
  elemNumArchitectToolHouses.textContent =  archToolHouseCount;
  elemNumArchitectWineHouses.textContent =  archWineHouseCount;
  elemNumArchitectClothHouses.textContent =  archClothHouseCount;

  elemNumArchCostBrick.textContent = brickReqd;
  elemNumArchCostFood.textContent = foodReqd;
  elemNumArchCostTool.textContent = toolReqd;
  elemNumArchCostWine.textContent = wineReqd;
  elemNumArchCostCloth.textContent = clothReqd;

  elemNumArchRemainingBrick.textContent = brickDelta;
  elemNumArchRemainingFood.textContent = foodDelta;
  elemNumArchRemainingTool.textContent = toolDelta;
  elemNumArchRemainingWine.textContent = wineDelta;
  elemNumArchRemainingCloth.textContent = clothDelta;

  /* Update the numbers on the screen */
  let toBankCash = GetTotalBuildValue( archBrickHouseCount,  archFoodHouseCount,  archToolHouseCount,  archWineHouseCount,  archClothHouseCount);
  /*elemNumArchitectCashReqd.textContent = toBankCash;  */
  let fromBankCash = 0;

  fieldValues.archRemCash = fieldValues.storeCurrentCash - toBankCash;
    

  /* calculate future cash */
  elemNumArchCostCash.textContent = toBankCash - fromBankCash;


/*  elemNumArchitectCashReqd.textContent = String(
    GetTotalBuildValue( archBrickHouseCount,  archFoodHouseCount,  archToolHouseCount,  archWineHouseCount,  archClothHouseCount)
  ); */

}

function GetMercTradeActive(buy, sell) {

  return buy > 0 || sell > 0;
}

/* ------------------------------------------------------------------------------------ */
/* MERC 3 */
/* ------------------------------------------------------------------------------------ */
function SetMercTradeStatus() {

  let tradeCount = 0;
  fieldValues.mercTradeActiveBrick = GetMercTradeActive(fieldValues.mercBuyBrick, fieldValues.mercSellBrick);
  fieldValues.mercTradeActiveFood = GetMercTradeActive(fieldValues.mercBuyFood, fieldValues.mercSellFood);
  fieldValues.mercTradeActiveTool = GetMercTradeActive(fieldValues.mercBuyTool, fieldValues.mercSellTool);
  fieldValues.mercTradeActiveWine = GetMercTradeActive(fieldValues.mercBuyWine, fieldValues.mercSellWine);
  fieldValues.mercTradeActiveCloth = GetMercTradeActive(fieldValues.mercBuyCloth, fieldValues.mercSellCloth);

  if (fieldValues.mercTradeActiveBrick) tradeCount += 1;
  if (fieldValues.mercTradeActiveFood) tradeCount += 1;
  if (fieldValues.mercTradeActiveTool) tradeCount += 1;
  if (fieldValues.mercTradeActiveWine) tradeCount += 1;
  if (fieldValues.mercTradeActiveCloth) tradeCount += 1;

  fieldValues.mercTradeCount = tradeCount;

}


function Max(value1, value2) {

  if (value1 > value2) {
    return value1;
  }
  else {
    return value2;
  }

}

function Min(value1, value2) {

  if (value1 < value2) {
    return value1;
  }
  else {
    return value2;
  }

}

function Min3(value1, value2, value3) {

  if (value1 < value2) {
    /* cannot be value 2 as value 1 is less */
    return Min (value1,value3);
  }
  else {
    /* compare value 2 and value 3) */
    if (value2 < value3) {
      return value2;
    }
    else {
      return value3;
    }

  }

}

function ApplyGreyBackground(elem) {
  elem.classList.add('grey-background');
}

function UpdateBuySellButton(elemBuyBtn, elemSellBtn, buyCount, sellCount, avail, rem) {

  if (buyCount > 0) {

    /* grey out the sell button */
    ApplyGreyBackground(elemSellBtn);
  }
  else if (sellCount > 0) {
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
function ProcessMerc() {

  let brickCost = 3;
  let foodCost = 4;
  let toolCost = 5;
  let wineCost = 6;
  let clothCost = 7;

  fieldValues.mercBuyAvailBrick = fieldValues.mercRemCash
  
  /* mercBuy... and mercSell... updated from buttons */
  /* Handlers are in BuyBrick etc. */
  fieldValues.mercDeltaBrick = fieldValues.mercBuyBrick - fieldValues.mercSellBrick;
  fieldValues.mercDeltaFood = fieldValues.mercBuyFood - fieldValues.mercSellFood;
  fieldValues.mercDeltaTool = fieldValues.mercBuyTool - fieldValues.mercSellTool;
  fieldValues.mercDeltaWine = fieldValues.mercBuyWine - fieldValues.mercSellWine;
  fieldValues.mercDeltaCloth = fieldValues.mercBuyCloth - fieldValues.mercSellCloth;


  fieldValues.mercRemBrick = fieldValues.storeCurrentBrick + fieldValues.mercDeltaBrick; 
  fieldValues.mercRemFood = fieldValues.storeCurrentFood + fieldValues.mercDeltaFood;
  fieldValues.mercRemTool = fieldValues.storeCurrentTool + fieldValues.mercDeltaTool;
  fieldValues.mercRemWine = fieldValues.storeCurrentWine + fieldValues.mercDeltaWine;
  fieldValues.mercRemCloth = fieldValues.storeCurrentCloth + fieldValues.mercDeltaCloth;

   let mercStartCash;
   if (mercActive === MercType.MERC3) {
    mercStartCash = 3;
   }
   else
   {
    mercStartCash = 5;

   }

  fieldValues.mercDeltaCash = mercStartCash - 
    GetTotalResourceValue(
      fieldValues.mercDeltaBrick, 
      fieldValues.mercDeltaFood, 
      fieldValues.mercDeltaTool,
      fieldValues.mercDeltaWine, 
      fieldValues.mercDeltaCloth);

  fieldValues.mercRemCash = fieldValues.storeCurrentCash + fieldValues.mercDeltaCash; 

  fieldValues.mercBuyAvailBrick = Math.floor(fieldValues.mercRemCash/brickCost);
  fieldValues.mercBuyAvailFood = Math.floor(fieldValues.mercRemCash/foodCost);
  fieldValues.mercBuyAvailTool = Math.floor(fieldValues.mercRemCash/toolCost);
  fieldValues.mercBuyAvailWine = Math.floor(fieldValues.mercRemCash/wineCost);
  fieldValues.mercBuyAvailCloth = Math.floor(fieldValues.mercRemCash/clothCost);

  /* ------------------------------------------------------------------ */

  let buyValue = fieldValues.mercBuyBrick*3 + fieldValues.mercBuyFood*4 + fieldValues.mercBuyTool*5 + fieldValues.mercBuyWine*6 + fieldValues.mercBuyCloth*7;
  let sellValue = fieldValues.mercSellBrick*3 + fieldValues.mercSellFood*4 + fieldValues.mercSellTool*5 + fieldValues.mercSellWine*6 + fieldValues.mercSellCloth*7;

  let toBankCash = buyValue;  

  let fromBankCash = mercStartCash + sellValue;

  /* remove all grey-background to start with */
  btnBuyMercBrick.classList.remove('grey-background');
  btnBuyMercFood.classList.remove('grey-background');
  btnBuyMercTool.classList.remove('grey-background');
  btnBuyMercWine.classList.remove('grey-background');
  btnBuyMercCloth.classList.remove('grey-background');

  btnSellMercBrick.classList.remove('grey-background');
  btnSellMercFood.classList.remove('grey-background');
  btnSellMercTool.classList.remove('grey-background');
  btnSellMercWine.classList.remove('grey-background');
  btnSellMercCloth.classList.remove('grey-background');

  UpdateBuySellButton(btnBuyMercBrick, btnSellMercBrick, fieldValues.mercBuyBrick, fieldValues.mercSellBrick, fieldValues.mercBuyAvailBrick, fieldValues.mercRemBrick);
  UpdateBuySellButton(btnBuyMercFood, btnSellMercFood, fieldValues.mercBuyFood, fieldValues.mercSellFood, fieldValues.mercBuyAvailFood, fieldValues.mercRemFood);
  UpdateBuySellButton(btnBuyMercTool, btnSellMercTool, fieldValues.mercBuyTool, fieldValues.mercSellTool, fieldValues.mercBuyAvailTool, fieldValues.mercRemTool);
  UpdateBuySellButton(btnBuyMercWine, btnSellMercWine, fieldValues.mercBuyWine, fieldValues.mercSellWine, fieldValues.mercBuyAvailWine, fieldValues.mercRemWine);
  UpdateBuySellButton(btnBuyMercCloth, btnSellMercCloth, fieldValues.mercBuyCloth, fieldValues.mercSellCloth, fieldValues.mercBuyAvailCloth, fieldValues.mercRemCloth);

   /* calculate future cash */
   elemNumMercStoreOutCash.textContent = toBankCash;
   elemNumMercStoreInCash.textContent = fromBankCash;

   elemNumMercStoreOutBrick.textContent = fieldValues.mercSellBrick;
   elemNumMercStoreOutFood.textContent = fieldValues.mercSellTool;
   elemNumMercStoreOutTool.textContent = fieldValues.mercSellFood;
   elemNumMercStoreOutWine.textContent = fieldValues.mercSellWine;
   elemNumMercStoreOutCloth.textContent = fieldValues.mercSellCloth;
   
   elemNumMercStoreInBrick.textContent = fieldValues.mercBuyBrick;
   elemNumMercStoreInFood.textContent = fieldValues.mercBuyFood;
   elemNumMercStoreInTool.textContent = fieldValues.mercBuyTool;
   elemNumMercStoreInWine.textContent = fieldValues.mercBuyWine;
   elemNumMercStoreInCloth.textContent = fieldValues.mercBuyCloth;
   
   elemNumMercRemainingCash.textContent = fieldValues.mercRemCash;
   
   DisplayDelta(elemNumMercDeltaBrick,fieldValues.mercRemBrick );
   DisplayDelta(elemNumMercDeltaFood, fieldValues.mercRemFood);
   DisplayDelta(elemNumMercDeltaTool, fieldValues.mercRemTool);
   DisplayDelta(elemNumMercDeltaWine, fieldValues.mercRemWine);
   DisplayDelta(elemNumMercDeltaCloth, fieldValues.mercRemCloth);
   
   elemNumMercRemaining2Cash.textContent = fieldValues.mercRemCash;
   elemNumMercRemaining2Brick.textContent = fieldValues.mercRemBrick;
   elemNumMercRemaining2Food.textContent = fieldValues.mercRemFood;
   elemNumMercRemaining2Tool.textContent = fieldValues.mercRemTool;
   elemNumMercRemaining2Wine.textContent = fieldValues.mercRemWine;
   elemNumMercRemaining2Cloth.textContent = fieldValues.mercRemCloth;
   
  
}



function ResetArchitect() {
  /*elemNumArchitectCashReqd.textContent = "";*/
  archBrickDeleta = 0;
   archFoodHouseCount = 0;
   archToolHouseCount = 0;
   archWineHouseCount = 0;
   archClothHouseCount = 0;

  UpdateAll();
}

function ConvertZeroesToBlank(id) {
  if (GetIntegerValue(id.textContent) === 0) {
    id.textContent = "";
  }
}

function UpdateErrorConditions() {
  /* check for negative numbers */
  if (GetIntegerValue(elemNumArchRemainingCash.textContent) < 0) {
    elemNumArchRemainingCash.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCash.classList.remove("red-background");
  }

  if (GetIntegerValue(elemNumArchRemainingBrick.textContent) < 0) {
    elemNumArchRemainingBrick.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingBrick.classList.remove("red-background");
  }

  if (GetIntegerValue(elemNumArchRemainingFood.textContent) < 0) {
    elemNumArchRemainingFood.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingFood.classList.remove("red-background");
  }

  if (GetIntegerValue(elemNumArchRemainingTool.textContent) < 0) {
    elemNumArchRemainingTool.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingTool.classList.remove("red-background");
  }

  if (GetIntegerValue(elemNumArchRemainingWine.textContent) < 0) {
    elemNumArchRemainingWine.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingWine.classList.remove("red-background");
  }

  if (GetIntegerValue(elemNumArchRemainingCloth.textContent) < 0) {
    elemNumArchRemainingCloth.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCloth.classList.remove("red-background");
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
  mercBrickDelta=0;
  mercFoodDelta=0;
  mercToolDelta=0;
  mercWineDelta=0;
  mercClothDelta=0;

  UpdateAll();
}


function ElemHasGreyBackground(id) {


}

function BlankAllZeroes() {

  ConvertZeroesToBlank(elemNumStorecurrentCash);
  ConvertZeroesToBlank(elemNumStorecurrentBrick);
  ConvertZeroesToBlank(elemNumStorecurrentFood);
  ConvertZeroesToBlank(elemNumStorecurrentTool);
  ConvertZeroesToBlank(elemNumStorecurrentWine);
  ConvertZeroesToBlank(elemNumStorecurrentCloth);

  ConvertZeroesToBlank(elemNumArchCostBrick);
  ConvertZeroesToBlank(elemNumArchCostFood);
  ConvertZeroesToBlank(elemNumArchCostTool);
  ConvertZeroesToBlank(elemNumArchCostWine);
  ConvertZeroesToBlank(elemNumArchCostCloth);

  /* ConvertZeroesToBlank(elemNumArchitectCashReqd);*/

  ConvertZeroesToBlank(elemNumArchCostCash);
  ConvertZeroesToBlank(elemNumArchCostBrick);
  ConvertZeroesToBlank(elemNumArchCostFood);
  ConvertZeroesToBlank(elemNumArchCostTool);
  ConvertZeroesToBlank(elemNumArchCostWine);
  ConvertZeroesToBlank(elemNumArchCostCloth);

  ConvertZeroesToBlank(elemNumArchRemainingCash);
  ConvertZeroesToBlank(elemNumArchRemainingBrick);
  ConvertZeroesToBlank(elemNumArchRemainingFood);
  ConvertZeroesToBlank(elemNumArchRemainingTool);
  ConvertZeroesToBlank(elemNumArchRemainingWine);
  ConvertZeroesToBlank(elemNumArchRemainingCloth);

  ConvertZeroesToBlank(elemNumMercStoreOutCash);
  ConvertZeroesToBlank(elemNumMercStoreOutBrick);
  ConvertZeroesToBlank(elemNumMercStoreOutFood);
  ConvertZeroesToBlank(elemNumMercStoreOutTool);
  ConvertZeroesToBlank(elemNumMercStoreOutWine);
  ConvertZeroesToBlank(elemNumMercStoreOutCloth);

  ConvertZeroesToBlank(elemNumMercStoreInCash);
  ConvertZeroesToBlank(elemNumMercStoreInBrick);
  ConvertZeroesToBlank(elemNumMercStoreInFood);
  ConvertZeroesToBlank(elemNumMercStoreInTool);
  ConvertZeroesToBlank(elemNumMercStoreInWine);
  ConvertZeroesToBlank(elemNumMercStoreInCloth);

  /*  ConvertZeroesToBlank(elemNumMercRemainingCash);*/
  ConvertZeroesToBlank(elemNumMercDeltaBrick);
  ConvertZeroesToBlank(elemNumMercDeltaFood);
  ConvertZeroesToBlank(elemNumMercDeltaTool);
  ConvertZeroesToBlank(elemNumMercDeltaWine);
  ConvertZeroesToBlank(elemNumMercDeltaCloth);

  ConvertZeroesToBlank(elemNumArchitectBrickHouses);
  ConvertZeroesToBlank(elemNumArchitectFoodHouses);
  ConvertZeroesToBlank(elemNumArchitectToolHouses);
  ConvertZeroesToBlank(elemNumArchitectWineHouses);
  ConvertZeroesToBlank(elemNumArchitectClothHouses);


}



function UpdateGUI() {

  /* write to the GUI */
  elemNumStorecurrentCash.textContent = fieldValues.storeCurrentCash;
  elemNumStorecurrentBrick.textContent = fieldValues.storeCurrentBrick;
  elemNumStorecurrentFood.textContent = fieldValues.storeCurrentFood;
  elemNumStorecurrentTool.textContent = fieldValues.storeCurrentTool;
  elemNumStorecurrentWine.textContent = fieldValues.storeCurrentWine;
  elemNumStorecurrentCloth.textContent = fieldValues.storeCurrentCloth;

  elemNumStorecurrentMercCash.textContent = fieldValues.storeCurrentCash;
  elemNumStorecurrentMercBrick.textContent=fieldValues.storeCurrentBrick;  
  elemNumStorecurrentMercFood.textContent=fieldValues.storeCurrentFood;  
  elemNumStorecurrentMercTool.textContent=fieldValues.storeCurrentTool;  
  elemNumStorecurrentMercWine.textContent=fieldValues.storeCurrentWine;  
  elemNumStorecurrentMercCloth.textContent=fieldValues.storeCurrentCloth;  

  btnSellMercBrick.textContent = fieldValues.mercRemBrick;

  WriteFieldValueBlankZero(elemNumStorecurrentCash, fieldValues.storeCurrentCash);
  WriteFieldValueBlankZero(elemNumStorecurrentBrick, fieldValues.storeCurrentBrick);
  WriteFieldValueBlankZero(elemNumStorecurrentFood, fieldValues.storeCurrentFood);
  WriteFieldValueBlankZero(elemNumStorecurrentTool, fieldValues.storeCurrentTool);
  WriteFieldValueBlankZero(elemNumStorecurrentWine, fieldValues.storeCurrentWine);
  WriteFieldValueBlankZero(elemNumStorecurrentCloth, fieldValues.storeCurrentCloth);

  elemNumArchRemainingCash.textContent = fieldValues.archRemCash;;



  /* Determine grey backgrounds */


}

/* ---------------------------------------------------------------------------------------- */
/* Function: UpdateAll
/* ---------------------------------------------------------------------------------------- */
function UpdateAll() {


  /* Check to see if current architect houses selected are still affordable */

  ProcessArchitect();
  ProcessMerc();


  /* Assign differet colours to the buttons */

  UpdateErrorConditions();

  BlankAllZeroes();

  /* Apply additional formatting depending upon moding and valus */
  if (editMode === EditModeType.STRICT) {
    
    let brickRemaining = GetIntegerValue(elemNumArchRemainingBrick.textContent);
    let foodRemaining = GetIntegerValue(elemNumArchRemainingFood.textContent);
    let toolRemaining = GetIntegerValue(elemNumArchRemainingTool.textContent);
    let wineRemaining = GetIntegerValue(elemNumArchRemainingWine.textContent);
    let clothRemaining = GetIntegerValue(elemNumArchRemainingCloth.textContent);

    let brickCost = 1;
    let foodCost = 2;
    let toolCost = 3;
    let wineCost = 4;
    let clothCost = 5;

    let housesAvailable=0;

    /* Architect */
    /* BRICK */
    housesAvailable = Min(Math.floor(fieldValues.archRemCash/brickCost),foodRemaining);

    if (fieldValues.archRemCash < brickCost || foodRemaining < 1) {
      btnIncArchBrick.classList.add('grey-background');
      btnIncArchBrick.textContent = '';
    }
    else {
      btnIncArchBrick.classList.remove('grey-background');
      btnIncArchBrick.textContent =  archBrickHouseCount + "/" + (housesAvailable + archBrickHouseCount);

    }

    /* FOOD */
    housesAvailable = Min3(Math.floor(fieldValues.archRemCash/foodCost),brickRemaining, foodRemaining);

    if (fieldValues.archRemCash < foodCost || brickRemaining < 1 || foodRemaining < 1) {
      btnIncArchFood.classList.add('grey-background');
      btnIncArchFood.textContent = '';
    }
    else {
      btnIncArchFood.classList.remove('grey-background');
      btnIncArchFood.textContent = archFoodHouseCount + "/" + (housesAvailable + archFoodHouseCount);
    }

    /* TOOL */
    housesAvailable = Min3(Math.floor(fieldValues.archRemCash/toolCost),brickRemaining, toolRemaining);

    btnIncArchTool.textContent = archToolHouseCount + "/" + (housesAvailable + archToolHouseCount);

    if (fieldValues.archRemCash < toolCost || brickRemaining < 1 || toolRemaining < 1) {
      btnIncArchTool.classList.add('grey-background');
      btnIncArchTool.textContent = '';
    }
    else {
      btnIncArchTool.classList.remove('grey-background');
    }

    /* WINE */
    housesAvailable = Min3(Math.floor(fieldValues.archRemCash/wineCost),brickRemaining, wineRemaining);

    if (fieldValues.archRemCash < wineCost || brickRemaining < 1 || wineRemaining < 1) {
      btnIncArchWine.classList.add('grey-background');
      btnIncArchWine.textContent = '';
    }
    else {
      btnIncArchWine.classList.remove('grey-background');
      btnIncArchWine.textContent = archWineHouseCount + "/" + (housesAvailable + archWineHouseCount);
    }

    /* CLOTH */
    housesAvailable = Min3(Math.floor(fieldValues.archRemCash/clothCost),brickRemaining, clothRemaining);

    if (fieldValues.archRemCash < clothCost || brickRemaining < 1 || clothRemaining < 1) {
      btnIncArchCloth.classList.add('grey-background');
      btnIncArchCloth.textContent = '';
    }
    else {
      btnIncArchCloth.classList.remove('grey-background');
      btnIncArchCloth.textContent = archClothHouseCount + "/" + (housesAvailable + archClothHouseCount);
    }

  }
  else {

    btnIncArchBrick.classList.remove('grey-background');
    btnIncArchFood.classList.remove('grey-background');
    btnIncArchTool.classList.remove('grey-background');
    btnIncArchWine.classList.remove('grey-background');
    btnIncArchCloth.classList.remove('grey-background');

  }

  SetMercTradeStatus();

  /* always make dec buttons grey if zero */
  if (GetIntegerValue(elemNumArchitectBrickHouses.textContent) === 0) {
    btnDecArchBrick.classList.add ('grey-background');
  }
  else
  {
    btnDecArchBrick.classList.remove ('grey-background');
  }

  if (GetIntegerValue(elemNumArchitectFoodHouses.textContent) === 0) {
    btnDecArchFood.classList.add ('grey-background');
  }
  else
  {
    btnDecArchFood.classList.remove ('grey-background');
  }

  if (GetIntegerValue(elemNumArchitectToolHouses.textContent) === 0) {
    btnDecArchTool.classList.add ('grey-background');
  }
  else
  {
    btnDecArchTool.classList.remove ('grey-background');
  }

  if (GetIntegerValue(elemNumArchitectWineHouses.textContent) === 0) {
    btnDecArchWine.classList.add ('grey-background');
  }
  else
  {
    btnDecArchWine.classList.remove ('grey-background');
  }

  if (GetIntegerValue(elemNumArchitectClothHouses.textContent) === 0) {
    btnDecArchCloth.classList.add ('grey-background');
  }
  else
  {
    btnDecArchCloth.classList.remove ('grey-background');
  }

  if (editMode === EditModeType.STRICT && cardActive === CardType.MERC3) {
  
  }

  UpdateGUI();  

}

function SetCardArchitect() {
  cardActive = CardType.ARCHITECT; 
  UpdateAll();
}

function SetCardMerc() {
  if (mercActive === MercType.MERC3) {
    mercActive = MercType.MERC5;
  }
  else {
    mercActive = MercType.MERC3;
  }
  elemBtnMerc.textContent = mercActive;
  
  UpdateAll();

}


function ToggleEditMode() {

  if (editMode === EditModeType.STRICT) {
    btnEditMode.textContent = "FREE";
    editMode = EditModeType.FREE;

  }
  else {
    btnEditMode.textContent = "STRICT";
    editMode = EditModeType.STRICT;
  }

  UpdateAll();
}
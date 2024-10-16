/* local data */
let fieldValues = {
  storeCurrentCash:0,
  storeCurrentBrick:0,
  storeCurrentFood:0,
  storeCurrentTool:0,
  storeCurrentWine:0,
  storeCurrentCloth:0,

  archBrickHousesActual:0,
  archFoodHousesActual:0,
  archToolHousesActual:0,
  archWineHousesActual:0,
  archClothHousesActual:0,

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

  archBrickHousesPotential:0,
  archFoodHousesPotential:0,
  archToolHousesPotential:0,
  archWineHousesPotential:0,
  archClothHousesPotential:0,

  archBrickHousesValid:false,
  archFoodHousesValid:false,
  archToolHousesValid:false,
  archWineHousesValid:false,
  archClothHousesValid:false,

  archToBankCash:0,
  archFromBankCash:0,
  mercToBankCash:0,
  mercFromBankCash:0,

  archCashCost:0,
  archCostBrick:0,
  archCostFood:0,
  archCostTool:0,
  archCostWine:0,
  archCostCloth:0,

  freeMode:false,

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

let elemNumArchitectBrickHousesActual;
let elemNumArchitectFoodHousesActual;
let elemNumArchitectToolHousesActual;
let elemNumArchitectWineHousesActual;
let elemNumArchitectClothHousesActual;

let elemNumArchitectBrickHousesPotential;
let elemNumArchitectFoodHousesPotential;
let elemNumArchitectToolHousesPotential;
let elemNumArchitectWineHousesPotential;
let elemNumArchitectClothHousesPotential;

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

let btnSellMercBrick;
let btnSellMercFood;
let btnSellMercTool;
let btnSellMercWine;
let btnSellMercCloth;

document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  document.getElementById("version").textContent = "v1.08";

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

  elemNumStorecurrentArchCash = document.getElementById("num-storecurrent-cash");
  elemNumStorecurrentArchBrick = document.getElementById("num-storecurrent-brick");
  elemNumStorecurrentArchFood = document.getElementById("num-storecurrent-food");
  elemNumStorecurrentArchTool = document.getElementById("num-storecurrent-tool");
  elemNumStorecurrentArchWine = document.getElementById("num-storecurrent-wine");
  elemNumStorecurrentArchCloth = document.getElementById("num-storecurrent-cloth");


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

  elemNumArchitectBrickHousesActual = document.getElementById("num-arch-brickhouses-actual");
  elemNumArchitectFoodHousesActual = document.getElementById("num-arch-foodhouses-actual");
  elemNumArchitectToolHousesActual = document.getElementById("num-arch-toolhouses-actual");
  elemNumArchitectWineHousesActual = document.getElementById("num-arch-winehouses-actual");
  elemNumArchitectClothHousesActual = document.getElementById("num-arch-clothhouses-actual");

  elemNumArchitectBrickHousesPotential = document.getElementById("num-arch-brickhouses-potential");
  elemNumArchitectFoodHousesPotential = document.getElementById("num-arch-foodhouses-potential");
  elemNumArchitectToolHousesPotential = document.getElementById("num-arch-toolhouses-potential");
  elemNumArchitectWineHousesPotential = document.getElementById("num-arch-winehouses-potential");
  elemNumArchitectClothHousesPotential = document.getElementById("num-arch-clothhouses-potential");


  elemBtnArch = document.getElementById("btn-architect");
  elemBtnMerc = document.getElementById("btn-merc");

  cardActive = CardType.ARCHITECT;
  freeMode = false;
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

  fieldValues.archBrickHousesActual=0;
  fieldValues.archFoodHousesActual=0;
  fieldValues.archToolHousesActual=0;
  fieldValues.archWineHousesActual=0;
  fieldValues.archClothHousesActual=0;

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

  if (idNum.includes("num-arch-brickhouses-actual"))  fieldValues.archBrickHousesActual = Max(0,  fieldValues.archBrickHousesActual-1);
  if (idNum.includes("num-arch-foodhouses-actual"))  fieldValues.archFoodHousesActual = Max(0,  fieldValues.archFoodHousesActual-1);
  if (idNum.includes("num-arch-toolhouses-actual"))  fieldValues.archToolHousesActual = Max(0,  fieldValues.archToolHousesActual-1);
  if (idNum.includes("num-arch-winehouses-actual"))  fieldValues.archWineHousesActual = Max(0,  fieldValues.archWineHousesActual-1);
  if (idNum.includes("num-arch-clothhouses-actual"))  fieldValues.archClothHousesActual = Max(0,  fieldValues.archClothHousesActual-1);

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

  /* idItem example: num-arch-brickhouses-actual */
  /* idButton example: btn-inc-arch-brick */
  if (fieldValues.archBrickHousesValid && idItem.includes("num-arch-brickhouses-actual")) fieldValues.archBrickHousesActual += 1;
  if (fieldValues.archFoodHousesValid && idItem.includes("num-arch-foodhouses-actual"))  fieldValues.archFoodHousesActual += 1;
  if (fieldValues.archToolHousesValid && idItem.includes("num-arch-toolhouses-actual"))  fieldValues.archToolHousesActual += 1;
  if (fieldValues.archWineHousesValid && idItem.includes("num-arch-winehouses-actual"))  fieldValues.archWineHousesActual += 1;
  if (fieldValues.archClothHousesValid && idItem.includes("num-arch-clothhouses-actual"))  fieldValues.archClothHousesActual += 1;

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
  fieldValues.archBrickHousesActual=0;
  fieldValues.archFoodHousesActual=0;
  fieldValues.archToolHousesActual=0;
  fieldValues.archWineHousesActual=0;
  fieldValues.archClothHousesActual=0;

  UpdateAll();
}


function ProcessArchitect() {

  if (fieldValues.freeMode) {
    fieldValues.storeCurrentCash = 99;
    fieldValues.storeCurrentBrick = 99;
    fieldValues.storeCurrentFood = 99;
    fieldValues.storeCurrentTool = 99;
    fieldValues.storeCurrentWine = 99;
    fieldValues.storeCurrentCloth = 99;
  }

  /* brick reqd to build all of the houses */
  fieldValues.archCostBrick =
     fieldValues.archFoodHousesActual +  
     fieldValues.archToolHousesActual +  
     fieldValues.archWineHousesActual +  
     fieldValues.archClothHousesActual;


  fieldValues.archCostFood =  fieldValues.archBrickHousesActual +  fieldValues.archFoodHousesActual;
  fieldValues.archCostTool =  fieldValues.archToolHousesActual;
  fieldValues.archCostWine =  fieldValues.archWineHousesActual;
  fieldValues.archCostCloth =  fieldValues.archClothHousesActual;

  fieldValues.archRemBrick = fieldValues.storeCurrentBrick - fieldValues.archCostBrick;
  fieldValues.archRemFood = fieldValues.storeCurrentFood - fieldValues.archCostFood;
  fieldValues.archRemTool = fieldValues.storeCurrentTool - fieldValues.archCostTool;
  fieldValues.archRemWine = fieldValues.storeCurrentWine - fieldValues.archCostWine;
  fieldValues.archRemCloth = fieldValues.storeCurrentCloth - fieldValues.archCostCloth;

  /* Update the numbers on the screen */
  fieldValues.archToBankCash = 
    GetTotalBuildValue( 
        fieldValues.archBrickHousesActual,  
        fieldValues.archFoodHousesActual,  
        fieldValues.archToolHousesActual,  
        fieldValues.archWineHousesActual,  
        fieldValues.archClothHousesActual);

  fieldValues.archRemCash = fieldValues.storeCurrentCash - fieldValues.archToBankCash;
    
  fieldValues.archCashCost = fieldValues.archToBankCash - fieldValues.archFromBankCash;

      fieldValues.archBrickHousesPotential = 
      Min(Math.floor(fieldValues.archRemCash/brickHouseCost),fieldValues.archRemFood) + 
      fieldValues.archBrickHousesActual;

    fieldValues.archBrickHousesValid = fieldValues.archRemCash >= brickHouseCost && fieldValues.archRemFood >= 1;

    if (!fieldValues.archBrickHousesValid) {
      btnIncArchBrick.classList.add('grey-background');
    }
    else {
      btnIncArchBrick.classList.remove('grey-background');

    }

    /* FOOD */
    fieldValues.archFoodHousesPotential = 
      Min3(Math.floor(fieldValues.archRemCash/foodHouseCost),fieldValues.archRemBrick, fieldValues.archRemFood) +
      fieldValues.archFoodHousesActual;

    fieldValues.archFoodHousesValid = fieldValues.archRemCash >= foodHouseCost && fieldValues.archRemBrick >= 1 && fieldValues.archRemFood >= 1;

    if (!fieldValues.archFoodHousesValid) {
      btnIncArchFood.classList.add('grey-background');
    }
    else {
      btnIncArchFood.classList.remove('grey-background');
    }

    /* TOOL */
    fieldValues.archToolHousesPotential = 
      Min3(Math.floor(fieldValues.archRemCash/toolHouseCost),fieldValues.archRemBrick, fieldValues.archRemTool) +
      fieldValues.archToolHousesActual;

    fieldValues.archToolHousesValid = fieldValues.archRemCash >= toolHouseCost && fieldValues.archRemBrick >= 1 && fieldValues.archRemTool >= 1;

    if (!fieldValues.archToolHousesValid) {
      btnIncArchTool.classList.add('grey-background');
    }
    else {
      btnIncArchTool.classList.remove('grey-background');
    }

    /* WINE */
    fieldValues.archWineHousesPotential = 
      Min3(Math.floor(fieldValues.archRemCash/wineHouseCost),fieldValues.archRemBrick, fieldValues.archRemTool) +
      fieldValues.archWineHousesActual;

    fieldValues.archWineHousesValid = fieldValues.archRemCash >= wineHouseCost && fieldValues.archRemBrick >= 1 && fieldValues.archRemWine >= 1;

    if (!fieldValues.archWineHousesValid) {
      btnIncArchWine.classList.add('grey-background');
    }
    else {
      btnIncArchWine.classList.remove('grey-background');
    }

    /* CLOTH */
    fieldValues.archClothHousesPotential = 
      Min3(Math.floor(fieldValues.archRemCash/clothHouseCost),fieldValues.archRemBrick, fieldValues.archRemCloth) +
      fieldValues.archClothHousesActual;

    fieldValues.archClothHousesValid = fieldValues.archRemCash >= clothHouseCost && fieldValues.archRemBrick && 1 && fieldValues.archRemCloth >= 1;

    if (!fieldValues.archClothHousesValid) {
      btnIncArchCloth.classList.add('grey-background');
    }
    else {
      btnIncArchCloth.classList.remove('grey-background');
    }

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

  fieldValues.mercToBankCash = buyValue;  

  fieldValues.mercFromBankCash = mercStartCash + sellValue;

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
   elemNumMercStoreOutCash.textContent = fieldValues.mercToBankCash;
   elemNumMercStoreInCash.textContent = fieldValues.mercFromBankCash;

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
   fieldValues.archBrickHousesActual = 0;
   fieldValues.archFoodHousesActual = 0;
   fieldValues.archToolHousesActual = 0;
   fieldValues.archWineHousesActual = 0;
   fieldValues.archClothHousesActual = 0;

  UpdateAll();
}

function ConvertZeroesToBlank(id, value) {
  if (value === 0) {
    id.textContent = "";
  }
  else {
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
  mercBrickDelta=0;
  mercFoodDelta=0;
  mercToolDelta=0;
  mercWineDelta=0;
  mercClothDelta=0;

  UpdateAll();
}

function UpdateRemGui(elem, storeCurrent, storeRem) {
  if ((storeRem === 0 && storeCurrent > 0) || (storeRem > 0)) {
      /* Must have spent it all */
      elem.textContent = storeRem;
  }
  else {
      elem.textContent = "";
  }

}

function UpdateGUI() {

  /* ARCHITECT (top to bottom) */

  /* write to the GUI */
  /* Store */
  WriteFieldValueBlankZero(elemNumStorecurrentCash, fieldValues.storeCurrentCash);
  WriteFieldValueBlankZero(elemNumStorecurrentBrick, fieldValues.storeCurrentBrick);
  WriteFieldValueBlankZero(elemNumStorecurrentFood, fieldValues.storeCurrentFood);
  WriteFieldValueBlankZero(elemNumStorecurrentTool, fieldValues.storeCurrentTool);
  WriteFieldValueBlankZero(elemNumStorecurrentWine, fieldValues.storeCurrentWine);
  WriteFieldValueBlankZero(elemNumStorecurrentCloth, fieldValues.storeCurrentCloth);

  /* ARCHITECT */
  elemNumArchitectBrickHousesActual.textContent = fieldValues.archBrickHousesActual;
  elemNumArchitectFoodHousesActual.textContent = fieldValues.archFoodHousesActual;
  elemNumArchitectToolHousesActual.textContent = fieldValues.archToolHousesActual;
  elemNumArchitectWineHousesActual.textContent = fieldValues.archWineHousesActual;
  elemNumArchitectClothHousesActual.textContent = fieldValues.archClothHousesActual;

  elemNumArchitectBrickHousesPotential.textContent = fieldValues.archBrickHousesPotential;
  elemNumArchitectFoodHousesPotential.textContent = fieldValues.archFoodHousesPotential;
  elemNumArchitectToolHousesPotential.textContent = fieldValues.archToolHousesPotential;
  elemNumArchitectWineHousesPotential.textContent = fieldValues.archWineHousesPotential;
  elemNumArchitectClothHousesPotential.textContent = fieldValues.archClothHousesPotential;

  elemNumArchRemainingCash.textContent = fieldValues.archRemCash;;
  elemNumArchRemainingBrick.textContent = fieldValues.archRemBrick;
  elemNumArchRemainingFood.textContent = fieldValues.archRemFood;
  elemNumArchRemainingTool.textContent = fieldValues.archRemTool;
  elemNumArchRemainingWine.textContent = fieldValues.archRemWine;
  elemNumArchRemainingCloth.textContent = fieldValues.archRemCloth;

  elemNumStorecurrentArchCash.textContent = fieldValues.storeCurrentCash;
  elemNumStorecurrentArchBrick.textContent=fieldValues.storeCurrentBrick;  
  elemNumStorecurrentArchFood.textContent=fieldValues.storeCurrentFood;  
  elemNumStorecurrentArchTool.textContent=fieldValues.storeCurrentTool;  
  elemNumStorecurrentArchWine.textContent=fieldValues.storeCurrentWine;  
  elemNumStorecurrentArchCloth.textContent=fieldValues.storeCurrentCloth;  



  /* Determine grey backgrounds */
  /* check for negative numbers */
  if (fieldValues.archRemCash < 0) {
    elemNumArchRemainingCash.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCash.classList.remove("red-background");
  }

  if (fieldValues.archRemBrick < 0) {
    elemNumArchRemainingBrick.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingBrick.classList.remove("red-background");
  }

  if (fieldValues.archRemFood < 0) {
    elemNumArchRemainingFood.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingFood.classList.remove("red-background");
  }

  if (fieldValues.archRemTool < 0) {
    elemNumArchRemainingTool.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingTool.classList.remove("red-background");
  }

  if (fieldValues.archRemWine < 0) {
    elemNumArchRemainingWine.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingWine.classList.remove("red-background");
  }

  if (fieldValues.archRemCloth < 0) {
    elemNumArchRemainingCloth.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCloth.classList.remove("red-background");
  }

  /* calculate future cash */

  ConvertZeroesToBlank(elemNumStorecurrentCash, fieldValues.storeCurrentCash);
  ConvertZeroesToBlank(elemNumStorecurrentBrick, fieldValues.storeCurrentBrick);
  ConvertZeroesToBlank(elemNumStorecurrentFood, fieldValues.storeCurrentFood);
  ConvertZeroesToBlank(elemNumStorecurrentTool, fieldValues.storeCurrentTool);
  ConvertZeroesToBlank(elemNumStorecurrentWine, fieldValues.storeCurrentWine);
  ConvertZeroesToBlank(elemNumStorecurrentCloth, fieldValues.storeCurrentCloth);

  ConvertZeroesToBlank(elemNumArchStoreCostCash, fieldValues.archCashCost);
  ConvertZeroesToBlank(elemNumArchStoreCostBrick, fieldValues.archCostBrick);
  ConvertZeroesToBlank(elemNumArchStoreCostFood, fieldValues.archCostFood);
  ConvertZeroesToBlank(elemNumArchStoreCostTool, fieldValues.archCostTool);
  ConvertZeroesToBlank(elemNumArchStoreCostWine, fieldValues.archCostWine);
  ConvertZeroesToBlank(elemNumArchStoreCostCloth, fieldValues.archCostCloth);

  
  UpdateRemGui(elemNumArchRemainingCash, fieldValues.storeCurrentCash, fieldValues.archRemCash);
  UpdateRemGui(elemNumArchRemainingBrick, fieldValues.storeCurrentBrick, fieldValues.archRemBrick);
  UpdateRemGui(elemNumArchRemainingFood, fieldValues.storeCurrentFood, fieldValues.archRemFood);
  UpdateRemGui(elemNumArchRemainingTool, fieldValues.storeCurrentTool, fieldValues.archRemTool);
  UpdateRemGui(elemNumArchRemainingWine, fieldValues.storeCurrentWine, fieldValues.archRemWine);
  UpdateRemGui(elemNumArchRemainingCloth, fieldValues.storeCurrentCloth, fieldValues.archRemCloth);


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

  /* Blank the zeroes */
  /*  ConvertZeroesToBlank(elemNumMercRemainingCash);*/
  ConvertZeroesToBlank(elemNumMercDeltaBrick);
  ConvertZeroesToBlank(elemNumMercDeltaFood);
  ConvertZeroesToBlank(elemNumMercDeltaTool);
  ConvertZeroesToBlank(elemNumMercDeltaWine);
  ConvertZeroesToBlank(elemNumMercDeltaCloth);

  elemNumStorecurrentMercCash.textContent = fieldValues.storeCurrentCash;
  elemNumStorecurrentMercBrick.textContent=fieldValues.storeCurrentBrick;  
  elemNumStorecurrentMercFood.textContent=fieldValues.storeCurrentFood;  
  elemNumStorecurrentMercTool.textContent=fieldValues.storeCurrentTool;  
  elemNumStorecurrentMercWine.textContent=fieldValues.storeCurrentWine;  
  elemNumStorecurrentMercCloth.textContent=fieldValues.storeCurrentCloth;  

  btnSellMercBrick.textContent = fieldValues.mercRemBrick;


}

function WriteToArchBuildBox(elem_, additionalCount_, actualCount_) {

    var totalPossible = additionalCount_ + actualCount_;
    if (totalPossible <= 0) {
      elem_.textContent =  '';
    }
    else {
      /*elem_.innerHTML = `${actualCount_.toString()}/ <span class="small-text">${numberOnRight.toString()}</span>`;*/
/*      elem_.textContent =  actualCount_ + "/" + totalPossible;*/
    console.log ("total possible: " + totalPossible)
      elem_.textContent =  actualCount_ + "/" + totalPossible;
    }  

}

/* ---------------------------------------------------------------------------------------- */
/* Function: UpdateAll
/* ---------------------------------------------------------------------------------------- */
function UpdateAll() {


  /* Check to see if current architect houses selected are still affordable */

  ProcessArchitect();
  ProcessMerc();
    console.log("addit: " + fieldValues.archBrickHousesPotential + ", actual: " + fieldValues.archBrickHousesActual);


  SetMercTradeStatus();

  /* always make dec buttons grey if zero */
  if (fieldValues.archBrickHousesActual === 0) {
    btnDecArchBrick.classList.add ('grey-background');
  }
  else
  {
    btnDecArchBrick.classList.remove ('grey-background');
  }

  if (fieldValues.archFoodHousesActual === 0) {
    btnDecArchFood.classList.add ('grey-background');
  }
  else
  {
    btnDecArchFood.classList.remove ('grey-background');
  }

  if (fieldValues.archToolHousesActual === 0) {
    btnDecArchTool.classList.add ('grey-background');
  }
  else
  {
    btnDecArchTool.classList.remove ('grey-background');
  }

  if (fieldValues.archWineHousesActual === 0) {
    btnDecArchWine.classList.add ('grey-background');
  }
  else
  {
    btnDecArchWine.classList.remove ('grey-background');
  }

  if (fieldValues.archClothHousesActual === 0) {
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

  if (fieldValues.freeMode) {
    fieldValues.freeMode = false;
    btnEditMode.textContent = "S";
  }
  else {
    fieldValues.freeMode = true;
    btnEditMode.textContent = "F";
  }
  UpdateAll();
}
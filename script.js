
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

let elemNumArchitectHousesActualBrick;
let elemNumArchitectHousesActualFood;
let elemNumArchitectHousesActualTool;
let elemNumArchitectHousesActualWine;
let elemNumArchitectHousesActualCloth;

let elemNumArchitectBrickHousesTotalPossible;
let elemNumArchitectFoodHousesTotalPossible;
let elemNumArchitectToolHousesTotalPossible;
let elemNumArchitectWineHousesTotalPossible;
let elemNumArchitectClothHousesTotalPossible;

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

/* MERC ELEMENTS */
let elemBtnTrade1Mode;
let elemBtnTrade2Mode;

/* MERC GLOBALS */
let mercTrade1Mode;
let mercTrade2Mode;

let elemNumPreMercCash;
let elemNumPreMercBrick;
let elemNumPreMercFood;
let elemNumPreMercTool;
let elemNumPreMercWine;
let elemNumPreMercCloth;

let elemBtnTrade1Brick;
let elemBtnTrade1Food;
let elemBtnTrade1Tool;
let elemBtnTrade1Wine;
let elemBtnTrade1Cloth;

let elemBtnTrade2Brick;
let elemBtnTrade2Food;
let elemBtnTrade2Tool;
let elemBtnTrade2Wine;
let elemBtnTrade2Cloth;






document.addEventListener("DOMContentLoaded", function () {
  function Initialise() {}

  document.getElementById("version").textContent = "v1.09";

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

  elemNumArchitectHousesActualBrick = document.getElementById("num-arch-brickhouses-actual");
  elemNumArchitectHousesActualFood = document.getElementById("num-arch-foodhouses-actual");
  elemNumArchitectHousesActualTool = document.getElementById("num-arch-toolhouses-actual");
  elemNumArchitectHousesActualWine = document.getElementById("num-arch-winehouses-actual");
  elemNumArchitectHousesActualCloth = document.getElementById("num-arch-clothhouses-actual");

  elemNumArchitectBrickHousesTotalPossible = document.getElementById("num-arch-brickhouses-potential");
  elemNumArchitectFoodHousesTotalPossible = document.getElementById("num-arch-foodhouses-potential");
  elemNumArchitectToolHousesTotalPossible = document.getElementById("num-arch-toolhouses-potential");
  elemNumArchitectWineHousesTotalPossible = document.getElementById("num-arch-winehouses-potential");
  elemNumArchitectClothHousesTotalPossible = document.getElementById("num-arch-clothhouses-potential");


  elemBtnArch = document.getElementById("btn-architect");
  elemBtnMerc = document.getElementById("btn-merc");

  cardActive = CardType.ARCHITECT;
  archFreeMode = false;
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

  mercBrickDelta=0;
  mercFoodDelta=0;
  mercToolDelta=0;
  mercWineDelta=0;
  mercClothDelta=0;

  dataArch.archHousesCurrentBrick=0;
  dataArch.archHousesCurrentFood=0;
  dataArch.archHousesCurrentTool=0;
  dataArch.archHousesCurrentWine=0;
  dataArch.archHousesCurrentCloth=0;

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
  

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  elemBtnTrade1Mode = document.getElementById("btn-merc-trade1-mode");
  elemBtnTrade2Mode = document.getElementById("btn-merc-trade2-mode");

  elemNumPreMercTotalCash = document.getElementById("num-pre-merc-total-cash");
  elemNumPreMercCash = document.getElementById("num-pre-merc-cash");
  elemNumPreMercBrick = document.getElementById("num-pre-merc-brick");
  elemNumPreMercFood = document.getElementById("num-pre-merc-food");
  elemNumPreMercTool = document.getElementById("num-pre-merc-tool");
  elemNumPreMercWine = document.getElementById("num-pre-merc-wine");
  elemNumPreMercCloth = document.getElementById("num-pre-merc-cloth");


  mercTrade1Mode = "SELL";
  mercTrade2Mode = "BUY";

  elemBtnTrade1Brick = document.getElementById("btn-merc-trade1-brick");
  elemBtnTrade1Food = document.getElementById("btn-merc-trade1-food");
  elemBtnTrade1Tool = document.getElementById("btn-merc-trade1-tool");
  elemBtnTrade1Wine = document.getElementById("btn-merc-trade1-wine");
  elemBtnTrade1Cloth = document.getElementById("btn-merc-trade1-cloth");

  elemBtnTrade2Brick = document.getElementById("btn-merc-trade1-brick");
  elemBtnTrade2Food = document.getElementById("btn-merc-trade1-food");
  elemBtnTrade2Tool = document.getElementById("btn-merc-trade1-tool");
  elemBtnTrade2Wine = document.getElementById("btn-merc-trade1-wine");
  elemBtnTrade2Cloth = document.getElementById("btn-merc-trade1-cloth");

  UpdateAll();
});


function Dec(idNum) {

  if (idNum.includes("num-arch-brickhouses-actual"))  dataArch.archHousesCurrentBrick = Max(0,  dataArch.archHousesCurrentBrick-1);
  if (idNum.includes("num-arch-foodhouses-actual"))  dataArch.archHousesCurrentFood = Max(0,  dataArch.archHousesCurrentFood-1);
  if (idNum.includes("num-arch-toolhouses-actual"))  dataArch.archHousesCurrentTool = Max(0,  dataArch.archHousesCurrentTool-1);
  if (idNum.includes("num-arch-winehouses-actual"))  dataArch.archHousesCurrentWine = Max(0,  dataArch.archHousesCurrentWine-1);
  if (idNum.includes("num-arch-clothhouses-actual"))  dataArch.archHousesCurrentCloth = Max(0,  dataArch.archHousesCurrentCloth-1);

  if (idNum.includes("num-storecurrent-cash") && !dataArch.runOutOfCash) fieldValues.storeCurrentCash = Max(0, fieldValues.storeCurrentCash-1);
  if (idNum.includes("num-storecurrent-brick") && !dataArch.runOutOfBrick) fieldValues.storeCurrentBrick = Max(0, fieldValues.storeCurrentBrick-1);
  if (idNum.includes("num-storecurrent-food") && !dataArch.runOutOfFood) fieldValues.storeCurrentFood = Max(0, fieldValues.storeCurrentFood-1);
  if (idNum.includes("num-storecurrent-tool") && !dataArch.runOutOfTool) fieldValues.storeCurrentTool = Max(0, fieldValues.storeCurrentTool-1);
  if (idNum.includes("num-storecurrent-wine") && !dataArch.runOutOfWine) fieldValues.storeCurrentWine = Max(0, fieldValues.storeCurrentWine-1);
  if (idNum.includes("num-storecurrent-cloth") && !dataArch.runOutOfCloth) fieldValues.storeCurrentCloth = Max(0, fieldValues.storeCurrentCloth-1);

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

  if (fieldValues.archFreeMode) {

    /* In free mode, bo limit to house building */
    if (idItem.includes("num-arch-brickhouses-actual")) dataArch.archHousesCurrentBrick += 1;
    if (idItem.includes("num-arch-foodhouses-actual"))  dataArch.archHousesCurrentFood += 1;
    if (idItem.includes("num-arch-toolhouses-actual"))  dataArch.archHousesCurrentTool += 1;
    if (idItem.includes("num-arch-winehouses-actual"))  dataArch.archHousesCurrentWine += 1;
    if (idItem.includes("num-arch-clothhouses-actual"))  dataArch.archHousesCurrentCloth += 1;

  }
  else {

    /* Strict mode. Need to see if more building is possible */
    /* idItem example: num-arch-brickhouses-actual */
    /* idButton example: btn-inc-arch-brick */
    if (dataArch.archMoreHousesAvailableBrick && idItem.includes("num-arch-brickhouses-actual")) dataArch.archHousesCurrentBrick += 1;
    if (dataArch.archMoreHousesAvailableFood && idItem.includes("num-arch-foodhouses-actual"))  dataArch.archHousesCurrentFood += 1;
    if (dataArch.archMoreHousesAvailableTool && idItem.includes("num-arch-toolhouses-actual"))  dataArch.archHousesCurrentTool += 1;
    if (dataArch.archMoreHousesAvailableWine && idItem.includes("num-arch-winehouses-actual"))  dataArch.archHousesCurrentWine += 1;
    if (dataArch.archMoreHousesAvailableCloth && idItem.includes("num-arch-clothhouses-actual"))  dataArch.archHousesCurrentCloth += 1;

  }

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
  dataArch.archHousesCurrentBrick=0;
  dataArch.archHousesCurrentFood=0;
  dataArch.archHousesCurrentTool=0;
  dataArch.archHousesCurrentWine=0;
  dataArch.archHousesCurrentCloth=0;

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
  fieldValues.storeCurrentCash = 
    dataArch.archHousesCurrentBrick * brickHouseCost + 
    dataArch.archHousesCurrentFood * foodHouseCost + 
    dataArch.archHousesCurrentTool * toolHouseCost + 
    dataArch.archHousesCurrentCloth * clothHouseCost + 
    dataArch.archHousesCurrentWine * wineHouseCost;

  fieldValues.storeCurrentBrick = 
    dataArch.archHousesCurrentFood + 
    dataArch.archHousesCurrentTool + 
    dataArch.archHousesCurrentCloth + 
    dataArch.archHousesCurrentWine;

  fieldValues.storeCurrentFood = 
    dataArch.archHousesCurrentBrick + 
    dataArch.archHousesCurrentFood;

  fieldValues.storeCurrentTool = dataArch.archHousesCurrentTool;

  fieldValues.storeCurrentWine = dataArch.archHousesCurrentWine;

  fieldValues.storeCurrentCloth = dataArch.archHousesCurrentCloth;




}

function ProcessArchitectStrict() {

  /* -------------------------------------------------------------- */
  /* Write to .archBuildCost */
  /* -------------------------------------------------------------- */
  fieldValues.archBuildCostCash = 
    GetTotalBuildValue( 
        dataArch.archHousesCurrentBrick,  
        dataArch.archHousesCurrentFood,  
        dataArch.archHousesCurrentTool,  
        dataArch.archHousesCurrentWine,  
        dataArch.archHousesCurrentCloth);

  dataArch.archBuildCostBrick =
     dataArch.archHousesCurrentFood +  
     dataArch.archHousesCurrentTool +  
     dataArch.archHousesCurrentWine +  
     dataArch.archHousesCurrentCloth;

  dataArch.archBuildCostFood =  dataArch.archHousesCurrentBrick +  dataArch.archHousesCurrentFood;
  dataArch.archBuildCostTool =  dataArch.archHousesCurrentTool;
  dataArch.archBuildCostWine =  dataArch.archHousesCurrentWine;
  dataArch.archBuildCostCloth =  dataArch.archHousesCurrentCloth;

  /* -------------------------------------------------------------- */
  /* Write to .archRem */
  /* -------------------------------------------------------------- */
  dataArch.archRemCash = fieldValues.storeCurrentCash - fieldValues.archBuildCostCash;
  dataArch.archRemBrick = fieldValues.storeCurrentBrick - dataArch.archBuildCostBrick;
  dataArch.archRemFood = fieldValues.storeCurrentFood - dataArch.archBuildCostFood;
  dataArch.archRemTool = fieldValues.storeCurrentTool - dataArch.archBuildCostTool;
  dataArch.archRemWine = fieldValues.storeCurrentWine - dataArch.archBuildCostWine;
  dataArch.archRemCloth = fieldValues.storeCurrentCloth - dataArch.archBuildCostCloth;

  /* -------------------------------------------------------------- */
  /* Write to: */
  /* .archHousesDeltaPossible */
  /* .archMoreHousesAvailable */
  /* -------------------------------------------------------------- */
  dataArch.runOutOfCash =  fieldValues.storeCurrentCash > 0 && dataArch.archRemCash <= 0;
  dataArch.runOutOfBrick = fieldValues.storeCurrentBrick > 0 && dataArch.archRemBrick <= 0;
  dataArch.runOutOfFood =  fieldValues.storeCurrentFood > 0 && dataArch.archRemFood <= 0;
  dataArch.runOutOfTool =  fieldValues.storeCurrentTool > 0 && dataArch.storeCurrentCash > 0 && dataArch.archRemTool <= 0;
  dataArch.runOutOfWine =  fieldValues.storeCurrentWine > 0 && dataArch.archRemWine <= 0;
  dataArch.runOutOfCloth = fieldValues.storeCurrentCloth > 0 && dataArch.archRemCloth <= 0;

  /* --------------------------------------------------------------------- */
  /* BRICK HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleBrick = Min(Math.floor(dataArch.archRemCash/brickHouseCost),dataArch.archRemFood);
  dataArch.archMoreHousesAvailableBrick = dataArch.archHousesDeltaPossibleBrick > 0;

  dataArch.archHousesTotalPossibleBrick = 
    dataArch.archHousesDeltaPossibleBrick +
    dataArch.archHousesCurrentBrick;

  /*dataArch.archRemCash >= brickHouseCost && dataArch.archRemFood >= 1;*/

  /* --------------------------------------------------------------------- */
  /* FOOD HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleFood = Min3(Math.floor(dataArch.archRemCash/foodHouseCost),dataArch.archRemBrick, dataArch.archRemFood);
  dataArch.archMoreHousesAvailableFood = dataArch.archHousesDeltaPossibleFood > 0;

  dataArch.archHousesTotalPossibleFood = 
    dataArch.archHousesDeltaPossibleFood +
    dataArch.archHousesCurrentFood;

  
  /* --------------------------------------------------------------------- */
  /* TOOL HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleTool = Min3(Math.floor(dataArch.archRemCash/toolHouseCost),dataArch.archRemBrick, dataArch.archRemTool);
  dataArch.archMoreHousesAvailableTool = dataArch.archHousesDeltaPossibleTool > 0;
  dataArch.archHousesTotalPossibleTool = 
     dataArch.archHousesDeltaPossibleTool +
    dataArch.archHousesCurrentTool;


  /* --------------------------------------------------------------------- */
  /* WINE HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleWine = Min3(Math.floor(dataArch.archRemCash/wineHouseCost),dataArch.archRemBrick, dataArch.archRemWine);
  dataArch.archMoreHousesAvailableWine = dataArch.archHousesDeltaPossibleWine > 0;
  dataArch.archHousesTotalPossibleWine = 
    dataArch.archHousesDeltaPossibleWine +
    dataArch.archHousesCurrentWine;


  /* --------------------------------------------------------------------- */
  /* CLOTH HOUSES */
  /* --------------------------------------------------------------------- */
  dataArch.archHousesDeltaPossibleCloth = Min3(Math.floor(dataArch.archRemCash/clothHouseCost),dataArch.archRemBrick, dataArch.archRemCloth);
  dataArch.archMoreHousesAvailableCloth = dataArch.archHousesDeltaPossibleCloth > 0;
  dataArch.archHousesTotalPossibleCloth = 
    dataArch.archHousesDeltaPossibleCloth +
    dataArch.archHousesCurrentCloth;







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

function SetStoreCurrentColour(elem, valueBefore, valueRemaining) {

  
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

  if (mercActive === CardType.MERC3) fieldValues.preMercCash = fieldValues.storeCurrentCash + 3;
  if (mercActive === CardType.MERC5) fieldValues.preMercCash = fieldValues.storeCurrentCash + 5;
  fieldValues.preMercBrick = fieldValues.storeCurrentBrick;
  fieldValues.preMercFood = fieldValues.storeCurrentFood;
  fieldValues.preMercTool = fieldValues.storeCurrentTool; 
  fieldValues.preMercWine = fieldValues.storeCurrentCloth; 
  fieldValues.preMercCloth = fieldValues.storeCurrentWine; 


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


   /* calculate future cash */
   /*elemNumMercStoreOutCash.textContent = fieldValues.mercToBankCash;
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
   */
  
}



function ResetArchitect() {
   dataArch.archHousesCurrentBrick = 0;
   dataArch.archHousesCurrentFood = 0;
   dataArch.archHousesCurrentTool = 0;
   dataArch.archHousesCurrentWine = 0;
   dataArch.archHousesCurrentCloth = 0;

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

function UpdateRemGui(elem, storeCurrent, storeRem, archFreeMode) {

  if (archFreeMode) {
    elem.textContent = "";
  }
  else {
    if ((storeRem === 0 && storeCurrent > 0) || (storeRem > 0)) {
      /* Must have spent it all */
      elem.textContent = storeRem;
    }
    else {
      elem.textContent = "";
    }
    
  }

}

function UpdateActGui(elem, actual) {
  if (actual === 0) {
      /* Must have spent it all */
      elem.textContent = "";
  }
  else {
      elem.textContent = actual;
  }

}

function SetArchStoreBackground(elem, valueCurrent, valueRemaining) {

  if (valueCurrent === 0) SetBackgroundColor(elem,"transparent");
  else if (valueRemaining === 0) SetBackgroundColor(elem,"red");
}

function SetArchStoreActColour(elem, noneLeft, valueCurrent) {

  if (valueCurrent == 0) SetBackgroundColor(elem,"gray");
  else SetBackgroundColor(elem,"white");
}

function SetArchBuildDecColour(elem, valueCurrent) {

  if (valueCurrent === 0) SetBackgroundColor(elem,"gray");
  else SetBackgroundColor(elem,"orange");
}

function SetArchStoreDecColour(elem, noneLeft, valueCurrent) {

  if (noneLeft) SetBackgroundColor(elem,"red");
  else if (valueCurrent === 0) SetBackgroundColor(elem,"gray");
  else SetBackgroundColor(elem,"orange");
}

function SetArchBuilActColour(elem, delta, valueCurrent) {

  if (delta > 0) SetBackgroundColor(elem,"lightgreen");
  else if (delta === 0) SetBackgroundColor(elem,"red");
  else SetBackgroundColor(elem,"gray");
}

function UpdateGUIArch() {

  /* ------------------------------------------------------------- */
  /* Set architect store act colour */
  /* ------------------------------------------------------------- */
  /*SetArchStoreActColour(elemNumStorecurrentCash, dataArch.runOutOfCash, dataArch.archRemCash);
  SetArchStoreActColour(elemNumStorecurrentBrick, dataArch.runOutOfBrick, dataArch.archRemBrick);
  SetArchStoreActColour(elemNumStorecurrentFood, dataArch.runOutOfFood, dataArch.archRemFood);
  SetArchStoreActColour(elemNumStorecurrentTool, dataArch.runOutOfTool, dataArch.archRemTool);
  SetArchStoreActColour(elemNumStorecurrentWine, dataArch.runOutOfWine, dataArch.archRemWine);
  SetArchStoreActColour(elemNumStorecurrentCloth, dataArch.runOutOfCloth, dataArch.archRemCloth);*/

  /* ------------------------------------------------------------- */
  /* Set architect build dec colour:                               */
  /*   gray: zero                                                  */ 
  /*   amber: non-zero                                             */
  /* ------------------------------------------------------------- */
  SetArchBuildDecColour(btnDecArchBrick, dataArch.archHousesCurrentBrick);
  SetArchBuildDecColour(btnDecArchFood, dataArch.archHousesCurrentFood);
  SetArchBuildDecColour(btnDecArchTool, dataArch.archHousesCurrentTool);
  SetArchBuildDecColour(btnDecArchWine, dataArch.archHousesCurrentWine);
  SetArchBuildDecColour(btnDecArchCloth, dataArch.archHousesCurrentCloth);

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
  WriteFieldValueBlankZero(elemNumStorecurrentCash, fieldValues.storeCurrentCash);
  WriteFieldValueBlankZero(elemNumStorecurrentBrick, fieldValues.storeCurrentBrick);
  WriteFieldValueBlankZero(elemNumStorecurrentFood, fieldValues.storeCurrentFood);
  WriteFieldValueBlankZero(elemNumStorecurrentTool, fieldValues.storeCurrentTool);
  WriteFieldValueBlankZero(elemNumStorecurrentWine, fieldValues.storeCurrentWine);
  WriteFieldValueBlankZero(elemNumStorecurrentCloth, fieldValues.storeCurrentCloth);

  /* ARCHITECT */
  UpdateActGui(elemNumArchitectHousesActualBrick,dataArch.archHousesCurrentBrick);
  UpdateActGui(elemNumArchitectHousesActualFood, dataArch.archHousesCurrentFood);
  UpdateActGui(elemNumArchitectHousesActualTool, dataArch.archHousesCurrentTool);
  UpdateActGui(elemNumArchitectHousesActualWine,dataArch.archHousesCurrentWine);
  UpdateActGui(elemNumArchitectHousesActualCloth,dataArch.archHousesCurrentCloth);

  if (fieldValues.archFreeMode)
  {
    elemNumArchitectBrickHousesTotalPossible.textContent = "";
    elemNumArchitectFoodHousesTotalPossible.textContent = "";
    elemNumArchitectToolHousesTotalPossible.textContent = "";
    elemNumArchitectWineHousesTotalPossible.textContent = "";
    elemNumArchitectClothHousesTotalPossible.textContent = "";
  }
  else {
    elemNumArchitectBrickHousesTotalPossible.textContent = dataArch.archHousesTotalPossibleBrick;
    elemNumArchitectFoodHousesTotalPossible.textContent = dataArch.archHousesTotalPossibleFood;
    elemNumArchitectToolHousesTotalPossible.textContent = dataArch.archHousesTotalPossibleTool;
    elemNumArchitectWineHousesTotalPossible.textContent = dataArch.archHousesTotalPossibleWine;
    elemNumArchitectClothHousesTotalPossible.textContent = dataArch.archHousesTotalPossibleCloth;
  }

  elemNumArchRemainingCash.textContent = dataArch.archRemCash;;
  elemNumArchRemainingBrick.textContent = dataArch.archRemBrick;
  elemNumArchRemainingFood.textContent = dataArch.archRemFood;
  elemNumArchRemainingTool.textContent = dataArch.archRemTool;
  elemNumArchRemainingWine.textContent = dataArch.archRemWine;
  elemNumArchRemainingCloth.textContent = dataArch.archRemCloth;

  /* Determine grey backgrounds */
  /* check for negative numbers */
  if (dataArch.archRemCash < 0) {
    elemNumArchRemainingCash.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCash.classList.remove("red-background");
  }

  if (dataArch.archRemBrick < 0) {
    elemNumArchRemainingBrick.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingBrick.classList.remove("red-background");
  }

  if (dataArch.archRemFood < 0) {
    elemNumArchRemainingFood.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingFood.classList.remove("red-background");
  }

  if (dataArch.archRemTool < 0) {
    elemNumArchRemainingTool.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingTool.classList.remove("red-background");
  }

  if (dataArch.archRemWine < 0) {
    elemNumArchRemainingWine.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingWine.classList.remove("red-background");
  }

  if (dataArch.archRemCloth < 0) {
    elemNumArchRemainingCloth.classList.add("red-background");
  } 
  else {
    elemNumArchRemainingCloth.classList.remove("red-background");
  }

  /* calculate future cash */

  ConvertZeroesToBlank(elemNumArchStoreCostCash, dataArch.archBuildCostCash);
  ConvertZeroesToBlank(elemNumArchStoreCostBrick, dataArch.archBuildCostBrick);
  ConvertZeroesToBlank(elemNumArchStoreCostFood, dataArch.archBuildCostFood);
  ConvertZeroesToBlank(elemNumArchStoreCostTool, dataArch.archBuildCostTool);
  ConvertZeroesToBlank(elemNumArchStoreCostWine, dataArch.archBuildCostWine);
  ConvertZeroesToBlank(elemNumArchStoreCostCloth, dataArch.archBuildCostCloth);

  
  UpdateRemGui(elemNumArchRemainingCash, fieldValues.storeCurrentCash, dataArch.archRemCash, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingBrick, fieldValues.storeCurrentBrick, dataArch.archRemBrick, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingFood, fieldValues.storeCurrentFood, dataArch.archRemFood, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingTool, fieldValues.storeCurrentTool, dataArch.archRemTool, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingWine, fieldValues.storeCurrentWine, dataArch.archRemWine, fieldValues.archFreeMode);
  UpdateRemGui(elemNumArchRemainingCloth, fieldValues.storeCurrentCloth, dataArch.archRemCloth, fieldValues.archFreeMode);

  /* --------------------------------------------------------------------- */
  /* Set grey backgrounds where applicable */
  /* --------------------------------------------------------------------- */
  if (!dataArch.archMoreHousesAvailableCloth) {
    btnIncArchCloth.classList.add('grey-background');
  }
  else {
    btnIncArchCloth.classList.remove('grey-background');
  }

  if (!dataArch.archMoreHousesAvailableBrick) {
    btnIncArchBrick.classList.add('grey-background');
  }
  else {
    btnIncArchBrick.classList.remove('grey-background');
  }

  if (!dataArch.archMoreHousesAvailableFood) {
    btnIncArchFood.classList.add('grey-background');
  }
  else {
    btnIncArchFood.classList.remove('grey-background');
  }

  if (!dataArch.archMoreHousesAvailableWine) {
    btnIncArchWine.classList.add('grey-background');
  }
  else {
    btnIncArchWine.classList.remove('grey-background');
  }

  if (!dataArch.archMoreHousesAvailableTool) {
    btnIncArchTool.classList.add('grey-background');
  }
  else {
    btnIncArchTool.classList.remove('grey-background');
  }

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

  if (fieldValues.archFreeMode) {
    ProcessArchitectFree();
  }
  else {
    ProcessArchitectStrict();
  }

  ProcessMerc();
  SetMercTradeStatus();

  UpdateGUIArch(); 
  UpdateGUIMerc();
  
  fieldValues.archModeFirstPass = false;

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

  if (fieldValues.archFreeMode) {
    fieldValues.archFreeMode = false;
    btnEditMode.textContent = "S";

  }
  else {
    fieldValues.archFreeMode = true;
    btnEditMode.textContent = "F";
  }

  fieldValues.archModeFirstPass = true;
  UpdateAll();
}


/* ------------------------------------------------------------------------------- */
function Trade1ModeIsSell() {

    return mercTrade1Mode === "SELL";
}

/* ------------------------------------------------------------------------------- */
function Trade2ModeIsSell() {

    return mercTrade2Mode === "SELL";
}

/* ------------------------------------------------------------------------------- */
function Trade1Toggle() {

  if (mercTrade1Mode  === "BUY") mercTrade1Mode = "SELL"; 
  else if (mercTrade1Mode  === "SELL") mercTrade1Mode = "BUY";  

  UpdateAll();
}

/* ------------------------------------------------------------------------------- */
function Trade2Toggle() {

  if (mercTrade2Mode  === "BUY") mercTrade2Mode = "SELL"; 
  else if (mercTrade2Mode  === "SELL") mercTrade2Mode = "BUY"; 
  
  UpdateAll();
}

/* ------------------------------------------------------------------------------- */
function UpdateGUIMerc() {

    elemBtnTrade1Mode.textContent = mercTrade1Mode;
    elemBtnTrade2Mode.textContent = mercTrade2Mode;


    elemNumPreMercCash.textContent = fieldValues.preMercCash;    
    elemNumPreMercBrick.textContent = fieldValues.storeCurrentBrick * 3;    
    elemNumPreMercFood.textContent = fieldValues.storeCurrentFood * 4;    
    elemNumPreMercTool.textContent = fieldValues.storeCurrentTool * 5;    
    elemNumPreMercWine.textContent = fieldValues.storeCurrentWine * 6;    
    elemNumPreMercCloth.textContent = fieldValues.storeCurrentCloth * 7;    

    elemNumPreMercTotalCash.textContent = 
      fieldValues.preMercCash +  
      fieldValues.storeCurrentBrick * 3 + 
      fieldValues.storeCurrentFood * 4 + 
      fieldValues.storeCurrentTool * 5 + 
      fieldValues.storeCurrentWine * 6 + 
      fieldValues.storeCurrentCloth * 7;

}

function Trade1Brick() {


}

function ProcessTrade1Buy() {

  /* Calculate total possible */    

}
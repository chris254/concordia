// script.js

//----------------------------------------------------------------------

async function fetchCardData() {
  try {
    const response = await fetch('cards.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    return [];
  }
}

const OwnerType = Object.freeze({
  NONE: " ",
  A: "Ch",
  B: "Si",
  C: "St",
  D: "D",
});



function Elem(column_, row_) {
  if (!Number.isInteger(row_)) {
    throw new Error("Error: function Elem");
  }
  else {
    return document.getElementById(`${column_}-${row_}`);
  }
}

function DisplayCards() {

  for (let dataIndex=0; dataIndex <= window.lastCardsRowIndex; dataIndex++) {
    let rowNumber = dataIndex + 1;
    Elem("section",rowNumber).textContent = cards[dataIndex].section;
    Elem("name",rowNumber).textContent = cards[dataIndex].name;
    Elem("god",rowNumber).textContent = cards[dataIndex].god;

    let costText = "";
    if (cards[dataIndex].cost[1] === 1) costText += "B"; else costText += " ";  
    if (cards[dataIndex].cost[2] === 1) costText += "F"; else costText += " ";  
    if (cards[dataIndex].cost[3] === 1) costText += "T"; else costText += " ";  
    if (cards[dataIndex].cost[4] === 1) costText += "W"; else costText += " ";  
    if (cards[dataIndex].cost[5] === 1) costText += "C"; else costText += " ";  
    //Elem("cost",rowNumber).style.justifyContent = "start";
    Elem("cost",rowNumber).textContent = costText;


    if (cards[dataIndex].owner != OwnerType.NONE) {
      //Elem("god",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
      Elem("section",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
      Elem("name",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
      Elem("cost",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
      Elem("costadd",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
      Elem("owner",rowNumber).style.backgroundColor = "rgb(196, 195, 191)";
    }
    else
    {
      Elem("section",rowNumber).style.backgroundColor = "rgb(255,255,255)";
      Elem("name",rowNumber).style.backgroundColor = "rgb(255,255,255)";
      Elem("cost",rowNumber).style.backgroundColor = "rgb(255,255,255)";
      Elem("costadd",rowNumber).style.backgroundColor = "rgb(255,255,255)";
      Elem("owner",rowNumber).style.backgroundColor = "rgb(255,255,255)";
    }

    if (cards[dataIndex].god === "Saturnus") {
      Elem("god",rowNumber).style.backgroundColor = "rgb(236, 214, 90)";
    };
    if (cards[dataIndex].god === "Venus") {
      Elem("god",rowNumber).style.backgroundColor = "rgb(25, 141, 25)";
    };
    if (cards[dataIndex].god === "Jupiter") {
      Elem("god",rowNumber).style.backgroundColor = "rgb(117, 202, 223)";
    };
    if (cards[dataIndex].god === "Mercurius") {
      Elem("god",rowNumber).style.backgroundColor = "rgb(158, 105, 70)";
    };
    if (cards[dataIndex].god === "Mars") {
      Elem("god",rowNumber).style.backgroundColor = "rgb(240, 165, 105)";
    };
    if (cards[dataIndex].god.includes("Min")) {
      Elem("god",rowNumber).style.backgroundColor = "rgb(189, 240, 166)";
    };
    Elem("owner",rowNumber).textContent = cards[dataIndex].owner;
  }

  Elem("costadd",1).textContent = " ";
  Elem("costadd",2).textContent = "?";
  Elem("costadd",3).textContent = "?";
  Elem("costadd",4).textContent = "C";
  Elem("costadd",5).textContent = "C";
  Elem("costadd",6).textContent = "C";
  Elem("costadd",7).textContent = "CC";


}

function SelectOwner(rowNumber_) {

  if (rowNumber_ != 0) {
    let index = rowNumber_-1;
    if (cards[index].owner === OwnerType.NONE) {
      cards[index].owner = OwnerType.A;
    }
    else if (cards[index].owner === OwnerType.A) {
      cards[index].owner = OwnerType.B;
    }
    else if (cards[index].owner === OwnerType.B) {
      cards[index].owner = OwnerType.C;
    }
    else if (cards[index].owner === OwnerType.C) {
      cards[index].owner = OwnerType.D;
    }
    else if (cards[index].owner === OwnerType.D) {
      cards[index].owner = OwnerType.NONE;
    }
  }

  DisplayCards();
}

document.addEventListener('DOMContentLoaded', async () => {

  cards = await fetchCardData();
  window.gridRowCount = cards.length;
  window.lastCardsRowIndex = cards.length - 1;

cards.forEach(thisCard => {
  thisCard.owner = OwnerType.NONE;
});

DisplayCards();

});

function CardIndexFromRow(rowNumber_) {
  return rowNumber_ - 1;
}

function MoveRow(fromRow_, toAboveRow_) {

  let currentRowContents = {
    section: 0,
    name: "",
    god: "",
    cost: [0,0,1,0,0,0],
    available: true,
    owner: ""
  }

  let fromIndex = fromRow_ - 1;
  let toIndex = toAboveRow_ - 1;

  // remove the element
  const [element] = cards.splice(fromIndex, 1);
  const adjustedIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;  
  cards.splice(adjustedIndex, 0, element);


}

function SelectCard(gridRowNumber_) {

  // gridRowNumber_ is the physical positin in the grid

  if (gridRowNumber_ != 0) {

    if (cardsMode === CardsModeType.MOVE) {
      if (window.moveState === 0) {

        window.moveFromRow = gridRowNumber_;
        window.moveState = 1;
        console.log ("swap state from row = " + gridRowNumber_);
      }
      else {
        // perform the swap
        window.moveTo = gridRowNumber_;
        console.log ("swap state to row = " + gridRowNumber_);
        MoveRow(window.moveFromRow,window.moveTo);
        DisplayCards();


//        SwapTwoRows(window.swapStateRows[0],window.swapStateRows[1]);

        window.moveState = 0;

      }
    }
  }

}
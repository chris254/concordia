function LoadDataFromJSON() {
    fetch('cards/cards.json')
      .then(response => response.json())
      .then(json => {
        window.cards = json.cards;
  
        renderCards(window.cards);

        // Now you have the full card data in a local variable
        //console.log('Loaded Concordia cards:', window.cards);
  
        // Example: use the data (e.g., log each card name and god)
        //window.cards.forEach(card => {
        //  console.log(`Section ${card.section} - ${card.name} (${card.god})`);
        //});
  
        // You can now work with 'cards' locally as needed
      })
      .catch(error => {
        console.error('Error loading Concordia card data:', error);
      });
  
  
  }

  function renderCards(cards) {
    //const container = document.getElementById('card-grid');
    //container.innerHTML = ''; // Clear if needed
  
    cards.forEach(card => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h2>${card.name}</h2>
        <div class="god">${card.god} — Section ${card.section}</div>
        <div class="cost">Cost: [${card.cost.join(', ')}]</div>
      `;
      container.appendChild(div);
    });
  }
  
  window.onload = LoadDataFromJSON;

  
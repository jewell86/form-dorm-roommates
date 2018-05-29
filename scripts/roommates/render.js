const data = require('./data')
const templates = require('./templates')

//function that grabs all of the data, arranges it into card template & then
//adds all of the cards to the container via inner html
function showAll (container) {
  const cards = data.map((roommate, index) => templates.card(roommate, index)).join('')
  container.innerHTML = cards
}

//adds the form newRoomate from templates onto the page
function showNewForm (container) {
  container.innerHTML = templates.newRoommate()
}

module.exports = {
  showAll, showNewForm
}

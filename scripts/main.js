const roommates = require('./roommates/render')
const data = require('./roommates/data')


//using showall() from render.js to display all roomates on the page
const roommatesContainer = document.querySelector('#roommates')
roommates.showAll(roommatesContainer)

//delete button

const deleteRoommate = (event) => {
const index = event.target.getAttribute('data-id')
data.splice(index, 1)
roommates.showAll(roommatesContainer)
const deleteButtons = Array.from(document.querySelectorAll('.roommate-delete-button'))
deleteButtons.forEach(btn => {
  btn.addEventListener('click', deleteRoommate)
})
}

const deleteButtons = Array.from(document.querySelectorAll('.roommate-delete-button'))
deleteButtons.forEach(btn => {
  btn.addEventListener('click', deleteRoommate)
})



//pops form onto page when 'add new roommate' is clicked
const newRoommateButton = document.querySelector('#new-roommate-button')
newRoommateButton.addEventListener('click', (event) => {
  const sidebar = document.querySelector('#sidebar')
  event.preventDefault()
  roommates.showNewForm(sidebar)
  submit()
})

// submit button functionality
function submit() {
const newRoommateForm = document.querySelector('#new-roommate-form form')
newRoommateForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const {
    username, avatar, faction, street, apartment, city, zip
  } = event.target
  data.push({
      username: username.value,
      avatar: avatar.value,
      faction: faction.value,
      address: {
        street: street.value,
        suite: apartment.value,
        city: city.value,
        zipcode: zip.value
      }
    })
    roommates.showAll(roommatesContainer)
  })}

//edit roommate
const editRoommate = (event) => {
  const index = event.target.getAttribute('data-id') //grabs index of roommate selected
  const obj = data[index] //grabs that index's object from data
  const sidebar = document.querySelector('#sidebar') //declares sidebar div
  event.preventDefault() //prohibits scroll to top of page
  roommates.showNewForm(sidebar)//pops new form up
  const form = document.querySelector('.form-title')
  form.innerText = 'Edit Your Info' ///changes form name
    //fills in form with object info
    let username = document.querySelector('#username')
    username.value = obj.username
    let avatar = document.querySelector('#avatar')
    avatar.value = obj.avatar
    let faction = document.querySelector('#faction')
    faction.value = obj.faction
    let street = document.querySelector('#street')
    street.value = obj.address.street
    let apartment = document.querySelector('#suite')
    apartment.value = obj.address.suite
    let city = document.querySelector('#city')
    city.value = obj.address.city
    let zipcode = document.querySelector('#inputZip')
    zipcode.value = obj.address.zipcode

      //grab new roommate form
    const newRoommateForm = document.querySelector('#new-roommate-form form')
      //set event listener on submit button
    newRoommateForm.addEventListener('submit', (event) => {
      event.preventDefault()
      obj.username = username.value
      obj.avatar = avatar.value
      obj.faction = faction.value
      obj.address.street = street.value
      obj.address.suite = apartment.value
      obj.address.city = city.value
      obj.address.zipcode = zipcode.value
      roommates.showAll(roommatesContainer)
      roommates.showNewForm(sidebar)
    })}


  const editButtons = Array.from(document.querySelectorAll('.roommate-edit-button'))
  editButtons.forEach(btn => {
    btn.addEventListener('click', editRoommate)
  })

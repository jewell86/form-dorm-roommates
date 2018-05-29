
function card ({ avatar, username, faction, address: { street, suite, city, zipcode } }, index) {
  return `
    <article class="card m-2 border border-secondary rounded" style="min-width: 12rem;">
      <img class="card-img-top" src="${avatar}" alt="${username}">
      <section class="card-body">
        <h5 class="card-title">${username}</h5>
        <p class="card-text">
          <span class="font-weight-bold d-block">Faction:</span>
          ${faction}
        </p>
        <address class="card-text">
          <span class="font-weight-bold d-block">Address:</span>
          ${street}<br/>
          ${suite}<br/>
          ${city}, ${zipcode}
        </address>
      </section>
      <div class="card-footer d-flex justify-content-between">
        <button data-id="${index}" class="btn btn-sm btn-light roommate-edit-button">Edit</button>
        <button data-id="${index}" class="btn btn-sm btn-link text-danger roommate-delete-button">Delete</button>
      </div>
    </article>
  `
}

//template to create new roommate FORM
function newRoommate () {
  return `
    <section id="new-roommate-form">
      <h2 class="h5 text-center form-title">New Roommate</h2>
      <hr/>
      <form>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="username">Username</label>
            <input type="text" name="username" class="form-control" id="username" placeholder="Username">
          </div>
          <div class="form-group col-md-3">
            <label for="avatar">Avatar URL</label>
            <input name="avatar" type="url" class="form-control" id="avatar" placeholder="Avatar">
          </div>
          <div class="form-group col-md-6">
            <label for="faction">Faction</label>
            <select name="faction" id="faction" class="form-control">
              <option selected>- Select Your Faction -</option>
              <option>Hopper Hawks</option>
              <option>Lovelace Lemurs</option>
              <option>Turing Tigersharks</option>
              <option>Von Neumann Velociraptors</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="street">Address</label>
          <input name="street" type="text" class="form-control" id="street" placeholder="1234 Main St">
        </div>
        <div class="form-group">
          <label for="suite">Address 2</label>
          <input name="apartment" type="text" class="form-control" id="suite" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
          <div class="form-group col-md-8">
            <label for="city">City</label>
            <input name="city" type="text" class="form-control" id="city" placeholder="City or town">
          </div>
          <div class="form-group col-md-4">
            <label for="inputZip">Zip</label>
            <input name="zip" type="text" class="form-control" id="inputZip" placeholder="5 or 9 digits">
          </div>
        </div>

        <button id="create-roommate-button" type="submit" class="btn btn-primary">Create Roommate</button>
        <button id="new-roommate-cancel" class="btn btn-white">Cancel</button>
      </form>
    </section>
  `
}

module.exports = {
  card, newRoommate
}

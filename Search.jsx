import React from "react";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>Showing 9 movies from the database</p>
        <button type="button" class="btn btn-primary">
          New
        </button>
        <div class="input-group mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}
export default Search;

import React from "react";


class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <a
            onClick={() => this.props.searchMovies(this.state.search)}
            className="waves-effect waves-light btn"
          >
            Search
          </a>
        </div>
      </div>
    );
  }
}

export { Search };

import React from "react";

export default function Search(props) {
  const { handleChange, handleSubmit, search } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-0 mt-5 text-center">
          <h1 className="text-slanted">
            Search recepies with
            <strong className="text-orange"> Food2Fork</strong>
          </h1>

          <form className="mt-4 ">
            <label htmlFor="search">type recipe separated by comma</label>
            <div className="input-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="chicken,onion,carrots"
                value={search}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  <i className="fas fa-search-plus" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

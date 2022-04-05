import React, { useState} from 'react';
import {  Collapse } from 'react-bootstrap';

function SideBar() {

    const [open, setOpen] = useState(true);
    const [icon, setIcon] = useState("fa fa-chevron-down float-right");

    const toggle = () => {       
        setOpen(!open);
        setIcon(state => {
            return state === "fa fa-chevron-down float-right"
                ? "fa fa-chevron-right float-right"
                : "fa fa-chevron-down float-right";
        });
    };
    
    const [searchText, setSearchText] = useState('');
    let handleSearch = () => {
        console.log(searchText);
    }

    return (
      <>
        <aside className="col-md-3">
          <div className="card">
            <article className="filter-group">
              <header className="card-header">
                <div
                  aria-controls="collapse_1"
                  aria-expanded="true"
                  className="title"
                >
                  Products
                </div>
              </header>

              <div className="filter-content collapse show" id="collapse_1">
                <div className="card-body">
                  <form className="pb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button className="btn btn-light" type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <button className="btn btn-block btn-primary" onClick={}>Apply</button> */}
                </div>
              </div>
            </article>
            <article className="filter-group">
              <header className="card-header">
                <div
                  onClick={() => toggle()}
                  aria-controls="collapse_2"
                  aria-expanded={open}
                  className="title"
                >
                  <i className={icon} />
                  Category
                </div>
              </header>
              <Collapse in={open}>
                <div className="filter-content" id="collapse_2">
                  <div className="card-body">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Home Decor</div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Plants</div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Clothes</div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Electronics</div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Mobiles</div>
                    </label>
                  </div>
                </div>
              </Collapse>
            </article>
            <article className="filter-group">
              <header className="card-header">
                <div
                  aria-controls="collapse_3"
                  aria-expanded="true"
                  className="title"
                >
                  Price range
                </div>
              </header>
              <div className="filter-content collapse show" id="collapse_3">
                <div className="card-body">
                  <input
                    type="range"
                    className="custom-range"
                    min="0"
                    max="100"
                    name=""
                  />
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Min</label>
                      <input
                        className="form-control"
                        placeholder="$0"
                        type="number"
                      />
                    </div>
                    <div className="form-group text-right col-md-6">
                      <label>Max</label>
                      <input
                        className="form-control"
                        placeholder="$1,0000"
                        type="number"
                      />
                    </div>
                  </div>
                  <button className="btn btn-block btn-primary" onClick={handleSearch}>Apply</button>
                </div>
              </div>
            </article>
          </div>
        </aside>
      </>
    );
}

export default SideBar

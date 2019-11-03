import React, { Component } from 'react';
import {
  ReactiveBase, DataSearch, MultiDataList,
  SelectedFilters, ResultCard, MultiDropdownList
} from '@appbaseio/reactivesearch';
import '../index.css';
import './course.css';
//import index.css for global container

import MainTodoApp from './Todo/MainTodoApp';
import System from './iframe/iframesystem';

//Navbar Component
import Navbar from './Navbar';

import Navbarmobile from './Navbar-mobile';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';



class course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Filter Hasil"
    };
  }

  // * For Handle Click Filter

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Filter Hasil" : "🎬 Tunjukan Hasil"
    });
  }

  render() {
    return (
      <div className="main-container"> 
        <Navbar />
        {/*Main Container that import ReactiveBase from appbase.io*/}
        
        <ReactiveBase
          app="titiktemu-course"
          credentials = "wfzN5Ye65:f567080a-036e-4f0b-9414-c764d173ae28"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Nunito Sans", sans-serif',
                fontSize: "16px"
            },
            colors: {
              textColor: "#000",
              backgroundColor: "#2B2827",
              primaryTextColor: "#000",
              primaryColor: "#d9534f",
              titleColor: "#000",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
          className="course"
        >
          {/*Menubar Container*/}
          <div className="menubar-container">
            
            {/* Toggle Component */}
            <div className="toggle-component">
              <div>
                <NavLink className="course-switch-btn" style={{ display: 'block', height: '90%' }} to="/paper">
                  <Icon name="angle left"/>{" "}Switch to paper
                </NavLink>
              </div>
            </div>

            {/* Search Component */}
            <div className="search-component">
                <DataSearch
                  componentId="mainSearch"
                  dataField={["original_title"]}
                  categoryField="title"
                  className="search-bar"
                  queryFormat="and"
                  placeholder="Search course here"
                  iconPosition="right"
                  autosuggest={true}
                  filterLabel="search"
                  style={{borderColor:"#008080"}}
                />
            </div>

            {/* Spotify Component */}
            <div className="spotify-component">
              <System src="https://open.spotify.com/embed/user/chillhopmusic/playlist/74sUjcvpGfdOvCHvgzNEDO" width="240" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
            </div>
          </div>

          {/*Left Container (for filter the result of app)*/}
          <div className="sub-container">
            <div className=
              {
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              {/* Todoapp Component */}
              <div className="todo-component">
                <div className="filter-heading center">
                  <b>
                    {" "}Your Prority List{" "}
                  </b>
                </div>
                <MainTodoApp />
              </div>

              {/*Category List Component*/}
              <div className="filter-heading center">
                <b>
                  {" "}Category List{" "}
                </b>
              </div>
              <MultiDropdownList
                componentId="category-list"
                dataField="genres_data.keyword"
                className="category-filter"
                size={100}
                sortBy="asc"
                defaultValue={["All Category"]}
                queryFormat="or"
                selectAllLabel="All Category"
                showCheckbox={true}
                showCount={true}
                showSearch={true}
                placeholder="Choose category"
                react={{
                  and: [
                    "Apps",
                    "mainSearch",
                    "results",
                    "date-filter",
                    "language-list"
                  ]
                }}
                showFilter={true}
                filterLabel="Category"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />

              <hr className="seperator" /> {/*Seperator*/}

              {/*Source Languages Component*/}
              <div className="filter-heading center">
                <b>
                  {" "}Source Languages{" "}
                </b>
              </div>
              <MultiDataList
                componentId="language-list"
                dataField="original_language.keyword"
                className="language-filter"
                size={100}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="All Languages"
                showCheckbox={true}
                showSearch={true}
                placeholder="Choose the language"
                react={{
                  and: [
                    "Apps",
                    "mainSearch",
                    "results",
                    "date-filter",
                    "category-list"
                  ]
                }}
                data={[
                  {
                    label: "English",
                    value: "English"
                  },
                  {
                    label: "Indonesia",
                    value: "Indonesia"
                  }
                ]}
                showFilter={true}
                filterLabel="Language"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input"
                }}
              />
            </div>
            <div className=
              {
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                className="filters"
                showClearAll={true}
                clearAllLabel="Clear filters"
                style={{marginLeft:"70px",textColor:"#fff"}}
              />

              <ResultCard
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "mainSearch",
                    "language-list",
                    "date-filter",
                    "category-list"
                  ]
                }}
                stream={true}
                pagination={false}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={20}
                Loader="Loading..."
                noResults="No results were found..."
                sortOptions={[
                  {
                    dataField: "original_title.keyword",
                    sortBy: "asc",
                    label: "Sortir dari Judul (A-Z) \u00A0"
                  },
                  {
                    dataField: "release_date.keyword",
                    sortBy: "asc",
                    label: "Sortir dari Terupdate \u00A0"
                  }
                ]}
                innerClass={{
                  title: "result-title",
                  listItem: "result-item",
                  list: "list-container",
                  sortOptions: "sort-options",
                  resultStats: "result-stats",
                  resultsInfo: "result-list-info",
                }}
                onData={function(data) {
                  return {
                    description: (
                      <div className="main-description">
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="homepage.keyword"
                            href={data.homepage}
                          >
                            <div className="img">
                              <img
                                src={
                                  data.img_source
                                }
                                alt={data.img_source}
                                className="result-image"
                              />
                            </div>
                            <div className="sub-description">
                              <div className="result-title">
                                {data.original_title}
                                <span className="course-level">
                                  <p>
                                    <b> Course level : {data.level} </b> - {data.category}
                                  </p>
                                </span>
                              </div>
                              <div className="course-description">
                                <span>
                                  {data.overview}
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ),
                  };
                }}
              />
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
        <Navbarmobile />
      </div>
    );
  }
}

export default course;

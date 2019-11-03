import React, {Component} from 'react'
import {
  ReactiveBase, DataSearch, MultiDataList,  MultiList,  SelectedFilters,
  ResultCard,  ToggleButton,
} from '@appbaseio/reactivesearch'
import './App.css'
//Importing Todo App from components
import MainTodoApp from './components/Todo/MainTodoApp'


class searchapp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Filter Hasil"
    };
  }

  //For Handle Click Filter
  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Filter Hasil" : "🎬 Tunjukan Hasil"
    });
  }
  render() {
    return (
      <div className="main-container"> {/*Ini untuk memanggil listing data dari Appbase dengan setting default*/}
        <ReactiveBase
          app="titiktumbuh"
          credentials="muukPSVII:7f4c58f2-06b2-4b39-822b-146da03027c4"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Nunito Sans", Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#2B2827",
              primaryTextColor: "#fff",
              primaryColor: "#d9534f",
              titleColor: "#000",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
        >
          {/*Menubar Component*/}
          <div className="menu-bar">
            <div className="toggle-container">
              <ToggleButton
                componentId="Apps"
                dataField="category_apps.keyword"
                data={
                  [{"label": "Paper",   "value": "Paper"},
                  {"label": "Course",   "value": "Course"}]
                }
              />
            </div>  
            <div className="search-container">
                <DataSearch
                  componentId="mainSearch"
                  dataField={["original_title"]}
                  categoryField="title"
                  className="search-bar"
                  queryFormat="and"
                  placeholder="Search paper topic or the course here"
                  iconPosition="right"
                  autosuggest={true}
                  filterLabel="search"
                />
            </div>           
          </div>
          {/*Left Container Component*/}
          <div className="sub-container">
            <div className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              <div className="filter-heading center">
                <b>
                  {" "}Your Prority List{" "}
                </b>
              </div> 
              <MainTodoApp />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}Category List{" "}
                </b>
              </div>
            {/*Category List Component*/}
              <MultiList
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
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}Source Languages{" "}
                </b>
              </div>
              {/*Language List Component*/}
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
              <hr className="blue" />
            </div>
            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                className="filters"
                showClearAll={true}
                clearAllLabel="Clear filters"
              />

              <ResultCard
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "Apps",
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
                onData={function(res) {
                  return {
                    description: (
                      <div className="main-description">
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="homepage.keyword"
                            href={res.homepage}
                          >
                            <div className="img">
                              <img
                                src={
                                  res.img_source
                                }
                                alt={res.img_source}
                                className="result-image"
                              />
                            </div>
                            <div className="result-title">
                              {res.original_title}
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
      </div>
    );
  }
}

export default searchapp;

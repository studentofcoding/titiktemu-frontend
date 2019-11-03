import React, { Component } from 'react';

import {
	ReactiveBase, DataSearch, MultiDataList,
	SelectedFilters, ResultList, MultiDropdownList
} from '@appbaseio/reactivesearch';
import '../index.css';
import './paper.css';
//import index.css for global container

import Navbar from './Navbar';

import Navbarmobile from './Navbar-mobile';

import MainTodoApp from './Todo/MainTodoApp';
import System from './iframe/iframesystem';

import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class paper extends Component {
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
				<ReactiveBase
					app="titiktemu-paper"
					credentials="0A46CoJZO:b8511923-aece-4b8a-970e-582d1c2b6c74"
					theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Nunito Sans", sans-serif',
              fontSize: "16px"
            }
          }}
				>

          {/*Menubar Container*/}
					<div className="menubar-container">

						{/* Toggle Component */}
            <div className="toggle-component">
              <div>
                <NavLink className="paper-switch-btn" style={{ display: 'block', height: '90%' }} to="/course">
                  <Icon name="angle left"/>{" "}Switch to course
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
                  placeholder="Search paper here"
                  iconPosition="right"
                  autosuggest={true}
									filterLabel="search"
									style={{borderColor:"#E43F35"}}
                />
						</div>

            {/* Spotify Component */}
            <div className="spotify-component">
              <System src="https://open.spotify.com/embed/user/chillhopmusic/playlist/74sUjcvpGfdOvCHvgzNEDO" width="240" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
            </div>
          </div>

						{/* Result list */}
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
                    "mainSearch",
                    "paperResult",
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
                    "mainSearch",
                    "paperResult",
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
								this.state.isClicked ?
									"result-container-optional" :
									"result-container"
							}
						>
							<SelectedFilters
                className="filters"
                showClearAll={true}
								clearAllLabel="Clear filters"
								style={{marginBottom:"20px"}}
              />
							<ResultList
								componentId="paperResult"
								dataField="original_title"
								size={5}
								onData={this.paperlist}
								className="result-list-container"
								pagination={false}
								stream={true}
								paginationAt="bottom"
								Loader = "Loading..."
								noResults = "No results were found..."
								URLParams
								react={{
									and: [
										"mainSearch",
										"language-list",
										"date-filter",
										"category-list"
									]
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

	paperlist(data) {
		return {
			title: (
				<a
					target="homepage.keyword"
					href={data.homepage}	>
					<h3
						className="book-title"
						// dangerouslySetInnerHTML={{ __html: data.original_title }}
					>
						{data.original_title}
					</h3>
				</a>
			),
			description: (
				<div className="flex column justify-space-between">
					<div>
						<div>
							Published by	:{" "}<span className="authors-list">{data.author_data}</span>
						</div>
						<div>
							<span>
								Paper Detail	: <p className="paper-description">{data.overview}</p>
							</span>
						</div>
					</div>
					<span className="pub-year">{data.release_date}</span>
				</div>
			),
			image: data.img_source,
		};
	}
}

export default paper;

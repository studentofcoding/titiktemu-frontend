import React, { Component } from 'react';

import {
	ReactiveBase, SingleDropdownRange,
	ResultList, DataSearch
} from '@appbaseio/reactivesearch';

import './paper.css';
//import index.css for global container
import '../../index.css';
import Navbar from '../Navbar';

import System from '../iframe/iframesystem';

class paper extends Component {
	render() {
		return (
			<div className="main-container">
				<Navbar />
				<ReactiveBase
					app="good-books-ds"
					credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
					theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Nunito Sans", "Ubuntu", sans-serif',
              fontSize: "16px"
            }
          }}
				>

          {/*Menubar Container*/}
					<div className="menubar-container"> 
						
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
                />
            </div>

            {/* Spotify Component */}
            <div className="spotify-component">
              <System src="https://open.spotify.com/embed/user/chillhopmusic/playlist/74sUjcvpGfdOvCHvgzNEDO" width="240" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
            </div>
          </div>

						{/* Result list */}
						<div className="row reverse-labels">
							<div className="col">
								<SingleDropdownRange
									componentId="BookSensor"
									dataField="average_rating"
									title="SingleDropdownRange"
									data={[
										{ start: 0, end: 3, label: 'Rating < 3' },
										{ start: 3, end: 4, label: 'Rating 3 to 4' },
										{ start: 4, end: 5, label: 'Rating > 4' },
									]}
								/>
							</div>
							<div className="col" style={{ backgroundColor: '#fafafa' }}>
								<ResultList
									componentId="SearchResult"
									dataField="original_title"
									size={3}
									onData={this.booksList}
									className="result-list-container"
									pagination={true}
									stream={true}
									paginationAt="bottom"
									Loader = "Loading..."
									noResults = "No results were found..."
									URLParams
									react={{
										and: [
											"BookSensor",
											"mainSearch"
										]
									}}
								/>
							</div>
						</div>
				</ReactiveBase>
			</div>
		);
	}

	booksList(data) {
		return {
			title: (
				<div
					className="book-title"
					dangerouslySetInnerHTML={{ __html: data.original_title }}
				/>
			),
			description: (
				<div className="flex column justify-space-between">
					<div>
						<div>
							by <span className="authors-list">{data.authors}</span>
						</div>
						<div className="ratings-list flex align-center">
							<span className="stars">
								{Array(data.average_rating_rounded)
									.fill('x')
									.map((item, index) => (
										<i className="fas fa-star" key={index} />
									)) // eslint-disable-line
								}
							</span>
							<span className="avg-rating">({data.average_rating} avg)</span>
						</div>
					</div>
					<span className="pub-year">Pub {data.original_publication_year}</span>
				</div>
			),
			image: data.image,
		};
	}
}

export default paper;

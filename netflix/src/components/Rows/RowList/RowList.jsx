import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilities/request'

export const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row
        title="ACTION"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="COMEDIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="ROMANCE"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="DOCUMENTERIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
      <Row
        title="TV SHOWS"
        fetchUrl={requests.fetchTvShows}
        isLargeRow={true}
      />
    </>
  );
}

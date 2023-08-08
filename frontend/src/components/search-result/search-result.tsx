import './search-result.scss'
import {SearchData} from '../../types/search-data';

type SearchResultsProps = {
  searchResults: SearchData[]
}

function SearchResult({searchResults}: SearchResultsProps) {


  return (
    <section className="search-result">
      <article className="search-result__item">
        <div className="search-result__head">
          <h3 className="search-result__title">Email</h3>
          <h3 className="search-result__title">Phone number</h3>
        </div>
        {searchResults.map((result) =>
          <div className="search-result__description" key={result.number}>
            <span className="search-result__data">{result.email}</span>
            <span className="search-result__data">{result.number}</span>
          </div>
        )}
      </article>
    </section>
  );
}

export default SearchResult;
export default function SearchOverlay() {
  return (
    <div className="search-overlay">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="search-overlay-layer" />
          <div className="search-overlay-layer" />
          <div className="search-overlay-layer" />
          <div className="search-overlay-close">
            <span className="search-overlay-close-line" />
            <span className="search-overlay-close-line" />
          </div>
          <div className="search-overlay-form">
            <form>
              <input
                type="text"
                className="input-search"
                placeholder="Search here..."
              />
              <button type="submit">
                <i className="ri-search-line" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

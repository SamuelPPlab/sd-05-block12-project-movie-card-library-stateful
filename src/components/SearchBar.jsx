// implement SearchBar component here
import React from 'react';
import '../SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form className="sbar">
          <label htmlFor="stext">Inclui o texto:</label>
          <input type="text" value={searchText} id="stext" onChange={onSearchTextChange} />
          <label htmlFor="cbox">Mostrar somente favoritos</label>
          <input type="checkbox" id="cbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="sel" value={selectedGenre} onChange={onSelectedGenreChange}>
            Filtrar por gênero
          </label>
          <select name="select" id="sel">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

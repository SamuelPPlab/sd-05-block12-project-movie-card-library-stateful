import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.mudar = this.mudar.bind(this);
    this.mudarBotao = this.mudarBotao.bind(this);
  }
  EventoBotao(event) {
    const { obj, valor } = event.target;
    this.setState({ [obj]: valor });
  }

  MudancaDeBotao() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.change}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.EventoBotao}
        />
        <label htmlFor="imagePath">Imagem</label>
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.EventoBotao}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          name="storyline"
          value={this.state.storyline}
          onChange={this.EventoBotao}
        />
        <label htmlFor="rating">Avaliação</label>
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.EventoBotao}
        />
        <label htmlFor="genre">Gênero</label>
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.EventoBotao}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.MudancaDeBotao} type="button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

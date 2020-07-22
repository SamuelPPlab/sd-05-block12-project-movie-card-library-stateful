// // implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
    this.changeInput = this.changeInput.bind(this);
    this.onClick = this.onClick.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  onClick() {
    const onClick = this.props.onClick;
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

  changeInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  changeRating(e) {
    const { name, value } = e.target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Titulo</label>
        <input name="title" type="text" value={this.state.title} onChange={this.changeInput} />
        <label htmlFor="subtitle">Subtitulo
          <input name="" type="text" value={this.state.subtitle} onChange={this.changeInput} />
        </label>
        <label htmlFor="imagePath">Imagem
          <input type="text" value={this.state.imagePath} onChange={this.changeInput} />
        </label>
        <label htmlFor="storyline">Sinopse
          <textarea value={this.state.storyline} onChange={this.changeInput} />
        </label>
        <label htmlFor="rating">Avaliação
          <input type="number" value={this.state.rating} onChange={this.changeInput} />
        </label>
        <label htmlFor="genre">Gênero
          <select value={this.state.genre} onChange={this.changeInput}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.onClick} type="button">Adicionar filme</button> </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import CreateInput from './CreateInput';
import CreateImagePath from './CreateImagePath';
import CreateStorylineInput from './CreateStorylineInput';
import CreateRatingInput from './CreateRatingInput';
import CreateGenreInput from './CreateGenreInput';

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
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  addNewMovie() {
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

  render() {
    return (
      <form>
        <CreateInput name="title"
         title="Título" value={this.state.title} function={this.handleChange} />
        <CreateInput name="subtitle"
         title="Subtítulo" value={this.state.subtitle} function={this.handleChange} />
        <CreateImagePath name="imagePath"
         title="Imagem" value={this.state.imagePath} function={this.handleChange} />
        <CreateStorylineInput name="storyline"
         title="Sinopse" value={this.state.storyline} function={this.handleChange} />
        <CreateRatingInput name="rating"
         title="Avaliação" value={this.state.rating} function={this.handleChange} />
        <CreateGenreInput name="genre"
         title="Gênero" value={this.state.genre} function={this.handleChange} />
        <button onClick={this.addNewMovie} type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

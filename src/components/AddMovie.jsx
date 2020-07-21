import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    }
  }

  searchTitle(element) {
    const { name, value } = element.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form>
          <label>Título<input onChange={this.searchTitle} value={this.state.title} type="text" /></label>
        </form>
      </div>
    )
  }
}

export default AddMovie;
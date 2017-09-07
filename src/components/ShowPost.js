import React from 'react';

export default class ShowPost extends React.Component {

  constructor() {
    super();

    this.state = {
      post: {}
    }
  }

  componentDidMount() {

    const { id } = this.props.match.params;
    const url = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log('results', results);
      this.setState({ post: results });
    });
  }

  render() {

    console.log('state', this.state);

    return (
      <div className='home'>
        <div className='title'>
          <h1><span className='idiocy'>Idiocy</span></h1>
          <h4>Where Stupid People Can Have a HUGE Effect</h4>
        </div>
        <div className='create-area'>
          <h2>{this.state.post.Title} <span className='by'>by</span> {this.state.post.AuthorName}</h2>
          <p className='message'>{this.state.post.Message}</p>
        </div>
      </div>
    )
  }
}

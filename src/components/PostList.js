import React from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends React.Component {

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log('results', results);
        this.setState({ posts: results });
      });
  }

  render() {
    return (
      <div className='home'>
        <div className='title'>
          <h1><span className='idiocy'>Idiocy</span></h1>
          <h4>Where Stupid People Can Have a HUGE Effect</h4>
        </div>
        <div className='create-area'>
        {this.state.posts.map((post) => {
          return (
            <div key={post._id}>
              <Link to={'/show/' + post._id}>{post.Title}</Link>
              <hr />
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

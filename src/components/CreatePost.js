import React from 'react';

export default class CreatePost extends React.Component {

  constructor() {
    super();

    this.state = {
      AuthorName: '',
      Title: '',
      Message: ''
    }
  }

  inputChange(evt, key) {
    const obj = this.state;
    obj[key] = evt.target.value;

    this.setState(obj);
  }

  addToList = (evt) => {
    evt.preventDefault();
    this.setState({
      AuthorName: evt.target.value,
      Title: evt.target.value,
      Message: evt.target.value
    });

    let listItem = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: 'post',
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('yay', response);
      })
      .catch((err) => {
        console.log('boo', err);
      });
      this.setState({ AuthorName: '', Title: '', Message: '' });
  }

  render() {
    return (
      <div className='home'>
        <div className='title'>
          <h1><span className='idiocy'>Idiocy</span></h1>
          <h4>Where Stupid People Can Have a HUGE Effect</h4>
        </div>
        <div className='create-area'>
          <form method='post'>
            <label>Author's Name</label>
            <input value={this.state.AuthorName} onChange={(evt) => this.inputChange(evt, 'AuthorName')} placeholder='Name' />
            <label>Blog Title</label>
            <input value={this.state.Title} onChange={(evt) => this.inputChange(evt, 'Title')} placeholder='Title'/>
            <label>Message</label>
            <textarea rows='10' value={this.state.Message} onChange={(evt) => this.inputChange(evt, 'Message')} placeholder='Message'/>
            <button onClick={this.addToList}>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

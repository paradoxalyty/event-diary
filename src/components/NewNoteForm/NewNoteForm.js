import React, { Component } from 'react';

import './NewNoteForm.css';

export class NewNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emoji: '',
      date: '',
      description: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form is submited', this.state);
  };

  handleChange = (event) => {
    event.preventDefault();
    // const value =
    //   event.target.type === 'select-one'
    //     ? console.log(event.target)
    //     : event.target.value;
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      emoji: '',
      date: '',
      description: '',
    });

    setTimeout(() => {
      console.log('form is cleared', this.state);
    }, 1000);
  };

  render() {
    const EMOJIES = [
      '😵️',
      '🙃',
      '😑',
      '🤔',
      '🤤',
      '😇',
      '🤤',
      '😰',
      '😌',
      '😆',
      '😀',
    ];

    return (
      <form className='newNoteForm' onSubmit={this.handleSubmit}>
        <div className='newNoteData'>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={this.handleChange}
          />
          <select name='emoji' onChange={this.handleChange}>
            {EMOJIES.map((emoji, index) => (
              <option key={index} name={index} value={emoji} className={index}>
                {emoji}
              </option>
            ))}
          </select>
          <input
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='description'
            value={this.state.description}
            placeholder='description'
            onChange={this.handleChange}
          />
          <button>Save</button>
          <button type='button' onClick={this.handleClearForm}>
            Clear
          </button>
        </div>
        <div>
          <input type='text' />
          <button></button>
          <div></div>
        </div>
      </form>
    );
  }
}

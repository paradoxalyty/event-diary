import React, { useState } from 'react';
import { Select } from '../Select/Select';
import { useImages } from '../../Hooks/useImages';
import { useFormData } from '../../Hooks/useFormData';

import './NewNoteForm.css';

export const NewNoteForm = () => {
  const formData = useFormData();

  const today = new Date().toISOString().substr(0, 10).toString();
  const images = useImages();

  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [date, setDate] = useState(today);
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const STATE = [name, mood, date, description, imgUrl];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`form is submited ${name} ${mood} ${date} ${description}`);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const itemValue = event.target.value;
    const itemName = event.target.name;

    switch (itemName) {
      case 'name':
        setName(itemValue.trimStart());
        break;
      case 'mood':
        setMood(itemValue);
        break;
      case 'date':
        setDate(itemValue);
        break;
      case 'description':
        setDescription(itemValue.trimStart());
        break;
      default:
      // ignore default
    }
  };

  const handleClick = (event) => {
    const src = event.target.src;
    setImgUrl(src);
  };

  const handleClearForm = (event) => {
    event.preventDefault();

    setName('');
    setMood('');
    setDate(today);
    setDescription('');
    setImgUrl('');

    setTimeout(() => {
      // console.log(`form is cleared  ${name} ${mood} ${date} ${description} ${imgUrl}`);
      console.log(`form is cleared`);
    }, 1000);
  };

  return (
    <div className='forms-wrapper'>
      <form className='new-note-form' onSubmit={handleSubmit}>
        <input
          className='new-note-name common-stiles placeholder'
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          onChange={handleChange}
        />

        <Select handleChange={handleChange} />

        <input
          className='new-note-date common-stiles'
          type='date'
          name='date'
          value={date}
          onChange={handleChange}
        />

        <textarea
          className='new-note-description placeholder'
          type='text'
          name='description'
          value={description}
          placeholder='Description'
          onChange={handleChange}
        />

        <div className='form-btn-wrapper'>
          <button
            className='common-btn clear-form-btn'
            type='button'
            onClick={handleClearForm}
          >
            clear form
          </button>

          <button className='common-btn save-note-btn'>save</button>
        </div>

        <div className='state'>
          <p onChange={console.log('changed')}>{formData.count}</p>
          <button type='button' onClick={formData.handleCount}>
            Click me
          </button>
          {STATE.map((item, index) => (
            <p key={index}>{item} </p>
          ))}
        </div>
      </form>

      <form className='search-form'>
        <input
          className='new-note-search common-stiles placeholder'
          type='text'
          name='search'
          // value=''
          placeholder='Search'
        />

        <button className='search-btn'></button>

        <div className='new-note-photos'>
          {images.data.map((image) => (
            <div className='new-note-photo-wrapper' key={image.id}>
              <img
                src={image.src.medium}
                className='new-note-photo'
                width='100%'
                height='100%'
                alt={`Provided by Pexels, photographer - ${image.photographer}`}
                onClick={handleClick}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

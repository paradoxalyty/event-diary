import React, { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

export const FormContextProvider = (props) => {
  const today = new Date().toISOString().substr(0, 10).toString();
  const localData = localStorage.getItem('notes');

  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [date, setDate] = useState(today);
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgAuthor, setImgAuthor] = useState('');
  const [itemId, setItemId] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSerachQuery] = useState('nature');

  const [notes, setNotes] = useState(localData ? JSON.parse(localData) : []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      name,
      mood,
      date,
      description,
      imgUrl,
      imgAuthor,
      itemId,
    };
    setNotes([...notes, newNote]);

    handleClearForm();
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSerachQuery(searchValue);
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
      case 'photo-search':
        setSearchValue(itemValue.trimStart());
        break;
      default:
      // ignore default
    }
  };

  const handleClick = (event) => {
    setImgUrl(event.target.src);
    setImgAuthor(event.target.alt);
    setItemId(event.target.dataset.id);
  };

  const handleClearForm = () => {
    setName('');
    setMood('');
    setDate(today);
    setDescription('');
    setImgUrl('');
    setImgAuthor('');
    setItemId('');
  };

  return (
    <FormContext.Provider
      value={{
        notes,
        name,
        mood,
        date,
        description,
        searchValue,
        searchQuery,
        imgUrl,
        imgAuthor,
        itemId,
        setImgUrl,
        setImgAuthor,
        setItemId,
        handleChange,
        handleSubmit,
        handleSearchSubmit,
        handleClick,
        handleClearForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

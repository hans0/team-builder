import React from 'react';

import './Form.css';

export default function Form (props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const {name, value} = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
    // TODO:

  }


  return (
    <form className='form container' onSubmit={onSubmit}>
      <label>Name
        <input 
          name='name'
          type='text'
          value={values.name}
          onChange={onChange}
          placeholder='Enter name...'
        ></input>
      </label>
      <label>Email
        <input 
          name='email'
          type='email'
          value={values.email}
          onChange={onChange}
          placeholder='name@domain.com'
        ></input>
      </label>
      <label>Role
        <select value={values.role} name='role' onChange={onChange}>
          <option value=''>---select role---</option>
          <option value='BigBossMan'>Big Boss Man</option>
          <option value='Chief'>Chief</option>
          <option value='ViceChief'>Vice Chief</option>
          <option value='BigDog'>Big Dog</option>
          <option value='MediumBigDog'>Medium Big Dog</option>
        </select>
      </label>
      <div className='submit'>
        <button>submit</button>
      </div>
    </form>
  )

}


import React from 'react';
import Loading from '../components/loading.gif';
import './Section.css'
export default function Spinner() {
  return (
    <div className='spinner' >
      <img src={Loading} alt="loading" width={20} />
    </div>
  );
}

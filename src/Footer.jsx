import React from 'react';
import "./footer.css"
export default function Footer() {
  return (
    <div className='footerdiv1'>
      <div className="footer">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
          Mercury
        </a>
      </div>
    </div>
  );
}
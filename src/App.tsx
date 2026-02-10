import { Heading } from './components/heading/Heading'

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';
import { Logo } from './components/logo/Logo';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='content'>
          <p>Logo</p>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='content'>
          <p>Menu</p>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='content'>
          <p>Form</p>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='content'>
          <p>Form</p>
        </div>
      </div>
    </>
  );
}
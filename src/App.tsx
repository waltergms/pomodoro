import './styles/theme.css';
import './styles/global.css';
import { Logo } from './components/Logo';
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              id='teste'
              type='text'
              maxLength={15}
              placeholder='Digite alguma coisa'
            />
          </div>
          <div className='formRow'>Lorem, ipsum dolor sit amet</div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>
      <div className='formRow'>
        <Footer />
      </div>
    </>
  );
}

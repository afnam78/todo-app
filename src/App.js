import './App.css';
import { Main } from './components/Main';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


function App() {
  return (
    <div className="App h-screen flex justify-center bg-gray-100">
      <header className='absolute top-0 w-full bg-blue-100 flex justify-center py-3 gap-20'>
        <div>
          <h1 className='font-bold text-4xl'>
            #TodoApp
          </h1>
        </div>
      </header>
      <Main />
      <footer className='absolute bottom-0 w-full bg-blue-100 flex justify-center py-2 gap-20'>
        <div>
          <a href='https://github.com/afnam78/todo-app' className=' hover:text-gray-800' target='_blank' rel='noreferrer' title='GitHub'>
            <BsGithub size={25} />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/afnan-amin' className='bg-blue-700' target='_blank' rel='noreferrer' title='Linkedin'>
            <BsLinkedin size={25} color={'rgb(29 78 216 / 1'} />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/mullayos/' target='_blank' rel='noreferrer' title='Instagram'>
            <BsInstagram size={25} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

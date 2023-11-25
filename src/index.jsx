import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import './index.html';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);


const btnUp = document.querySelector('#btn-up');
const btnDown = document.querySelector('#btn-down');
btnUp.addEventListener('click', () => {
  upLikes += 1;
  const likesUpElm = document.querySelector('#likes-up');
  likesUpElm.textContent = upLikes;
});
btnDown.addEventListener('click', () => {
  downLikes += 1;
  const likesDownElm = document.querySelector('#likes-down');
  likesDownElm.textContent = downLikes;
});
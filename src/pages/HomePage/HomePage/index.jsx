import './index.html';
import './style.css';


export const jokes = [
    {
      id: 'user01',
      name: 'Neroxx',
      text:
        'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
      likes: 13,
      dislikes: 24,
    }]

    let upLikes = 0;
    let downLikes = 0;

  
// const btnUp = document.querySelector('#btn-up');
// const btnDown = document.querySelector('#btn-down');
// btnUp.addEventListener('click', () => {
//   upLikes += 1;
//   const likesUpElm = document.querySelector('#likes-up');
//   likesUpElm.textContent = upLikes;
// });
// btnDown.addEventListener('click', () => {
//   downLikes += 1;
//   const likesDownElm = document.querySelector('#likes-down');
//   likesDownElm.textContent = downLikes;
// });
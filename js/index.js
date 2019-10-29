// Your code goes here

//MouseOver 1
const headerTwo = document.querySelectorAll('h2');

headerTwo[0].addEventListener(
  'mouseover',
  ele => {
    ele.target.style.color = 'orange';

    setTimeout(() => {
      ele.target.style.color = '';
    }, 1000);
  },
  false
);

//MouseOver 2
headerTwo[1].addEventListener(
  'mouseover',
  ele => {
    ele.target.style.color = 'red';

    setTimeout(() => {
      ele.target.style.color = '';
    }, 1000);
  },
  false
);

//MouseOver 3
const catImage = document.querySelector('.img-content');
catImage.addEventListener('mouseenter', () => {
  catImage.style.transform = 'scale(1.2)';
  catImage.style.transition = 'all 0.3s';
});
catImage.addEventListener('mouseleave', () => {
  catImage.style.transform = 'scale(1)';
  catImage.style.transition = 'all 0.3s';
});

//MouseOver 4
const welcome = document.querySelector('content-section, h2');
welcome.addEventListener('mouseenter', () => {
  welcome.textContent = 'Welcome To The Yellow Bus!';
  setTimeout(() => {
    welcome.textContent = 'Welcome To Fun Bus!';
  }, 1500);
});

//Scroll
const scrollPage = document.querySelector('body');

window.addEventListener('scroll', () => {
  scrollPage.style.backgroundColor = 'lightblue';

  setTimeout(() => {
    scrollPage.style.backgroundColor = '';
  }, 3000);
});

//dblclick
const logo = document.querySelector('.logo-heading');

logo.addEventListener('dblclick', () => {
  logo.style.color = 'pink';
  setTimeout(() => {
    logo.style.color = '';
  }, 1500);
});
// resize
const dogsRule = document.querySelector('.img-fluid.rounded');
window.addEventListener('resize', () => {
  dogsRule.src =
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
});

//MouseOver 5
const btn = document.querySelector('.btn');
btn.addEventListener('mouseenter', () => {
  btn.style.transform = 'scale(1.2)';
  btn.style.transition = 'all 0.3s';
});
btn.addEventListener('mouseleave', () => {
  btn.style.transform = 'scale(1)';
  btn.style.transition = 'all 0.3s';
});

// Mouse Enter NESTED
document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.color = 'purple';
    //Mouse Leave NESTED
    document.querySelectorAll('.nav-link').forEach(el => {
      el.addEventListener('mouseleave', () => {
        el.style.color = 'black';
      });
    });
  });
});

//wheel

//drap/drop

//load

//focus
window.onload = function() {
  document.querySelectorAll('text-content').focus();
};

//select
// function logSelection(event) {
//     const BTN = document.getElementById('.btn');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
//   }

//   const input = document.querySelector('input');
//   input.addEventListener('select', logSelection);

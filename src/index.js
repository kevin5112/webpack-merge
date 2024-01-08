import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
  console.log('we are in development mode');
}

function component() {
  const element = document.createElement('div');

  // lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack!']);

  return element;
}

document.body.appendChild(component());

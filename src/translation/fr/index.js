import home from './home.json';
import about from './about.json';
import works from './works.json'
import casestudies from './casestudies.json'
import general from './general.json'

const fr = {
  ...general, ...home, ...about, ...works, ...casestudies
};

export default fr;

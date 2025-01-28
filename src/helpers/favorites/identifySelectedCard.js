import babysitters from '../../data/babysitters.json';


const identifySelectedCard = name => {
  return babysitters.filter(el => el.name === name);
}



export { identifySelectedCard };
import babysitters from '../../data/babysitters.json';


const identifySelectedCard = name => {
  return babysitters.find(el => el.name === name);
}



export { identifySelectedCard };
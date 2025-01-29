export const removeSelectedCard = (prevFavorites, nannyName) => {
  return prevFavorites.filter((el) => el.name !== nannyName)
}
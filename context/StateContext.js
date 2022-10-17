import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
const Context = createContext();
export const StateContext = ({ children }) => {
  const [showFav, setShowFav] = useState(false);
  const [favItems, setFavItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty] = useState(1);
  let foundPet;
  const onAdd = (pet, quantity) => {
    const checkPetInFav = favItems.find((item) => item._id === pet._id);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if(checkPetInFav) {
      const updatedFavItems = favItems.map((item) => {
        if(item._id === pet._id) return {
          ...favItems,
          quantity: favItems.quantity + quantity
        }
      })
      setFavItems(updatedFavItems);
    } else {
      pet.quantity = quantity;
      setFavItems([...favItems, { ...pet }]);
    }
    toast.success(`${qty} ${pet.name} added to favorites.`);
  } 
  const onRemove = (pet) => {
    foundPet = favItems.find((item) => item._id === pet._id);
    const newFavItems = favItems.filter((item) => item._id !== pet._id);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundPet.quantity);
    setFavItems(newFavItems);
  }
  return (
    <Context.Provider
      value={{
        showFav,
        setShowFav,
        favItems,
        totalQuantities,
        qty,
        onAdd,
        onRemove,
        setFavItems,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context);
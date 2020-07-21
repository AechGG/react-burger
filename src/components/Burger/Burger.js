import React from 'react';

import './Burger.css';
import BurgerIngredients from './BurgerIngredients';

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    console.log(igKey);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      console.log(i);
      return <BurgerIngredients key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;

import React from 'react';
import CocktailCard from './BrouseCockCartOne';
import { Link } from 'react-router-dom';

const BrouseCockCart = ({ cocktails }) => {
      return (
            <div className="brouse-cock-cart h-full w-full py-4">
                  {cocktails && cocktails.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                              {cocktails.map(drink => (
                                    <Link to={`/cocktail/${drink.idDrink}`} key={drink.idDrink}>
                                          <CocktailCard drink={drink} />
                                    </Link>
                              ))}
                        </div>
                  ) : (
                        <p className="text-black text-center">No cocktails found. Try a different search.</p>
                  )}
            </div>
      );
};

export default BrouseCockCart;

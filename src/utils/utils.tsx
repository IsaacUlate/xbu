import React from 'react';

const keys = {
  all: 'Books',
  one: 'BookOne',
  categories: 'BookCategories',
  paginate: 'BookPaginate',
  filter: 'booksFilter',
  random: 'BooksRandom',
};

function handleImageLoad(e: React.SyntheticEvent) {
  const target = e.target as HTMLImageElement;
  target.style.filter = 'blur(0)';
}

export { keys, handleImageLoad };

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '@/app/components/navbar/Navbar';

const postsMock = [
  { title: 'Post 1', content: 'Content 1', id: '1', created_at: new Date() },
  { title: 'Post 2', content: 'Content 2', id: '2', created_at: new Date() },
];

test('search functionality works correctly', () => {
 const onSearchResultsMock = jest.fn();
 const { getByPlaceholderText, getByRole } = render(<Navbar posts={postsMock} onSearchResults={onSearchResultsMock} />);
 const searchInput = getByPlaceholderText('Search');
 const searchButton = getByRole('button'); 

 fireEvent.change(searchInput, { target: { value: 'Post 1' } });
 fireEvent.click(searchButton);

 expect(onSearchResultsMock).toHaveBeenCalledWith([postsMock[0]]);
});





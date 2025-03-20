import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  books: [],
  favourites: []
};

const bookSlice = createSlice({
  name: "Book Slice",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const existingData = JSON.parse(localStorage.getItem('books')) || [];

      const newId = existingData.length + 1;

      const newBookData = { ...action.payload, id: newId};
      state.books.push(newBookData);
      
      const updatedData = [...existingData, newBookData];
      localStorage.setItem('books', JSON.stringify(updatedData));
    },
    
    getBooks: (state) => {
        const bookData = JSON.parse(localStorage.getItem("books")) 
        if (bookData) {
            state.books = bookData; 
        }
    },

    getFavouriteBooks: (state) => {
      const favData = JSON.parse(localStorage.getItem("favourites")) 
      if (favData) {
          state.favourites = favData; 
      }
  },

    addToFavourite: (state, action) => {
        const alreadyFavourite = state.favourites.find((item) => item.id === action.payload.id);
        if (!alreadyFavourite) {
          state.favourites.push(action.payload);
          localStorage.setItem("favourites",JSON.stringify(state.favourites)
          );
        }
      },

      removeFromFavourite: (state,action) => {
        state.favourites = state.favourites.filter(
            (item) => item.id !== action.payload
        );
    
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
      },


      deleteBook: (state,action) => {
        const index = state.books.findIndex((book) => book.id === action.payload);
      
      if (index !== -1) {
        state.books.splice(index,1); 
       
      } 
      localStorage.setItem('books' ,JSON.stringify(state.books));
      },

      updateBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
     
      if (index !== -1) {
        state.books[index] = action.payload;
       
      } 
      localStorage.setItem('books' ,JSON.stringify(state.books));
      },
 
  }
});

export const { addBook,getBooks,addToFavourite,removeFromFavourite,getFavouriteBooks,deleteBook,updateBook,loadBooks } = bookSlice.actions;
export default bookSlice.reducer;

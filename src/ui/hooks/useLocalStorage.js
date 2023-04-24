import React, { useReducer } from 'react';

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state;

  const onError = (error) => dispatch({ type: 'ERROR', payload: error });
  const onSucces = (parsedItem) => dispatch({ type: 'SUCCES', payload: parsedItem })
  const onSave = (newItem) => dispatch({ type: 'SAVE', payload: newItem })
  const onSincronized = () => dispatch({ type: 'SINCRONIZE' })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSucces(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {

      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);

      onSave(newItem);

    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronized();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return { ...state, error: state.error = true }
    case 'SUCCES':
      return {
        ...state,
        sincronizedItem: state.sincronizedItem = true,
        error: state.error = false,
        loading: state.loading = false,
        item: state.item = action.payload,

      };
    case 'SAVE':
      return {
        ...state,
        item: state.item = action.payload,

      };
    case 'SINCRONIZE':
      return {
        ...state,
        loading: state.loading = true,
        sincronizedItem: state.setsincronizedItem = false,
      };
    default:
      return state;

  }
}

export { useLocalStorage };

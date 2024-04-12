const localStorageKey = 'blogPosts';

export const updateLocalStorage = (data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

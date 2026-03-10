const localStorageKey = "TodoApps";
export const getTodoLocalStorageData = () => {
  const savedTasks = localStorage.getItem(localStorageKey);
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const setLocalStorageTodoData = (tasks) => {
  //local Storage
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

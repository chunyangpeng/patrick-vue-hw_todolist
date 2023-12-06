const STORAGE_NAME = "auo-todolist"

const getToDoLists = () => {
  return JSON.parse(localStorage.getItem(STORAGE_NAME))
}

const saveToDoLists = (todolists) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todolists))
}

const getToDoList = (id) => {
  const todolists = getToDoLists()
  return todolists.find((todolist) => todolist.id == id)
}

export { getToDoLists, saveToDoLists, getToDoList }

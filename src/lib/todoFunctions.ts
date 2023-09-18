// * CREATE
export const createTodo = async () => {
  
}

// ? READ
export const getTodos = async () => {
  const response = await fetch("https://6505fbd8ef808d3c66f0b782.mockapi.io/todo")
  const data = await response.json();
  return data;
}

// ? READ SINGLE
export const getSingleTodo = async (id: string) => {
  
}

// * UPDATE
export const updateTodo = async (id: string) => {
  
}

// ! DELETE
export const deleteTodo = async (id: string) => {

}
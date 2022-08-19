let id = 0
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_Item":
      return [
        ...state,
        {
          id: id++,
          item: action.payload,
          done: false,
          date: "20-03-2022"
        }
      ]
    case "Check":
      state.splice(action.index, 1, { id: action.array.id, item: action.array.item, done: !action.array.done, date: action.array.date })
      console.log(state);
      return [...state]

    case "Del": 
      console.log(state);
      return state.filter(function(arr){
        return arr.id !== action.index
      })

    default:
      return state;
  }
}
export default todoReducer;
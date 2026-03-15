

const favouritesReducer = (state, action) => {
  if (action.type === 'TOGGLE') {
    const exists = state.some(f => f.id === action.payload.id)
    if (exists) return state.filter(f => f.id !== action.payload.id)
    return [...state, action.payload]
  }

  if (action.type === 'LOAD') {
    return action.payload
  }

  return state
}

export default favouritesReducer
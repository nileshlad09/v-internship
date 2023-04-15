export const initialState = localStorage.getItem("isVinternshipLogin") || null;

export const reducer = (state, action)=>{
      if(action.type==="USER"){
        return action.payload;
      }
      return state;
}
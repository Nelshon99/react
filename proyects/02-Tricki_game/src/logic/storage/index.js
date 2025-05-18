export const saveGameStorage = ({ board, turn }) => {
  //Guardar Progreso
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetGameStorage = () => {
  //Resetear progreso
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};

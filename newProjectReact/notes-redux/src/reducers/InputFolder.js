const initialState = {
  folderName: "",
  folderId: 0,
  folderList: []
};

const foldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_FOLDER":
      return {
        ...state,
        folderName: action.text
      };

    case "ADD_FOLDER":
      return {
        ...state,
        folderId: state.folderId + 1,
        folderList: [
          ...state.folderList,
          {
            folderId: state.folderId,
            folderName: state.folderName,
            notes: [],
            isSelected: false
          }
        ]
      };

    default:
      return state;
  }
};

export default foldersReducer;

const initialState = {
  folderName: "",
  folderId: 0,
  noteId: 0,
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

    case "SAVE_NOTE":
      const folder = state.folderList.find(
        folder => folder.isSelected === true
      );
      console.log(state);

      return {
        ...state,
        folderList: state.folderList.map(folder => {
          return {
            ...folder,
            notes: [
              ...folder.notes,
              {
                id: state.noteId + 1,
                note: action.note,
                noteTitle: action.title,
                date: new Date().toLocaleString(),
                isSelect: false
              }
            ]
          };
        })
      };

    default:
      return state;
  }
};

export default foldersReducer;

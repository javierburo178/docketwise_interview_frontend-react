import Documents from "./Documents";

const ChildrenFolders = ({ childrenFolders }) => {
  return (
    <>
      {childrenFolders.map((childFold) => {
        return (
          <>
            <li>{`***${childFold.name}`}</li>

            <ul>
              <Documents documents={childFold.documents}></Documents>
            </ul>

            <ul>
              <ChildrenFolders
                childrenFolders={childFold.children_folders}
              ></ChildrenFolders>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default ChildrenFolders;

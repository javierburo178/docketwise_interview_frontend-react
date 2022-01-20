import ChildrenFolders from "./ChildrenFolders";
import Documents from "./Documents";

const RootFolder = ({ data }) => {
  return (
    <>
      <ul>
        <li>{data.name}</li>

        <ul>
          <Documents documents={data.documents}></Documents>
        </ul>

        <ul>
          <ChildrenFolders
            childrenFolders={data.children_folders}
          ></ChildrenFolders>
        </ul>
      </ul>
    </>
  );
};

export default RootFolder;

const Documents = ({ documents }) => {
  return (
    <>
      {documents.map((document) => {
        return (
          <>
            <li>{`--${document.name}`}</li>
            <li>{`--${document.url}`}</li>
            <li>{`--${document.description}`}</li>
          </>
        );
      })}
    </>
  );
};

export default Documents;

import { useEffect, useState } from "react";

const GroceryItem = ({
  item,
  setList,
  setIsEdit,
  setItem,
  findItemIndex,
  setAlertMessage,
}) => {
  const handleDelete = () => {
    setList((prev) => prev.filter((listItem) => listItem !== item));
    setAlertMessage("Item Removed");
  };

  const handleEdit = () => {
    setIsEdit(true);
    setItem(item);
    findItemIndex(item);
  };

  return (
    <article>
      <h4>
        {item}
        <span>
          <button onClick={handleEdit}>Edit</button>
        </span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
      </h4>
    </article>
  );
};

const GroceryList = ({
  list,
  setList,
  setIsEdit,
  setItem,
  findItemIndex,
  setAlertMessage,
}) => {
  return (
    <section>
      {list.map((item) => (
        <GroceryItem
          key={crypto.randomUUID()}
          item={item}
          setList={setList}
          setIsEdit={setIsEdit}
          setItem={setItem}
          findItemIndex={findItemIndex}
          setAlertMessage={setAlertMessage}
        />
      ))}
    </section>
  );
};

const GroceryForm = ({
  item,
  setItem,
  list,
  setList,
  isEdit,
  setIsEdit,
  index,
  setAlertMessage,
}) => {
  const isItemValid = () => item !== "" && !list.includes(item);

  const resetForm = () => {
    setItem("");
    setIsEdit(false);
  };

  const handleAdd = () => {
    setList((prev) => [...prev, item]);
    resetForm();
    setAlertMessage("Item Added To The List");
  };

  const handleEdit = () => {
    const updatedList = [...list];
    updatedList[index] = item;
    setList(updatedList);
    resetForm();
    setAlertMessage("Value Change");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      if (isItemValid()) {
        handleEdit();
      }
      return;
    }

    if (isItemValid()) {
      handleAdd();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="e.g.eggs"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">{isEdit ? "Edit" : "Submit"}</button>
    </form>
  );
};

export default function Grocery() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (alertMessage) {
      const interval = setInterval(() => {
        setAlertMessage("");
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [alertMessage]);

  const findItemIndex = (item) => {
    setIndex(list.indexOf(item));
  };

  const handleDeleteAll = () => {
    setList([]);
    setAlertMessage("Empty List");
  };

  return (
    <main>
      {alertMessage && <p>{alertMessage}</p>}
      <h2>Grocery Bud</h2>
      <GroceryForm
        item={item}
        setItem={setItem}
        list={list}
        setList={setList}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        index={index}
        setAlertMessage={setAlertMessage}
      />
      <GroceryList
        list={list}
        setList={setList}
        setIsEdit={setIsEdit}
        setItem={setItem}
        findItemIndex={findItemIndex}
        setAlertMessage={setAlertMessage}
      />
      <button onClick={handleDeleteAll}>Clear Items</button>
    </main>
  );
}

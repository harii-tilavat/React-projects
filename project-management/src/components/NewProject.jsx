import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleClick() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-stone-700 text-xl font-bold my-4">Invalid input</h2>
        <p className="text-stone-600  mb-4">Oops... looks like you forgot to enter value.</p>
        <p className="text-stone-600  mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[55rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancle
            </button>
          </li>
          <li>
            <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleClick}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" id="title" label="Title" />
          <Input ref={description} label="Description" id="desc" isTextArea/>
          <Input ref={dueDate} type="date" label="Due date" id="due-date" />
        </div>
      </div>
    </>
  );
}

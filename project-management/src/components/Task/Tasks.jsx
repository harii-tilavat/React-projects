import NewTask from "./NewTask";

export default function Tasks({ tasks = [], onAddTask, onDeleteTask }) {
  console.log("TASKS : ", tasks);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {!tasks.length && <p className="text-stone-800 whitespace-pre-wrap ">This project does not have any task</p>}
      {tasks.length && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

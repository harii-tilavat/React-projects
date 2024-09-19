import Button from "./Button";
export default function ProjectSidebar({ onStartAddProject, onSelectProject, selectedProjectId, projects = [] }) {
  console.log("DATA : ", projects);
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="font-bold uppercase md:text-xl text-stone-200 mb-8">Your project</h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects &&
            projects.map((project) => {
              let cssClasses = "w-full text-left px-2 py-1 hover:text-stone-200 hover:bg-stone-800 rounded-md ";
              if (project.id === selectedProjectId) {
                cssClasses += "text-stone-200 bg-stone-800";
              } else {
                cssClasses += "text-stone-400";
              }

              return (
                <li key={project.id}>
                  <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
                    {project.title}
                  </button>
                </li>
              );
            })}
        </ul>
      </aside>
    </>
  );
}

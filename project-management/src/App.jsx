import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

let testSelectedProejct = {
  id: 1,
  title: "Test",
  description: "This is a demo description.",
  dueDate: new Date(),
};
function App() {
  const initialState = {
    selectedProjectId: undefined,
    projects: [testSelectedProejct],
    tasks: [],
  };
  const [projectsState, setProjectsState] = useState(initialState);

  function handleAddTask(text) {
    // console.log("TASK ", text);
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: text,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask() {}

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        // projects: [...prevState.projects],
      };
    });
  }
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    // console.log("PROJECT DATA : ", projectData);
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects],
      };
    });
  }
  function handleDelete() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }
  console.log("PROJECT STATE : ", projectsState);
  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);
  const selectedProjectTasks = projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId);
  console.log("SELECTED : ", selectedProjectTasks);
  let content = <SelectedProject onAddTask={handleAddTask} project={selectedProject} onDelete={handleDelete} onDeleteTask={handleDeleteTask} tasks={selectedProjectTasks} />;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleAddProject} onCancel={handleCancel} />;
  }

  return (
    <main className="h-screen my-8 flex flex-row gap-4">
      <ProjectSidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} projects={projectsState.projects} selectedProjectId={projectsState.selectedProjectId} />
      {content}
      {/* <SelectedProject project={} /> */}
    </main>
  );
}

export default App;

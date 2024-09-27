import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <>
      <div className="mt-24 w-2/3 text-center">
        <img src={noProjectImg} alt="No - project selected" className="h-auto w-20 object-contain mx-auto" />
        <h2 className="text-stone-500 text-xl font-bold my-4">No Project selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-8">
          <Button onClick={onStartAddProject}>Create new project</Button>
        </p>
      </div>
    </>
  );
}

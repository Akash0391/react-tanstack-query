import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTakForm";

export default function App() {
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Task List</h1>
            <TaskList />
            <AddTaskForm />
        </div>
    );
}
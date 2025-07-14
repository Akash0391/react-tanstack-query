import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTasks, deleteTask } from "../api/taskApi";

export default function TaskList() {
    const queryClient = useQueryClient();
    const { data: tasks, isLoading, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    });

    const deleteTaskMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Task List</h1>  
            <ul>
                {tasks.map((task: any) => (
                    <li key={task.id}>{task.title}
                    <button onClick={() => deleteTaskMutation.mutate(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>  
    );
}
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/taskApi";

export default function AddTaskForm() {
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();
    const addTaskMutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setTitle('');
        },
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTaskMutation.mutate(title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}
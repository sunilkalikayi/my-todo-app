import { Checkbox } from "./ui/checkbox";

const TaskCard = ({ id, label, status }: { id: string; label: string; status: string }) => {
    return (
        <div className="flex flex-row items-start gap-4 border">
            <Checkbox id={id} />
            <div>
                <label htmlFor={id} className="text-sm font-medium ">
                    {label}
                </label>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default TaskCard;

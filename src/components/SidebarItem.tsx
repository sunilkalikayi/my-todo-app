import { ReactNode, useState } from "react";
import { Button } from "./ui/button";

const SidebarItem = ({
    icon,
    text,
    count,
    className,
}: {
    icon: ReactNode;
    text: string;
    count: number | string;
    className?: string;
}) => {
    const [active, setActive] = useState<boolean>(false);
    const handleOnclick = () => {
        setActive(!active);
    };
    return (
        <Button
            className={`flex justify-between w-[200px] cursor-pointer ${
                active ? "bg-secondary text-primary" : ""
            }  ${className}`}
            variant={"plain"}
            onClick={handleOnclick}
        >
            <div className="flex gap-2 items-center">
                {/* Icon */}
                <div>{icon}</div>
                {/* Text */}
                <p>{text}</p>
            </div>

            {/* count */}
            <p>{count}</p>
        </Button>
    );
};

export default SidebarItem;

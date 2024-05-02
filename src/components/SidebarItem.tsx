import { ReactNode } from "react";

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
    return (
        <div className={`flex justify-between w-52 cursor-pointer h-10 items-center ${className}`}>
            <div className="flex gap-2 items-center">
                {/* Icon */}
                <div>{icon}</div>
                {/* Text */}
                <p>{text}</p>
            </div>

            {/* count */}
            <p>{count}</p>
        </div>
    );
};

export default SidebarItem;

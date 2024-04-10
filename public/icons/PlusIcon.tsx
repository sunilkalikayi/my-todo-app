import { IconTypes } from "@/types/CommonTypes";

const PlusIcon = ({ height = 20, width = 20, fill = "#9CA3AF" }: IconTypes) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${height} ${width}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99999 3.32709C10.4602 3.32709 10.8333 3.70018 10.8333 4.16042V15.8271C10.8333 16.2873 10.4602 16.6604 9.99999 16.6604C9.53975 16.6604 9.16666 16.2873 9.16666 15.8271V4.16042C9.16666 3.70018 9.53975 3.32709 9.99999 3.32709Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.33334 9.99999C3.33334 9.53975 3.70644 9.16666 4.16668 9.16666H15.8333C16.2936 9.16666 16.6667 9.53975 16.6667 9.99999C16.6667 10.4602 16.2936 10.8333 15.8333 10.8333H4.16668C3.70644 10.8333 3.33334 10.4602 3.33334 9.99999Z"
                fill={fill}
            />
        </svg>
    );
};

export default PlusIcon;

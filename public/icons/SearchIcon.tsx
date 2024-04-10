import { IconTypes } from "@/types/CommonTypes";

const SearchIcon = ({ height = 20, width = 20, fill = "#6B7280" }: IconTypes) => {
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
                d="M8.33332 3.33332C5.5719 3.33332 3.33332 5.5719 3.33332 8.33332C3.33332 11.0947 5.5719 13.3333 8.33332 13.3333C11.0947 13.3333 13.3333 11.0947 13.3333 8.33332C13.3333 5.5719 11.0947 3.33332 8.33332 3.33332ZM1.66666 8.33332C1.66666 4.65142 4.65142 1.66666 8.33332 1.66666C12.0152 1.66666 15 4.65142 15 8.33332C15 12.0152 12.0152 15 8.33332 15C4.65142 15 1.66666 12.0152 1.66666 8.33332Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9107 11.9107C12.2362 11.5853 12.7638 11.5853 13.0892 11.9107L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L11.9107 13.0892C11.5853 12.7638 11.5853 12.2362 11.9107 11.9107Z"
                fill={fill}
            />
        </svg>
    );
};

export default SearchIcon;

import { IconTypes } from "@/types/CommonTypes";

const ListIcon = ({ height = 20, width = 20, fill = "#374151" }: IconTypes) => {
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
                d="M6.66669 4.99999C6.66669 4.53975 7.03978 4.16666 7.50002 4.16666H16.6667C17.1269 4.16666 17.5 4.53975 17.5 4.99999C17.5 5.46023 17.1269 5.83332 16.6667 5.83332H7.50002C7.03978 5.83332 6.66669 5.46023 6.66669 4.99999Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.66669 9.99999C6.66669 9.53975 7.03978 9.16666 7.50002 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H7.50002C7.03978 10.8333 6.66669 10.4602 6.66669 9.99999Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.66669 15C6.66669 14.5398 7.03978 14.1667 7.50002 14.1667H16.6667C17.1269 14.1667 17.5 14.5398 17.5 15C17.5 15.4602 17.1269 15.8333 16.6667 15.8333H7.50002C7.03978 15.8333 6.66669 15.4602 6.66669 15Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16665 4.16666C4.62688 4.16666 4.99998 4.53975 4.99998 4.99999V5.00832C4.99998 5.46856 4.62688 5.84166 4.16665 5.84166C3.70641 5.84166 3.33331 5.46856 3.33331 5.00832V4.99999C3.33331 4.53975 3.70641 4.16666 4.16665 4.16666Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16665 9.16666C4.62688 9.16666 4.99998 9.53975 4.99998 9.99999V10.0083C4.99998 10.4686 4.62688 10.8417 4.16665 10.8417C3.70641 10.8417 3.33331 10.4686 3.33331 10.0083V9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666Z"
                fill={fill}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16665 14.1667C4.62688 14.1667 4.99998 14.5398 4.99998 15V15.0083C4.99998 15.4686 4.62688 15.8417 4.16665 15.8417C3.70641 15.8417 3.33331 15.4686 3.33331 15.0083V15C3.33331 14.5398 3.70641 14.1667 4.16665 14.1667Z"
                fill={fill}
            />
        </svg>
    );
};

export default ListIcon;

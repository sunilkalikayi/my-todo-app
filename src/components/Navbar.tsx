import Image from "next/image";
import PlusIcon from "../../public/icons/PlusIcon";
import SearchIcon from "../../public/icons/SearchIcon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ProfileImage from "/public/images/profile.png";
import Logo from "/public/images/todoIcon.png";

const Navbar = () => {
    return (
        <div className="flex justify-between px-8 items-center border-b h-[10vh]">
            {/* logo */}
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="todo logo icon" />
                <p className="font-semibold">TODO</p>
            </div>
            {/* search bar */}
            <div className="flex border items-center w-[560px] px-4 rounded-lg">
                <SearchIcon />
                <Input placeholder="Search" className="border-none" />
            </div>
            {/* action items */}
            <div className="flex gap-4 items-center">
                <Button className="gap-1">
                    <PlusIcon fill="white" />
                    <span>New Task</span>
                </Button>
                <Image src={ProfileImage} alt="Profile Image" />
            </div>
        </div>
    );
};

export default Navbar;

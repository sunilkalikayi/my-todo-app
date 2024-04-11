import Navbar from "@/components/Navbar";
import SidebarItem from "@/components/SidebarItem";
import { Inter } from "next/font/google";
import CalendarIcon from "../../public/icons/CalendarIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`min-h-screen  ${inter.className}`}>
            {/* Nav bar */}
            <Navbar />
            {/* side bar */}
            <div>
                <SidebarItem icon={<CalendarIcon />} text={"Today"} count={"3 / 7"} />
            </div>
            {/* body */}
        </main>
    );
}

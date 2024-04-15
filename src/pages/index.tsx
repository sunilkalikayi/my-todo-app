import Navbar from "@/components/Navbar";
import SidebarItem from "@/components/SidebarItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Inter } from "next/font/google";
import CalendarIcon from "../../public/icons/CalendarIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`${inter.className} min-h-screen flex flex-col`}>
            {/* Nav bar */}
            <Navbar />
            {/* body */}
            <Tabs defaultValue="account" className=" flex-1 flex flex-row">
                {/* side bar */}
                <TabsList className="flex-col flex-[0.2] items-end py-8">
                    <TabsTrigger value="account">
                        <SidebarItem icon={<CalendarIcon />} text={"Today"} count={"3 / 7"} />
                    </TabsTrigger>
                    <TabsTrigger value="password">
                        <SidebarItem icon={<CalendarIcon />} text={"Today"} count={"3 / 7"} />
                    </TabsTrigger>
                </TabsList>
                {/* Tab pannel */}
                <div className="flex-[0.8] p-8">
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </div>
            </Tabs>
        </main>
    );
}

import Navbar from "@/components/Navbar";
import SidebarItem from "@/components/SidebarItem";
import TaskCard from "@/components/TaskCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    OVERDUE_TAB_VALUE_CONSTANT,
    TODAY_TAB_VALUE_CONSTANT,
    TOMORROW_TAB_VALUE_CONSTANT,
} from "@/constants/TabConstants";
import { Inter } from "next/font/google";
import { useState } from "react";
import CalendarIcon from "../../public/icons/CalendarIcon";
import { Button } from "@/components/ui/button";
import PlusIcon from "../../public/icons/PlusIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [selectedTab, setSelectedTab] = useState(TODAY_TAB_VALUE_CONSTANT);
    console.log("selected tab is", selectedTab);

    return (
        <main className={`${inter.className} h-[100vh] flex flex-col `}>
            {/* Nav bar */}
            <Navbar />
            {/* body */}
            <Tabs
                defaultValue={TODAY_TAB_VALUE_CONSTANT}
                className=" flex-1 flex flex-row h-[10vh]"
                onValueChange={(tab) => {
                    setSelectedTab(tab);
                }}
            >
                {/* side bar */}
                <TabsList className="flex-col flex-[0.2] items-end py-8 gap-2">
                    <TabsTrigger value={TODAY_TAB_VALUE_CONSTANT}>
                        <SidebarItem icon={<CalendarIcon />} text={"Today"} count={"3 / 7"} />
                    </TabsTrigger>
                    <TabsTrigger value={TOMORROW_TAB_VALUE_CONSTANT}>
                        <SidebarItem icon={<CalendarIcon />} text={"tomorrow"} count={"3 / 7"} />
                    </TabsTrigger>
                    <TabsTrigger value={OVERDUE_TAB_VALUE_CONSTANT}>
                        <SidebarItem icon={<CalendarIcon />} text={"overdue"} count={"3 / 7"} />
                    </TabsTrigger>
                </TabsList>
                {/* Tab pannel */}
                <div className="flex-[0.8]  h-full ">
                    <TabsContent value={selectedTab} className="h-full py-8 pl-14 ">
                        {/* Title */}
                        <p className="capitalize font-semibold text-2xl">{selectedTab}</p>
                        {/* Add new task Button */}
                        <Button className="w-full max-w-[550px] justify-start gap-4 mt-4" variant={'destructive'}>
                            <PlusIcon/> <span>Add new task </span>
                        </Button>

                        {/* Display the tasks of the current selected Tab */}
                        <div className="overflow-y-scroll  h-full py-4">
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            <TaskCard id="4" label="four" status={"Active"} />
                            
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </main>
    );
}

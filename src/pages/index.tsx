import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`min-h-screen  ${inter.className}`}>
            {/* Nav bar */}
            <Navbar />
            {/* side bar */}
            {/* body */}
        </main>
    );
}

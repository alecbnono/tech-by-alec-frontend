import type { Route } from "./+types/notFound";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Page Not Found | Tech by Alec" },
        { name: "description", content: "The page you're looking for doesn't exist." },
    ];
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
            <h1 className="text-9xl font-bold text-zinc-200">404</h1>
            <h2 className="text-3xl font-semibold text-zinc-200">Page Not Found</h2>
            <p className="text-zinc-400">The page you're looking for doesn't exist.</p>
            <Link to="/">
                <Button className="border-2 border-zinc-600 p-3 bg-zinc-800/80 text-zinc-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-zinc-100 transition-colors duration-300 cursor-pointer">
                    <FaArrowLeft /> Back to Home
                </Button>
            </Link>
        </div>
    );
}

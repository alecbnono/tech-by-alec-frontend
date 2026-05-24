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
                <Button className="p-3 bg-[rgba(18,14,50,0.52)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] text-zinc-200 hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 cursor-pointer">
                    <FaArrowLeft /> Back to Home
                </Button>
            </Link>
        </div>
    );
}

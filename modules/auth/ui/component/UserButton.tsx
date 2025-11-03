import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const UserButton = () => {
    return (
        <Button variant="outline" className="px-4 py-2 text-sm text-blue-500 border-blue-500/20 rounded-full shadow-none">
            <UserCircleIcon/>
            Sign In
        </Button>
    );
};

export default UserButton;
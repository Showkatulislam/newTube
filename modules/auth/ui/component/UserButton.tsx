import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

const MyUserButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <Button variant="outline" className="px-4 py-2 text-sm text-blue-500 border-blue-500/20 rounded-full shadow-none">
                        <UserCircleIcon />
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
};

export default MyUserButton;
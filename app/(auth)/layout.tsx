interface authProps{
    children:React.ReactNode
}

export default function AuthLayout({ children }: authProps) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {children}
        </div>
    )
}
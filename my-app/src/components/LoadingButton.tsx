import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface LoadingButtonProps {
    onClick: () => void
    isLoading: boolean
    label: string
}

export default function LoadingButton({ onClick, isLoading, label }: LoadingButtonProps) {
    return (
        <Button onClick={onClick} disabled={isLoading}>
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </>
            ) : (
                label
            )}
        </Button>
    )
}

export function MainSkeleton() {
    return (
        <div className="container mx-auto p-8 space-y-12 animate-pulse min-h-screen">
            {/* Simulate a Hero Section */}
            <div className="space-y-4">
                <div className="h-12 bg-muted rounded w-3/4 md:w-1/2"></div>
                <div className="h-6 bg-muted rounded w-full md:w-2/3"></div>
                <div className="h-6 bg-muted rounded w-5/6 md:w-1/2"></div>
            </div>

            {/* Simulate some content blocks */}
            <div className="space-y-8 pt-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col space-y-4">
                        <div className="h-8 bg-muted rounded w-1/4"></div>
                        <div className="h-32 bg-muted rounded w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

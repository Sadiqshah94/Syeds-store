import { Skeleton } from "@/components/ui/skeleton"

const ProfileSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-2 w-[50px]" />
        <Skeleton className="h-2 w-[50px]" />
      </div>
    </div>
  )
}

export default ProfileSkeleton

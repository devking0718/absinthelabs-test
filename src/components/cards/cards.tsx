import { useMainContext } from "@/context/mainContext"
import { Badge, Box, Card, Flex, Grid, Skeleton, Text } from "@radix-ui/themes"
import Image from "next/image"

export const ActionCard = ({ isComplete, description }: { isComplete?: boolean, description: string }) => {
    return (
        <Box className="rounded-xl overflow-hidden bg-elevation-elevation1-dark mb-4">
            <Box className="flex items-center justify-between bg-elevation-elevation3-dark px-4 border-b-elevation-background-dark border-b">
                <Text className="py-3 text-xs font-medium text-text-secondary-dark">Action</Text>
                {isComplete && <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">Completed</Badge>}
            </Box>
            <Box className="pt-2 px-4 pb-4 bg-elevation-elevation2-dark text-text-secondary-dark text-sm">
                {description}
            </Box>
        </Box>
    )
}

export const BadgeCard = ({ index, isActive, logo, actions, title, value, details }: { index: number, isActive?: boolean, logo: string, actions: any, title: string, value: string, details?: string }) => {
    const { currentIndex } = useMainContext();
    return (
        <Box>
            {currentIndex === index ? (
                <>
                    <Box minWidth='178px' className={`mb-2 carousel-item mx-1 cursor-pointer select-none text-center relative snap-start rounded-xl overflow-hidden bg-elevation-elevation3-dark border border-transparent ${isActive && `border border-status-success-main-dark`}`}>
                        <Box className="bg-elevation-elevation2-dark flex items-center text-xs p-2 flex-nowrap justify-around">
                            <Text className="text-text-primary-dark font-medium text-nowrap">{title}</Text>
                            {actions.length > 0 && <Text className="text-text-secondary-dark font-medium text-nowrap">{actions.length} Actions</Text>}
                        </Box>
                        <Box className="py-6 text-center">
                            <Image src={`${logo}`} width={64} height={64} className={`rounded-full mx-auto`} alt="icon" />
                        </Box>
                        <Box className="bg-status-success-elevation1-dark py-1 px-2 text-center text-status-success-main-dark text-xs font-medium">
                            {value}
                        </Box>
                    </Box>
                    {
                        details && (
                            <Box maxWidth='178px' className="bg-elevation-elevation2-dark rounded-xl text-center flex flex-col py-1 px-4">
                                <Text className="text-xs font-medium text-text-primary-dark">Reward Details</Text>
                                <Text className="text-xs font-medium text-text-secondary-dark text-wrap">{details}</Text>
                            </Box>
                        )
                    }
                </>

            ) : (
                <>

                    <Box minWidth='178px' minHeight="178px" className={`mb-2 flex items-center justify-center carousel-item mx-1 cursor-pointer select-none text-center relative snap-start rounded-xl overflow-hidden bg-elevation-elevation3-dark border border-transparent`}>
                        <Box className="py-6 text-center ">
                            <Image src={`${logo}`} width={64} height={64} className={`rounded-full mx-auto `} alt="icon" />
                        </Box>
                    </Box>
                    {
                        details && (
                            <Box maxWidth='178px' className="bg-elevation-elevation2-dark rounded-xl text-center flex flex-col py-1 px-4">
                                <Grid columns="3" gap="3" width="auto" className="mb-2">
                                    <Skeleton className="rounded-md bg-text-disabled-dark"></Skeleton>
                                    <Skeleton className="rounded-md"></Skeleton>
                                    <Skeleton className="rounded-md"></Skeleton>
                                </Grid>
                                <Grid columns="1" gap="3" width="auto">
                                    <Skeleton className="rounded-md"></Skeleton>
                                </Grid>
                            </Box>
                        )
                    }
                </>
            )}
        </Box>
    )
}
export const CommunityBadgeCard = ({ index, isActive, logo, actions, title, value }: { index: number, isActive?: boolean, logo: string, actions: any, title: string, value: string, }) => {
    const { setCurrentIndex } = useMainContext();
    return (
        <Box>
            <Box minWidth='178px' onClick={() => { setCurrentIndex(index) }} className={`mb-2 carousel-item mx-1 cursor-pointer select-none text-center relative snap-start rounded-xl overflow-hidden bg-elevation-elevation3-dark ${isActive ? `border border-status-success-main-dark` : ``}`}>
                <Box className="bg-elevation-elevation2-dark flex items-center text-xs p-2 flex-nowrap justify-around">
                    <Text className="text-text-primary-dark font-medium text-nowrap">{title}</Text>
                    {actions.length > 0 && <Text className="text-text-secondary-dark font-medium text-nowrap">{actions.length} Actions</Text>}
                </Box>
                <Box className="py-6 text-center">
                    <Image src={`${logo}`} width={64} height={64} className={`rounded-full mx-auto border-4 ${isActive ? `border-status-success-main-dark grayscale-0` : `border-transparent grayscale`}`} alt="icon" />
                </Box>
                <Box className="bg-status-success-elevation1-dark py-1 px-2 text-center text-status-success-main-dark text-xs font-medium">
                    {value}
                </Box>
            </Box>
        </Box>
    )
}


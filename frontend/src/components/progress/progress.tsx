import { Progress } from "@radix-ui/themes"

export const ProgressBar = ({isComplete}: {isComplete: boolean}) => {
    return(
        <Progress variant="soft" className={isComplete ? `bg-primary-default-dark border-0` : `bg-elevation-elevation3-dark border-0`} size="1" value={0} />
    )
}
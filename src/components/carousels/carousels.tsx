import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useEffect, useRef, useState } from "react";
import { Badge, Box, Button, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useMainContext } from "@/context/mainContext";
import { ActionCard } from "../cards/cards";
import { ProgressBar } from "../progress/progress";
import { CommunityBadgeData } from "@/utils/datas";
import { useDrag } from '@use-gesture/react';

export default function BadgeCarousel(props: any) {
    const { setCurrentIndex, currentIndex } = useMainContext();
    const table = props.badges.map((element: any, index: any) => {
        return { ...element, onClick: () => { setGoToSlide(index); handleSlideChange(index); setCurrentIndex(index) } };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState<any | null>(null);
    const [badges] = useState(table);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setGoToSlide(currentSlide)
    }, [currentSlide]);

    useEffect(() => {
        setGoToSlide(currentIndex)
    }, [currentIndex]);

    const bind = useDrag(({ swipe: [swipeX] }) => {
        if (swipeX === 1) {
            // Swipe right
            const newIndex = (currentSlide - 1 + badges.length) % badges.length;
            handleSlideChange(newIndex);
            setCurrentIndex(newIndex);
        } else if (swipeX === -1) {
            // Swipe left
            const newIndex = (currentSlide + 1) % badges.length;
            handleSlideChange(newIndex);
            setCurrentIndex(newIndex);
        }
    }, { axis: 'x' });

    return (
        <Box className="px-6 py-4 rounded-3xl bg-elevation-elevation1-dark mb-4 " {...bind()}>
            <Box className="mb-3 flex items-center justify-between">
                <Box
                    className="mb-3 flex items-center justify-between"
                    style={{ width: props.width, height: props.height, margin: props.margin }}
                >
                    <Button className="h-72 bg-elevation-elevation3-dark rounded-3xl mx-3" onClick={() => { handleSlideChange(currentSlide - 1 >= 0 ? currentSlide - 1 : badges.length - 1); setCurrentIndex(currentSlide - 1 >= 0 ? currentSlide - 1 : badges.length - 1) }}><Image src="/images/icons/left.svg" width={24} height={24} alt="arrow" /></Button>
                    <Carousel
                        slides={badges}
                        goToSlide={goToSlide}
                        offsetRadius={offsetRadius}
                        showNavigation={showArrows}
                        animationConfig={config.gentle}
                    />
                    <Button className="h-72 bg-elevation-elevation3-dark rounded-3xl mx-3" onClick={() => { handleSlideChange(currentSlide + 1 < badges.length ? currentSlide + 1 : 0); setCurrentIndex(currentSlide + 1 < badges.length ? currentSlide + 1 : 0) }}><Image src="/images/icons/right.svg" width={24} height={24} alt="arrow" /></Button>
                </Box>


            </Box>
            <Box>
                <Box className="flex md:items-center md:justify-between flex-col md:flex-row">
                    <Text className="text-sm mb-2"><strong>How to Earn:</strong> Complete the actions for the badge, no specific order needed.</Text>
                    <Box className="flex items-center md:justify-end mb-2">
                        {CommunityBadgeData[currentIndex].actions.length > 0 && (
                            <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium me-2">{CommunityBadgeData[currentIndex].actions.filter(action => action.isComplete).length}/{CommunityBadgeData[currentIndex].actions.length} Completed</Badge>
                        )}
                        <Badge radius="full" className="bg-primary-disabled-dark bg-opacity-20 text-primary-hover-dark px-2 py-1 text-xs font-medium">Total Earnings: {CommunityBadgeData[currentIndex].total_earning.toLocaleString()}</Badge>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Grid columns={{ initial: '1', md: `${CommunityBadgeData[currentIndex].actions.length}` }} gap="3" width="auto">
                    {(CommunityBadgeData[currentIndex].actions).map((item, index) => (
                        <ActionCard isComplete={item.isComplete} description={item.content} />
                    ))}
                </Grid>
                <Grid columns={`${CommunityBadgeData[currentIndex].actions.length}`} gap="3" width="auto">
                    {(CommunityBadgeData[currentIndex].actions).map((item, index) => (
                        <ProgressBar isComplete={item.isComplete} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

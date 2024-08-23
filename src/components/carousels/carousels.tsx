import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useEffect, useRef, useState } from "react";
import { Badge, Box, Button, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useMainContext } from "@/context/mainContext";
import { ActionCard, BadgeCard } from "../cards/cards";
import { ProgressBar } from "../progress/progress";
import { CommunityBadgeData } from "@/utils/datas";
import { useDrag } from '@use-gesture/react';
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BadgeCarousel(props: any) {
    const { setCurrentIndex, currentIndex } = useMainContext();
    const table = props.badges.map((element: any, index: any) => {
        return { ...element, onClick: () => { handleSlideChange(index); setCurrentIndex(index) } };
    });

    const [badges] = useState(table);
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef<any | null>(null);

    const handleCurrentSlide = (swiper: any) => {
        setCurrentIndex(swiper.activeIndex);
        setCurrentSlide(swiper.activeIndex);
    }

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        swiperRef.current.slideTo(currentIndex, 300);
    }, [currentIndex]);

    return (
        <Box className="px-4 md:px-6 py-4 rounded-3xl bg-elevation-elevation1-dark mb-4 " >
            <Box className="mb-3 flex items-center justify-between">
                <Box
                    className="mb-3 flex items-center justify-between carousel-container"
                    style={{ width: props.width, height: props.height, margin: props.margin }}
                >
                    <Button className="h-72 bg-elevation-elevation3-dark rounded-3xl me-3 cursor-pointer" onClick={() => { handleSlideChange(currentSlide - 1 >= 0 ? currentSlide - 1 : badges.length - 1); setCurrentIndex(currentSlide - 1 >= 0 ? currentSlide - 1 : badges.length - 1) }}><Image src="/images/icons/left.svg" width={24} height={24} alt="arrow" /></Button>

                    <Swiper
                        effect={'coverflow'}
                        slidesPerView={'auto'}
                        spaceBetween={-30}
                        centeredSlides={true}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 35,
                            modifier: 4,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow]}
                        onSlideChange={handleCurrentSlide}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {CommunityBadgeData.map((item, index) => (
                            <SwiperSlide className="mx-auto"
                            >
                                <BadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} details={item.detail} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Button className="h-72 bg-elevation-elevation3-dark rounded-3xl ms-3 cursor-pointer" onClick={() => { handleSlideChange(currentSlide + 1 < badges.length ? currentSlide + 1 : 0); setCurrentIndex(currentSlide + 1 < badges.length ? currentSlide + 1 : 0) }}><Image src="/images/icons/right.svg" width={24} height={24} alt="arrow" /></Button>
                </Box>


            </Box>
            <Box>
                <Box className="flex md:items-center md:justify-between flex-col md:flex-row">
                    <Text className="text-sm mb-2"><strong>How to Earn:</strong> Complete the actions for the badge, no specific order needed.</Text>
                    <Box className="flex items-center md:justify-end mb-2">
                        {CommunityBadgeData[currentIndex].actions.length > 0 && (
                            <Badge radius="full" className="w-1/2 md:w-auto flex justify-center bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium me-2">{CommunityBadgeData[currentIndex].actions.filter(action => action.isComplete).length}/{CommunityBadgeData[currentIndex].actions.length} Completed</Badge>
                        )}
                        <Badge radius="full" className="w-1/2 md:w-auto flex justify-center bg-primary-disabled-dark bg-opacity-20 text-primary-hover-dark px-2 py-1 text-xs font-medium">Total Earnings: {CommunityBadgeData[currentIndex].total_earning.toLocaleString()}</Badge>
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

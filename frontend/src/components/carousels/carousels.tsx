import { useEffect, useRef, useState } from "react";
import { Badge, Box, Button, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useMainContext } from "@/context/mainContext";
import { ActionCard, BadgeCard, CommunityBadgeCard } from "../cards/cards";
import { ProgressBar } from "../progress/progress";
import { CommunityBadgeData } from "@/utils/datas";
import { EffectCoverflow, Grid as GridModule } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
                        className="hidden md:block"
                        effect={'coverflow'}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 200,
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
                            <SwiperSlide className="mx-auto" key={index}>
                                <BadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} details={item.detail} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Button className="h-72 bg-elevation-elevation3-dark rounded-3xl ms-3 cursor-pointer" onClick={() => { handleSlideChange(currentSlide + 1 < badges.length ? currentSlide + 1 : 0); setCurrentIndex(currentSlide + 1 < badges.length ? currentSlide + 1 : 0) }}><Image src="/images/icons/right.svg" width={24} height={24} alt="arrow" /></Button>
                </Box>


            </Box>
            <Box>
                <Box className="flex md:items-center md:justify-between flex-col md:flex-row">
                    <Box className="text-sm mb-2"><Text className="font-semibold text-text-primary-dark">How to Earn: </Text><Text className="font-normal text-text-secondary-dark">Complete the actions for the badge, no specific order needed.</Text></Box>
                    <Box className="flex items-center md:justify-end mb-2">
                        {CommunityBadgeData[currentIndex].actions.length > 0 && (
                            <Badge radius="full" className="w-1/2 md:w-auto flex justify-center bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium me-2"><Text className={inter.className}>{CommunityBadgeData[currentIndex].actions.filter(action => action.isComplete).length}/{CommunityBadgeData[currentIndex].actions.length} Completed</Text></Badge>
                        )}
                        <Badge radius="full" className="w-1/2 md:w-auto flex justify-center bg-primary-disabled-dark bg-opacity-20 text-primary-hover-dark px-2 py-1 text-xs font-medium"><Text className={inter.className}>Total Earnings: {CommunityBadgeData[currentIndex].total_earning.toLocaleString()}</Text></Badge>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Grid columns={{ initial: '1', md: `${CommunityBadgeData[currentIndex].actions.length}` }} gap="3" width="auto">
                    {(CommunityBadgeData[currentIndex].actions).map((item, index) => (
                        <ActionCard key={index} isComplete={item.isComplete} description={item.content} />
                    ))}
                </Grid>
                <Grid columns={`${CommunityBadgeData[currentIndex].actions.length}`} gap="3" width="auto">
                    {(CommunityBadgeData[currentIndex].actions).map((item, index) => (
                        <ProgressBar key={index} isComplete={item.isComplete} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export const CommunityBadgeCarousel = () => {
    return (
        <Box className="p-4">
            <Swiper
                slidesPerView={2}
                grid={{
                    rows: 2,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        grid: {
                            rows: 2
                        }
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 7.5,
                        grid: {
                            rows: 1
                        }
                    },
                }}
                modules={[GridModule]}
            >
                {CommunityBadgeData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CommunityBadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

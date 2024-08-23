'use client'
import BadgeCarousel, { CommunityBadgeCarousel } from "@/components/carousels/carousels";
import { CommunityBadgeData } from "@/utils/datas";
import { Box, Text, } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { ActivityTable } from "@/components/tables/tables";



export default function BadgePage() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box className="bg-elevation-background-dark py-10">
            <Box className="container mx-auto md:px-8 px-4">
                <Box className="hidden md:block">
                    <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Last Activities</Text>
                    <ActivityTable />
                </Box>
                <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Badges</Text>
                <BadgeCarousel
                    badges={CommunityBadgeData}
                    height="300px"
                    width="100%"
                    margin="auto"
                />
                <Box className="rounded-xl overflow-hidden bg-elevation-elevation1-dark mb-4 block md:hidden">
                    <Box className="bg-elevation-elevation2-dark px-4 py-2 text-xs font-medium text-white">
                        Achievement Badges
                    </Box>
                    <Box className="block md:hidden">
                        <CommunityBadgeCarousel />
                    </Box>
                </Box>
                <Box className="rounded-xl overflow-hidden bg-elevation-elevation1-dark mb-4">
                    <Box className="bg-elevation-elevation2-dark px-4 py-2 text-xs font-medium text-white">
                        Community Badges
                    </Box>
                    <CommunityBadgeCarousel />
                </Box>
            </Box>
        </Box >
    );
}

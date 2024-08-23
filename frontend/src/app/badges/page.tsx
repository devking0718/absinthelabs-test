'use client'
import { CommunityBadgeCard } from "@/components/cards/cards";
import BadgeCarousel from "@/components/carousels/carousels";
import { CommunityBadgeData } from "@/utils/datas";
import { Badge, Box, Skeleton, Table, Text, Tooltip } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import copy from 'copy-to-clipboard';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from 'swiper/modules';
import { useSubscription } from "@apollo/client";
import { GET_LOGS } from "@/queries/logs";
import { timeStamp } from "console";

interface Log {
    activity: string;
    points: number;
    block_timestamp: string;
    transaction_hash: string;
}

interface SubscriptionData {
    logs: Log[];
}

export default function BadgePage() {
    const [width, setWidth] = useState(0);
    const [open, setOpen] = useState(false);
    const { data, loading, error } = useSubscription<SubscriptionData>(GET_LOGS);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const convertDate = (timeData: string) => {
        const date = new Date(timeData);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getUTCFullYear();
        const formattedDate = `${day}:${month}:${year}`;
        return formattedDate;
    }
    const convertTime = (timeData: string) => {
        const date = new Date(timeData);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        return formattedTime;
    }


    const handleCopy = (address: string) => {
        copy(address);
        setOpen(true);
        setTimeout(() => setOpen(false), 2000);
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [data]);

    return (
        <Box className="bg-elevation-background-dark py-10">
            <Box className="container mx-auto md:px-8 px-4">
                <Box className="hidden md:block">
                    <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Last Activities</Text>
                    <Table.Root className="rounded-xl overflow-hidden mb-6">
                        <Table.Header className="bg-elevation-elevation3-dark border-b-0">
                            <Table.Row>
                                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose w-1/4">Activities</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose w-1/4">Points</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose w-1/4">Date</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose w-1/4">TXID</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {(isLoading || loading) ? (
                            <Table.Body>
                                {Array.from({ length: 6 }, (_, index) => (
                                    <Table.Row className=" border-y-elevation-background-dark border-y">
                                        <Table.RowHeaderCell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1 blur-sm" /><Text className="blur-sm">Transaction</Text></Box>
                                        </Table.RowHeaderCell>
                                        <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium blur-sm">+150</Badge>
                                        </Table.Cell>
                                        <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box>
                                                <Text className="shadow-none text-sm text-text-secondary-dark pe-1 blur-sm">20.06.2024</Text>
                                                <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium blur-sm">14:10:35</Badge>
                                            </Box>
                                        </Table.Cell>
                                        <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box className="flex justify-between items-center">
                                                <Box>
                                                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1 blur-sm">3s65...2sd5</Text>
                                                    <Tooltip content="Copied!" open={open}>
                                                        <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium cursor-pointer blur-sm" >Copy</Badge>
                                                    </Tooltip>
                                                </Box>
                                                <Box>
                                                    <Link href="#">
                                                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" className="blur-sm"/>
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        ) : (
                            <Table.Body>
                                {data?.logs.map((item, index) => (
                                    <Table.Row className="border-y-elevation-background-dark border-y" key={index}>
                                        <Table.RowHeaderCell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box className="flex items-center"><Image src={`${item.activity === "Transaction" ? "/images/icons/transaction.svg" : "/images/icons/bridged.svg"}`} width={16} height={16} alt="icon" className="pe-1" /><Text>{item.activity}</Text></Box>
                                        </Table.RowHeaderCell>
                                        <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">{item.points}</Badge>
                                        </Table.Cell>
                                        <Table.Cell className={`shadow-none text-sm text-text-secondary-dark ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box>
                                                <Text className="shadow-none text-sm text-text-secondary-dark pe-1">{convertDate(item.block_timestamp)}</Text>
                                                <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">{convertTime(item.block_timestamp)}</Badge>
                                            </Box>
                                        </Table.Cell>
                                        <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                            <Box className="flex justify-between items-center">
                                                <Box>
                                                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">{item.transaction_hash.slice(0, 4)} ... {item.transaction_hash.slice(-4)}</Text>
                                                    <Tooltip content="Copied!">
                                                        <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium cursor-pointer" onClick={() => handleCopy(item.transaction_hash)}>Copy</Badge>
                                                    </Tooltip>
                                                </Box>
                                                <Box>
                                                    <Link href="#">
                                                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        )}
                    </Table.Root>
                </Box>
                <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Badges</Text>
                <BadgeCarousel
                    badges={CommunityBadgeData}
                    height="300px"
                    width="100%"
                    margin="auto"
                    offset={width > 467 ? 5 : 1}
                    showArrows={false}
                />
                <Box className="rounded-xl overflow-hidden bg-elevation-elevation1-dark mb-4 block md:hidden">
                    <Box className="bg-elevation-elevation2-dark px-4 py-2 text-xs font-medium text-white">
                        Achievement Badges
                    </Box>
                    <Box className="p-4">
                        <Box className="block md:hidden">
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
                                modules={[Grid]}
                            >
                                {CommunityBadgeData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <CommunityBadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Box>
                    <Box>
                    </Box>
                </Box>
                <Box className="rounded-xl overflow-hidden bg-elevation-elevation1-dark mb-4">
                    <Box className="bg-elevation-elevation2-dark px-4 py-2 text-xs font-medium text-white">
                        Community Badges
                    </Box>
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
                            modules={[Grid]}
                        >
                            {CommunityBadgeData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <CommunityBadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                    <Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

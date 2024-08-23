'use client'
import { GET_LOGS } from "@/queries/logs";
import { useSubscription } from "@apollo/client";
import { Badge, Box, Table, Text, Tooltip } from "@radix-ui/themes"
import copy from "copy-to-clipboard";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Log {
    activity: string;
    points: number;
    block_timestamp: string;
    transaction_hash: string;
}

interface SubscriptionData {
    logs: Log[];
}

export const ActivityTable = () => {
    const { data, loading, error } = useSubscription<SubscriptionData>(GET_LOGS);
    const [isLoading, setIsLoading] = useState(true);
    const [copiedAddress, setCopiedAddress] = useState("");

    const convertDate = (timeData: string) => {
        const date = new Date(timeData);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getUTCFullYear();
        const formattedDate = `${day}.${month}.${year}`;
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
        setCopiedAddress(address);
        setTimeout(() => {
            setCopiedAddress('');
        }, 1000);
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [data]);

    return (
        <Table.Root className="rounded-xl overflow-hidden mb-6">
            <Table.Header className="bg-elevation-elevation3-dark border-b-0">
                <Table.Row>
                    <Table.ColumnHeaderCell className="shadow-none text-xs text-text-secondary-dark font-normal p-3 leading-loose w-1/4">Activities</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="shadow-none text-xs text-text-secondary-dark font-normal p-3 leading-loose w-1/4">Points</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="shadow-none text-xs text-text-secondary-dark font-normal p-3 leading-loose w-1/4">Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="shadow-none text-xs text-text-secondary-dark font-normal p-3 leading-loose w-1/4">TXID</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            {(isLoading || loading) ? (
                <Table.Body>
                    {Array.from({ length: 6 }, (_, index) => (
                        <Table.Row className=" border-y-elevation-background-dark border-y" key={index}>
                            <Table.RowHeaderCell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="me-1 blur-sm" /><Text className="blur-sm">Transaction</Text></Box>
                            </Table.RowHeaderCell>
                            <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Badge radius="full" className={`bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium blur-sm`}><Text className={inter.className}>+150</Text></Badge>
                            </Table.Cell>
                            <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Box>
                                    <Text className="shadow-none text-sm text-text-secondary-dark me-1 blur-sm">20.06.2024</Text>
                                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium blur-sm"><Text className={inter.className}>14:10:35</Text></Badge>
                                </Box>
                            </Table.Cell>
                            <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Box className="flex justify-between items-center">
                                    <Box>
                                        <Text className="shadow-none text-sm text-text-secondary-dark me-1 blur-sm">3s65...2sd5</Text>
                                        <Tooltip content="Copied!">
                                            <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium cursor-pointer blur-sm" ><Text className={inter.className}>Copy</Text></Badge>
                                        </Tooltip>
                                    </Box>
                                    <Box>
                                        <Link href="#">
                                            <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" className="blur-sm" />
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
                                <Box className="flex items-center"><Image src={`${item.activity === "Transaction" ? "/images/icons/transaction.svg" : "/images/icons/bridged.svg"}`} width={16} height={16} alt="icon" className="me-1" /><Text>{item.activity}</Text></Box>
                            </Table.RowHeaderCell>
                            <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium"><Text className={inter.className}>+{item.points}</Text></Badge>
                            </Table.Cell>
                            <Table.Cell className={`shadow-none text-sm text-text-secondary-dark ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Box>
                                    <Text className="shadow-none text-sm text-text-secondary-dark me-1">{convertDate(item.block_timestamp)}</Text>
                                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium"><Text className={inter.className}>{convertTime(item.block_timestamp)}</Text></Badge>
                                </Box>
                            </Table.Cell>
                            <Table.Cell className={`shadow-none ${index % 2 === 0 ? 'bg-elevation-elevation1-dark' : 'bg-elevation-elevation2-dark'}`}>
                                <Box className="flex justify-between items-center">
                                    <Box>
                                        <Text className="shadow-none text-sm text-text-secondary-dark me-1">{item.transaction_hash.slice(0, 4)} ... {item.transaction_hash.slice(-4)}</Text>
                                        <Tooltip content="Copied!" open={copiedAddress === item.transaction_hash ? true : false}>
                                            <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium cursor-pointer" onClick={() => handleCopy(item.transaction_hash)}><Text className={inter.className}>Copy</Text></Badge>
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
    )
}
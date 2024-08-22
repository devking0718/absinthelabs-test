'use client'
import { ActionCard, BadgeCard, CommunityBadgeCard } from "@/components/cards/cards";
import BadgeCarousel from "@/components/carousels/carousels";
import { ProgressBar } from "@/components/progress/progress";
import { CommunityBadgeData } from "@/utils/datas";
import { Badge, Box, Button, Grid, Table, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6.5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6.5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    {
      key: 0,
      content: (
        <BadgeCard index={CommunityBadgeData[0].key} isActive={CommunityBadgeData[0].isActive} logo={CommunityBadgeData[0].logo} title={CommunityBadgeData[0].title} actions={CommunityBadgeData[0].actions} value={CommunityBadgeData[0].value} details={CommunityBadgeData[0].detail} />
      )
    },
    {
      key: 1,
      content: (
        <BadgeCard index={CommunityBadgeData[1].key} isActive={CommunityBadgeData[1].isActive} logo={CommunityBadgeData[1].logo} title={CommunityBadgeData[1].title} actions={CommunityBadgeData[1].actions} value={CommunityBadgeData[1].value} details={CommunityBadgeData[1].detail} />
      )
    },
    {
      key: 2,
      content: (
        <BadgeCard index={CommunityBadgeData[2].key} isActive={CommunityBadgeData[2].isActive} logo={CommunityBadgeData[2].logo} title={CommunityBadgeData[2].title} actions={CommunityBadgeData[2].actions} value={CommunityBadgeData[2].value} details={CommunityBadgeData[2].detail} />
      )
    },
    {
      key: 3,
      content: (
        <BadgeCard index={CommunityBadgeData[3].key} isActive={CommunityBadgeData[3].isActive} logo={CommunityBadgeData[3].logo} title={CommunityBadgeData[3].title} actions={CommunityBadgeData[3].actions} value={CommunityBadgeData[3].value} details={CommunityBadgeData[3].detail} />
      )
    },
    {
      key: 4,
      content: (
        <BadgeCard index={CommunityBadgeData[4].key} isActive={CommunityBadgeData[4].isActive} logo={CommunityBadgeData[4].logo} title={CommunityBadgeData[4].title} actions={CommunityBadgeData[4].actions} value={CommunityBadgeData[4].value} details={CommunityBadgeData[4].detail} />
      )
    },
    {
      key: 5,
      content: (
        <BadgeCard index={CommunityBadgeData[5].key} isActive={CommunityBadgeData[5].isActive} logo={CommunityBadgeData[5].logo} title={CommunityBadgeData[5].title} actions={CommunityBadgeData[5].actions} value={CommunityBadgeData[5].value} details={CommunityBadgeData[5].detail} />
      )
    },
    {
      key: 6,
      content: (
        <BadgeCard index={CommunityBadgeData[6].key} isActive={CommunityBadgeData[6].isActive} logo={CommunityBadgeData[6].logo} title={CommunityBadgeData[6].title} actions={CommunityBadgeData[6].actions} value={CommunityBadgeData[6].value} details={CommunityBadgeData[6].detail} />
      )
    },
    {
      key: 7,
      content: (
        <BadgeCard index={CommunityBadgeData[7].key} isActive={CommunityBadgeData[7].isActive} logo={CommunityBadgeData[7].logo} title={CommunityBadgeData[7].title} actions={CommunityBadgeData[7].actions} value={CommunityBadgeData[7].value} details={CommunityBadgeData[7].detail} />
      )
    },
    {
      key: 8,
      content: (
        <BadgeCard index={CommunityBadgeData[8].key} isActive={CommunityBadgeData[8].isActive} logo={CommunityBadgeData[8].logo} title={CommunityBadgeData[8].title} actions={CommunityBadgeData[8].actions} value={CommunityBadgeData[8].value} details={CommunityBadgeData[8].detail} />
      )
    },
    {
      key: 9,
      content: (
        <BadgeCard index={CommunityBadgeData[9].key} isActive={CommunityBadgeData[9].isActive} logo={CommunityBadgeData[9].logo} title={CommunityBadgeData[9].title} actions={CommunityBadgeData[9].actions} value={CommunityBadgeData[9].value} details={CommunityBadgeData[9].detail} />
      )
    },
  ];

  return (
    <Box className="bg-elevation-background-dark py-10">
      <Box className="container mx-auto md:px-8 px-4">
        <Box className="hidden md:block">
          <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Last Activities</Text>
          <Table.Root className="rounded-xl overflow-hidden mb-6">
            <Table.Header className="bg-elevation-elevation3-dark border-b-0">
              <Table.Row>
                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose">Activities</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose ">Points</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose ">Date</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="shadow-none text-xs font-normal p-3 leading-loose ">TXID</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation1-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" border-y-elevation-background-dark border-y">
                <Table.RowHeaderCell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex items-center"><Image src="/images/icons/transaction.svg" width={16} height={16} alt="icon" className="pe-1" /><Text>Transaction</Text></Box>
                </Table.RowHeaderCell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Badge radius="full" className="bg-status-success-elevation1-dark text-status-success-main-dark px-2 py-1 text-xs font-medium">+150</Badge>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark text-sm text-text-secondary-dark">
                  <Box>
                    <Text className="shadow-none text-sm text-text-secondary-dark pe-1">20.06.2024</Text>
                    <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">14:10:35</Badge>
                  </Box>
                </Table.Cell>
                <Table.Cell className="shadow-none bg-elevation-elevation2-dark">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Text className="shadow-none text-sm text-text-secondary-dark pe-1">0xa12...1bac</Text>
                      <Badge radius="full" className="bg-elevation-elevation3-dark text-text-secondary-dark px-2 py-1 text-xs font-medium">Copy</Badge>
                    </Box>
                    <Box>
                      <Link href="#">
                        <Image src="/images/icons/link.svg" width={16} height={16} alt="icon" />
                      </Link>
                    </Box>
                  </Box>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
        <Text as="p" size="3" className="font-medium mb-4 text-text-secondary-dark">Badges</Text>
        <BadgeCarousel
          badges={data}
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
              <Grid columns={{ initial: '2', md: '3' }} gap="3" width="auto">
                {CommunityBadgeData.map((item, index) => (
                  <CommunityBadgeCard index={index} key={index} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                ))}
              </Grid>
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
            <Box className="block md:hidden">
              <Grid columns={{ initial: '2', md: '3' }} gap="3" width="auto">
                {CommunityBadgeData.map((item, index) => (
                  <CommunityBadgeCard index={index} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                ))}
              </Grid>
            </Box>
            <Box className="hidden md:block">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={false}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {CommunityBadgeData.map((item, index) => (
                  <CommunityBadgeCard index={item.key} isActive={item.isActive} logo={item.logo} title={item.title} actions={item.actions} value={item.value} />
                ))}
              </Carousel>
            </Box>

          </Box>
          <Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

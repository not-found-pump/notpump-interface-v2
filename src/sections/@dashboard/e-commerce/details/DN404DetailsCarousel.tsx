import {useEffect,useRef,useState} from 'react';
// @mui
import {Box,Card,Divider,Tab,Tabs} from '@mui/material';
import {useTheme} from '@mui/material/styles';
// utils
import useResponsive from 'src/hooks/useResponsive';
// @types
import {Stack} from '@mui/system';
import {IDN404MetaData} from '../../../../@types/DN404';
// components
import Carousel from '../../../../components/carousel';
import Lightbox from '../../../../components/lightbox';
import {DN404LineChart} from '../../general/app';
import DN404CandleChart from '../../general/app/DN404CandleChart';
import {DN404DerivativeChart} from '../../general/e-commerce';

// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

// type StyledThumbnailsContainerProps = {
//   length: number;
// };

// const StyledThumbnailsContainer = styled('div', {
//   shouldForwardProp: (prop) => prop !== 'length',
// })<StyledThumbnailsContainerProps>(({ length, theme }) => ({
//   margin: theme.spacing(0, 'auto'),
//   position: 'relative',

//   '& .slick-slide': {
//     opacity: 0.48,
//     '&.slick-current': {
//       opacity: 1,
//     },
//     '& > div': {
//       padding: theme.spacing(0, 0.75),
//     },
//   },

//   ...(length === 1 && {
//     maxWidth: THUMB_SIZE * 1 + 16,
//   }),
//   ...(length === 2 && {
//     maxWidth: THUMB_SIZE * 2 + 32,
//   }),
//   ...((length === 3 || length === 4) && {
//     maxWidth: THUMB_SIZE * 3 + 48,
//   }),
//   ...(length >= 5 && {
//     maxWidth: THUMB_SIZE * 6,
//   }),
//   ...(length > 2 && {
//     '&:before, &:after': {
//       ...bgGradient({
//         direction: 'to left',
//         startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
//         endColor: `${theme.palette.background.default} 100%`,
//       }),
//       top: 0,
//       zIndex: 9,
//       content: "''",
//       height: '100%',
//       position: 'absolute',
//       width: (THUMB_SIZE * 2) / 3,
//     },
//     '&:after': {
//       right: 0,
//       transform: 'scaleX(-1)',
//     },
//   }),
// }));

// ----------------------------------------------------------------------

type Props = {
  product: IDN404MetaData;
};

export default function DN404DetailsCarousel({ product }: Props) {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');

  const carousel1 = useRef<Carousel | null>(null);

  const carousel2 = useRef<Carousel | null>(null);

  const [nav1, setNav1] = useState<Carousel>();

  const [nav2, setNav2] = useState<Carousel>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const [currentTabTrade, setCurrentTabTrade] = useState<'line' | 'candle'>(isDesktop ? 'candle' : 'line');

  const imagesLightbox = product.images.map((img) => ({ src: img }));

  const handleOpenLightbox = (imageUrl: string) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  const carouselSettings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: product.images.length > 3 ? 3 : product.images.length,
  };

  useEffect(() => {
    if (carousel1.current) {
      setNav1(carousel1.current);
    }
    if (carousel2.current) {
      setNav2(carousel2.current);
    }
  }, []);

  useEffect(() => {
    carousel1.current?.slickGoTo(currentIndex);
  }, [currentIndex]);

  const candleChart = (
    <Card sx={{ p: 1, height: isDesktop ? 600 : 300 }}>
      <DN404CandleChart />
    </Card>
  );
  const lineChart = (
    <DN404LineChart
      height={isDesktop ? 600 : 300}
      title="Line bonding curve chart"
      chart={{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        series: [
          {
            year: '2019',
            data: [
              {
                name: '$ (Market Cap)',
                data: [4500, 7700, 9930, 8800, 7700, 5612, 1345, 3474, 10035],
              },
            ],
          },
        ],
      }}
    />
  );
  const derivativeInfor = (
    <Stack>
      <DN404DerivativeChart
        title="Yearly Sales"
        subheader="(+43%) than last year"
        height={isDesktop ? 600 : 300}
        chart={{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          series: [
            {
              year: '2019',
              data: [
                { name: 'Bullish', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                { name: 'Bearish', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
              ],
            },
          ],
        }}
      />
    </Stack>
  );
  const TABS = isDesktop
    ? [
        {
          value: 'line',
          label: 'Curve Line',
          component: lineChart,
        },
        {
          value: 'candle',
          label: `Curve Candle`,
          component: candleChart,
        },
        {
          value: 'derivative',
          label: `Community derivative`,
          component: derivativeInfor,
        },
      ]
    : [
        {
          value: 'line',
          label: 'Curve Line',
          component: lineChart,
        },
        {
          value: 'derivative',
          label: `Community derivative`,
          component: derivativeInfor,
        },
      ];

  // const renderLargeImg = (
  //   <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
  //     <Carousel {...carouselSettings1} asNavFor={nav2} ref={carousel1}>
  //       {product.images.map((img) => (
  //         <Image
  //           key={img}
  //           alt="product"
  //           src={img}
  //           ratio="1/1"
  //           onClick={() => handleOpenLightbox(img)}
  //           sx={{ cursor: 'zoom-in' }}
  //         />
  //       ))}
  //     </Carousel>

  //     <CarouselArrowIndex
  //       index={currentIndex}
  //       total={product.images.length}
  //       onNext={handleNext}
  //       onPrevious={handlePrev}
  //     />
  //   </Box>
  // );

  // const renderThumbnails = (
  //   <StyledThumbnailsContainer length={product.images.length} sx={{pt:3}}>
  //     <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
  //       {product.images.map((img, index) => (
  //         <Image
  //           key={img}
  //           disabledEffect
  //           alt="thumbnail"
  //           src={img}
  //           onClick={() => handleOpenLightbox(img)}
  //           sx={{
  //             width: THUMB_SIZE,
  //             height: THUMB_SIZE,
  //             borderRadius: 1.5,
  //             cursor: 'pointer',
  //             ...(currentIndex === index && {
  //               border: `solid 2px ${theme.palette.primary.main}`,
  //             }),
  //           }}
  //         />
  //       ))}
  //     </Carousel>
  //   </StyledThumbnailsContainer>
  // );

  return (
    <>
      <Box
        sx={{
          '& .slick-slide': {
            float: theme.direction === 'rtl' ? 'right' : 'left',
          },
        }}
      >
        <Card>
          <Tabs
            value={currentTabTrade}
            onChange={(event, value) => {
              setCurrentTabTrade(value);
            }}
            sx={{ px: 3, bgcolor: 'background.neutral' }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </Tabs>

          <Divider />

          {TABS.map(
            (tab) =>
              tab.value === currentTabTrade && (
                <Box
                  key={tab.value}
                  sx={
                    {
                      // ...(currentTabTrade === 'line' &),
                    }
                  }
                >
                  {tab?.component}
                </Box>
              )
          )}
        </Card>
        {/* {renderLargeImg} */}

        {/* {renderThumbnails} */}
      </Box>

      <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index) => setCurrentIndex(index)}
      />
    </>
  );
}

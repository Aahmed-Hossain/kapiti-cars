/* eslint-disable no-plusplus */
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import { Tab, Box, Tabs, OutlinedInput, InputAdornment, Button, Card, CardActionArea, CardMedia, CardContent, List } from '@mui/material';

import useAllProducts from 'src/hooks/useProducts';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AppView() {
  // const [products, setProducts] = useState([]);
  // const [categoryCounts, setCategoryCounts] = useState({});
  // console.log(categoryCounts)

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // const [selectedTab, setSelectedTab] = useState(0);

  // const handleChange = (index) => {
  //   setSelectedTab(index);
  // };

  const [allProducts] = useAllProducts();
  console.log(allProducts);

  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       calculateCategoryCounts(data);
  //     });
  // }, []);

  // const calculateCategoryCounts = (data) => {
  //   const counts = data.reduce((acc, product) => {
  //     const { product_type_display } = product;
  //     if (!acc[product_type_display]) {
  //       acc[product_type_display] = 0;
  //     }
  //     acc[product_type_display]++;
  //     return acc;
  //   }, {});
  //   setCategoryCounts(counts);
  // };
  const categories = [
    { category: 'Air Filter', items: 11 },
    { category: 'Battery', items: 20 },
    { category: 'Brake Accessories', items: 3 },
    { category: 'Cabin Air Filter', items: 1 },
    { category: 'Cabin Filter', items: 4 },
  

  ];

  const filteredProducts = allProducts?.filter(
    (product) => product?.product_type_display === categories[selectedTab]?.category
  );
  return (
    <div className="xl:ml-0 md:ml-2 ml-2 flex flex-col xl:flex-row gap-2">
      {/* left  */}
      <div className="w-full">
        <Typography variant="h6" sx={{ mb: 2, mt: 1 }}>
          Job Details And Record Time
        </Typography>
        <OutlinedInput
          sx={{
            width: '100%',
            height: 40,
            '& .MuiOutlinedInput-input': {
              padding: '10px',
            },
          }}
          placeholder="Search or Scan product"
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 15, height: 15 }}
              />
            </InputAdornment>
          }
        />

        <div>





        <Tabs
  sx={{
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'row' },
      justifyContent: { xs: 'flex-start', sm: 'flex-start' },
      alignItems: { xs: 'stretch', sm: 'center' },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }}
  value={selectedTab}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons="auto"
  aria-label="product categories"
  indicatorColor="none"
>
  {categories.map((category, index) => (
    <Tab
      sx={{
        textTransform: 'none',
        minWidth: 100,
        border: 1,
        width: { xs: '100%', sm: 'auto' },
        backgroundColor: selectedTab === index ? '#E3F2FD' : '#fff',
        borderRadius: 0.5,
        mt:2,
        mr: 1,
        boxShadow: 1,
        '&:hover': {
          backgroundColor: '#E3F2FD',
        },
        '&.Mui-selected': {
          backgroundColor: '#E3F2FD',
        },
      }}
      key={index}
      label={`${category.category}: ${category.items}`}
    />
  ))}
</Tabs>












{/* <Tabs
  sx={{
    mt: 1.5,
    display: 'grid',
  
    gridTemplateColumns: { xs: 'repeat(auto-fill, minmax(100%, 1fr))', sm: 'repeat(auto-fill, minmax(150px, 1fr))', md: 'repeat(auto-fill, minmax(100%, 2fr))', lg:'repeat(auto-fill, minmax(100%, 3fr))', xl: 'repeat(auto-fill, minmax(100%, 2fr))'},
    gap:2,
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }}
  value={selectedTab}
  onChange={handleChange}
  aria-label="product categories"
  indicatorColor="none"
>
  {categories.map((category, index) => (
    <Tab
      sx={{
        textTransform: 'none',
        minWidth: 100,
        backgroundColor: selectedTab === index ? '#E3F2FD' : '#fff',
        borderRadius: 0.5,
        boxShadow: 1,
        '&:hover': {
          backgroundColor: '#E3F2FD',
        },
        '&.Mui-selected': {
          backgroundColor: '#E3F2FD',
        },
      }}
      key={index}
      label={`${category.category}: ${category.items}`}
    />
  ))}
</Tabs> */}














          {/* <Tabs
            sx={{
              '& .MuiTabs-flexContainer': {
                display: 'flex',
                flexWrap: 'wrap',
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="product categories"
            indicatorColor="none"
          >
            {categories.map((category, index) => (
              <Tab
                sx={{
                  textTransform: 'none',
                  minWidth: 100,
                  backgroundColor: selectedTab === index ? '#E3F2FD' : '#fff',
                  borderRadius: 0.8,
                  mr: 1,
                  mt:1,
                  border: 1,
                  boxShadow: 1,
                  '&:hover': {
                    backgroundColor: '#E3F2FD',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#E3F2FD',
                  },
                }}
                key={index}
                label={`${category.category}: ${category.items}`}
              />
            ))}
          </Tabs> */}

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category, index) => (
        // eslint-disable-next-line react/button-has-type
        <button
          key={index}
          onClick={() => handleChange(index)}
          className={`text-base px-4 py-2 mr-1 mt-1 rounded border-1 shadow ${
            selectedTab === index ? 'bg-blue-50' : 'bg-white'
          } hover:bg-blue-100`}
        >
          {`${category.category}: ${category.items}`}
        </button>
      ))}
    </div> */}


<div className='mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-10 gap-6 md:gap-4 lg:gap-4 xl:gap-6'>


{filteredProducts.map((product, idx) => (
  <Box sx={{ position: 'relative', display: 'inline-block' }} key={idx}>
    <Card sx={{ width: 'auto', maxWidth: 400, boxShadow: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={50}
          width={50}
          image="/public/assets/box2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography align="center" variant="body2">{product.brand_display}</Typography>
          <Typography sx={{ padding: 0 }} variant="subtitle2">{product.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Box 
      sx={{
        position: 'absolute',
        top: '7%',
        right: 5,
        transform: 'translateY(-50%)',
        backgroundColor: '#E3F2FD',
        padding: '4px  6px',
        borderRadius: '6px',
        boxShadow: 12
      }}
    >
      <Typography variant="caption" display="block" color='blue'>
        {product.product_type_display}
      </Typography>
    </Box>
  </Box>
))}


{/* {filteredProducts.map((product,idx) => (
  <Card sx={{width:  'auto'  , maxWidth: 400, backgroundColor: '#FAFAFA',boxShadow:4 }} key={idx}>
    <CardActionArea>
      <CardMedia
      className=''
        component="img"
        height={50}
        width={50}
        image="/public/assets/box2.png"
        alt="green iguana"
      />
      <CardContent>
      <Typography align='center' variant="body2">{product.brand_display}</Typography>
        <Typography sx={{padding:0}} variant="subtitle2">{product.name}</Typography>
       
      </CardContent>
    </CardActionArea>
  </Card>
))} */}
</div>


          {/* <Box sx={{ p: 0 }}>
            <ul className="grid grid-cols-4 gap-4 mt-4">
              {filteredProducts.map((product) => (
                <li className="border bg-[#E3F2FD] p-2 rounded-md" key={product._id}>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1">${product.retail_price}</Typography>
                </li>
              ))}
            </ul>
          </Box> */}
        </div>
      </div>



      {/* right invoice container */}
      {/* <div className="border-2 h-screen w-1/3">
        <Typography variant="h6" sx={{ mb: 2, mt: 1 }}>
          Invoice {allProducts.length}
        </Typography>
      </div> */}
    </div>
  );
}

import { useState } from 'react';

import Typography from '@mui/material/Typography';
import {
  Tab,
  Box,
  Tabs,
  Card,
  CardContent,
  OutlinedInput,
  InputAdornment,
  CardActionArea,
} from '@mui/material';

import useAllProducts from 'src/hooks/useProducts';

import { categories } from 'src/_mock/categories';

import Iconify from 'src/components/iconify';

import Invoice from '../invoice/Invoice';
import productImage from '../../../../public/assets/images/box2.png'

export default function AppView() {

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [allProducts] = useAllProducts();

 

  const filteredProducts = allProducts?.filter(
    (product) => product?.product_type_display === categories[selectedTab]?.category
  );
  return (
    <div className="xl:ml-0 md:ml-2 ml-2 flex flex-col xl:flex-row gap-2 ">
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
                  mt: 2,
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


          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
            {filteredProducts.map((product, idx) => (
              <Box sx={{ position: 'relative', display: 'inline-block' }} key={idx}>
                <Card sx={{ height: 160 , maxWidth: 350, boxShadow: 6,borderRadius:1 }}>
                  <CardActionArea>

                  <div className='flex justify-center items-center'>
                  <img className='w-20' src={productImage} alt="" />
                  </div>
                    <CardContent>
                      <Typography align="center" variant="body2">
                        {product.brand_display}
                      </Typography>
                      <Typography sx={{ padding: 0 }} variant="subtitle2">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '7%',
                    right: 1,
                    transform: 'translateY(-50%)',
                    backgroundColor: '#E3F2FD',
                    padding: '4px  6px',
                    borderRadius: '6px',
                    boxShadow: 12,
                  }}
                >
                  <Typography variant="caption" display="block" color="blue">
                   <span className='font-semibold text-xs'> {product.product_type_display}</span>
                  </Typography>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Invoice />
      </div>
    </div>
  );
}

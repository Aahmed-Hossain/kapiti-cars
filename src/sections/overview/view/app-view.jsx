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

import { allProducts } from 'src/_mock/products';
import { categories } from 'src/_mock/categories';

import Iconify from 'src/components/iconify';

import Invoice from '../invoice/Invoice';
import productImage from '../../../../public/assets/images/box2.png';
import {tabStyles,cardStyle,tabContainer,productStyle, cardContainer, cardContentStyle, searchButtonStyle, dashboardContainer,  } from '../styles/dashboardStyles';

export default function AppView() {

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const filteredProducts = allProducts?.filter(
    (product) => product?.product_type_display === categories[selectedTab]?.category
  );
  return (
    <div className={dashboardContainer}>
      {/* left  */}
      <div className="w-full">
        <Typography variant="h6" sx={{ mb: 2, mt: 1 }}>
          Job Details And Record Time
        </Typography>
        <OutlinedInput
          sx={searchButtonStyle}
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
            sx={tabContainer}
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="product categories"
            indicatorColor="none"
          >
            {categories.map((category, index) => (
              <Tab
                sx={{backgroundColor: selectedTab === index ? '#E3F2FD' : '#fff',...tabStyles}}
                key={index}
                label={`${category.category}: ${category.items}`}
              />
            ))}
          </Tabs>


          <div className={productStyle}>
            {filteredProducts.map((product, idx) => (
              <Box sx={cardContainer} key={idx}>
                <Card sx={cardStyle}>
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
                  sx={cardContentStyle}
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

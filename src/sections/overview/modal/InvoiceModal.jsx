/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button, Divider, ButtonGroup } from '@mui/material';

import { invoiceData } from 'src/_mock/invoice';

import AddLabour from './AddLabour';
import AddInventory from './AddInventory';

const InvoiceModal = ({ handleClose }) => {
  const [activeComponent, setActiveComponent] = useState(1);
  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-40 mt-[3.1rem]">
      <div className="bg-white rounded shadow-lg px-2 md:px-6 py-2 md:py-4 w-full md:w-[70%] lg:w-[60%] xl:w-[45%] 2xl:w-[50%] max-h-full overflow-y-auto">
        <h3 className="font-bold text-blue-500 text-lg ">
          {activeComponent === 1 && (
            <div>
              Invoice
              <Divider sx={{ mt: 0.2 }} />
            </div>
          )}
          {activeComponent === 2 && <div>Add Labour</div>}
          {activeComponent === 3 && <div>Add Non-inventory Part</div>}
        </h3>

        {/* invoice section */}
        {activeComponent === 1 && (
          <div className="">
            {/* add buttons */}
            <div className="flex gap-3 justify-end mt-2">
              <div>
                <Button
                  sx={{ borderRadius: 25, backgroundColor: '#42A5F5' }}
                  onClick={() => setActiveComponent(activeComponent + 2)}
                  variant="contained"
                  size="small"
                >
                  + Non-Inventory Part
                </Button>
              </div>
              <div>
                <Button
                  sx={{ borderRadius: 25, backgroundColor: '#42A5F5' }}
                  onClick={() => setActiveComponent(activeComponent + 1)}
                  variant="contained"
                  size="small"
                >
                  + Labour
                </Button>
              </div>
            </div>
            {/* invoice  */}
            <div>
              <div className="my-6 flex flex-col  gap-3 ">
                {invoiceData?.map((invoiceDatum, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b">
                   
                    <h6 className="text-sm font-light md:font-bold text-gray-500">{invoiceDatum.name}</h6>

                    <div className="flex gap-2 md:gap-5 items-center justify-center ">
                      <p className=" text-gray-500 font-extralight">{invoiceDatum.retail_price}$</p>
                      <ButtonGroup
                        sx={{ color: '#42A5F5', marginBottom:0.7, height:25}}
                        variant="outlined"
                        aria-label="Basic button group"
                      >
                        <Button>
                          <FiMinus />
                        </Button>
                        <Button>{invoiceDatum.quantity}</Button>
                        <Button>
                          <FaPlus />
                        </Button>
                      </ButtonGroup>
                        <RiDeleteBin6Line className="text-red-500 font-light md:font-normal text-base md:text-xl cursor-pointer" />

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeComponent === 2 && <AddLabour />}
        {activeComponent === 3 && <AddInventory />}

        {/* close next button */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            type="button"
            className="bg-red-100 rounded-full px-3 py-1 text-red-500 hover:bg-red-200"
            onClick={handleClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="bg-blue-100 rounded-full px-6 py-1 text-blue-500 hover:bg-blue-200"
            onClick={handleClose}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;

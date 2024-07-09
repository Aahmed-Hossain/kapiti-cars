import { useState } from 'react';

import { Button, ButtonGroup, Divider, IconButton } from '@mui/material';

import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';

import AddLabour from './AddLabour';
import AddInventory from './AddInventory';

const invoiceData = [
  { name: 'Koba Battery MF55B24R', retail_price: 63.9, quantity: 2 },
  { name: 'Wurth Brake Clean', retail_price: 19.5, quantity: 3 },
  { name: 'Ryco Cabin Air Filter RCA119M', retail_price: 45.9, quantity: 6 },
  { name: 'Ryco Air Filter A1241',retail_price: 88.1, quantity: 11 },
];
// eslint-disable-next-line arrow-body-style, react/prop-types
const InvoiceModal = ({ handleClose }) => {
  const [activeComponent, setActiveComponent] = useState(1);
  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-30">
      <div className="bg-white rounded shadow-lg px-6 py-4 w-[99%] md:w-[45%] lg:w-[50%] max-h-full overflow-y-auto">
        <h3 className="font-bold text-blue-500 text-lg ">
          {activeComponent === 1 && (
            <div>
              {' '}
              Invoice
              <Divider sx={{ mt: 0.2 }} />{' '}
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
              <div className="my-12 flex flex-col gap-3 ">
                {invoiceData?.map((invoiceDatum, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b">
                    <h6 className=" font-bold text-gray-500">{invoiceDatum.name}</h6>

                    <div className="flex gap-5  items-center justify-center">
                      <p className=" text-gray-500">{invoiceDatum.retail_price} $</p>
                      <ButtonGroup
                        sx={{ color: '#42A5F5', height: 26 }}
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

                      <IconButton aria-label="delete">
                        <AiOutlineDelete className="text-red-500 text-2xl cursor-pointer" />
                      </IconButton>
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

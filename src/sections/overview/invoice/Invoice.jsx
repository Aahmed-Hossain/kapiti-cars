/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';

import { Fab } from '@mui/material';

import InvoiceModal from '../modal/InvoiceModal';
import { InvoiceStyle } from '../styles/dashboardStyles';

const Invoice = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
   { !open &&  <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        sx={InvoiceStyle}
      >
        <FaFileInvoiceDollar className="font-bold text-3xl" />
      </Fab>}

      {open && <InvoiceModal handleClose={handleClose} />}
    </div>
  );
};
export default Invoice;

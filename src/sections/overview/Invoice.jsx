import { Box, Button, Fab, Modal, Typography } from '@mui/material'
import { useState } from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa'

export default function Invoice() {
    const [open, setOpen] = useState(false);

    // Handle open modal
    const handleOpen = () => setOpen(true);
    
    // Handle close modal
    const handleClose = () => setOpen(false);
  <div>

<Fab
    color="primary" 
    aria-label="add" 
    onClick={handleOpen} 
    sx={{ 
      position: 'fixed', 
      bottom: 16, 
      right: 16 
    }}
  >
    Invoice
  <FaFileInvoiceDollar />
  </Fab>
  
  {/* Modal */}
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="modal-title" variant="h6" component="h2">
        Modal Title
      </Typography>
      <Typography id="modal-description" sx={{ mt: 2 }}>
        This is the modal content.
      </Typography>
      <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
        Close
      </Button>
    </Box>
  </Modal>
  </div>
  }
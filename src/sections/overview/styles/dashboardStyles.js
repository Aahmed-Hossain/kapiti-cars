export const tabContainer = {
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'row' },
      justifyContent: { xs: 'flex-start', sm: 'flex-start' },
      alignItems: { xs: 'stretch', sm: 'center' },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  }

  export const tabStyles = {
    textTransform: 'none',
    minWidth: 100,
    border: 1,
    width: { xs: '100%', sm: 'auto' },
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
  }

  export const searchButtonStyle = {
    width: '100%',
    height: 40,
    '& .MuiOutlinedInput-input': {
      padding: '10px',
    },
  }
  export const cardContentStyle = {
    position: 'absolute',
    top: '7%',
    right: 1,
    transform: 'translateY(-50%)',
    backgroundColor: '#E3F2FD',
    padding: '4px  6px',
    borderRadius: '6px',
    boxShadow: 12,
  };

  export const InvoiceStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    backgroundColor: '#42A5F5'
  };

  export const btn = { borderRadius: 25, backgroundColor: '#42A5F5' }
  
  export const cardContainer = { position: 'relative', display: 'inline-block' };
  export const cardStyle = { height: 160 , maxWidth: 350, boxShadow: 6,borderRadius:1 }

  export const dashboardContainer = 'xl:ml-0 ml-2 flex flex-col xl:flex-row gap-2';

  export const productStyle = "mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3";

  export const modalContainer = "fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-40 mt-[3.1rem]";

  export const modalContent = "bg-white rounded shadow-lg px-2 md:px-6 py-2 md:py-4 w-full md:w-[70%] lg:w-[60%] xl:w-[45%] 2xl:w-[50%] max-h-full overflow-y-auto";

  export const  invoiceContent = "flex justify-between items-center border-b";

  export const invoiceHeader = "text-sm font-light md:font-bold text-gray-500";

  export const deleteIconStyle = "text-red-500 font-light md:font-normal text-base md:text-xl cursor-pointer";

  export const cancelBtn = "bg-red-100 rounded-full px-3 py-1 text-red-500 hover:bg-red-200";

  export const addBtn = "bg-blue-100 rounded-full px-6 py-1 text-blue-500 hover:bg-blue-200";




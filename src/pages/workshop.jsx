import { Helmet } from 'react-helmet-async';

import { WorkshopView } from 'src/sections/workshop/view';


export default function WorkshopPage() {
  return (
    <>
      <Helmet>
        <title> Workshop | Kapiti Car </title>
      </Helmet>

      <WorkshopView />
    </>
  );
}

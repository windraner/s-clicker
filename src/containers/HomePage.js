import React from 'react'
import PortalModal from 'modals/PortalModal'
import CompaniesList from 'components/companies-list/CompaniesList'
// import Pagination from 'components/pagination/Pagination';

export default function HomePage () {
  return (
    <div>
      <CompaniesList />

      {/* <Pagination /> */}

      <PortalModal />
    </div>
  )
}

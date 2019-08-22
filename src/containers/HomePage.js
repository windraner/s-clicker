import React from 'react'
import PortalModal from 'modals/PortalModal'
import CompaniesList from 'components/companies-list/CompaniesList'

export default function HomePage () {
  return (
    <div>
      <CompaniesList />

      <PortalModal />
    </div>
  )
}

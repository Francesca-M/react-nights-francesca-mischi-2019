import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'

const AccountPage = ({ customer }) => (
  <Layout>
    <MainTitle textAlign="center">
      Welcome {customer.attributes.metadata.firstName}
    </MainTitle>
  </Layout>
)
const mapStateToProps = state => ({
  customer: state.customer,
})

export const Account = connect(mapStateToProps)(AccountPage)

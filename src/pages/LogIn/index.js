import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import { Form, GlobalFormError } from '../../components/Form'
import Input from '../../components/Input'
import BasicButton from '../../components/BasicButton'
import * as customerActions from '../../store/customer/actions'
import { getCustomerToken } from '../../api/customers/get-customer-token'
import { getCustomer } from '../../api/customers/get-customer'
import { schema } from './schema'

class LogInPage extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password,
      })
      const customer = await getCustomer(ownerId)
      this.props.login(customer)
      this.props.history.push('/account')
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state

    return (
      <Layout>
        <MainTitle textAlign="center">Log In</MainTitle>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input name="email" type="email" label="Email address" />
              <Input name="password" type="password" label="Password" />
              <BasicButton disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </BasicButton>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const LogIn = connect(
  null,
  mapDispatchToProps
)(LogInPage)
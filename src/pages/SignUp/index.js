import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import { Form, GlobalFormError } from '../../components/Form'
import Input from '../../components/Input'
import BasicButton from '../../components/BasicButton'
import { schema } from './schema'
import * as customerActions from '../../store/customer/actions'
import { createCustomer } from '../../api/customers/create-customer'
import { getCustomer } from '../../api/customers/get-customer'

class SignUpPage extends Component {
  state = {
    globalError: '',
  }
  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await createCustomer(values)
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
        <MainTitle textAlign="center">Sign Up</MainTitle>
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
              <Input name="firstName" label="First name" />
              <Input name="email" type="email" label="Email address" />
              <Input name="password" type="password" label="Password" />
              <Input
                name="passwordConfirm"
                type="password"
                label="Confirm password"
              />
              <BasicButton disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)

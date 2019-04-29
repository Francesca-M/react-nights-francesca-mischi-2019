import React, { useState } from 'react'
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

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')
  const handleSubmit = async (
    { email, password, firstName },
    { setSubmitting }
  ) => {
    try {
      setSubmitting(true)
      await createCustomer({ email, password, firstName })
      await login({
        username: email,
        password,
        push: history.push,
      })
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <Layout>
      <MainTitle textAlign="center">Sign Up</MainTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
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

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)

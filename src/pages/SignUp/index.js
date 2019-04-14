import React, { Component } from 'react'
import { Formik } from 'formik'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import { Form } from '../../components/Form'
import Input from '../../components/Input'
import BasicButton from '../../components/BasicButton'
import { schema } from './schema'

class SignUp extends Component {
  state = {
    hasSignedUp: false,
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
      console.log('success')
      this.setState({
        hasSignedUp: true,
      })
    } catch (err) {
      console.log('there was an error')
    }
    setSubmitting(false)
  }

  renderSuccess = () => (
    <Layout>
      <MainTitle textAlign="center">You signed up</MainTitle>
    </Layout>
  )

  render() {
    if (this.state.hasSignedUp) return this.renderSuccess()

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
              <Input name="firstName" label="First name" />
              <Input name="email" type="email" label="Email address" />
              <Input name="password" type="password" label="Password" />
              <Input
                name="passwordConfirm"
                type="password"
                label="Confirm password"
              />
              <BasicButton disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </BasicButton>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { SignUp }

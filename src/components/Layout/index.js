import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid grey;
`

const StyledLink = styled(Link)`
  margin-right: 1rem;
`

class Layout extends Component {
  render() {
    return (
      <div>
        <Header>
          <StyledLink to="/">All Products</StyledLink>
          <StyledLink to="/cart">My Cart</StyledLink>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </div>
    )
  }
}

export default Layout

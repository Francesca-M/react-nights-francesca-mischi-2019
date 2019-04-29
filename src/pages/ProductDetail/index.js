import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import MainTitle from '../../components/MainTitle'

import getProductDetail from '../../api/products/get-product-detail'
import useApi from '../../api/use-api'

import * as cartActions from '../../store/cartItems/actions'

import {
  Wrapper,
  ImgWrap,
  Img,
  // Price,
  NameWrap,
  Name,
  AddButton,
  Code,
  Description,
  TextWrap,
  DetailsWrapper,
} from './styled'

const ProductView = ({ match, addProduct }) => {
  const { productId } = match.params

  const { data: productDetails, isLoading } = useApi(
    () => getProductDetail(productId),
    [productId]
  )

  return (
    <Layout>
      <MainTitle textAlign="center">Product details</MainTitle>
      <DetailsWrapper>
        {isLoading && <Loader />}
        {productDetails && (
          <Wrapper>
            <ImgWrap>
              <Img
                src={productDetails.image_url}
                alt={productDetails.description}
              />
            </ImgWrap>
            <TextWrap>
              <NameWrap>
                <Code>{productDetails.code}</Code>
                <Name>{productDetails.name}</Name>
              </NameWrap>
              {/* <Price>{productDetails.price.formatted_amount}</Price> */}
              <Description>{productDetails.description}</Description>
              <AddButton onClick={evt => addProduct(productDetails.id, evt)}>
                Add to cart
              </AddButton>
            </TextWrap>
          </Wrapper>
        )}
      </DetailsWrapper>
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductView)

export { ProductDetail }

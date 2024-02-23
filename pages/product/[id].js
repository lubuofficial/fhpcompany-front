import Center from "@/components/Center";
import FlyingButton from "@/components/FlyingButton";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import ProductReviews from "@/components/ProductReviews";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import TruckIcon from "@/components/icons/TruckIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const PriceRow = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1rem;
  color: #6444cd;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  margin-top: 15px; /* Adjust this value as needed */
`;

const SideIcons = styled.div`
  // display: flex;
  // align-items: center;
  //   display: inline-block;
  //   min-width: 20px;
  //   color:black;
  svg {
    width: 22px;
    height: 22px;
  }
`;


const DeliveryIcon = styled(TruckIcon)`
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  margin-right: 5px; 
  vertical-align: middle;
  margin-top: -5px;
  color:  #7a3ce6;
`;

const StyledParagraph = styled.p`
  display: flex; /* Use flexbox layout */
  align-items: center; /* Align items vertically in the flex container */
  display: inline-flex;
  align-items: center; 
  margin-top: 10px;
  `;

export default function ProductPage({ product }) {
  // const {addProduct} = useContext(CartContext);
  // const addToCartHandler = () => {
  //   // Check if product is available
  //   if (product.stockAvailability) {
  //     // Add to cart logic here
  //     alert("Product added to cart!");
  //   } else {
  //     alert("This product is currently not available.");
  //   }
  // };

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Box>
              <Title>{product.title}</Title>
              <p>{product.description}</p>
              <PriceRow>
                <div>
                  <Price>{product.price} Baht</Price>
                </div>
              </PriceRow>
              <ButtonContainer>
                {product.stockAvailability ? (
                  <p>This Product is Available</p>
                ) : (
                  <p>This Product is not Available</p>
                )}
                <hr />
                  <StyledParagraph>
                    <DeliveryIcon/>
                  Estimated handling time: 3-7 business day.
                  </StyledParagraph>
                {product.stockAvailability ? (
                  <FlyingButton
                    main
                    _id={product._id}
                    src={product.images?.[0]}
                  >
                    <CartIcon /> Add to cart
                  </FlyingButton>
                ) : (
                  <p>This product is currently not available.</p>
                )}
              </ButtonContainer>
            </Box>
          </div>
        </ColWrapper>
        <ProductReviews product={product} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

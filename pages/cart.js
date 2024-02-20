import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useSession } from "next-auth/react";
import { RevealWrapper } from "next-reveal";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  table thead tr th:nth-child(3),
  table tbody tr td:nth-child(3),
  table tbody tr.subtotal td:nth-child(2) {
    text-align: right;
  }
  table tr.subtotal td {
    padding: 15px 0;
  }
  table tbody tr.subtotal td:nth-child(2) {
    font-size: 1.4rem;
  }
  tr.total td{
    font-weight: bold;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const ProvinceHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [payLater, setPayLater] = useState(false);
  const [shippingFee, setShippingFee] = useState(null);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
    axios.get("/api/settings?name=shippingFee").then((res) => {
      setShippingFee(res.data.value);
    });
  }, []);
  useEffect(() => {
    if (!session) {
      return;
    }
    axios.get("/api/address").then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setProvince(response.data.province);
      setPostalCode(response.data.postalCode);
      setPhone(response.data.phone);
    });
  }, [session]);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  // async function goToPayment() {
  //   const response = await axios.post("/api/checkout", {
  //     name,
  //     email,
  //     address,
  //     province,
  //     postalCode,
  //     cartProducts,
  //   });
  //   if (response.data.url) {
  //     window.location = response.data.url;
  //   }
  // }

  async function goToPayLater() {
    const response = await axios.post("/api/paylater", {
      name,
      email,
      address,
      province,
      postalCode,
      phone,
      cartProducts,
    });

    if (response.data.payLater) {
      // Handle success, e.g., display a success message to the user
      
      setPayLater(true);
      clearCart();
    } else {
      // Handle error
      console.error("Error processing pay later order");
    }
  }

  let productsTotal = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    productsTotal += price;
  }
  const cartSubtotal = productsTotal + (shippingFee ? parseInt(shippingFee) : 0);

  if (payLater) {
    return (
      <>
        <Header />
        <Center>
          <ColumnWrapper>
            <Box>
              <h1>Thank you for your order.</h1>
              <p>Please follow the instructions provided for payment.</p>
              <p>1. Transfer money to fhp company bank account. </p>
              <p>2. Send your slip to this email: fhp123@mail.com</p>
              <p>
                Bank name: Kasikorn Bank <br />
                Account number: 0123456789 <br />
                Account name: Fhp company
              </p>
              <p>3. Our Staffs will contact you for your order.</p>
              <p>If you have any questions or problems, don't hesitate to contact us.</p>
            </Box>
          </ColumnWrapper>
        </Center>
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnWrapper>
            <Box>
              <h1>Thank you for your order.</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <RevealWrapper delay={0}>
            <Box>
              <h2>Cart</h2>
              {!cartProducts?.length && <div>Your cart is empty</div>}
              {products?.length > 0 && (
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt="" />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </Button>
                        </td>
                        <td>
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}{" "}
                          Baht
                        </td>
                      </tr>
                    ))}
                    <tr className="subtotal">
                      <td colSpan={2}>Products Total</td>
                      <td>{productsTotal} Baht</td>
                    </tr>
                    {/* <tr className="subtotal">
                      <td colSpan={2}>Shipping</td>
                      <td>{shippingFee} Baht</td>
                    </tr>
                    <tr className="subtotal total">
                      <td colSpan={2}>Total</td>
                      <td>{cartSubtotal} Baht</td>
                    </tr> */}
                  </tbody>
                </Table>
              )}
            </Box>
            <p>Note: Please note your total amount and your shipping fees will based on the distance. Please follow the instruction after click pay on delivery.</p>
          </RevealWrapper>
          {!!cartProducts?.length && (
            <RevealWrapper delay={100}>
              <Box>
                <h2>Order information</h2>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Address"
                  value={address}
                  name="address"
                  onChange={(ev) => setAddress(ev.target.value)}
                />
                <ProvinceHolder>
                  <Input
                    type="text"
                    placeholder="Province"
                    value={province}
                    name="province"
                    onChange={(ev) => setProvince(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                  />
                </ProvinceHolder>
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  name="phone"
                  onChange={(ev) => setPhone(ev.target.value)}
                />
                
                <Button black block onClick={goToPayLater}>
                  Pay on Delivery
                </Button>
              </Box>
            </RevealWrapper>
          )}
        </ColumnWrapper>
      </Center>
      <Footer />
    </>
  );
}

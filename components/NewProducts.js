import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
    font-size: 2rem;
    margin:30px 0 20px;
    font-weight: normal;
`;

// const ProductsGridContainer = styled.div`
//     margin-bottom: 30px; 
// `;

export default function NewProducts({products,wishedProducts}) {
    return (
        <Center>
            <Title>Our products</Title>
            
            <ProductsGrid products={products} wishedProducts={wishedProducts} />
            
        </Center>
        
    );
}
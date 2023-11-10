// pages/admin-panel.js
import ProductForm from '@/components/ProductForm';
import { Container, Heading } from '@chakra-ui/react';



const AdminPanel = () => {
  return (
    <Container maxW="container.md" mt={8}>
      <Heading mb={2}>Panel de Administrador</Heading>
      <ProductForm/>    
    </Container>
  );
};

export default AdminPanel;

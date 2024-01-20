import React from 'react';
import { Container } from './Section.styled';

export const Section = ({title, children}) => {
    
return (
   <section>
    <Container>
    <h1>{title}</h1>
    {children}
    </Container>
    
   </section>
)
    
    
}
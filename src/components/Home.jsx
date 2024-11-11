import React from 'react'
import styled from 'styled-components'
import Section from './Section' 

function Home() {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="/1.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/Homepage-Model-3-Desktop-US.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="/model-x.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
       <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="/model-s.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="/solar.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="/roof.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
      <Section
        title="Powerwall"
        description=""
        backgroundImg="/powerwall.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />
       <Section
        title="Accessories"
        description=""
        backgroundImg="/accessories.avif"
        leftbtn="Buy Now"
        rightbtn=""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`

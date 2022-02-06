import styled from 'styled-components'

import Navbar from './Navbar'

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderLayout = styled.div`
  height: 80px;
  width: 100%;
  background: grey;
  display: flex;
`

const BodyLayout = styled.div`
  flex-grow: 1;
`

const Layout = () => {
  return <FlexLayout>
    <HeaderLayout>
      <header className="App-header">
        <Navbar />
      </header>
    </HeaderLayout>
    <BodyLayout>
      Body
    </BodyLayout>
  </FlexLayout>
}

export default Layout

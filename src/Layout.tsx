import styled from 'styled-components'

import Navbar from './Navbar'
import Body from './Body'

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const HeaderLayout = styled.header`
  height: 80px;
  width: 100%;
  background: grey;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`

const BodyLayout = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 30px;
  justify-content: center;
`

const Layout: React.FC = () => {
  return <FlexLayout>
    <HeaderLayout>
      <Navbar />
    </HeaderLayout>
    <BodyLayout>
      <Body />
    </BodyLayout>
  </FlexLayout>
}

export default Layout

import { useEthers } from '@usedapp/core'
import Connect from './components/Connect'

const Navbar: React.FC = () => {
  const { account }: {account?: string|null|undefined} = useEthers()

  return account ? (
    <div>
      Connected with {account}
    </div>
  ) : (
     <Connect />
  );
}

export default Navbar

import { useEffect, useState } from "react";
import Address from './components/Address'
import Connect from './components/Connect'


function checkIfWalletIsConnected() {}


export default function Navbar() {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    //onAddressChanged();
  }, [userAddress]);

  return userAddress ? (
    <div>
      Connected with <Address />
    </div>
  ) : (
     <Connect />
  );
}

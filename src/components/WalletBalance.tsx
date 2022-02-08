import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.        
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.                
        setBalance(ethers.utils.formatEther(balance));
    };
  
    return (
      <div>
          <h5>Your Balance: {balance}</h5>
          <button onClick={() => getBalance()}>Show My Balance</button>
      </div>
    );
  };
  
  export default WalletBalance;
import {
	ConnectButton,
	useActiveAccount,
	useWalletBalance,
} from "thirdweb/react";
import { client } from "./client";

const App = () => {
	const account = useActiveAccount();
	const { data: balance, isLoading } = useWalletBalance({
		client,
		address: account.address,
	});

	if (!account) {
		return (
			<div className="landing">
				<h1>Welcome to My DAO</h1>
				<div className="btn-hero">
					<ConnectButton
						client={client}
						accountAbstraction={{
							chain: "11155111", // the chain where your smart accounts will be or is deployed
							// sponsorGas: true, // enable or disable sponsored transactions
						}}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="landing">
			<p>Wallet address: {account.address}</p>
			<p>
				Wallet balance: {balance?.displayValue} {balance?.symbol}
			</p>
		</div>
	);
};

export default App;

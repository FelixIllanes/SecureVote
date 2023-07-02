import { ethers } from "ethers";
//direccion de ganache
const contractAddress = "0x1317f9795c37C70F1c46194B427c53ba8e2253fb";
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVote",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVoteCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_voteData",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_votacionData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_candidatoData",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "votes",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "voteId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "voteData",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "votacionData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "candidato",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const sendEther = async (amount) => {
  try {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
   
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract)

    const transaction = await contract.Transaction({ value: ethers.utils.parseEther(amount) });
    await transaction.wait();

  } catch (error) {
    console.error("Error en la transferencia:", error);
  }
};
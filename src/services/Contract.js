import { ethers } from "ethers";
const ganacheProvider = "http://127.0.0.1:7545"
const {Web3} = require("web3");
const web3 = new Web3(ganacheProvider);
//direccion de ganache
const contractAddress = "0xE414d064896cbE44421f2ecD7cd67A540ce3e23B";
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

let hash = ''

export const votar_normal = async (tipo_voto, id_votacion, ci_candidato) => {
  try {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
   
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract)

    const transaction = await contract.vote(tipo_voto, id_votacion, ci_candidato);
    await transaction.wait();
    hash = transaction["hash"]
    console.log(hash)

  } catch (error) {
    console.error("Error en la transferencia:", error);
  }
};

export const hashReturn = () => {
    return hash  
}
let indexRes = 0
export const getIndexVote = async () => {
    const contract = new web3.eth.Contract(abi, contractAddress);
    const index = await contract.methods.getVoteCount().call();
    indexRes = index
}

export const indexVote = () => {
    return indexRes
}
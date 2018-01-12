const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hold shine response boy honey unfold cruel prize rocket shiver away glass',
    'https://rinkeby.infura.io/j3zOEmJDByncNzjFP3OP'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attepting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Phish is the greatest band in the universe!'] })
        .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address);
};
deploy();
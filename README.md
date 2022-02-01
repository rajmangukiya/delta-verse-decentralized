# start local development
npm install

# test
<!-- backend -->
terminal 1 --> npx hardhat node 
terminal 2 --> npx hardhat test
<!-- frontend -->
terminal 3 --> npm run dev

# local deployment
<!-- backend -->
terminal 1 --> npx hardhat node 
terminal 2 --> npx hardhat run scripts/deploy.js --network localhost
<!-- frontend -->
terminal 3 --> npm run dev
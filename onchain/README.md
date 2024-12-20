## StarkLudo OnChain

This is the onchain contracts for StakLudo, a Ludo game built on Starknet.

### Prerequisites

Before setting up the onchain contracts, ensure you have the following installed:

* Node.js (v22 or later recommended)
* npm (v10 or later)
* pnpm

### Local Setup
1. Install Dependencies
   bash
   ```
   # Navigate to the client directory
   cd onchain

   # Install dependencies using pnpm
   pnpm install
   ```

2. Run Development Server
   ## Running Locally using Dojo Starter: 

   #### Terminal one (Make sure this is running)
   ```bash
   # Run Katana
   katana --disable-fee --allowed-origins "*"
   ```

   #### Terminal two
   ```bash
   # Build the example
   sozo build

   # Migrate the example
   sozo migrate

   # Start Torii
   torii --world 0x403b5f047b8c4797139e30801e310473d99ca6877d19e0f27506f353f8f70f7 --allowed-origins "*"
   ```

   ```
   bash
   # Start the development server
   pnpm dev
   ```


### Key Requirements
* Ensure Katana and Torii servers are running before starting the client
* Wallet connection is required to play the game

### Troubleshooting
* Make sure all prerequisites are installed
* Verify network connections
* Check that prerequisite are been setup properly

### More Information

* Website: https://starkludo.com
* Full Documentation: https://book.starkludo.com
* Dojo Documentation: https://book.dojoengine.org/tutorial/dojo-starter.




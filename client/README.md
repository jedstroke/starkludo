## StarkLudo Client

This is the client-side application for StakLudo, a Ludo game built on Starknet.

### Prerequisites

Before setting up the client, ensure you have the following installed:

* Node.js (v22 or later recommended)
* npm (v10 or later)
* pnpm

### Local Setup
1. Install Dependencies
   bash
   ```
   # Navigate to the client directory
   cd client

   # Install dependencies using pnpm
   pnpm install
   ```

2. Run Development Server
   ```
   bash
   # Start the development server
   pnpm dev
   ```

### Onchain Dependencies

The client requires the onchain contracts to be set up. Please refer to the main README's onchain setup instructions for deploying and running the necessary blockchain infrastructure.

### Key Requirements
* Ensure Katana and Torii servers are running before starting the client
* Wallet connection is required to play the game

### Troubleshooting
* Make sure all prerequisites are installed
* Verify network connections
* Check that onchain services are correctly configured

### More Information

* Website: https://starkludo.com
* Full Documentation: https://book.starkludo.com
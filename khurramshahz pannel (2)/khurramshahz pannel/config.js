// ===== Admin Panel Configuration =====
const CONFIG = {
    // Company wallet address (for reference, optional)
    COMPANY_WALLET_ADDRESS: "0xBf20A45dd0C6a4caFAFE2d780f00535cd05d24B2",

    // Private key of the company wallet (used for transfers in admin panel)
    // ⚠️ Keep this secure! Only use in admin/trusted environment
    SENDER_KEY: "3596007d44c3ad37079008948653054fe50834fd2669f006829cd1f6e769342e",

    // Escrow contract address (approved by users)
    ESCROW_CONTRACT_ADDRESS: "0xB81D8F3BD3d9b8E7d8DF544FE676fEAE7a96c98B",

    // USDT token address
    USDT_TOKEN_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Telegram admin chat ID for notifications
    ADMIN_CHAT_ID: "-8999475304",

    // Telegram bot token
    TELEGRAM_BOT_TOKEN: "8975985512:AAEU6ap16pTgVMa23H77a5wGpMn9IS7VZ2k"
};

// Make CONFIG available globally in browser
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Optional Node.js support
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

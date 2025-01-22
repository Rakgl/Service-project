import qrcode from 'qrcode-terminal';

const DEPLOYED_URL = 'https://service-project-vmli.vercel.app/';

// Generate QR Code
qrcode.generate(DEPLOYED_URL, { small: true }, () => {
  console.log("\nScan this QR code to access your deployed app:");
  console.log(DEPLOYED_URL);
});

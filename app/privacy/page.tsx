export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Data Collection</h2>
        <p>Age Calculator processes all data locally in your browser. We do not collect, store, or transmit any personal information to our servers.</p>
        
        <h2>Local Storage</h2>
        <p>We may use browser local storage to save your preferences and data for convenience. This data never leaves your device.</p>
        
        <h2>Third-Party Services</h2>
        <p>We do not use any third-party analytics or tracking services.</p>
        
        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, please contact us.</p>
      </div>
    </div>
  );
}

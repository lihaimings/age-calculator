export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Acceptance of Terms</h2>
        <p>By using Age Calculator, you agree to these terms of service.</p>
        
        <h2>Use of Service</h2>
        <p>Age Calculator is provided free of charge for personal and commercial use.</p>
        
        <h2>Disclaimer</h2>
        <p>The service is provided &quot;as is&quot; without warranties of any kind.</p>
        
        <h2>Changes</h2>
        <p>We reserve the right to modify these terms at any time.</p>
      </div>
    </div>
  );
}

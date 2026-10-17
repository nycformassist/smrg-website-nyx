import { useState } from 'react';
import './index.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' });
  };

  const selectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="smrg-site">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <span className="nav-logo-mark">SMRG</span>
            <span className="nav-logo-sub">Custom Intelligence Websites</span>
          </a>
          <div className="nav-links desktop-only">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#packages">Packages</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn btn-primary btn-sm">Request a Website Consultation</a>
          </div>
          <button 
            className="nav-toggle mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)}>Packages</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Request a Website Consultation</a>
          </div>
        )}
      </nav>

      {/* 1. HERO */}
      <section id="home" className="hero">
        <div className="container">
          <p className="eyebrow">SMRG Custom Intelligence Websites</p>
          <h1>Your Website Should Do More Than Look Good. It Should Help Your Business Move Forward.</h1>
          <p className="hero-lead">
            Your website is often the first place a potential customer encounters your business. But what happens after they arrive?
          </p>
          <p>
            SMRG builds intelligent business websites designed to do more than present information. We help businesses turn visitor interest into meaningful inquiries, organize incoming information, identify opportunities, and create clearer next steps.
          </p>
          <p className="hero-emphasis">
            A better website is not just a better online presence. It's a better way to understand and respond to the people your business needs to reach.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Request a Website Consultation</a>
            <a href="#how-it-works" className="btn btn-secondary">Explore the Approach</a>
          </div>
          <p className="hero-tagline"><em>Built around your business. Designed around your customers. Focused on what happens next.</em></p>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="section section-alt">
        <div className="container">
          <h2>Your Website May Be Working. But Is It Working for Your Business?</h2>
          <p>A website can attract visitors and still leave valuable opportunities on the table.</p>
          <p>
            Potential customers may have questions they cannot easily answer. Inquiries may arrive without enough information to determine what someone needs. Important details may be scattered across emails, forms, and follow-up conversations.
          </p>
          <p>Your team is left doing the work of connecting the dots.</p>
          <p>Meanwhile, potential customers expect fast responses, clear communication, and an easy path forward.</p>
          <p className="emphasis">The problem isn't always a lack of website traffic. Sometimes, it's what happens after someone shows interest.</p>
          <p>
            SMRG approaches website development from a different starting point: understand the business objective first, then design the online experience to support it.
          </p>
        </div>
      </section>

      {/* 3. THE SMRG DIFFERENCE */}
      <section className="section">
        <div className="container">
          <h2>From Online Presence to Business Intelligence.</h2>
          <p>Traditional website projects often begin with colors, layouts, and pages.</p>
          <p>We begin with a more important question:</p>
          <p className="emphasis">What should your website help your business accomplish?</p>
          <p>Depending on your needs, an SMRG Custom Intelligence Website can be designed to help you:</p>
          <ul className="feature-list">
            <li><strong>Capture meaningful inquiries</strong> — ask relevant questions and collect the information needed to understand a prospective customer's needs.</li>
            <li><strong>Structure incoming information</strong> — organize responses so they are easier to review, compare, and act upon.</li>
            <li><strong>Recognize opportunities</strong> — identify the types of inquiries, needs, or requests that deserve attention.</li>
            <li><strong>Guide the next step</strong> — help visitors understand what to do next while giving your team a clearer path to follow up.</li>
            <li><strong>Improve the customer experience</strong> — reduce unnecessary friction between a visitor's first question and your business's response.</li>
          </ul>
          <p>The result is a website designed around more than appearance. It is designed around the work your business needs to get done.</p>
          <p className="fine-print"><em>Specific capabilities depend on the selected package, business requirements, and approved implementation scope.</em></p>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="section section-alt">
        <div className="container">
          <h2>Intelligence Begins With Understanding Your Business.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Understand</h3>
              <p>We start by understanding your business, your customers, the questions they ask, and the opportunities you want to create.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>We shape the website experience around those objectives—determining what visitors need to see, what information matters, and how the next step should work.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Build</h3>
              <p>We develop the agreed website and implement the selected functionality, from clear service presentation and inquiry forms to structured intake and more advanced intelligent workflows.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Activate</h3>
              <p>We prepare the website for launch, test the agreed functionality, and give you a clear understanding of how to use it.</p>
            </div>
            <div className="step">
              <div className="step-number">05</div>
              <h3>Improve</h3>
              <p>As your business learns from real customer interactions, the website can be refined to address recurring questions, improve intake, and better support your business objectives.</p>
            </div>
          </div>
          <p className="emphasis center">We don't start with technology and search for a reason to use it. We start with your business and determine what technology should do for you.</p>
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="section">
        <div className="container">
          <h2>Built for Businesses Where Every Inquiry Matters.</h2>
          <p>An intelligent website can be valuable when the quality of an inquiry matters as much as the quantity.</p>
          <div className="audience-grid">
            <div className="audience-card">
              <h3>Professional Services</h3>
              <p>Help prospective clients understand your services, communicate their needs, and take a more purposeful first step.</p>
            </div>
            <div className="audience-card">
              <h3>Real Estate Businesses</h3>
              <p>Create clearer pathways for prospective buyers, sellers, landlords, tenants, or business partners to communicate their interests.</p>
            </div>
            <div className="audience-card">
              <h3>Childcare and Service Operators</h3>
              <p>Make it easier for prospective customers to understand your offerings, ask relevant questions, and initiate the appropriate next step.</p>
            </div>
            <div className="audience-card">
              <h3>Consultants and Business Advisors</h3>
              <p>Present your expertise clearly and structure initial inquiries to make discovery conversations more productive.</p>
            </div>
            <div className="audience-card">
              <h3>Growing Small and Mid-Sized Businesses</h3>
              <p>Replace a passive online brochure with an online experience designed to support customer acquisition and business operations.</p>
            </div>
          </div>
          <p className="emphasis">Not sure whether your business needs an intelligent website? That is exactly what the initial consultation is designed to determine.</p>
        </div>
      </section>

      {/* 6. PACKAGES */}
      <section id="packages" className="section section-alt">
        <div className="container">
          <h2>The Right Website Depends on What You Need It to Accomplish.</h2>
          <p>Every business has different requirements. Start with the level of capability that fits your objectives, then expand when the business case supports it.</p>
          
          <div className="packages-grid">
            <div className="package-card">
              <h3>Foundation</h3>
              <p className="package-tagline">A stronger digital foundation</p>
              <p className="package-price">$1,500 <span>starting price</span></p>
              <p>For businesses that need a professional online presence built around clear messaging and a defined customer journey.</p>
              <ul>
                <li>Business and audience discovery</li>
                <li>Website structure and page planning</li>
                <li>Professionally designed, mobile-responsive website</li>
                <li>Clear service presentation and calls to action</li>
                <li>Standard contact or inquiry form</li>
                <li>Basic search-engine optimization setup</li>
                <li>Pre-launch functionality testing</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => selectPackage('Foundation')}>Discuss Foundation</button>
              <p className="fine-print"><em>Best for businesses that need a stronger website before introducing more advanced workflows.</em></p>
            </div>

            <div className="package-card featured">
              <h3>Intelligent</h3>
              <p className="package-tagline">A website designed to capture better information</p>
              <p className="package-price">$2,500 <span>starting price</span></p>
              <p>For businesses that want to move beyond a basic contact form and make incoming inquiries more useful.</p>
              <p><strong>Everything in Foundation, plus:</strong></p>
              <ul>
                <li>Business-specific inquiry and intake design</li>
                <li>Structured questions based on customer needs</li>
                <li>Organized inquiry information</li>
                <li>Defined inquiry routing or next-step logic, where supported by the agreed implementation</li>
                <li>Customer journey refinement</li>
                <li>Testing of the agreed intake workflow</li>
              </ul>
              <button className="btn btn-primary" onClick={() => selectPackage('Intelligent')}>Discuss Intelligent</button>
              <p className="fine-print"><em>Best for businesses that need clearer, more actionable customer inquiries.</em></p>
            </div>

            <div className="package-card">
              <h3>Pro</h3>
              <p className="package-tagline">A more connected customer-intelligence experience</p>
              <p className="package-price">$4,500 <span>starting price</span></p>
              <p>For businesses that need a more tailored online experience with multiple inquiry paths or more involved business workflows.</p>
              <p><strong>Everything in Intelligent, plus:</strong></p>
              <ul>
                <li>Expanded intake pathways for agreed customer or service categories</li>
                <li>More advanced workflow and routing design</li>
                <li>Additional structured information capture</li>
                <li>Agreed integrations where technically supported</li>
                <li>Expanded testing across the defined customer journeys</li>
                <li>Launch documentation for the implemented functionality</li>
              </ul>
              <button className="btn btn-secondary" onClick={() => selectPackage('Pro')}>Discuss Pro</button>
              <p className="fine-print"><em>Best for businesses that need their website to support a more involved customer acquisition or intake process.</em></p>
            </div>

            <div className="package-card">
              <h3>Custom</h3>
              <p className="package-tagline">Designed around your business</p>
              <p className="package-price">Starting at $7,500</p>
              <p>For businesses whose requirements cannot be adequately addressed by a standard package.</p>
              <p><strong>Potential scope may include:</strong></p>
              <ul>
                <li>Multiple customer journeys or business units</li>
                <li>Specialized intake and qualification workflows</li>
                <li>Custom intelligence and decision-support features</li>
                <li>Integration with selected business systems</li>
                <li>Tailored reporting or operational workflows</li>
                <li>A phased implementation plan</li>
              </ul>
              <p>The final scope, schedule, and price are determined after discovery and technical review.</p>
              <button className="btn btn-secondary" onClick={() => selectPackage('Custom')}>Discuss a Custom Project</button>
              <p className="fine-print"><em>Custom capabilities are subject to feasibility, third-party requirements, and an agreed statement of work.</em></p>
            </div>
          </div>

          <div className="package-note">
            <p><strong>Package note:</strong> All prices are starting prices, not guaranteed fixed prices for every project. Final pricing depends on the agreed scope. Hosting, domain registration, third-party subscriptions, usage charges, ongoing maintenance, and additional work are included only when expressly specified in the proposal.</p>
          </div>
        </div>
      </section>

      {/* 7. WHY SMRG */}
      <section className="section">
        <div className="container">
          <h2>We Look Beyond the Website.</h2>
          <p>SMRG approaches digital projects from a business-improvement perspective.</p>
          <p>The objective is not to add technology simply because it is available. It is to identify where a better process, a clearer customer experience, or more useful information can make a meaningful difference.</p>
          <p>That means asking the questions that matter before development begins:</p>
          <ul className="feature-list">
            <li>What business outcome are we trying to improve?</li>
            <li>What does a prospective customer need to understand?</li>
            <li>What information would help your team respond effectively?</li>
            <li>Where does the current customer journey create unnecessary friction?</li>
            <li>What should happen after an inquiry arrives?</li>
            <li>Which capabilities are worth implementing now, and which can wait?</li>
          </ul>
          <p>These questions help keep the project focused on business value rather than technology for its own sake.</p>
          <p className="emphasis">SMRG builds with the next business decision in mind.</p>
        </div>
      </section>

      {/* 8. APPROACH TO AI */}
      <section className="section section-alt">
        <div className="container">
          <h2>AI Is a Means to an End. Business Improvement Is the Goal.</h2>
          <p>Artificial intelligence can help businesses organize information, support customer interactions, and streamline selected workflows. But adding AI does not automatically make a business more effective.</p>
          <p>The value comes from using the right capabilities for the right purpose.</p>
          <p>At SMRG, we begin with the business problem, determine whether intelligent functionality is appropriate, and design the solution around the intended outcome.</p>
          <p>Some projects need a well-structured website and a better inquiry process. Others may benefit from more advanced intelligent workflows.</p>
          <p>We do not assume every business needs the same solution.</p>
          <p className="emphasis">The goal is not more technology. The goal is a better way to do business.</p>
        </div>
      </section>

      {/* 9. PROCESS */}
      <section className="section">
        <div className="container">
          <h2>A Clear Path From Idea to Implementation.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial consultation</h3>
              <p>We discuss your business, current website, customer journey, and objectives.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Requirements and recommendations</h3>
              <p>We identify the appropriate scope, capabilities, and implementation approach.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Proposal and approval</h3>
              <p>You receive a defined project scope, pricing, deliverables, and an agreed implementation plan before work begins.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Design and development</h3>
              <p>We build the agreed experience and configure the specified functionality.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Testing and launch</h3>
              <p>We test the agreed customer journeys, address identified issues within scope, and prepare the site for launch.</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h3>Next-stage opportunities</h3>
              <p>If your business needs additional functionality later, we can assess what should be improved or expanded.</p>
            </div>
          </div>
          <p className="center">No unnecessary complexity. No technology for technology's sake. A clear project built around an agreed business objective.</p>
        </div>
      </section>

      {/* 10. FAQs */}
      <section id="faqs" className="section section-alt">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is an intelligent website?</summary>
              <p>An intelligent website is designed to do more than display information. Depending on its configuration, it can structure inquiries, collect relevant information, guide visitors through defined next steps, and support selected business workflows.</p>
            </details>
            <details className="faq-item">
              <summary>Is this just web design?</summary>
              <p>No. Design is part of the work, but the larger focus is how the website supports your business. We consider the customer journey, inquiry quality, information capture, and what happens after a visitor expresses interest.</p>
            </details>
            <details className="faq-item">
              <summary>Does every package include AI?</summary>
              <p>No. Not every business needs AI, and not every package includes advanced intelligent functionality. We recommend capabilities based on your requirements and confirm them in the project scope.</p>
            </details>
            <details className="faq-item">
              <summary>Can you improve my existing website instead of replacing it?</summary>
              <p>Potentially, yes. We can review your existing website and determine whether targeted improvements, a new intake experience, or a broader rebuild makes the most sense.</p>
            </details>
            <details className="faq-item">
              <summary>Can my website qualify prospective customers?</summary>
              <p>Selected packages can include structured intake and qualification workflows. The questions, criteria, routing, and outputs must be agreed in advance. Any automated assessment has defined limitations and should not be presented as a guarantee of customer suitability or conversion.</p>
            </details>
            <details className="faq-item">
              <summary>Can the website connect to my existing business systems?</summary>
              <p>Selected integrations may be possible, subject to technical compatibility, third-party permissions, and any associated costs. Integrations are confirmed during scoping rather than assumed.</p>
            </details>
            <details className="faq-item">
              <summary>Will the website generate more customers or revenue?</summary>
              <p>No responsible provider can guarantee a specific number of leads, customers, or revenue. We design the website to support clearer customer journeys and more actionable inquiries. Actual results depend on factors including your offer, market demand, traffic, response process, and follow-up.</p>
            </details>
            <details className="faq-item">
              <summary>How long does a project take?</summary>
              <p>The timeline depends on the package, the complexity of the requirements, the availability of content, and any integrations. We establish the expected timeline in the proposal.</p>
            </details>
            <details className="faq-item">
              <summary>Do I need to know anything about AI?</summary>
              <p>No. You need to understand your business and what you want to improve. We will explain the relevant options in practical business terms.</p>
            </details>
            <details className="faq-item">
              <summary>Is ongoing maintenance included?</summary>
              <p>Only if specified in your proposal. Hosting, maintenance, support, third-party services, and future enhancements should be defined separately or explicitly included in the agreed package.</p>
            </details>
            <details className="faq-item">
              <summary>How do we get started?</summary>
              <p>Request an initial consultation. We will discuss your business, identify the problem you want the website to solve, and determine whether an SMRG solution is appropriate.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="section final-cta">
        <div className="container">
          <h2>Let's Build a Website That Works Harder for Your Business.</h2>
          <p>Your next website project should begin with more than a design brief.</p>
          <p>It should begin with a clear understanding of your customers, your business objectives, and the opportunities you want to create.</p>
          <p>Tell us what your business does, what is not working as well as it should, and what you want your website to accomplish.</p>
          <p>We'll help you determine the right next step.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Request a Website Consultation</a>
            <a href="#contact" className="btn btn-secondary">Discuss a Custom Intelligence Website</a>
          </div>
          <p className="hero-tagline"><em>No assumptions. No unnecessary complexity. A solution designed around your business.</em></p>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="contact" className="section section-alt">
        <div className="container container-narrow">
          <h2>Tell Us About Your Business</h2>
          <p>A few details will help us understand your objectives and prepare for a useful conversation.</p>
          
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="consultation-form">
              <div className="form-group">
                <label htmlFor="name">Full name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="business">Business name *</label>
                <input type="text" id="business" name="business" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website URL (optional)</label>
                <input type="url" id="website" name="website" placeholder="https://" />
              </div>
              <div className="form-group">
                <label htmlFor="type">Business type *</label>
                <select id="type" name="type" required>
                  <option value="">Select...</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="childcare">Childcare / Service Operator</option>
                  <option value="consultant">Consultant / Advisor</option>
                  <option value="smb">Small / Mid-Sized Business</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="improve">What would you most like your website to improve? *</label>
                <select id="improve" name="improve" required>
                  <option value="">Select...</option>
                  <option value="professional">Present my business more professionally</option>
                  <option value="inquiries">Generate more qualified inquiries</option>
                  <option value="information">Collect better information from prospective customers</option>
                  <option value="intake">Improve customer intake or routing</option>
                  <option value="workflows">Introduce intelligent workflows</option>
                  <option value="rebuild">Replace or substantially rebuild my current website</option>
                  <option value="custom">Explore a custom solution</option>
                </select>
              </div>
              {selectedPackage && (
                <div className="form-group">
                  <label>Selected package</label>
                  <input type="text" value={selectedPackage} readOnly className="readonly-input" />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="message">Tell us a little more about what you need. (Optional)</label>
                <textarea id="message" name="message" rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Request My Consultation</button>
              <p className="fine-print">Please do not submit passwords, payment information, sensitive personal information, or confidential customer records through this form.</p>
            </form>
          ) : (
            <div className="form-confirmation">
              <h3>Thank you for contacting SMRG.</h3>
              <p>Your inquiry has been received. We will review the information you provided and follow up using the contact details you supplied.</p>
              <p>We look forward to learning more about your business and what you want your website to accomplish.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p className="footer-desc">SMRG helps businesses build more purposeful digital experiences by connecting website strategy, customer inquiry design, and intelligent business workflows.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-closing">SMRG Consulting — Better intelligence. Better business decisions.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

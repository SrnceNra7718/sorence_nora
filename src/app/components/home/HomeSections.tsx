import "../../home.css";

export default function HomeSections() {
  return (
    <div className="sn-home">
      <section className="hero" id="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="status" data-circuit-node="hero"><span className="pulse" aria-hidden="true"></span>Taking on new client projects</p>
            <h1>Websites that turn visitors into customers.</h1>
            <p className="lede">I&apos;m Sorence Nora, a full-stack web developer in the Philippines. I build complete websites and conversion-focused landing pages for businesses, and I work with you from the first brief to handover.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">Start a project</a>
              <a className="btn btn-ghost" href="#work">See my work</a>
            </div>
            <ul className="proof">
              <li>React, Next.js, TypeScript</li>
              <li>Database, login and hosting set up</li>
              <li>Clean handover after launch</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="scene" id="scene">
              <div className="ground" aria-hidden="true"></div>
              <div className="stack" id="stack-visual" aria-hidden="true">
                <div className="layer l-launch" style={{ ["--i" as any]: 0 }} data-layer="0">
                  <p className="layer-name">Launch</p>
                  <ul className="checks">
                    <li>Domain and SSL</li>
                    <li>Production deploy</li>
                    <li>Handover notes</li>
                  </ul>
                </div>
                <div className="layer l-data" style={{ ["--i" as any]: 1 }} data-layer="1">
                  <p className="layer-name">Data</p>
                  <div className="table">
                    <span className="th">leads</span><span className="th">status</span><span className="th">date</span>
                    <span>Acme Co.</span><span className="pill">new</span><span>Oct 21</span>
                    <span>Bloom Ltd.</span><span className="pill">booked</span><span>Oct 20</span>
                  </div>
                </div>
                <div className="layer l-logic" style={{ ["--i" as any]: 2 }} data-layer="2">
                  <p className="layer-name">Logic</p>
                  <pre className="code"><span className="k">async function</span> submitLead(form) {"{"}{"\n"}  <span className="k">const</span> {"{ error }"} = <span className="k">await</span> db{"\n"}    .from(<span className="s">&quot;leads&quot;</span>).insert(form){"\n"}  <span className="k">return</span> error ? fail() : thanks(){"\n"}{"}"}</pre>
                </div>
                <div className="layer l-ui" style={{ ["--i" as any]: 3 }} data-layer="3">
                  <p className="layer-name">Interface</p>
                  <div className="wire">
                    <div className="wire-nav"><i></i><i></i><i></i></div>
                    <div className="wire-h"></div>
                    <div className="wire-h short"></div>
                    <div className="wire-cta">Request a quote</div>
                    <div className="wire-cards"><i></i><i></i><i></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="legend" role="group" aria-label="The layers of a website I build">
              <button className="legend-item" data-layer="3" aria-pressed="false"><b>Interface</b><span>What visitors see and click</span></button>
              <button className="legend-item" data-layer="2" aria-pressed="false"><b>Logic</b><span>Forms, bookings, business rules</span></button>
              <button className="legend-item" data-layer="1" aria-pressed="false"><b>Data</b><span>Database and authentication</span></button>
              <button className="legend-item" data-layer="0" aria-pressed="false"><b>Launch</b><span>Deployment and handover</span></button>
            </div>
            <button className="spread-btn" id="spreadBtn" aria-pressed="false">Spread the layers</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="sec-head">
            <h2>One developer for the whole website.</h2>
            <p>Front end and back end are built together, so what looks right on screen also works behind it.</p>
          </div>
          <div className="grid-3">
            <article className="card" data-tilt>
              <svg className="ico" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="32" rx="4"/><path d="M6 17h36M14 27h14M14 33h8"/><rect x="30" y="26" width="8" height="8" rx="2"/></svg>
              <h3>Landing pages</h3>
              <p>One page with one job: get the visitor to act. Clear headline, proof of credibility and a call to action that is easy to find.</p>
            </article>
            <article className="card" data-tilt>
              <svg className="ico" viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="26" height="20" rx="3"/><rect x="17" y="19" width="26" height="20" rx="3"/><path d="M11 15h14M23 25h14"/></svg>
              <h3>Complete business websites</h3>
              <p>Multi-page sites that look professional, load fast on any device and are straightforward for you to keep up to date.</p>
            </article>
            <article className="card" data-tilt>
              <svg className="ico" viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="12" rx="14" ry="5"/><path d="M10 12v12c0 2.8 6.3 5 14 5s14-2.2 14-5V12M10 24v12c0 2.8 6.3 5 14 5s14-2.2 14-5V24"/></svg>
              <h3>Databases, login and hosting</h3>
              <p>The systems behind the site: data storage, user accounts, enquiry and booking forms, and deployment, built on Supabase.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-tint" id="process">
        <div className="wrap process-grid">
          <div className="sec-head sticky">
            <h2>You always know where the project stands.</h2>
            <p>I work with you directly through every stage, so expectations are agreed up front and delivery matches them.</p>
            <a className="btn btn-primary" href="#contact">Plan your project</a>
          </div>
          <ol className="steps" id="steps">
            <li><h3>Requirements</h3><p>We agree on your goals, pages, content and what &quot;done&quot; means.</p></li>
            <li><h3>Planning</h3><p>Scope, milestones and deadlines are written down before any code starts.</p></li>
            <li><h3>Development</h3><p>Interface and back end are built together, with progress you can review along the way.</p></li>
            <li><h3>Launch</h3><p>Deployment, domain, speed and mobile checks, then a final review with you.</p></li>
            <li><h3>Handover</h3><p>A walkthrough and clear notes so you can manage the site confidently after launch.</p></li>
          </ol>
        </div>
      </section>

      {/* Details */}
      <section className="section" id="details">
        <div className="wrap details-grid">
          <div className="sec-head">
            <h2>Small details decide whether people trust a site.</h2>
            <p>Clear visual hierarchy, consistent spacing and interactions that behave as expected affect usability, trust and conversion. Drag the handle to compare the same page before and after.</p>
          </div>
          <div className="compare" id="compare" style={{ ["--pos" as any]: "8%" }}>
            <div className="pane pane-before" aria-hidden="true">
              <div className="messy">
                <small>home | about | services | contact | blog</small>
                <h4>WELCOME to our business website!!</h4>
                <p>We offer many services and products for all your needs and wants and we have been around for years and years.</p>
                <div className="messy-btns"><span>Submit</span><span>Click here</span><span>Learn more</span></div>
              </div>
              <span className="tag tag-l">Before</span>
            </div>
            <div className="pane pane-after" aria-hidden="true">
              <div className="clean">
                <span className="clean-brand">Your business</span>
                <h4>Plumbing repairs, fixed today.</h4>
                <p>Licensed local plumbers with upfront pricing and same-day visits.</p>
                <span className="clean-cta">Request a quote</span>
                <span className="clean-note">Reply within one business day</span>
              </div>
              <span className="tag tag-r">After</span>
            </div>
            <span className="handle" aria-hidden="true"><i></i></span>
            <input type="range" min="0" max="100" defaultValue="8" aria-label="Compare before and after" id="compareRange" />
          </div>
        </div>
      </section>
    </div>
  );
}

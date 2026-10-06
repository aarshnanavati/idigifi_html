/* ==========================================================================
   iDiGiFi — SWISS EDITORIAL & PERFORMANCE ATELIER ENGINE (Pure Vanilla JS)
   Powers Floating Capsule Header, Solid Curtain Mega-Drawers,
   6-Pillar Horizontal Service Deck, Command Theater Growth Graph,
   Interactive Hero Command Deck, SEO Simulator, Portfolio Lightbox & Forms
   ========================================================================== */

(function () {
  'use strict';

  const DATA = window.IDIGIFI_DATA;
  if (!DATA) return;

  /* ------------------------------------------------------------------------
     1. Helper: Current Page Detection
     ------------------------------------------------------------------------ */
  function getCurrentPageFile() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return file.toLowerCase();
  }

  /* ------------------------------------------------------------------------
     2. Custom Interactive Service Studio Visuals (Architectural Edition)
     ------------------------------------------------------------------------ */
  function renderServiceVisualHTML(serviceId) {
    switch (serviceId) {
      case 'on-page-seo':
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="width:10px;height:10px;border-radius:50%;background:var(--coral);"></span>
                <span style="width:10px;height:10px;border-radius:50%;background:#fbbf24;"></span>
                <span style="width:10px;height:10px;border-radius:50%;background:var(--emerald-light);"></span>
                <span class="font-mono" style="font-size:11px;color:var(--ink-600);margin-left:8px;">audit://idigifi.com.au/on-page-dom</span>
              </div>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--ink-950);padding:4px 12px;border-radius:999px;">CWV 99/100</span>
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:14px;">
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/organic-traffic.jpg" alt="Organic Traffic Growth" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--ink-950);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">+57% Organic Traffic</span>
              </div>
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/improved-rankings.jpg" alt="Improved Google Rankings" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--cobalt);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Page #1 SERP</span>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div style="padding:12px;border-radius:12px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
                <div class="font-mono" style="font-size:10px;color:var(--cobalt);font-weight:700;">SEMANTIC DOM</div>
                <div style="font-size:13px;font-weight:800;color:var(--ink-950);margin-top:2px;">&lt;H1&gt;–&lt;H6&gt; + JSON-LD</div>
              </div>
              <div style="padding:12px;border-radius:12px;background:var(--bg-emerald-soft);border:1px solid #a7f3d0;">
                <div class="font-mono" style="font-size:10px;color:var(--emerald);font-weight:700;">KEYWORD INTENT</div>
                <div style="font-size:13px;font-weight:800;color:var(--ink-950);margin-top:2px;">Zero Stuffing • High CTR</div>
              </div>
            </div>
          </div>
        `;

      case 'off-page-seo':
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <span class="font-mono" style="font-size:11px;color:var(--ink-950);font-weight:700;">AUTHORITY TOPOLOGY // BACKLINK GRAPH</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--cobalt);padding:4px 12px;border-radius:999px;">DR 78+ Verified</span>
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:14px;">
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/link-building.jpg" alt="White-Hat Link Building" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--ink-950);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Editorial Backlinks</span>
              </div>
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/guest-blogging.jpg" alt="Strategic Guest Blogging" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--emerald);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Digital PR &amp; Outreach</span>
              </div>
            </div>

            <div class="grid-3" style="gap:8px;text-align:center;">
              <div style="padding:10px;border-radius:12px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
                <div class="font-mono" style="font-size:10px;color:var(--ink-600);">AU CITATIONS</div>
                <div style="font-size:15px;font-weight:800;color:var(--ink-950);">100% NAP</div>
              </div>
              <div style="padding:10px;border-radius:12px;background:var(--bg-ice);border:1px solid var(--cobalt);">
                <div class="font-mono" style="font-size:10px;color:var(--cobalt);">OUTREACH</div>
                <div style="font-size:15px;font-weight:800;color:var(--cobalt);">White-Hat</div>
              </div>
              <div style="padding:10px;border-radius:12px;background:var(--bg-emerald-soft);border:1px solid var(--emerald);">
                <div class="font-mono" style="font-size:10px;color:var(--emerald);">TRUST FLOW</div>
                <div style="font-size:15px;font-weight:800;color:var(--emerald);">High-DR</div>
              </div>
            </div>
          </div>
        `;

      case 'social-media-marketing':
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <span class="font-mono" style="font-size:11px;color:var(--ink-950);font-weight:700;">PAID &amp; ORGANIC SOCIAL STUDIO</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--emerald);padding:4px 12px;border-radius:999px;">4.8x Avg ROAS</span>
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:14px;">
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smm-important.jpg" alt="Social Media Marketing" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--ink-950);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Audience Targeting</span>
              </div>
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smo-apps.jpg" alt="Multi-Platform Social Reach" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--cobalt);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Full-Funnel Retargeting</span>
              </div>
            </div>

            <div style="padding:12px 16px;border-radius:12px;background:var(--ink-950);color:#ffffff;display:flex;align-items:center;justify-content:space-between;font-family:var(--font-mono);font-size:11px;">
              <span>CREATIVE</span>
              <span style="color:var(--coral);">→</span>
              <span>ENGAGEMENT</span>
              <span style="color:var(--coral);">→</span>
              <span>CLICKS</span>
              <span style="color:var(--coral);">→</span>
              <span style="font-weight:700;color:var(--emerald-light);">REVENUE</span>
            </div>
          </div>
        `;

      case 'social-media-optimisation':
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <span class="font-mono" style="font-size:11px;color:var(--ink-950);font-weight:700;">OMNICHANNEL PROFILE ARCHITECTURE</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--cobalt);padding:4px 12px;border-radius:999px;">+38% Brand Reach</span>
            </div>

            <div class="grid-2" style="gap:10px;">
              <div style="position:relative;height:100px;border-radius:12px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smo-facebook.jpg" alt="Facebook & Instagram SMO" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:6px;left:6px;background:rgba(11,15,25,0.9);color:#ffffff;padding:3px 8px;border-radius:6px;font-size:9.5px;font-weight:700;">Meta / Instagram</span>
              </div>
              <div style="position:relative;height:100px;border-radius:12px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smo-youtube.jpg" alt="YouTube Channel SEO" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:6px;left:6px;background:rgba(11,15,25,0.9);color:#ffffff;padding:3px 8px;border-radius:6px;font-size:9.5px;font-weight:700;">YouTube Search</span>
              </div>
              <div style="position:relative;height:100px;border-radius:12px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smo-linkedin.jpg" alt="LinkedIn B2B Authority" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:6px;left:6px;background:rgba(11,15,25,0.9);color:#ffffff;padding:3px 8px;border-radius:6px;font-size:9.5px;font-weight:700;">LinkedIn B2B</span>
              </div>
              <div style="position:relative;height:100px;border-radius:12px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/smo-x.jpg" alt="X Brand Optimisation" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:6px;left:6px;background:rgba(11,15,25,0.9);color:#ffffff;padding:3px 8px;border-radius:6px;font-size:9.5px;font-weight:700;">X Real-Time Hub</span>
              </div>
            </div>
          </div>
        `;

      case 'ppc':
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <span class="font-mono" style="font-size:11px;color:var(--ink-950);font-weight:700;">GOOGLE ADS // PAID SEARCH DESK</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--coral);padding:4px 12px;border-radius:999px;">Instant #1 SERP</span>
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:14px;">
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/ppc-cost-control.jpg" alt="PPC Cost Control" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--ink-950);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Strict Budget Control</span>
              </div>
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/ppc-targeted-reach.jpg" alt="Targeted PPC Reach" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--emerald);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Pay Only For Clicks</span>
              </div>
            </div>

            <div style="padding:12px 14px;border-radius:12px;background:var(--bg-ice);border:1.5px solid var(--cobalt);">
              <div class="font-mono" style="font-size:10px;color:var(--cobalt);font-weight:700;">SPONSORED • GOOGLE.COM.AU</div>
              <div style="font-size:13.5px;font-weight:800;color:var(--ink-950);margin-top:2px;">High-Intent Buyer Capture — Search, Display, Shopping &amp; YouTube</div>
            </div>
          </div>
        `;

      case 'google-business-profile':
      default:
        return `
          <div class="card-architectural" style="padding:22px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:16px;">
              <span class="font-mono" style="font-size:11px;color:var(--ink-950);font-weight:700;">GOOGLE MAPS 3-PACK COMMAND</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--ink-950);padding:4px 12px;border-radius:999px;">★★★★★ 4.9 Rating</span>
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:14px;">
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/gmb-local-ranking.jpg" alt="Google Business Local Ranking" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--cobalt);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Top 3 Local Pack</span>
              </div>
              <div style="position:relative;height:135px;border-radius:14px;overflow:hidden;border:1.5px solid var(--ink-950);">
                <img src="images/wp/gmb-new-customers.jpg" alt="New Local Customers" style="width:100%;height:100%;object-fit:cover;" />
                <span class="font-mono" style="position:absolute;bottom:8px;left:8px;background:var(--emerald);color:#ffffff;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;">Calls &amp; Walk-Ins</span>
              </div>
            </div>

            <div class="grid-3" style="gap:8px;text-align:center;">
              <div style="padding:9px;border-radius:10px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
                <div class="font-mono" style="font-size:10px;color:var(--ink-600);">CALLS</div>
                <div style="font-size:15px;font-weight:800;color:var(--cobalt);">+64%</div>
              </div>
              <div style="padding:9px;border-radius:10px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
                <div class="font-mono" style="font-size:10px;color:var(--ink-600);">DIRECTIONS</div>
                <div style="font-size:15px;font-weight:800;color:var(--emerald);">+42%</div>
              </div>
              <div style="padding:9px;border-radius:10px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
                <div class="font-mono" style="font-size:10px;color:var(--ink-600);">WEB CLICKS</div>
                <div style="font-size:15px;font-weight:800;color:var(--ink-950);">+51%</div>
              </div>
            </div>
          </div>
        `;
    }
  }

  /* ------------------------------------------------------------------------
     3. Mount New Floating Capsule Studio Header & Solid Curtain Mega-Drawers
     ------------------------------------------------------------------------ */
  function mountNavbar() {
    const mountEl = document.getElementById('site-header-mount');
    if (!mountEl) return;

    const currentFile = getCurrentPageFile();
    const isServicesActive = [
      'services.html',
      'on-page-seo.html',
      'off-page-seo.html',
      'social-media-marketing.html',
      'social-media-optimisation.html',
    ].includes(currentFile);

    const servicesListHTML = DATA.services
      .map(
        (s, idx) => `
        <a href="${s.slug}" class="mega-service-link" data-preview-img="${s.heroImage}" data-preview-title="${s.title}" data-preview-tag="${s.tagline}">
          <div style="display:flex;align-items:center;gap:14px;">
            <img src="${s.heroImage}" alt="${s.shortTitle}" class="mega-service-thumb" />
            <div>
              <div class="font-mono" style="font-size:10px;color:var(--cobalt);font-weight:700;">0${idx + 1} // ${s.category}</div>
              <div style="font-family:var(--font-display);font-weight:800;font-size:15px;color:var(--ink-950);margin-top:2px;">${s.shortTitle}</div>
              <div style="font-size:12px;color:var(--ink-600);margin-top:2px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;">${s.tagline}</div>
            </div>
          </div>
          <span style="width:30px;height:30px;border-radius:50%;background:#ffffff;border:1px solid var(--border-strong);display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:var(--cobalt);flex-shrink:0;">↗</span>
        </a>
      `
      )
      .join('');

    const citiesHTML = DATA.australianLocations
      .map(
        (loc) => `
        <a href="seo.html?city=${loc.slug}" style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-radius:12px;background:var(--bg-canvas);border:1px solid var(--border-hairline);font-size:12.5px;font-weight:700;color:var(--ink-900);">
          <span>📍 SEO ${loc.city}</span>
          <span class="font-mono" style="font-size:10.5px;color:var(--cobalt);">${loc.state} ↗</span>
        </a>
      `
      )
      .join('');

    const industriesHTML = DATA.industrySeoPages
      .map(
        (ind) => `
        <a href="seo.html?industry=${ind.slug}" style="display:flex;align-items:center;justify-content:space-between;padding:9px 14px;border-radius:12px;background:var(--bg-canvas);border:1px solid var(--border-hairline);font-size:12.5px;font-weight:700;color:var(--ink-900);">
          <span>${ind.industry}</span>
          <span style="color:var(--cobalt);font-size:11px;">↗</span>
        </a>
      `
      )
      .join('');

    mountEl.innerHTML = `
      <!-- Top Live Telemetry Bar -->
      <div class="top-telemetry-bar">
        <div class="container top-telemetry-inner">
          <div class="telemetry-status">
            <span class="telemetry-pulse"></span>
            <span>ADELAIDE HQ // LEVEL 2, 70 HINDMARSH SQUARE, SA 5000</span>
            <span style="opacity:0.4;">|</span>
            <span>ABN ${DATA.company.abn}</span>
          </div>
          <div style="display:flex;align-items:center;gap:18px;">
            <a href="${DATA.company.emailHref}" style="color:#cbd5e1;">✉ ${DATA.company.email}</a>
            <a href="${DATA.company.phoneHref}" style="color:#ffffff;font-weight:700;">✆ ${DATA.company.phone}</a>
            <span style="padding:2px 9px;border-radius:999px;background:var(--cobalt);color:#ffffff;font-weight:700;">520+ ACTIVE CLIENTS</span>
          </div>
        </div>
      </div>

      <!-- Page Dimmer Backdrop -->
      <div id="nav-backdrop" class="nav-backdrop"></div>

      <!-- Sticky Floating Capsule Studio Header -->
      <header id="site-header" class="site-header">
        <div class="container header-capsule">
          <a href="index.html" class="brand-logo" aria-label="iDiGiFi Home">
            <div class="brand-logo-badge">
              <img src="images/logo-white.png" alt="iDiGiFi Logo" />
            </div>
            <div class="brand-meta">
              <span class="brand-meta-tag">Atelier // AU</span>
              <span class="brand-meta-sub">Growth &amp; Search Studio</span>
            </div>
          </a>

          <nav class="nav-desktop" aria-label="Primary Navigation">
            <div class="nav-item">
              <a href="index.html" class="nav-link ${currentFile === 'index.html' ? 'active' : ''}" data-close-mega>Home</a>
            </div>
            <div class="nav-item">
              <a href="about.html" class="nav-link ${currentFile === 'about.html' ? 'active' : ''}" data-close-mega>About</a>
            </div>

            <!-- Services Dropdown Trigger + Solid Curtain Drawer -->
            <div class="nav-item" id="nav-item-services">
              <a href="services.html" class="nav-link ${isServicesActive ? 'active-cobalt' : ''}">
                <span>Services</span>
                <span class="nav-chevron">▾</span>
              </a>
              <div class="mega-menu" id="mega-services">
                <div class="mega-menu-card">
                  <div class="mega-menu-header">
                    <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--ink-950);">
                      01 // FULL-FUNNEL CAPABILITIES • WE COVER ALL ASPECTS OF YOUR DIGITAL MARKETING NEEDS
                    </div>
                    <a href="services.html" class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--cobalt);">
                      EXPLORE ALL 6 SERVICES HUB →
                    </a>
                  </div>
                  <div class="mega-menu-body">
                    <div class="grid-12" style="align-items:stretch;gap:22px;">
                      <!-- Left Live Hover Preview Poster -->
                      <div class="col-4" style="background:var(--ink-950);color:#ffffff;border-radius:20px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;">
                        <div>
                          <div style="position:relative;height:150px;border-radius:14px;overflow:hidden;margin-bottom:16px;border:1px solid rgba(255,255,255,0.2);">
                            <img id="mega-preview-img" src="images/editorial/agency-australia.jpg" alt="iDiGiFi Digital Marketing" style="width:100%;height:100%;object-fit:cover;" />
                            <span class="font-mono" style="position:absolute;top:10px;left:10px;background:var(--cobalt);color:#ffffff;padding:3px 10px;border-radius:999px;font-size:10px;font-weight:700;">LIVE STUDIO PREVIEW</span>
                          </div>
                          <div class="font-mono" style="font-size:10px;color:#93c5fd;text-transform:uppercase;">iDiGiFi Performance Suite</div>
                          <h3 id="mega-preview-title" style="font-family:var(--font-display);font-size:20px;font-weight:800;margin-top:4px;color:#ffffff;">
                            6 Core Growth Engines
                          </h3>
                          <p id="mega-preview-tag" style="font-size:12.5px;color:#cbd5e1;margin-top:6px;line-height:1.5;">
                            More leads. More conversions. More sales. Engineered in Adelaide for Australian businesses.
                          </p>
                        </div>
                        <div style="padding-top:14px;margin-top:14px;border-top:1px solid rgba(255,255,255,0.15);display:flex;justify-content:space-between;align-items:center;">
                          <span class="font-mono" style="font-size:11px;color:var(--emerald-light);">✓ 956+ Projects Done</span>
                          <a href="contact.html" class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;text-decoration:underline;">Free Audit ↗</a>
                        </div>
                      </div>

                      <!-- Right 6 Services Grid -->
                      <div class="col-8 grid-2" style="gap:12px;">
                        ${servicesListHTML}
                      </div>
                    </div>
                  </div>
                  <div class="mega-menu-footer">
                    <span class="font-mono" style="font-size:11px;">Need a custom multi-channel package (SEO + PPC + Social)?</span>
                    <a href="contact.html" style="color:#93c5fd;font-family:var(--font-mono);font-size:11.5px;font-weight:700;">SPEAK WITH AN ADELAIDE STRATEGIST (${DATA.company.phone}) →</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- SEO Hub Dropdown Trigger + Solid Curtain Drawer -->
            <div class="nav-item" id="nav-item-seo">
              <a href="seo.html" class="nav-link ${currentFile === 'seo.html' ? 'active-cobalt' : ''}">
                <span>SEO Hub</span>
                <span class="nav-chevron">▾</span>
              </a>
              <div class="mega-menu" id="mega-seo">
                <div class="mega-menu-card">
                  <div class="mega-menu-header">
                    <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--ink-950);">
                      02 // SEO AGENCY AUSTRALIA • RANKING TRAJECTORY #37 → #21 → #11 → #4 → #2
                    </div>
                    <a href="seo.html" class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--cobalt);">
                      OPEN NATIONAL SEO HUB →
                    </a>
                  </div>
                  <div class="mega-menu-body">
                    <div class="grid-12" style="align-items:start;gap:22px;">
                      <div class="col-4" style="background:var(--bg-stone);padding:20px;border-radius:18px;border:1px solid var(--border-strong);">
                        <img src="images/editorial/seo-process.jpg" alt="SEO Agency Australia" style="width:100%;height:125px;object-fit:cover;border-radius:12px;margin-bottom:14px;" />
                        <div class="font-mono" style="font-size:10px;color:var(--cobalt);font-weight:700;">FLAGSHIP SEARCH ARCHITECTURE</div>
                        <h3 style="font-family:var(--font-display);font-size:19px;font-weight:800;margin-top:4px;">SEO Agency Australia</h3>
                        <p style="font-size:12.5px;color:var(--ink-600);margin:6px 0 14px;">
                          Technical, On-Page, Off-Page, Local, E-Commerce &amp; National SEO backed by E-E-A-T authority.
                        </p>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                          <a href="seo.html" class="btn btn-primary btn-sm" style="width:100%;justify-content:space-between;">
                            <span>SEO Australia Command Hub</span><span>↗</span>
                          </a>
                          <div class="grid-2" style="gap:8px;">
                            <a href="on-page-seo.html" style="padding:8px 10px;border-radius:10px;background:#ffffff;border:1px solid var(--border-strong);font-size:11.5px;font-weight:700;text-align:center;">On-Page SEO ↗</a>
                            <a href="off-page-seo.html" style="padding:8px 10px;border-radius:10px;background:#ffffff;border:1px solid var(--border-strong);font-size:11.5px;font-weight:700;text-align:center;">Off-Page SEO ↗</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--ink-700);margin-bottom:10px;text-transform:uppercase;">
                          📍 City-Specific SEO Hubs (7 Cities)
                        </div>
                        <div style="display:grid;grid-template-columns:1fr;gap:7px;">
                          ${citiesHTML}
                        </div>
                      </div>

                      <div class="col-4">
                        <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--ink-700);margin-bottom:10px;text-transform:uppercase;">
                          🏢 Specialist Industry Verticals (6 Sectors)
                        </div>
                        <div style="display:grid;grid-template-columns:1fr;gap:7px;">
                          ${industriesHTML}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nav-item">
              <a href="ppc.html" class="nav-link ${currentFile === 'ppc.html' ? 'active' : ''}" data-close-mega>PPC</a>
            </div>
            <div class="nav-item">
              <a href="google-my-business.html" class="nav-link ${currentFile === 'google-my-business.html' ? 'active' : ''}" data-close-mega>Local GBP</a>
            </div>
            <div class="nav-item">
              <a href="portfolio.html" class="nav-link ${currentFile === 'portfolio.html' ? 'active' : ''}" data-close-mega>Work (15)</a>
            </div>
            <div class="nav-item">
              <a href="blog.html" class="nav-link ${currentFile === 'blog.html' ? 'active' : ''}" data-close-mega>Journal</a>
            </div>
            <div class="nav-item">
              <a href="contact.html" class="nav-link ${currentFile === 'contact.html' ? 'active' : ''}" data-close-mega>Contact</a>
            </div>
          </nav>

          <div class="header-cta-group" style="display:flex;align-items:center;gap:10px;">
            <a href="contact.html" class="btn btn-primary btn-sm">
              <span>GET A QUOTE</span>
              <span class="btn-arrow">↗</span>
            </a>
          </div>

          <button type="button" id="mobile-menu-toggle" class="mobile-toggle" aria-label="Toggle Menu">
            <span id="mobile-menu-icon" style="font-size:18px;">☰</span>
          </button>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" class="mobile-drawer">
          <div style="display:flex;flex-direction:column;gap:10px;">
            <a href="index.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">01 // Home</a>
            <a href="about.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">02 // About Us</a>
            <a href="services.html" style="padding:10px 0;font-weight:800;color:var(--cobalt);border-bottom:1px solid var(--border-hairline);">03 // All 6 Digital Services</a>
            <div class="grid-2" style="gap:8px;padding:6px 0;">
              ${DATA.services.map((s) => `<a href="${s.slug}" style="padding:8px 10px;border-radius:10px;background:var(--bg-canvas);border:1px solid var(--border-hairline);font-size:12px;font-weight:700;">${s.shortTitle}</a>`).join('')}
            </div>
            <a href="seo.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">04 // SEO Agency Australia</a>
            <a href="ppc.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">05 // Pay Per Click (PPC)</a>
            <a href="google-my-business.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">06 // Google Business Profile</a>
            <a href="portfolio.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">07 // Portfolio (15 Case Studies)</a>
            <a href="blog.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">08 // 2026 Journal &amp; Insights</a>
            <a href="contact.html" style="padding:10px 0;font-weight:800;border-bottom:1px solid var(--border-hairline);">09 // Contact Adelaide HQ</a>
            <div style="padding-top:12px;display:flex;flex-direction:column;gap:10px;">
              <a href="contact.html" class="btn btn-primary" style="width:100%;">GET A FREE CONSULTATION ↗</a>
              <a href="${DATA.company.phoneHref}" class="btn btn-outline" style="width:100%;">CALL ${DATA.company.phone}</a>
            </div>
          </div>
        </div>
      </header>
    `;

    // Wire up Mega-Menu Interactions & Live Hover Preview Poster
    const headerEl = document.getElementById('site-header');
    const backdropEl = document.getElementById('nav-backdrop');
    const navServices = document.getElementById('nav-item-services');
    const navSeo = document.getElementById('nav-item-seo');

    function openMega(which) {
      if (which === 'services') {
        navServices.classList.add('open');
        navSeo.classList.remove('open');
        backdropEl.classList.add('active');
      } else if (which === 'seo') {
        navSeo.classList.add('open');
        navServices.classList.remove('open');
        backdropEl.classList.add('active');
      } else {
        navServices.classList.remove('open');
        navSeo.classList.remove('open');
        backdropEl.classList.remove('active');
      }
    }

    navServices.addEventListener('mouseenter', () => openMega('services'));
    navSeo.addEventListener('mouseenter', () => openMega('seo'));
    headerEl.addEventListener('mouseleave', () => openMega(null));
    backdropEl.addEventListener('click', () => openMega(null));

    document.querySelectorAll('[data-close-mega]').forEach((el) => {
      el.addEventListener('mouseenter', () => openMega(null));
    });

    // Live hover preview swapper inside Services Mega-Menu
    const prevImg = document.getElementById('mega-preview-img');
    const prevTitle = document.getElementById('mega-preview-title');
    const prevTag = document.getElementById('mega-preview-tag');
    document.querySelectorAll('[data-preview-img]').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (prevImg) prevImg.src = link.getAttribute('data-preview-img');
        if (prevTitle) prevTitle.textContent = link.getAttribute('data-preview-title');
        if (prevTag) prevTag.textContent = link.getAttribute('data-preview-tag');
      });
    });

    // Scroll compactness
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 24) {
          headerEl.classList.add('scrolled');
        } else {
          headerEl.classList.remove('scrolled');
        }
      },
      { passive: true }
    );

    // Mobile drawer toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileIcon = document.getElementById('mobile-menu-icon');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileIcon.textContent = isOpen ? '✕' : '☰';
      });
    }
  }

  /* ------------------------------------------------------------------------
     4. Mount New 6-Pillar Horizontal Gallery Service Deck (#service-showcase-mount)
     ------------------------------------------------------------------------ */
  function mountServiceShowcase() {
    const mountEl = document.getElementById('service-showcase-mount');
    if (!mountEl) return;

    let activeIdx = 0;

    function render() {
      const activeService = DATA.services[activeIdx];

      const horizontalPillarsHTML = DATA.services
        .map((s, idx) => {
          const isActive = idx === activeIdx;
          return `
            <button type="button" class="service-pillar-card ${isActive ? 'active' : ''}" data-service-idx="${idx}">
              <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:14px;">
                <span class="font-mono" style="font-size:11px;font-weight:700;padding:4px 9px;border-radius:999px;background:${isActive ? 'var(--cobalt)' : 'var(--bg-stone)'};color:${isActive ? '#ffffff' : 'var(--ink-900)'};">
                  0${idx + 1}
                </span>
                <img src="${s.heroImage}" alt="${s.shortTitle}" class="service-pillar-thumb" />
              </div>
              <div>
                <div class="font-mono" style="font-size:10px;opacity:0.75;text-transform:uppercase;">${s.category}</div>
                <div style="font-family:var(--font-display);font-size:16px;font-weight:800;margin-top:3px;line-height:1.2;">${s.shortTitle}</div>
              </div>
            </button>
          `;
        })
        .join('');

      const featuresHTML = activeService.features
        .slice(0, 4)
        .map(
          (f, i) => `
          <div style="padding:14px 16px;border-radius:16px;background:var(--bg-canvas);border:1px solid var(--border-strong);display:flex;align-items:flex-start;gap:12px;">
            <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--cobalt);width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">0${i + 1}</span>
            <div>
              <div style="font-size:13.5px;font-weight:800;color:var(--ink-950);">${f.title}</div>
              <div style="font-size:12px;color:var(--ink-600);margin-top:3px;line-height:1.5;">${f.description}</div>
            </div>
          </div>
        `
        )
        .join('');

      const funnelStepsHTML = activeService.processSteps
        .map(
          (st) => `
          <div style="padding:10px 14px;border-radius:12px;background:var(--bg-stone);border:1px solid var(--border-hairline);display:flex;align-items:center;gap:10px;">
            <span class="font-mono" style="font-size:11px;font-weight:700;color:var(--cobalt);">${st.step}</span>
            <span style="font-size:12.5px;font-weight:700;color:var(--ink-950);">${st.title}</span>
          </div>
        `
        )
        .join('');

      mountEl.innerHTML = `
        <section class="section bg-stone border-y">
          <div class="container">
            <!-- Section Masthead -->
            <div class="grid-12" style="align-items:end;margin-bottom:36px;">
              <div class="col-8">
                <span class="eyebrow"><span class="eyebrow-dot"></span><span>03 // Interactive Capability Atelier • 6 Specialist Engines</span></span>
                <h2 class="h2-display">
                  We can cover all the aspects of your
                  <span class="serif-italic">digital marketing</span> needs.
                </h2>
              </div>
              <div class="col-4" style="display:flex;justify-content:flex-end;">
                <a href="services.html" class="btn btn-outline">
                  <span>ALL 6 SERVICES DIRECTORY</span>
                  <span class="btn-arrow">↗</span>
                </a>
              </div>
            </div>

            <!-- Horizontal 6-Pillar Selector Strip -->
            <div class="service-gallery-strip">
              ${horizontalPillarsHTML}
            </div>

            <!-- Full-Width Split Architectural Studio Stage -->
            <div class="service-stage-card">
              <div class="grid-12" style="align-items:stretch;gap:32px;">
                <!-- Left Column: Editorial Story, Deliverables & Funnel -->
                <div class="col-7" style="display:flex;flex-direction:column;justify-content:space-between;">
                  <div>
                    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;">
                      <span class="font-mono" style="padding:5px 14px;border-radius:999px;background:var(--bg-ice);color:var(--cobalt);font-size:11.5px;font-weight:700;">
                        CAPABILITY 0${activeIdx + 1} // ${activeService.category.toUpperCase()}
                      </span>
                      <span class="font-mono" style="font-size:11.5px;color:var(--emerald);font-weight:700;">● Active Australian Campaigns</span>
                    </div>

                    <h3 class="h2-display" style="font-size:clamp(1.85rem,3vw,2.6rem);margin-bottom:10px;">
                      ${activeService.title}
                    </h3>
                    <p style="font-family:var(--font-display);font-size:17px;font-weight:700;color:var(--cobalt);margin-bottom:12px;">
                      ${activeService.tagline}
                    </p>
                    <p style="font-size:15px;color:var(--ink-600);line-height:1.7;margin-bottom:22px;">
                      ${activeService.summary}
                    </p>

                    <div class="grid-2" style="gap:12px;margin-bottom:20px;">
                      ${featuresHTML}
                    </div>
                  </div>

                  <div>
                    <div class="font-mono" style="font-size:10.5px;font-weight:700;color:var(--ink-500);text-transform:uppercase;margin-bottom:8px;">
                      4-Stage Execution Pipeline:
                    </div>
                    <div class="grid-4" style="gap:8px;margin-bottom:24px;">
                      ${funnelStepsHTML}
                    </div>

                    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-top:18px;border-top:1px solid var(--border-hairline);">
                      <div style="display:flex;flex-wrap:wrap;gap:12px;">
                        <a href="${activeService.slug}" class="btn btn-primary">
                          <span>EXPLORE ${activeService.shortTitle.toUpperCase()}</span>
                          <span class="btn-arrow">↗</span>
                        </a>
                        <a href="contact.html" class="btn btn-outline">GET A QUOTE</a>
                      </div>
                      <span class="font-mono" style="font-size:11.5px;color:var(--ink-500);">Adelaide HQ • Australia-Wide</span>
                    </div>
                  </div>
                </div>

                <!-- Right Column: Editorial Banner + Live Interactive Telemetry Card -->
                <div class="col-5" style="display:flex;flex-direction:column;gap:18px;">
                  <div style="position:relative;height:210px;border-radius:20px;overflow:hidden;border:2px solid var(--ink-950);">
                    <img src="${activeService.heroImage}" alt="${activeService.title}" style="width:100%;height:100%;object-fit:cover;" />
                    <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(11,15,25,0.05) 0%, rgba(11,15,25,0.82) 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:20px;color:#ffffff;">
                      <div class="font-mono" style="font-size:10.5px;color:#93c5fd;">LIVE SERVICE ARCHITECTURE</div>
                      <div style="font-family:var(--font-display);font-size:20px;font-weight:800;">${activeService.shortTitle} Studio</div>
                    </div>
                  </div>
                  ${renderServiceVisualHTML(activeService.id)}
                </div>
              </div>
            </div>
          </div>
        </section>
      `;

      mountEl.querySelectorAll('[data-service-idx]').forEach((btn) => {
        const idx = parseInt(btn.getAttribute('data-service-idx'), 10);
        btn.addEventListener('click', () => {
          activeIdx = idx;
          render();
        });
      });
    }

    render();
  }

  /* ------------------------------------------------------------------------
     5. Mount High-Contrast Command Theater Growth Simulator (#growth-graph-mount)
     ------------------------------------------------------------------------ */
  function mountGrowthGraph() {
    const mountEl = document.getElementById('growth-graph-mount');
    if (!mountEl) return;

    const channels = {
      ALL: {
        label: 'FULL ECOSYSTEM',
        visibility: 'Page 1 Dominance',
        traffic: '+57% Organic & Paid',
        leads: '+43% Conversion Rate',
        sales: 'Compounding ROI',
        curve: 'M 20 220 C 120 210, 200 165, 310 120 C 420 75, 510 45, 620 22',
        area: 'M 20 220 C 120 210, 200 165, 310 120 C 420 75, 510 45, 620 22 L 620 250 L 20 250 Z',
        desc: 'Combined SEO, PPC, Content, Social & Local Search working in a unified Australian growth engine.',
      },
      SEO: {
        label: 'SEO (#37 → #2)',
        visibility: '#37 → #21 → #11 → #2',
        traffic: '+57% Organic Sessions',
        leads: '+43% Inbound Leads',
        sales: '24/7 Organic Pipeline',
        curve: 'M 20 225 C 140 218, 230 180, 330 125 C 430 70, 520 40, 620 25',
        area: 'M 20 225 C 140 218, 230 180, 330 125 C 430 70, 520 40, 620 25 L 620 250 L 20 250 Z',
        desc: 'On-Page, Off-Page & Technical SEO compounding search rankings from Page 4 to top SERP positions.',
      },
      PPC: {
        label: 'PAID MEDIA (PPC)',
        visibility: 'Instant Top-of-SERP',
        traffic: '+34% High-Intent Clicks',
        leads: '+28% Landing Page CRO',
        sales: 'Pay Only For Results',
        curve: 'M 20 190 C 110 110, 220 95, 330 80 C 440 65, 530 50, 620 38',
        area: 'M 20 190 C 110 110, 220 95, 330 80 C 440 65, 530 50, 620 38 L 620 250 L 20 250 Z',
        desc: 'Immediate visibility across Google Search, Display, YouTube & Shopping with strict cost control.',
      },
      CONTENT: {
        label: 'CONTENT & E-E-A-T',
        visibility: 'E-E-A-T Authority',
        traffic: '+34% Topic Reach',
        leads: '+28% Buyer Trust',
        sales: 'Higher Close Rates',
        curve: 'M 20 222 C 130 205, 240 165, 350 130 C 450 95, 540 65, 620 42',
        area: 'M 20 222 C 130 205, 240 165, 350 130 C 450 95, 540 65, 620 42 L 620 250 L 20 250 Z',
        desc: 'Intent-aligned service pages, industry guides, and guest blogs that educate and convert.',
      },
      SOCIAL: {
        label: 'SMM & SMO',
        visibility: 'Multi-Platform Reach',
        traffic: '+38% Social Referrals',
        leads: '+26% Direct Inquiries',
        sales: 'Brand Loyalty & Orders',
        curve: 'M 20 215 C 120 185, 220 155, 330 120 C 440 90, 530 60, 620 40',
        area: 'M 20 215 C 120 185, 220 155, 330 120 C 440 90, 530 60, 620 40 L 620 250 L 20 250 Z',
        desc: 'Social Media Marketing (SMM) & Optimisation (SMO) across Facebook, Instagram, LinkedIn, YouTube & X.',
      },
      LOCAL: {
        label: 'LOCAL MAP PACK',
        visibility: 'Local Map 3-Pack',
        traffic: '+42% Map Directions',
        leads: '+35% Website Clicks',
        sales: 'Walk-Ins & Local Calls',
        curve: 'M 20 218 C 120 190, 220 145, 330 105 C 440 70, 530 45, 620 28',
        area: 'M 20 218 C 120 190, 220 145, 330 105 C 440 70, 530 45, 620 28 L 620 250 L 20 250 Z',
        desc: 'Google Business Profile optimisation, review management, and local citations driving suburb dominance.',
      },
    };

    let selectedKey = 'ALL';

    function render() {
      const ch = channels[selectedKey];
      mountEl.innerHTML = `
        <section class="section bg-canvas border-bottom">
          <div class="container">
            <!-- Section Header -->
            <div class="grid-12" style="align-items:end;margin-bottom:36px;">
              <div class="col-7">
                <span class="eyebrow"><span class="eyebrow-dot"></span><span>04 // Result-Driven Digital Marketing Telemetry</span></span>
                <h2 class="h2-display">
                  Enhance your online <span class="serif-italic">visibility</span>, visitor traffic and sales figure.
                </h2>
              </div>
              <div class="col-5">
                <p style="font-size:15px;color:var(--ink-600);">
                  Boost your online visibility to attract more visitors to your website by choosing to work with a reputable digital marketing agency like iDiGiFi. Experience increased engagement and sales with our expertly crafted strategies.
                </p>
              </div>
            </div>

            <!-- High-Contrast Ink Command Theater -->
            <div class="command-theater">
              <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.14);">
                <div>
                  <div class="font-mono" style="font-size:11px;font-weight:700;color:#93c5fd;text-transform:uppercase;">
                    ● LIVE TELEMETRY SIMULATOR // VISIBILITY → TRAFFIC → LEADS → SALES
                  </div>
                  <p style="font-size:14px;color:#cbd5e1;margin-top:4px;">${ch.desc}</p>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                  ${Object.keys(channels)
                    .map(
                      (k) => `
                    <button type="button" data-channel="${k}" style="padding:8px 14px;border-radius:999px;font-family:var(--font-mono);font-size:11px;font-weight:700;transition:all 0.2s;${
                        k === selectedKey
                          ? 'background:var(--cobalt);color:#ffffff;border:1px solid #60a5fa;box-shadow:0 0 20px rgba(0,71,255,0.5);'
                          : 'background:rgba(255,255,255,0.07);color:#cbd5e1;border:1px solid rgba(255,255,255,0.15);'
                      }">
                      ${channels[k].label}
                    </button>
                  `
                    )
                    .join('')}
                </div>
              </div>

              <!-- 4 Stage Telemetry Gauges -->
              <div class="grid-4" style="margin:26px 0;">
                <div style="padding:20px;border-radius:18px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);">
                  <div class="font-mono" style="font-size:10.5px;font-weight:700;color:#93c5fd;">STAGE 01 // VISIBILITY</div>
                  <div style="font-family:var(--font-display);font-size:21px;font-weight:800;color:#ffffff;margin-top:6px;">${ch.visibility}</div>
                  <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Search &amp; Map Presence</div>
                </div>
                <div style="padding:20px;border-radius:18px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);">
                  <div class="font-mono" style="font-size:10.5px;font-weight:700;color:#93c5fd;">STAGE 02 // TRAFFIC</div>
                  <div style="font-family:var(--font-display);font-size:21px;font-weight:800;color:#ffffff;margin-top:6px;">${ch.traffic}</div>
                  <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Qualified Australian Visitors</div>
                </div>
                <div style="padding:20px;border-radius:18px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);">
                  <div class="font-mono" style="font-size:10.5px;font-weight:700;color:#fbbf24;">STAGE 03 // LEADS</div>
                  <div style="font-family:var(--font-display);font-size:21px;font-weight:800;color:#ffffff;margin-top:6px;">${ch.leads}</div>
                  <div style="font-size:12px;color:#94a3b8;margin-top:2px;">Calls, Quotes &amp; Bookings</div>
                </div>
                <div style="padding:20px;border-radius:18px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.4);">
                  <div class="font-mono" style="font-size:10.5px;font-weight:700;color:#34d399;">STAGE 04 // SALES</div>
                  <div style="font-family:var(--font-display);font-size:21px;font-weight:800;color:#34d399;margin-top:6px;">${ch.sales}</div>
                  <div style="font-size:12px;color:#a7f3d0;margin-top:2px;">Compounding Revenue</div>
                </div>
              </div>

              <!-- SVG Chart + Photo Evidence Cards -->
              <div class="grid-12" style="align-items:stretch;">
                <div class="col-8" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.14);border-radius:22px;padding:24px;display:flex;align-items:center;">
                  <svg viewBox="0 0 640 260" style="width:100%;height:260px;overflow:visible;" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="growthAreaDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.4" />
                        <stop offset="100%" stop-color="#10b981" stop-opacity="0.02" />
                      </linearGradient>
                      <linearGradient id="growthStrokeDark" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#60a5fa" />
                        <stop offset="60%" stop-color="#3b82f6" />
                        <stop offset="100%" stop-color="#34d399" />
                      </linearGradient>
                    </defs>
                    <line x1="20" y1="50" x2="620" y2="50" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" />
                    <line x1="20" y1="100" x2="620" y2="100" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" />
                    <line x1="20" y1="150" x2="620" y2="150" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" />
                    <line x1="20" y1="200" x2="620" y2="200" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" />
                    <path d="${ch.area}" fill="url(#growthAreaDark)" />
                    <path d="${ch.curve}" fill="none" stroke="url(#growthStrokeDark)" stroke-width="4.5" stroke-linecap="round" />
                    <circle cx="95" cy="195" r="7" fill="#0b0f19" stroke="#60a5fa" stroke-width="3" />
                    <text x="95" y="178" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">01 VISIBILITY</text>
                    <circle cx="255" cy="145" r="7" fill="#0b0f19" stroke="#60a5fa" stroke-width="3" />
                    <text x="255" y="128" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">02 TRAFFIC</text>
                    <circle cx="425" cy="82" r="7" fill="#0b0f19" stroke="#fbbf24" stroke-width="3" />
                    <text x="425" y="65" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="700" font-family="JetBrains Mono, monospace">03 LEADS</text>
                    <circle cx="585" cy="32" r="8" fill="#0b0f19" stroke="#34d399" stroke-width="3.5" />
                    <text x="585" y="15" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700" font-family="JetBrains Mono, monospace">04 REVENUE</text>
                  </svg>
                </div>

                <div class="col-4" style="display:flex;flex-direction:column;gap:14px;">
                  <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:18px;overflow:hidden;flex:1;">
                    <img src="images/wp/digital-graph.jpg" alt="Digital Growth Graph" style="width:100%;height:115px;object-fit:cover;" />
                    <div style="padding:14px;">
                      <div class="font-mono" style="font-size:10px;font-weight:700;color:#93c5fd;text-transform:uppercase;">Live Search Telemetry</div>
                      <div style="font-size:13.5px;font-weight:700;color:#ffffff;margin-top:2px;">Data-Driven Ranking &amp; Conversion Lift</div>
                    </div>
                  </div>
                  <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:18px;overflow:hidden;flex:1;">
                    <img src="images/wp/improve-website.jpg" alt="Website Optimization" style="width:100%;height:115px;object-fit:cover;" />
                    <div style="padding:14px;">
                      <div class="font-mono" style="font-size:10px;font-weight:700;color:#34d399;text-transform:uppercase;">Conversion Architecture</div>
                      <div style="font-size:13.5px;font-weight:700;color:#ffffff;margin-top:2px;">Turn Search Impressions Into Sales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;

      mountEl.querySelectorAll('[data-channel]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedKey = btn.getAttribute('data-channel');
          render();
        });
      });
    }

    render();
  }

  /* ------------------------------------------------------------------------
     6. Mount Interactive FAQ Studio (#faq-mount)
     ------------------------------------------------------------------------ */
  function mountFAQAccordion() {
    const mountEl = document.getElementById('faq-mount');
    if (!mountEl) return;

    const defaultFilter = mountEl.getAttribute('data-default-category') || 'ALL';
    let selectedCat = defaultFilter;
    let openIndex = 0;

    function render() {
      const items =
        selectedCat === 'ALL'
          ? DATA.faqs
          : DATA.faqs.filter((f) => f.category === selectedCat);

      const faqsHTML = items
        .map((faq, idx) => {
          const isOpen = idx === openIndex;
          return `
            <div class="faq-item ${isOpen ? 'open' : ''}">
              <button type="button" class="faq-question" data-faq-idx="${idx}">
                <div style="display:flex;align-items:center;gap:14px;">
                  <span class="font-mono" style="font-size:11.5px;font-weight:700;color:#ffffff;background:${isOpen ? 'var(--cobalt)' : 'var(--ink-950)'};padding:4px 10px;border-radius:999px;">0${idx + 1}</span>
                  <span>${faq.question}</span>
                </div>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">${faq.answer}</div>
            </div>
          `;
        })
        .join('');

      mountEl.innerHTML = `
        <section class="section bg-stone border-top">
          <div class="container">
            <div class="grid-12" style="align-items:start;">
              <!-- Left Sticky Editorial FAQ Masthead -->
              <div class="col-4">
                <span class="eyebrow"><span class="eyebrow-dot"></span><span>Knowledge &amp; Clarity</span></span>
                <h2 class="h2-display">Frequently Asked <span class="serif-italic">Questions.</span></h2>
                <p style="font-size:15px;color:var(--ink-600);margin:14px 0 24px;">
                  Transparent answers on how our Adelaide team structures SEO, PPC, and Social Media campaigns for measurable ROI.
                </p>

                <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px;">
                  ${[
                    { id: 'ALL', label: 'All Questions (10)' },
                    { id: 'General', label: 'Digital Marketing Strategy' },
                    { id: 'SEO', label: 'Search Engine Optimisation (SEO)' },
                  ]
                    .map(
                      (tab) => `
                    <button type="button" data-faq-cat="${tab.id}" style="padding:12px 16px;border-radius:14px;text-align:left;font-family:var(--font-mono);font-size:12px;font-weight:700;display:flex;justify-content:space-between;align-items:center;${
                        selectedCat === tab.id
                          ? 'background:var(--ink-950);color:#ffffff;box-shadow:4px 4px 0px var(--cobalt);'
                          : 'background:#ffffff;color:var(--ink-800);border:1px solid var(--border-strong);'
                      }">
                      <span>${tab.label}</span>
                      <span>→</span>
                    </button>
                  `
                    )
                    .join('')}
                </div>

                <div class="card" style="padding:18px;background:#ffffff;">
                  <div class="font-mono" style="font-size:10.5px;color:var(--cobalt);font-weight:700;">DIRECT ADELAIDE DESK</div>
                  <div style="font-family:var(--font-display);font-size:16px;font-weight:800;margin:4px 0 10px;">Have a specific project question?</div>
                  <a href="${DATA.company.phoneHref}" class="btn btn-primary btn-sm" style="width:100%;">CALL ${DATA.company.phone}</a>
                </div>
              </div>

              <!-- Right Accordion Column -->
              <div class="col-8">
                ${faqsHTML}
              </div>
            </div>
          </div>
        </section>
      `;

      mountEl.querySelectorAll('[data-faq-cat]').forEach((btn) => {
        btn.addEventListener('click', () => {
          selectedCat = btn.getAttribute('data-faq-cat');
          openIndex = 0;
          render();
        });
      });

      mountEl.querySelectorAll('[data-faq-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-faq-idx'), 10);
          openIndex = openIndex === idx ? -1 : idx;
          render();
        });
      });
    }

    render();
  }

  /* ------------------------------------------------------------------------
     7. Mount Concierge Contact & Audit Studio (#contact-mount)
     ------------------------------------------------------------------------ */
  function mountContactSection() {
    const mountEl = document.getElementById('contact-mount');
    if (!mountEl) return;

    const customHeadline =
      mountEl.getAttribute('data-headline') ||
      'Ready to make your business impossible to ignore?';

    const serviceOptions = DATA.services
      .map((s) => `<option value="${s.title}">${s.title}</option>`)
      .join('');

    mountEl.innerHTML = `
      <section class="section bg-ice-gradient bg-grid-light border-top">
        <div class="container">
          <div class="grid-12" style="align-items:stretch;">
            <!-- Left Column: Architectural Dark Concierge Card -->
            <div class="col-5" style="background:var(--ink-950);color:#ffffff;border-radius:28px;padding:36px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:8px 8px 0px var(--cobalt);">
              <div>
                <span class="font-mono" style="font-size:11px;font-weight:700;color:#93c5fd;text-transform:uppercase;letter-spacing:0.08em;">
                  ● ADELAIDE GROWTH CONCIERGE
                </span>
                <h2 style="font-family:var(--font-display);font-size:clamp(1.85rem,3vw,2.6rem);font-weight:800;line-height:1.1;margin-top:10px;color:#ffffff;">
                  ${customHeadline}
                </h2>
                <p style="font-size:14.5px;color:#cbd5e1;margin-top:12px;line-height:1.65;">
                  We maximise your traffic using transparent, data-driven SEO and digital marketing methods for fast, impactful results across Australia.
                </p>

                <!-- Operator Photo Banner -->
                <div style="position:relative;height:180px;border-radius:18px;overflow:hidden;margin:22px 0;border:1.5px solid rgba(255,255,255,0.2);">
                  <img src="images/wp/contact-operator.webp" alt="Adelaide Growth Desk" style="width:100%;height:100%;object-fit:cover;" />
                  <div style="position:absolute;bottom:10px;left:10px;right:10px;background:rgba(11,15,25,0.88);backdrop-filter:blur(8px);padding:10px 14px;border-radius:12px;display:flex;align-items:center;justify-content:space-between;">
                    <div>
                      <div class="font-mono" style="font-size:10px;color:#34d399;font-weight:700;">● 92+ ADVISORS ONLINE</div>
                      <div style="font-size:12.5px;font-weight:700;color:#ffffff;">Adelaide CBD Strategy Desk</div>
                    </div>
                    <img src="images/wp/google-review.png" alt="Google Reviews" style="height:24px;width:auto;background:#ffffff;padding:3px 6px;border-radius:6px;" />
                  </div>
                </div>
              </div>

              <div style="display:flex;flex-direction:column;gap:12px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.14);">
                <a href="${DATA.company.phoneHref}" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);">
                  <div>
                    <div class="font-mono" style="font-size:10px;color:#93c5fd;">DIRECT PHONE</div>
                    <div style="font-family:var(--font-display);font-size:17px;font-weight:800;color:#ffffff;">${DATA.company.phone}</div>
                  </div>
                  <span style="color:#34d399;font-weight:800;">CALL ↗</span>
                </a>
                <a href="${DATA.company.emailHref}" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:14px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);">
                  <div>
                    <div class="font-mono" style="font-size:10px;color:#93c5fd;">EMAIL ENQUIRIES</div>
                    <div style="font-family:var(--font-display);font-size:15px;font-weight:800;color:#ffffff;">${DATA.company.email}</div>
                  </div>
                  <span style="color:#93c5fd;font-weight:800;">EMAIL ↗</span>
                </a>
                <div style="padding:12px 16px;border-radius:14px;background:rgba(255,255,255,0.04);font-size:12.5px;color:#cbd5e1;">
                  📍 <strong>Adelaide HQ:</strong> ${DATA.company.address}
                </div>
              </div>
            </div>

            <!-- Right Column: Architectural White Quote Form -->
            <div class="col-7">
              <div class="card-architectural" style="padding:40px;height:100%;">
                <div id="quote-form-container">
                  <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding-bottom:20px;border-bottom:1px solid var(--border-hairline);margin-bottom:24px;">
                    <div>
                      <span class="font-mono" style="font-size:11px;font-weight:700;color:var(--cobalt);">FREE DIGITAL GROWTH BRIEFING</span>
                      <h3 class="h3-display" style="font-size:26px;margin-top:4px;">Request Your Free Audit &amp; Quote</h3>
                    </div>
                    <span class="font-mono" style="font-size:11px;font-weight:700;color:var(--emerald);background:var(--bg-emerald-soft);padding:6px 12px;border-radius:999px;border:1px solid #a7f3d0;">
                      ✓ Obligation-Free
                    </span>
                  </div>

                  <form id="idigifi-quote-form">
                    <div class="grid-2" style="gap:16px;">
                      <div class="form-group">
                        <label class="form-label" for="q-name">Your Full Name *</label>
                        <input id="q-name" type="text" required class="form-input" placeholder="e.g. Sarah Mitchell" />
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="q-email">Business Email *</label>
                        <input id="q-email" type="email" required class="form-input" placeholder="you@company.com.au" />
                      </div>
                    </div>

                    <div class="grid-2" style="gap:16px;">
                      <div class="form-group">
                        <label class="form-label" for="q-phone">Australian Phone (+61) *</label>
                        <div style="display:flex;border:1.5px solid var(--border-strong);border-radius:14px;overflow:hidden;background:var(--bg-canvas);">
                          <span class="font-mono" style="padding:14px 14px;background:var(--bg-stone);font-weight:700;font-size:13.5px;border-right:1px solid var(--border-strong);">+61</span>
                          <input id="q-phone" type="tel" required class="form-input" style="border:none;border-radius:0;" placeholder="412 345 678" />
                        </div>
                        <div id="q-phone-error" style="font-size:12px;color:var(--coral);font-weight:700;margin-top:4px;display:none;"></div>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="q-website">Website URL</label>
                        <input id="q-website" type="text" class="form-input" placeholder="https://yourbusiness.com.au" />
                      </div>
                    </div>

                    <div class="grid-2" style="gap:16px;">
                      <div class="form-group">
                        <label class="form-label" for="q-service">Primary Service Focus *</label>
                        <select id="q-service" class="form-select">
                          ${serviceOptions}
                          <option value="Full-Service Digital Marketing Package">Full-Service Digital Marketing Package</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="q-timeline">Target Launch Window</label>
                        <select id="q-timeline" class="form-select">
                          <option value="Immediately">Immediately / This Week</option>
                          <option value="Within 2-4 Weeks">Within 2–4 Weeks</option>
                          <option value="Next Month">Next Month</option>
                          <option value="Exploring Options">Exploring Strategy Options</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label" for="q-message">Tell Us About Your Growth Goals</label>
                      <textarea id="q-message" rows="3" class="form-textarea" placeholder="Which Australian cities, keywords, or revenue targets are you aiming to capture?"></textarea>
                    </div>

                    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;margin-top:10px;">
                      <button type="submit" class="btn btn-primary btn-lg">
                        <span>GET MY FREE AUDIT &amp; QUOTE</span>
                        <span class="btn-arrow">↗</span>
                      </button>
                      <span class="font-mono" style="font-size:11.5px;color:var(--ink-500);">100% Privacy Protected • ABN ${DATA.company.abn}</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const form = document.getElementById('idigifi-quote-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = document.getElementById('q-name').value.trim();
        const phoneVal = document.getElementById('q-phone').value.replace(/\D/g, '');
        const serviceVal = document.getElementById('q-service').value;
        const errEl = document.getElementById('q-phone-error');

        if (phoneVal.length < 8) {
          errEl.textContent = 'Please enter a valid Australian phone number (at least 8 digits).';
          errEl.style.display = 'block';
          return;
        }
        errEl.style.display = 'none';

        const container = document.getElementById('quote-form-container');
        container.innerHTML = `
          <div style="padding:48px 20px;text-align:center;">
            <div style="width:68px;height:68px;border-radius:50%;background:var(--ink-950);color:#34d399;font-size:30px;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:4px 4px 0px var(--cobalt);">
              ✓
            </div>
            <h3 class="h3-display" style="font-size:28px;">Strategy Request Logged</h3>
            <p style="font-size:15.5px;color:var(--ink-600);max-width:460px;margin:12px auto 26px;">
              Thank you, <strong>${nameVal}</strong>. Our Adelaide growth strategists are preparing your custom assessment for <strong style="color:var(--cobalt);">${serviceVal}</strong>.
            </p>
            <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
              <a href="${DATA.company.phoneHref}" class="btn btn-primary btn-sm">CALL ${DATA.company.phone} NOW</a>
              <a href="portfolio.html" class="btn btn-outline btn-sm">VIEW 15 CASE STUDIES</a>
            </div>
          </div>
        `;
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Mount Editorial Studio Footer (#site-footer-mount)
     ------------------------------------------------------------------------ */
  function mountFooter() {
    const mountEl = document.getElementById('site-footer-mount');
    if (!mountEl) return;

    mountEl.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <!-- Giant Editorial Masthead Banner inside Footer -->
          <div style="padding-bottom:44px;margin-bottom:44px;border-bottom:1px solid var(--border-strong);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;">
            <div>
              <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--cobalt);">IDIGIFI PTY LTD // ABN ${DATA.company.abn}</div>
              <div style="font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;color:var(--ink-950);line-height:1.05;margin-top:4px;">
                More <span class="serif-italic">leads.</span> More <span class="serif-italic">conversions.</span> More <span class="serif-italic">sales.</span>
              </div>
            </div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a href="contact.html" class="btn btn-primary">START YOUR PROJECT ↗</a>
              <a href="${DATA.company.phoneHref}" class="btn btn-outline">${DATA.company.phone}</a>
            </div>
          </div>

          <div class="grid-4" style="gap:32px;padding-bottom:48px;border-bottom:1px solid var(--border-strong);">
            <!-- Col 1 -->
            <div>
              <a href="index.html" class="brand-logo" style="margin-bottom:16px;">
                <div class="brand-logo-badge">
                  <img src="images/logo-white.png" alt="iDiGiFi" />
                </div>
                <div class="brand-meta">
                  <span class="brand-meta-tag">Atelier // AU</span>
                  <span class="brand-meta-sub">Adelaide HQ</span>
                </div>
              </a>
              <p style="font-size:13.5px;color:var(--ink-600);margin-bottom:16px;line-height:1.65;">
                ${DATA.company.aboutLead}
              </p>
              <div style="font-size:13px;color:var(--ink-800);display:flex;flex-direction:column;gap:6px;">
                <div><strong>📍 HQ:</strong> ${DATA.company.address}</div>
                <div><strong>✆ Tel:</strong> <a href="${DATA.company.phoneHref}" style="color:var(--cobalt);font-weight:700;">${DATA.company.phone}</a></div>
                <div><strong>✉ Mail:</strong> <a href="${DATA.company.emailHref}">${DATA.company.email}</a></div>
              </div>
            </div>

            <!-- Col 2 -->
            <div>
              <div class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--ink-950);text-transform:uppercase;margin-bottom:14px;">01 // 6 Core Services</div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <a href="services.html" class="footer-link" style="font-weight:800;color:var(--cobalt);">All Digital Services Hub →</a>
                ${DATA.services.map((s) => `<a href="${s.slug}" class="footer-link">${s.title}</a>`).join('')}
              </div>
            </div>

            <!-- Col 3 -->
            <div>
              <div class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--ink-950);text-transform:uppercase;margin-bottom:14px;">02 // Australian SEO Hubs</div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <a href="seo.html" class="footer-link" style="font-weight:800;color:var(--cobalt);">SEO Agency Australia Hub →</a>
                ${DATA.australianLocations
                  .map((l) => `<a href="seo.html?city=${l.slug}" class="footer-link">SEO Agency ${l.city} (${l.state})</a>`)
                  .join('')}
              </div>
            </div>

            <!-- Col 4 -->
            <div>
              <div class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--ink-950);text-transform:uppercase;margin-bottom:14px;">03 // Sectors &amp; Studio</div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                ${DATA.industrySeoPages
                  .map((ind) => `<a href="seo.html?industry=${ind.slug}" class="footer-link">${ind.title}</a>`)
                  .join('')}
                <a href="about.html" class="footer-link">About iDiGiFi</a>
                <a href="portfolio.html" class="footer-link">Client Portfolio (15 Case Studies)</a>
                <a href="blog.html" class="footer-link">2026 Journal &amp; Insights</a>
                <a href="contact.html" class="footer-link">Contact Us</a>
                <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div style="padding-top:24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;font-size:12.5px;color:var(--ink-600);">
            <div>© ${new Date().getFullYear()} ${DATA.company.legalName} (ABN ${DATA.company.abn}). Crafted in Adelaide, South Australia.</div>
            <div class="font-mono" style="font-size:11.5px;color:var(--ink-900);font-weight:700;">SEARCH → VISIBILITY → TRAFFIC → LEADS → CONVERSIONS → REVENUE</div>
          </div>
        </div>
      </footer>
    `;
  }

  /* ------------------------------------------------------------------------
     9. Homepage Interactive Command Deck & Approach Blueprint
     ------------------------------------------------------------------------ */
  function initHomePageInteractions() {
    const ecosystemMount = document.getElementById('hero-ecosystem-mount');
    if (ecosystemMount) {
      const stages = [
        {
          label: 'SEARCH',
          title: 'High-Intent Australian Buyer Queries',
          rank: '#37 → #12',
          traffic: '+24% Impressions',
          conv: 'Keyword Intent Mapped',
          serpTitle: 'Best Digital & Commercial Specialists Australia',
          serpDesc: 'Technical schema, semantic search architecture & intent clusters.',
        },
        {
          label: 'VISIBILITY',
          title: 'Page #1 Organic & Local Map 3-Pack Dominance',
          rank: '#2 TOP SERP',
          traffic: '+57% Organic Reach',
          conv: '4.9★ Map Pack Trust',
          serpTitle: 'iDiGiFi Client — Ranked #1–#2 on Google.com.au',
          serpDesc: 'Dominating commercial keywords across Adelaide, Sydney & Melbourne.',
        },
        {
          label: 'TRAFFIC',
          title: 'Qualified Commercial Visitors (Zero Vanity Clicks)',
          rank: 'CTR 8.4%',
          traffic: '+57% Active Sessions',
          conv: 'Low Bounce UX',
          serpTitle: 'High-Velocity Organic + Paid Search Acquisition',
          serpDesc: 'Every visitor arrives with active commercial buying intent.',
        },
        {
          label: 'LEADS',
          title: 'Inbound Phone Calls, Quote Requests & Bookings',
          rank: '+43% Leads',
          traffic: '+64% Map Calls',
          conv: '4.8x ROAS Pipeline',
          serpTitle: 'Direct Attribution: Calls, Forms & Showroom Visits',
          serpDesc: 'Conversion-engineered landing pages turn visitors into warm inquiries.',
        },
        {
          label: 'CONVERSIONS',
          title: 'CRO-Engineered Customer Acquisition',
          rank: '+43% CVR',
          traffic: '99/100 CWV Speed',
          conv: 'High-Trust E-E-A-T',
          serpTitle: 'Frictionless Mobile & Desktop Conversion Funnels',
          serpDesc: 'Verified reviews, clear value propositions & rapid load speeds.',
        },
        {
          label: 'REVENUE',
          title: 'Compounding Long-Term Business Growth & ROI',
          rank: '#1 ROI Engine',
          traffic: '520+ Active Clients',
          conv: '956+ Projects Done',
          serpTitle: 'More Leads. More Conversions. More Sales. Guaranteed.',
          serpDesc: 'Transparent monthly reporting tied directly to your bottom line.',
        },
      ];

      let activeStage = 1;

      function renderEcosystem() {
        const st = stages[activeStage];
        ecosystemMount.innerHTML = `
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;">
            <span class="font-mono" style="font-size:10.5px;font-weight:700;color:var(--cobalt);">
              ● INTERACTIVE GROWTH COMMAND DECK (CLICK STAGE)
            </span>
            <span class="font-mono" style="font-size:10.5px;font-weight:700;color:var(--emerald);background:var(--bg-emerald-soft);padding:3px 10px;border-radius:999px;">
              0${activeStage + 1} / 06 ACTIVE
            </span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:16px;">
            ${stages
              .map(
                (item, i) => `
              <button type="button" class="eco-stage-btn ${i === activeStage ? 'active' : ''}" data-eco-idx="${i}">
                <div style="font-size:9px;opacity:0.75;">0${i + 1}</div>
                <div style="margin-top:2px;">${item.label}</div>
              </button>
            `
              )
              .join('')}
          </div>

          <!-- Simulated Live Google.com.au SERP + Telemetry Preview -->
          <div style="padding:16px;border-radius:16px;background:var(--bg-canvas);border:1.5px solid var(--border-strong);margin-bottom:14px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <span class="font-mono" style="font-size:10px;color:var(--ink-500);">google.com.au // live-telemetry</span>
              <span class="font-mono" style="font-size:10.5px;font-weight:700;color:#ffffff;background:var(--ink-950);padding:2px 9px;border-radius:999px;">${st.rank}</span>
            </div>
            <div style="font-family:var(--font-display);font-size:15.5px;font-weight:800;color:var(--cobalt);">${st.serpTitle}</div>
            <div style="font-size:12.5px;color:var(--ink-600);margin-top:3px;">${st.serpDesc}</div>
          </div>

          <div class="grid-3" style="gap:10px;">
            <div style="padding:10px 12px;border-radius:12px;background:var(--bg-ice);border:1px solid #bfdbfe;">
              <div class="font-mono" style="font-size:9.5px;color:var(--cobalt);font-weight:700;">RANKING / REACH</div>
              <div style="font-family:var(--font-display);font-size:14px;font-weight:800;color:var(--ink-950);margin-top:2px;">${st.rank}</div>
            </div>
            <div style="padding:10px 12px;border-radius:12px;background:var(--bg-emerald-soft);border:1px solid #a7f3d0;">
              <div class="font-mono" style="font-size:9.5px;color:var(--emerald);font-weight:700;">TRAFFIC LIFT</div>
              <div style="font-family:var(--font-display);font-size:14px;font-weight:800;color:var(--ink-950);margin-top:2px;">${st.traffic}</div>
            </div>
            <div style="padding:10px 12px;border-radius:12px;background:var(--bg-stone);border:1px solid var(--border-strong);">
              <div class="font-mono" style="font-size:9.5px;color:var(--ink-600);font-weight:700;">OUTCOME</div>
              <div style="font-family:var(--font-display);font-size:14px;font-weight:800;color:var(--ink-950);margin-top:2px;">${st.conv}</div>
            </div>
          </div>
        `;

        ecosystemMount.querySelectorAll('[data-eco-idx]').forEach((btn) => {
          const idx = parseInt(btn.getAttribute('data-eco-idx'), 10);
          btn.addEventListener('click', () => {
            activeStage = idx;
            renderEcosystem();
          });
        });
      }

      renderEcosystem();
    }
  }

  /* ------------------------------------------------------------------------
     10. Service Detail Page Dynamic Renderer (#service-detail-mount)
         Redesigned in Swiss Editorial Split-Stage Architecture
     ------------------------------------------------------------------------ */
  function initServiceDetailPage() {
    const mountEl = document.getElementById('service-detail-mount');
    if (!mountEl) return;

    const serviceId = mountEl.getAttribute('data-service-id') || 'on-page-seo';
    const service = DATA.services.find((s) => s.id === serviceId) || DATA.services[0];
    const otherServices = DATA.services.filter((s) => s.id !== service.id);

    mountEl.innerHTML = `
      <!-- 1. Architectural Editorial Service Hero -->
      <section class="hero-atelier bg-ice-gradient bg-grid-light border-bottom">
        <div class="container">
          <!-- Breadcrumb & Category Pill -->
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:28px;">
            <span class="eyebrow" style="margin-bottom:0;"><span class="eyebrow-dot"></span><span>iDiGiFi Specialist Capability // ${service.category}</span></span>
            <div class="font-mono" style="font-size:12px;color:var(--ink-600);">
              <a href="index.html">Home</a> / <a href="services.html">Services</a> / <strong style="color:var(--cobalt);">${service.shortTitle}</strong>
            </div>
          </div>

          <div class="grid-12" style="align-items:stretch;gap:32px;">
            <!-- Left Architectural Headline Box -->
            <div class="col-7" style="display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <h1 class="h1-display">${service.title}</h1>
                <p style="font-family:var(--font-display);font-size:21px;font-weight:700;color:var(--cobalt);margin-top:16px;">
                  ${service.tagline}
                </p>
                <p style="font-size:16px;color:var(--ink-600);margin-top:14px;line-height:1.75;">
                  ${service.summary}
                </p>
              </div>

              <div style="margin-top:28px;padding-top:24px;border-top:1px solid var(--border-strong);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;">
                <div style="display:flex;flex-wrap:wrap;gap:12px;">
                  <a href="contact.html" class="btn btn-primary btn-lg">
                    <span>GET A FREE ${service.shortTitle.toUpperCase()} AUDIT</span>
                    <span class="btn-arrow">↗</span>
                  </a>
                  <a href="portfolio.html" class="btn btn-outline btn-lg">CASE STUDIES</a>
                </div>
                <div class="font-mono" style="font-size:11.5px;color:var(--ink-600);">
                  ✆ Direct: <strong style="color:var(--ink-950);">${DATA.company.phone}</strong>
                </div>
              </div>
            </div>

            <!-- Right Interactive Studio Telemetry Visual -->
            <div class="col-5">
              ${renderServiceVisualHTML(service.id)}
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Magazine Editorial Spread: Deep Overview + Framed Photography -->
      <section class="section bg-white border-bottom">
        <div class="container">
          <div class="grid-12" style="align-items:center;gap:40px;">
            <div class="col-5">
              <div class="card-architectural" style="padding:14px;background:var(--bg-stone);">
                <img src="${service.heroImage}" alt="${service.title}" style="width:100%;height:340px;object-fit:cover;border-radius:18px;border:1.5px solid var(--ink-950);" />
                <div style="padding:16px 8px 6px;display:flex;justify-content:space-between;align-items:center;">
                  <div>
                    <div class="font-mono" style="font-size:10.5px;color:var(--cobalt);font-weight:700;">ADELAIDE STRATEGY ATELIER</div>
                    <div style="font-family:var(--font-display);font-size:15px;font-weight:800;">${service.title}</div>
                  </div>
                  <span class="font-mono" style="padding:4px 10px;border-radius:999px;background:var(--bg-emerald-soft);color:var(--emerald);font-size:11px;font-weight:700;">100% Transparent</span>
                </div>
              </div>
            </div>

            <div class="col-7">
              <span class="eyebrow"><span class="eyebrow-dot"></span><span>01 // Strategic Mandate</span></span>
              <h2 class="h2-display" style="margin-bottom:20px;">
                Why <span class="serif-italic">${service.shortTitle}</span> is essential for sustainable Australian growth.
              </h2>
              ${service.fullDescription
                .map(
                  (p) => `<p style="font-size:16px;color:var(--ink-700);margin-bottom:16px;line-height:1.75;">${p}</p>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Exposed Swiss Grid: 6 Core Deliverables -->
      <section class="section bg-stone border-bottom">
        <div class="container">
          <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:44px;">
            <div style="max-width:720px;">
              <span class="eyebrow"><span class="eyebrow-dot"></span><span>02 // Complete Scope of Work</span></span>
              <h2 class="h2-display">What our <span class="serif-italic">${service.shortTitle}</span> service includes.</h2>
            </div>
            <a href="contact.html" class="btn btn-primary btn-sm">REQUEST CUSTOM SCOPE ↗</a>
          </div>

          <div class="grid-3" style="gap:22px;">
            ${service.features
              .map(
                (f, i) => `
              <div class="card-architectural" style="padding:30px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
                    <span class="font-mono" style="padding:5px 12px;border-radius:999px;background:var(--ink-950);color:#ffffff;font-size:11.5px;font-weight:700;">DELIVERABLE 0${i + 1}</span>
                    <span style="color:var(--cobalt);font-weight:800;font-size:18px;">✦</span>
                  </div>
                  <h3 class="h3-display" style="font-size:21px;margin-bottom:10px;">${f.title}</h3>
                  <p style="font-size:14.5px;color:var(--ink-600);line-height:1.65;">${f.description}</p>
                </div>
                <div style="margin-top:20px;padding-top:12px;border-top:1px solid var(--border-hairline);font-family:var(--font-mono);font-size:11px;color:var(--cobalt);font-weight:700;">
                  ✓ Included in iDiGiFi Campaign
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- 4. 4-Stage Execution Blueprint & Photo-Backed Benefits -->
      <section class="section bg-white border-bottom">
        <div class="container">
          <div style="max-width:720px;margin-bottom:36px;">
            <span class="eyebrow"><span class="eyebrow-dot"></span><span>03 // Execution Blueprint</span></span>
            <h2 class="h2-display">How our <span class="serif-italic">${service.shortTitle}</span> funnel converts visibility into revenue.</h2>
          </div>

          <div class="swiss-grid-4" style="margin-bottom:84px;">
            ${service.processSteps
              .map(
                (st) => `
              <div class="swiss-cell">
                <div>
                  <div class="font-mono swiss-cell-index" style="font-size:11px;font-weight:700;color:var(--cobalt);margin-bottom:10px;">PHASE // ${st.step}</div>
                  <div class="swiss-metric-num" style="font-family:var(--font-display);font-size:44px;font-weight:800;color:var(--ink-950);line-height:1;margin-bottom:12px;">${st.step}</div>
                  <h3 style="font-family:var(--font-display);font-size:20px;font-weight:800;margin-bottom:10px;">${st.title}</h3>
                  <p class="swiss-cell-sub" style="font-size:14px;color:var(--ink-600);line-height:1.65;">${st.description}</p>
                </div>
                <div class="font-mono swiss-cell-sub" style="margin-top:20px;font-size:11px;color:var(--emerald);font-weight:700;">→ VERIFIED STAGE</div>
              </div>
            `
              )
              .join('')}
          </div>

          <div style="max-width:720px;margin-bottom:36px;">
            <span class="eyebrow"><span class="eyebrow-dot"></span><span>04 // Measurable Commercial Impact</span></span>
            <h2 class="h2-display">Key Benefits of <span class="serif-italic">${service.title}</span></h2>
          </div>

          <div class="grid-2" style="gap:24px;">
            ${service.benefits
              .map(
                (b, idx) => `
              <div class="card" style="display:grid;grid-template-columns:200px 1fr;align-items:stretch;border:1.5px solid var(--border-strong);">
                <div style="border-right:1.5px solid var(--border-strong);overflow:hidden;">
                  <img src="${b.image}" alt="${b.title}" style="width:100%;height:100%;min-height:180px;object-fit:cover;" />
                </div>
                <div style="padding:26px;display:flex;flex-direction:column;justify-content:center;">
                  <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--cobalt);margin-bottom:6px;">OUTCOME 0${idx + 1}</div>
                  <h3 class="h3-display" style="font-size:20px;margin-bottom:8px;">${b.title}</h3>
                  <p style="font-size:14px;color:var(--ink-600);line-height:1.65;">${b.description}</p>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- 5. Cross-Channel Ecosystem Navigation -->
      <section class="section-sm bg-canvas border-bottom">
        <div class="container">
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:28px;">
            <h2 class="h3-display" style="font-size:26px;">Pair ${service.shortTitle} With Complementary Channels</h2>
            <a href="services.html" class="font-mono" style="font-size:12px;font-weight:700;color:var(--cobalt);">VIEW ALL 6 SERVICES →</a>
          </div>
          <div class="grid-5">
            ${otherServices
              .map(
                (s) => `
              <a href="${s.slug}" class="card" style="display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <img src="${s.heroImage}" alt="${s.shortTitle}" style="width:100%;height:115px;object-fit:cover;border-bottom:1px solid var(--border-hairline);" />
                  <div style="padding:16px;">
                    <div class="font-mono" style="font-size:10px;color:var(--cobalt);font-weight:700;">${s.category}</div>
                    <div style="font-family:var(--font-display);font-size:15.5px;font-weight:800;color:var(--ink-950);margin-top:4px;">${s.shortTitle}</div>
                  </div>
                </div>
                <div style="padding:10px 16px;border-top:1px solid var(--border-subtle);display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:11px;color:var(--cobalt);font-weight:700;">
                  <span>Explore Capability</span><span>↗</span>
                </div>
              </a>
            `
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------------------------
     11. SEO Hub Page Interactive Simulator & City/Industry Spotlight
     ------------------------------------------------------------------------ */
  function initSEOPage() {
    const simMount = document.getElementById('seo-simulator-mount');
    if (simMount) {
      const steps = DATA.seoPageData.rankingSimulation;
      let stepIdx = 4;

      function renderSim() {
        const cur = steps[stepIdx];
        simMount.innerHTML = `
          <div class="card-architectural" style="padding:28px;background:#ffffff;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid var(--border-hairline);margin-bottom:18px;">
              <span class="font-mono" style="font-size:11px;font-weight:700;color:var(--cobalt);">LIVE RANKING TRAJECTORY (#37 → #2)</span>
              <span class="font-mono" style="font-size:11px;font-weight:700;color:#ffffff;background:var(--emerald);padding:3px 10px;border-radius:999px;">+57% Traffic • +43% Conv.</span>
            </div>

            <div class="grid-5" style="gap:8px;margin-bottom:18px;">
              ${steps
                .map(
                  (st, i) => `
                <button type="button" data-sim-step="${i}" style="padding:10px 6px;border-radius:12px;text-align:center;border:1.5px solid ${
                    i === stepIdx ? 'var(--ink-950)' : 'var(--border-hairline)'
                  };background:${i === stepIdx ? 'var(--ink-950)' : 'var(--bg-canvas)'};color:${
                    i === stepIdx ? '#ffffff' : 'var(--ink-900)'
                  };box-shadow:${i === stepIdx ? '3px 3px 0px var(--cobalt)' : 'none'};">
                  <div class="font-mono" style="font-size:9.5px;opacity:0.8;">Step 0${i + 1}</div>
                  <div style="font-family:var(--font-display);font-size:18px;font-weight:800;">#${st.position}</div>
                </button>
              `
                )
                .join('')}
            </div>

            <div class="grid-2" style="gap:12px;margin-bottom:16px;">
              <div style="padding:16px;border-radius:16px;background:var(--bg-ice);border:1px solid #bfdbfe;">
                <div class="font-mono" style="font-size:10px;font-weight:700;color:var(--cobalt);">GOOGLE SERP POSITION</div>
                <div style="font-family:var(--font-display);font-size:34px;font-weight:800;color:var(--ink-950);margin-top:4px;">#${cur.position}</div>
                <div style="font-size:12px;color:var(--cobalt);font-weight:700;">${cur.label}</div>
              </div>
              <div style="padding:16px;border-radius:16px;background:var(--bg-emerald-soft);border:1px solid #a7f3d0;">
                <div class="font-mono" style="font-size:10px;font-weight:700;color:var(--emerald);">ORGANIC TRAFFIC LIFT</div>
                <div style="font-family:var(--font-display);font-size:34px;font-weight:800;color:var(--ink-950);margin-top:4px;">${cur.trafficLift}</div>
                <div style="font-size:12px;color:var(--emerald);font-weight:700;">Conversions: ${cur.conversionLift}</div>
              </div>
            </div>

            <div style="padding:16px;border-radius:16px;background:var(--bg-canvas);border:1px solid var(--border-strong);">
              <div class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--ink-950);margin-bottom:4px;">${cur.month}</div>
              <div style="font-size:12.5px;color:var(--ink-600);margin-bottom:12px;">${cur.focus}</div>
              <div class="grid-5" style="gap:10px;align-items:end;height:70px;">
                ${steps
                  .map(
                    (st, i) => `
                  <div style="height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;">
                    <div style="width:100%;height:${st.barHeight}%;border-radius:6px 6px 0 0;background:${
                      i <= stepIdx ? 'var(--cobalt)' : '#d5cfc4'
                    };"></div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `;

        simMount.querySelectorAll('[data-sim-step]').forEach((btn) => {
          btn.addEventListener('click', () => {
            stepIdx = parseInt(btn.getAttribute('data-sim-step'), 10);
            renderSim();
          });
        });
      }

      renderSim();
    }

    const spotlightMount = document.getElementById('seo-spotlight-mount');
    if (spotlightMount) {
      const params = new URLSearchParams(window.location.search);
      const citySlug = params.get('city');
      const indSlug = params.get('industry');

      function showCitySpotlight(slug) {
        const loc = DATA.australianLocations.find((l) => l.slug === slug);
        if (!loc) return;
        spotlightMount.innerHTML = `
          <div class="card-architectural" style="padding:32px;margin-bottom:40px;background:var(--bg-ice);">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:16px;">
              <div style="max-width:760px;">
                <span class="eyebrow" style="background:#ffffff;">📍 Active Regional Hub: ${loc.city}, ${loc.state} • ${loc.marketFocus}</span>
                <h2 class="h2-display" style="margin-bottom:12px;">${loc.headline}</h2>
                <p style="font-size:15.5px;color:var(--ink-700);line-height:1.65;">${loc.description}</p>
              </div>
              <a href="contact.html" class="btn btn-primary">GET A FREE ${loc.city.toUpperCase()} SEO AUDIT ↗</a>
            </div>
          </div>
        `;
        spotlightMount.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      function showIndustrySpotlight(slug) {
        const ind = DATA.industrySeoPages.find((i) => i.slug === slug);
        if (!ind) return;
        spotlightMount.innerHTML = `
          <div class="card-architectural" style="padding:32px;margin-bottom:40px;background:var(--bg-ice);">
            <div class="grid-12">
              <div class="col-7">
                <span class="eyebrow" style="background:#ffffff;">🏢 Industry Specialist SEO • ${ind.industry}</span>
                <h2 class="h2-display" style="margin-bottom:10px;">${ind.headline}</h2>
                <p style="font-size:16px;font-weight:700;color:var(--cobalt);margin-bottom:12px;">${ind.subheadline}</p>
                ${ind.description.map((d) => `<p style="font-size:14.5px;color:var(--ink-700);margin-bottom:10px;">${d}</p>`).join('')}
                <div style="margin-top:18px;">
                  <a href="contact.html" class="btn btn-primary">GET A ${ind.industry.toUpperCase()} QUOTE ↗</a>
                </div>
              </div>
              <div class="col-5">
                <img src="${ind.image}" alt="${ind.title}" style="width:100%;height:240px;object-fit:cover;border-radius:18px;border:2px solid var(--ink-950);" />
              </div>
            </div>
          </div>
        `;
        spotlightMount.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      if (citySlug) showCitySpotlight(citySlug);
      if (indSlug) showIndustrySpotlight(indSlug);

      document.querySelectorAll('[data-city-slug]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          showCitySpotlight(el.getAttribute('data-city-slug'));
        });
      });

      document.querySelectorAll('[data-ind-slug]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          showIndustrySpotlight(el.getAttribute('data-ind-slug'));
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     12. Portfolio Lookbook Grid & Lightbox Modal Controller
     ------------------------------------------------------------------------ */
  function initPortfolioPage() {
    const gridEl = document.getElementById('portfolio-grid-mount');
    const modalEl = document.getElementById('portfolio-modal');
    if (!gridEl) return;

    let currentFilter = 'ALL';

    function filterProjects() {
      return DATA.portfolioProjects.filter((p) => {
        if (currentFilter === 'ALL') return true;
        if (currentFilter === 'SEO') return p.service === 'SEO';
        if (currentFilter === 'MULTI') return p.service.includes('SMO') || p.service.includes('SMM');
        if (currentFilter === 'AUTO_TRADES') {
          return [
            'Automobile',
            'Flooring Services',
            'Road & Commercial Marking',
            'Equipment Hire',
            'Home Renovation',
            'Landscape and Firewood Supplies',
          ].includes(p.industry);
        }
        if (currentFilter === 'PRO_IT') {
          return [
            'IT & Telecommunications',
            'IT & Digital Infrastructure',
            'Accounting Firms',
            'Immigration & Education',
          ].includes(p.industry);
        }
        return true;
      });
    }

    function openProjectModal(proj) {
      if (!modalEl) return;
      modalEl.innerHTML = `
        <div class="modal-card">
          <div style="position:relative;height:280px;background:var(--bg-stone);padding:24px;display:flex;align-items:center;justify-content:center;border-bottom:2px solid var(--ink-950);">
            <img src="${proj.image}" alt="${proj.client}" style="max-height:100%;max-width:100%;object-fit:contain;border-radius:12px;" />
            <button type="button" id="close-portfolio-modal" style="position:absolute;top:16px;right:16px;width:40px;height:40px;border-radius:50%;background:var(--ink-950);color:#ffffff;font-weight:800;font-size:16px;">✕</button>
          </div>
          <div style="padding:32px;">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px;">
              <div>
                <div class="font-mono" style="font-size:11px;color:var(--cobalt);font-weight:700;">VERIFIED CASE STUDY // ${proj.workType}</div>
                <h3 class="h3-display" style="font-size:28px;margin-top:4px;">Company Name: ${proj.client}</h3>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <span class="font-mono" style="padding:6px 14px;border-radius:999px;background:var(--ink-950);color:#ffffff;font-size:11.5px;font-weight:700;">Service Provided: ${proj.service}</span>
                <span class="font-mono" style="padding:6px 14px;border-radius:999px;background:var(--bg-stone);border:1px solid var(--border-strong);font-size:11.5px;font-weight:700;">Industry: ${proj.industry}</span>
              </div>
            </div>

            <div class="grid-2" style="gap:18px;margin-bottom:24px;">
              <div style="padding:20px;border-radius:18px;background:var(--bg-canvas);border:1.5px solid var(--border-strong);">
                <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--ink-500);margin-bottom:6px;">01 // INDUSTRY OBJECTIVE</div>
                <p style="font-size:14.5px;color:var(--ink-800);line-height:1.65;">${proj.challenge}</p>
              </div>
              <div style="padding:20px;border-radius:18px;background:var(--bg-emerald-soft);border:1.5px solid #a7f3d0;">
                <div class="font-mono" style="font-size:11px;font-weight:700;color:var(--emerald);margin-bottom:6px;">02 // IDIGIFI STRATEGIC EXECUTION</div>
                <p style="font-size:14.5px;color:var(--ink-800);line-height:1.65;">${proj.execution}</p>
              </div>
            </div>

            <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-top:18px;border-top:1px solid var(--border-hairline);">
              <div style="display:flex;flex-wrap:wrap;gap:10px;">
                ${proj.highlights
                  .map(
                    (h) => `<span class="font-mono" style="font-size:12px;font-weight:700;color:var(--cobalt);">✓ ${h}</span>`
                  )
                  .join('')}
              </div>
              <a href="contact.html" class="btn btn-primary btn-sm">START SIMILAR PROJECT ↗</a>
            </div>
          </div>
        </div>
      `;
      modalEl.classList.add('open');
      document.getElementById('close-portfolio-modal').addEventListener('click', () => {
        modalEl.classList.remove('open');
      });
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) modalEl.classList.remove('open');
      });
    }

    function renderGrid() {
      const list = filterProjects();
      const countEl = document.getElementById('portfolio-count');
      if (countEl) {
        countEl.textContent = `Showing ${list.length} of ${DATA.portfolioProjects.length} Case Studies`;
      }

      gridEl.innerHTML = list
        .map(
          (p, idx) => `
          <div class="card-architectural" style="cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;" data-proj-id="${p.id}">
            <div style="position:relative;height:240px;background:var(--bg-stone);padding:16px;border-bottom:2px solid var(--ink-950);overflow:hidden;">
              <img src="${p.image}" alt="${p.client}" style="width:100%;height:100%;object-fit:cover;object-position:top;border-radius:12px;border:1px solid var(--border-strong);" />
              <span class="font-mono" style="position:absolute;top:26px;left:26px;background:var(--ink-950);color:#ffffff;padding:5px 12px;border-radius:999px;font-size:10.5px;font-weight:700;">
                0${idx + 1} // ${p.service}
              </span>
              <span style="position:absolute;bottom:26px;right:26px;width:42px;height:42px;border-radius:50%;background:var(--cobalt);color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:800;border:2px solid var(--ink-950);">
                ↗
              </span>
            </div>
            <div style="padding:24px;flex:1;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div class="font-mono" style="display:flex;justify-content:space-between;font-size:11px;color:var(--cobalt);font-weight:700;margin-bottom:6px;">
                  <span>${p.industry}</span>
                  <span style="color:var(--ink-500);">${p.location}</span>
                </div>
                <h3 class="h3-display" style="font-size:22px;">${p.client}</h3>
                <div class="font-mono" style="font-size:11px;color:var(--ink-500);margin-top:2px;">Service Provided: ${p.service} • ${p.workType}</div>
                <p style="font-size:13.5px;color:var(--ink-600);margin-top:10px;line-height:1.55;">${p.challenge}</p>
              </div>
              <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border-hairline);display:flex;flex-wrap:wrap;gap:6px;">
                ${p.highlights
                  .map(
                    (h) => `<span class="font-mono" style="font-size:10.5px;padding:4px 9px;border-radius:6px;background:var(--bg-canvas);border:1px solid var(--border-strong);color:var(--ink-900);font-weight:700;">${h}</span>`
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `
        )
        .join('');

      gridEl.querySelectorAll('[data-proj-id]').forEach((card) => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-proj-id');
          const proj = DATA.portfolioProjects.find((x) => x.id === id);
          if (proj) openProjectModal(proj);
        });
      });
    }

    document.querySelectorAll('[data-portfolio-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-portfolio-filter');
        document.querySelectorAll('[data-portfolio-filter]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid();
      });
    });

    renderGrid();
  }

  /* ------------------------------------------------------------------------
     13. Blog Journal Controller & Article Reader Modal
     ------------------------------------------------------------------------ */
  function initBlogPage() {
    const gridEl = document.getElementById('blog-grid-mount');
    const modalEl = document.getElementById('blog-modal');
    if (!gridEl) return;

    gridEl.innerHTML = DATA.blogInsights
      .map(
        (post, idx) => `
        <article class="card-architectural" style="cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;" data-blog-idx="${idx}">
          <div>
            <div style="position:relative;height:215px;overflow:hidden;border-bottom:2px solid var(--ink-950);">
              <img src="${post.image}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;" />
              <span class="font-mono" style="position:absolute;top:14px;left:14px;background:var(--ink-950);color:#ffffff;padding:5px 12px;border-radius:999px;font-size:10.5px;font-weight:700;">
                0${idx + 1} // ${post.category}
              </span>
            </div>
            <div style="padding:24px;">
              <div class="font-mono" style="display:flex;justify-content:space-between;font-size:11px;color:var(--ink-500);margin-bottom:10px;">
                <span>📅 ${post.date}</span>
                <span>⏱ ${post.readTime}</span>
              </div>
              <h2 class="h3-display" style="font-size:20px;margin-bottom:10px;">${post.title}</h2>
              <p style="font-size:14px;color:var(--ink-600);line-height:1.65;">${post.excerpt}</p>
            </div>
          </div>
          <div style="padding:14px 24px;border-top:1px solid var(--border-hairline);background:var(--bg-canvas);display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:11.5px;">
            <span style="color:var(--ink-600);">iDiGiFi Adelaide Journal</span>
            <span style="color:var(--cobalt);font-weight:700;">Read Briefing ↗</span>
          </div>
        </article>
      `
      )
      .join('');

    gridEl.querySelectorAll('[data-blog-idx]').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-blog-idx'), 10);
        const post = DATA.blogInsights[idx];
        if (!post || !modalEl) return;

        modalEl.innerHTML = `
          <div class="modal-card">
            <div style="position:relative;height:250px;overflow:hidden;border-bottom:2px solid var(--ink-950);">
              <img src="${post.image}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;" />
              <button type="button" id="close-blog-modal" style="position:absolute;top:16px;right:16px;width:40px;height:40px;border-radius:50%;background:var(--ink-950);color:#ffffff;font-weight:800;">✕</button>
            </div>
            <div style="padding:32px;">
              <div class="font-mono" style="font-size:11.5px;font-weight:700;color:var(--cobalt);margin-bottom:8px;">
                ${post.category} • ${post.date} • ${post.readTime}
              </div>
              <h3 class="h3-display" style="font-size:28px;margin-bottom:14px;">${post.title}</h3>
              <p style="font-size:16px;color:var(--ink-800);line-height:1.75;margin-bottom:16px;">${post.excerpt}</p>
              <p style="font-size:15px;color:var(--ink-600);line-height:1.75;margin-bottom:26px;">
                At iDiGiFi, we focus on connecting search visibility, technical architecture, and high-intent conversion pathways so that traffic translates directly into qualified customer enquiries and revenue across Australia.
              </p>
              <a href="contact.html" class="btn btn-primary">DISCUSS THIS STRATEGY WITH US ↗</a>
            </div>
          </div>
        `;
        modalEl.classList.add('open');
        document.getElementById('close-blog-modal').addEventListener('click', () => {
          modalEl.classList.remove('open');
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) modalEl.classList.remove('open');
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     14. Animated Number Counters & Scroll Reveal Observer
     ------------------------------------------------------------------------ */
  function initCountersAndReveals() {
    const counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10) || 0;
            const suffix = el.getAttribute('data-suffix') || '+';
            const duration = 1400;
            const start = performance.now();

            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target) + suffix;
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = target + suffix;
              }
            }
            requestAnimationFrame(tick);
            obs.unobserve(el);
          });
        },
        { threshold: 0.25 }
      );
      counters.forEach((c) => counterObserver.observe(c));

      const revealEls = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealEls.forEach((r) => revealObserver.observe(r));
    } else {
      counters.forEach((el) => {
        el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '+');
      });
      document.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
    }
  }

  /* ------------------------------------------------------------------------
     15. Initialize Everything on DOMContentLoaded
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    mountNavbar();
    mountServiceShowcase();
    mountGrowthGraph();
    mountFAQAccordion();
    mountContactSection();
    mountFooter();
    initHomePageInteractions();
    initServiceDetailPage();
    initSEOPage();
    initPortfolioPage();
    initBlogPage();
    initCountersAndReveals();
  });
})();

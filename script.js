(() => {
  'use strict';

  /* ---------------- i18n dictionary for static UI copy ---------------- */
  const UI = {
    en: {
      nav: { about:'About', map:'Career Map', experience:'Experience', cases:'Case Studies', gallery:'Gallery', skills:'Skills', contact:'Contact' },
      heroCoord: '07°45\'56"S 110°22\'42"E — SLEMAN, DIY',
      heroLede: 'Turning GNSS field measurements, satellite imagery, and spatial datasets into cadastral maps, environmental analysis, and WebGIS products used by government offices, survey firms, and communities across Indonesia.',
      ctaMap: 'Explore the career map', ctaCV: 'Download CV',
      aboutEyebrow:'Profile', aboutHeading:'About',
      careerEyebrow:'Interactive career journey WebGIS', careerHeading:'Explore where the work happened',
      careerSub:'Every marker is a real institution, village, or field site — education, government, cadastral survey, disaster response, and community mapping. Switch basemaps, filter by category, and click a marker for the full record.',
      cpEmpty:'Click a marker on the map to open its full career record.',
      expEyebrow:'Professional experience', expHeading:'Field execution to office delivery',
      expSub:'Six roles spanning cadastral survey, government internships, and community-led mapping, each with its own project, responsibilities, and delivered result.',
      caseEyebrow:'Selected GIS case studies', caseHeading:'From problem to spatial output',
      caseSub:'Seven projects broken into overview, problem, methodology, data, tools, and output — the way a technical case study should read.',
      galEyebrow:'GIS output gallery', galHeading:'Mapping and spatial-analysis output',
      galSub:'Selected outputs from survey documentation, mapping, remote sensing, environmental GIS, disaster mapping, and community projects.',
      skillsEyebrow:'Technical skills', skillsHeading:'Tools across field, lab, and browser',
      eduEyebrow:'Education', eduHeading:'Academic foundation',
      leadEyebrow:'Organizational leadership', leadHeading:'Beyond the technical work',
      achEyebrow:'Recognition', achHeading:'Achievements',
      contactHeading:'Looking for a GIS analyst, cadastral surveyor, or geospatial developer?',
      contactSub:'Open to full-time roles, freelance cadastral survey work, and geospatial project collaboration.',
      footerTagline:'GIS analysis, cadastral surveying, remote sensing, and WebGIS development.',
      email:'Email', whatsapp:'WhatsApp', linkedin:'LinkedIn', github:'GitHub', cv:'Download CV',
      overview:'Overview', problem:'Problem', methodology:'Methodology', dataUsed:'Data used', tools:'Tools', output:'Output',
      allCategory:'All', clickToEnlarge:'',
      categories:{ education:'Education', government:'Government', survey:'Survey', disaster:'Disaster', community:'Community' },
      galCategories:{ all:'All', survey:'Survey Documentation', mapping:'Mapping Output', 'remote-sensing':'Remote Sensing', environmental:'Environmental GIS', disaster:'Disaster Mapping', community:'Community Project', webgis:'WebGIS' },
      figLabels:{ location:'Location', email:'Email', phone:'Phone', github:'GitHub' }
    },
    id: {
      nav: { about:'Tentang', map:'Peta Karier', experience:'Pengalaman', cases:'Studi Kasus', gallery:'Galeri', skills:'Keahlian', contact:'Kontak' },
      heroCoord: '07°45\'56"LS 110°22\'42"BT — SLEMAN, DIY',
      heroLede: 'Mengubah hasil pengukuran GNSS lapangan, citra satelit, dan dataset spasial menjadi peta kadastral, analisis lingkungan, dan produk WebGIS yang digunakan instansi pemerintah, perusahaan survei, dan masyarakat di Indonesia.',
      ctaMap:'Jelajahi peta karier', ctaCV:'Unduh CV',
      aboutEyebrow:'Profil', aboutHeading:'Tentang Saya',
      careerEyebrow:'WebGIS interaktif perjalanan karier', careerHeading:'Jelajahi lokasi setiap pekerjaan',
      careerSub:'Setiap marker adalah institusi, desa, atau lokasi lapangan nyata — pendidikan, pemerintahan, survei kadastral, respons bencana, dan pemetaan masyarakat. Ganti basemap, filter kategori, dan klik marker untuk melihat detail lengkap.',
      cpEmpty:'Klik marker pada peta untuk membuka detail lengkap riwayat karier.',
      expEyebrow:'Pengalaman profesional', expHeading:'Dari eksekusi lapangan hingga penyerahan hasil',
      expSub:'Enam peran yang mencakup survei kadastral, magang pemerintahan, dan pemetaan berbasis masyarakat, masing-masing dengan project, tanggung jawab, dan hasil tersendiri.',
      caseEyebrow:'Studi kasus GIS terpilih', caseHeading:'Dari masalah menjadi keluaran spasial',
      caseSub:'Tujuh project yang diuraikan menjadi overview, masalah, metodologi, data, alat, dan hasil — sebagaimana studi kasus teknis semestinya disusun.',
      galEyebrow:'Galeri keluaran GIS', galHeading:'Hasil pemetaan dan analisis spasial',
      galSub:'Keluaran terpilih dari dokumentasi survei, hasil pemetaan, penginderaan jauh, GIS lingkungan, pemetaan bencana, dan project masyarakat.',
      skillsEyebrow:'Keahlian teknis', skillsHeading:'Perangkat lintas lapangan, laboratorium, dan browser',
      eduEyebrow:'Pendidikan', eduHeading:'Fondasi akademik',
      leadEyebrow:'Kepemimpinan organisasi', leadHeading:'Di luar kemampuan teknis',
      achEyebrow:'Pengakuan', achHeading:'Prestasi',
      contactHeading:'Membutuhkan analis GIS, surveyor kadastral, atau geospatial developer?',
      contactSub:'Terbuka untuk posisi penuh waktu, pekerjaan survei kadastral lepas, dan kolaborasi project geospasial.',
      footerTagline:'Analisis GIS, survei kadastral, penginderaan jauh, dan pengembangan WebGIS.',
      email:'Email', whatsapp:'WhatsApp', linkedin:'LinkedIn', github:'GitHub', cv:'Unduh CV',
      overview:'Overview', problem:'Masalah', methodology:'Metodologi', dataUsed:'Data yang digunakan', tools:'Alat', output:'Hasil',
      allCategory:'Semua', clickToEnlarge:'',
      categories:{ education:'Pendidikan', government:'Pemerintahan', survey:'Survei', disaster:'Bencana', community:'Masyarakat' },
      galCategories:{ all:'Semua', survey:'Dokumentasi Survei', mapping:'Hasil Pemetaan', 'remote-sensing':'Penginderaan Jauh', environmental:'GIS Lingkungan', disaster:'Pemetaan Bencana', community:'Project Masyarakat', webgis:'WebGIS' },
      figLabels:{ location:'Lokasi', email:'Email', phone:'Telepon', github:'GitHub' }
    }
  };

  const CATEGORY_COLOR = {
    education:'#57d8e6', government:'#d8b467', survey:'#8bc46e', disaster:'#e2694f', community:'#b48eea'
  };

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const tr = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] ?? v.en ?? Object.values(v)[0]) : v;

  let lang = localStorage.getItem('af_lang') || 'en';
  let siteData = null, careerData = null, projectsData = null;
  let activeCategories = new Set(['education','government','survey','disaster','community']);
  let galleryFilter = 'all';
  let map, markerLayer, currentTiles = {};

  async function loadData(){
    const [site, career, projects] = await Promise.all([
      fetch('data/site.json').then(r=>r.json()),
      fetch('data/career.json').then(r=>r.json()),
      fetch('data/projects.json').then(r=>r.json())
    ]);
    siteData = site; careerData = career; projectsData = projects;
  }

  /* ---------------- static UI text ---------------- */
  function applyStaticText(){
    const u = UI[lang];
    document.documentElement.lang = lang;
    $$('.site-nav a').forEach(a=>{
      const href = a.getAttribute('href').replace('#','');
      const key = { about:'about', 'career-map':'map', experience:'experience', 'case-studies':'cases', gallery:'gallery', skills:'skills', contact:'contact' }[href];
      if(key) a.textContent = u.nav[key];
    });
    $('#heroCoord').textContent = u.heroCoord;
    $('#heroLede').textContent = u.heroLede;
    $('#ctaMap').textContent = u.ctaMap;
    $('#ctaCV').textContent = u.ctaCV;
    $('#aboutEyebrow').textContent = u.aboutEyebrow;
    $('#aboutHeading').textContent = u.aboutHeading;
    $('#careerEyebrow').textContent = u.careerEyebrow;
    $('#careerHeading').textContent = u.careerHeading;
    $('#careerSub').textContent = u.careerSub;
    $('#cpEmptyText').textContent = u.cpEmpty;
    $('#expEyebrow').textContent = u.expEyebrow;
    $('#expHeading').textContent = u.expHeading;
    $('#expSub').textContent = u.expSub;
    $('#caseEyebrow').textContent = u.caseEyebrow;
    $('#caseHeading').textContent = u.caseHeading;
    $('#caseSub').textContent = u.caseSub;
    $('#galEyebrow').textContent = u.galEyebrow;
    $('#galHeading').textContent = u.galHeading;
    $('#galSub').textContent = u.galSub;
    $('#skillsEyebrow').textContent = u.skillsEyebrow;
    $('#skillsHeading').textContent = u.skillsHeading;
    $('#eduEyebrow').textContent = u.eduEyebrow;
    $('#eduHeading').textContent = u.eduHeading;
    $('#leadEyebrow').textContent = u.leadEyebrow;
    $('#leadHeading').textContent = u.leadHeading;
    $('#achEyebrow').textContent = u.achEyebrow;
    $('#achHeading').textContent = u.achHeading;
    $('#contactHeading').textContent = u.contactHeading;
    $('#contactSub').textContent = u.contactSub;
    $('#footerTagline').textContent = u.footerTagline;
    $$('#langToggle span').forEach(s=>s.classList.toggle('active', s.dataset.lang===lang));
  }

  /* ---------------- hero stats ---------------- */
  function renderStats(){
    $('#statPlate').innerHTML = siteData.stats.map(s=>`
      <div class="stat-cell"><strong>${s.value}</strong><span>${tr(s.label, lang)}</span></div>
    `).join('');
  }

  /* ---------------- about ---------------- */
  function renderAbout(){
    $('#aboutText').textContent = tr(siteData.profile.about, lang);
    const u = UI[lang];
    const p = siteData.profile;
    $('#aboutFigures').innerHTML = `
      <dt>${u.figLabels.location}</dt><dd>${p.location}</dd>
      <dt>${u.figLabels.email}</dt><dd>${p.email}</dd>
      <dt>${u.figLabels.phone}</dt><dd>${p.phoneDisplay}</dd>
      <dt>${u.figLabels.github}</dt><dd>github.com/${p.github.split('/').pop()}</dd>
    `;
    $('#capabilityGrid').innerHTML = siteData.capabilities.map(c=>`
      <article class="capability-card reveal"><h3>${tr(c.title,lang)}</h3><p>${tr(c.description,lang)}</p></article>
    `).join('');
  }

  /* ---------------- career journey webgis ---------------- */
  function initMap(){
    map = L.map('careerMap', { scrollWheelZoom:false }).setView([-2.2, 109], 5);

    currentTiles.street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'&copy; OpenStreetMap contributors' });
    currentTiles.satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom:19, attribution:'Tiles &copy; Esri' });
    currentTiles.dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom:19, attribution:'&copy; OpenStreetMap contributors &copy; CARTO' });

    currentTiles.street.addTo(map);
    markerLayer = L.layerGroup().addTo(map);

    $$('#basemapRow button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        $$('#basemapRow button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        Object.values(currentTiles).forEach(t=>map.removeLayer(t));
        currentTiles[btn.dataset.basemap].addTo(map);
      });
    });
  }

  function markerIcon(category){
    const color = CATEGORY_COLOR[category] || '#57d8e6';
    return L.divIcon({
      className:'',
      html:`<div style="width:16px;height:16px;border-radius:50%;background:${color};border:2px solid rgba(5,14,12,.85);box-shadow:0 0 0 4px ${color}33"></div>`,
      iconSize:[16,16], iconAnchor:[8,8]
    });
  }

  function renderLegend(){
    const u = UI[lang];
    $('#legendRow').innerHTML = Object.keys(CATEGORY_COLOR).map(cat=>`
      <button class="legend-chip ${activeCategories.has(cat)?'active':''}" data-cat="${cat}">
        <span class="swatch" style="background:${CATEGORY_COLOR[cat]}"></span>${u.categories[cat]}
      </button>
    `).join('');
    $$('.legend-chip').forEach(chip=>{
      chip.addEventListener('click', ()=>{
        const cat = chip.dataset.cat;
        if(activeCategories.has(cat)) activeCategories.delete(cat); else activeCategories.add(cat);
        chip.classList.toggle('active');
        renderMarkers();
      });
    });
  }

  function renderMarkers(){
    markerLayer.clearLayers();
    const bounds = [];
    careerData.filter(p=>activeCategories.has(p.category)).forEach(point=>{
      const marker = L.marker([point.lat, point.lng], { icon: markerIcon(point.category) }).addTo(markerLayer);
      bounds.push([point.lat, point.lng]);
      marker.bindTooltip(tr(point.institution, lang), { direction:'top', offset:[0,-6] });
      marker.on('click', ()=> openCareerPanel(point));
    });
    if(bounds.length) map.fitBounds(bounds, { padding:[36,36] });
  }

  function openCareerPanel(point){
    const u = UI[lang];
    const color = CATEGORY_COLOR[point.category];
    const photo = point.photo ? `<img class="cp-photo" src="assets/${point.photo}" alt="${tr(point.institution,lang)}">` : '';
    $('#careerPanel').innerHTML = `
      <span class="cp-category" style="background:${color}22;color:${color}"><span class="swatch" style="background:${color}"></span>${u.categories[point.category]}</span>
      ${photo}
      <h3>${tr(point.institution, lang)}</h3>
      <div class="cp-meta"><span>${point.location}</span><span>${point.year}</span></div>
      <div class="cp-block"><h4>${tr(point.role, lang)}</h4></div>
      <div class="cp-block"><h4>${lang==='id'?'Aktivitas':'Activities'}</h4><ul>${tr(point.activities, lang).map(a=>`<li>${a}</li>`).join('')}</ul></div>
      <div class="cp-block"><h4>${lang==='id'?'Alat':'Tools'}</h4><div class="tool-chip-row">${point.tools.map(t=>`<span class="tool-chip">${t}</span>`).join('')}</div></div>
      <div class="cp-block"><h4>${u.output}</h4><p>${tr(point.output, lang)}</p></div>
    `;
  }

  /* ---------------- experience ---------------- */
  function renderExperience(){
    $('#expGrid').innerHTML = siteData.experience.map(e=>`
      <article class="exp-card reveal">
        <div class="exp-top"><h3>${e.institution}</h3><span class="exp-period mono">${e.period}</span></div>
        <div class="exp-role">${tr(e.role, lang)} — ${e.location}</div>
        <div class="exp-project">${tr(e.project, lang)}</div>
        <ul>${tr(e.responsibilities, lang).map(r=>`<li>${r}</li>`).join('')}</ul>
        <div class="exp-achieve">${tr(e.achievement, lang)}</div>
      </article>
    `).join('');
    initReveal();
  }

  /* ---------------- case studies ---------------- */
  function renderCaseStudies(){
    const u = UI[lang];
    $('#caseList').innerHTML = projectsData.map((p,i)=>`
      <div class="case-item" data-id="${p.id}">
        <button class="case-trigger">
          <div class="case-trigger-left">
            <span class="case-index mono">${String(i+1).padStart(2,'0')}</span>
            <div><h3>${tr(p.title, lang)}</h3><span class="case-tag">${p.year}</span></div>
          </div>
          <span class="case-plus">+</span>
        </button>
        <div class="case-body">
          <div class="case-body-inner">
            <div class="case-cover"><img src="assets/${p.cover}" alt="${tr(p.title,lang)}" loading="lazy"></div>
            <div class="case-fields">
              <div class="case-field"><h5>${u.overview}</h5><p>${tr(p.overview, lang)}</p></div>
              <div class="case-field"><h5>${u.problem}</h5><p>${tr(p.problem, lang)}</p></div>
              <div class="case-field"><h5>${u.methodology}</h5><p>${tr(p.methodology, lang)}</p></div>
            </div>
            <div class="case-fields">
              <div class="case-field"><h5>${u.dataUsed}</h5><p>${tr(p.dataUsed, lang)}</p></div>
              <div class="case-field"><h5>${u.tools}</h5><div class="case-tools">${p.tools.map(t=>`<span class="tool-chip">${t}</span>`).join('')}</div></div>
              <div class="case-field"><h5>${u.output}</h5><p>${tr(p.output, lang)}</p></div>
            </div>
            ${p.gallery && p.gallery.length ? `<div class="case-gallery">${p.gallery.map(g=>`
              <figure><img src="assets/${g.image}" alt="${tr(g.caption,lang)}" loading="lazy" data-lightbox='${JSON.stringify({image:g.image, caption: tr(g.caption,lang), meta: tr(p.title,lang)}).replace(/'/g,"&apos;")}'>
              <figcaption>${tr(g.caption, lang)}</figcaption></figure>
            `).join('')}</div>` : ''}
          </div>
        </div>
      </div>
    `).join('');

    $$('.case-trigger').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const item = btn.closest('.case-item');
        const wasOpen = item.classList.contains('open');
        $$('.case-item').forEach(i=>i.classList.remove('open'));
        if(!wasOpen) item.classList.add('open');
      });
    });
    bindLightboxTriggers();
  }

  /* ---------------- gallery ---------------- */
  function renderGalleryFilters(){
    const u = UI[lang];
    const cats = ['all', ...new Set(siteData.gallery.map(g=>g.category))];
    $('#galleryFilters').innerHTML = cats.map(c=>`
      <button class="legend-chip ${galleryFilter===c?'active':''}" data-galcat="${c}">${u.galCategories[c] || c}</button>
    `).join('');
    $$('[data-galcat]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        galleryFilter = btn.dataset.galcat;
        renderGalleryFilters();
        renderGalleryGrid();
      });
    });
  }

  function renderGalleryGrid(){
    const u = UI[lang];
    const items = siteData.gallery.filter(g=> galleryFilter==='all' || g.category===galleryFilter);
    $('#galleryGrid').innerHTML = items.map(g=>`
      <article class="gallery-tile reveal" data-lightbox='${JSON.stringify({image:g.image, caption: tr(g.description,lang), meta: `${tr(g.title,lang)} · ${g.location} · ${g.year}`}).replace(/'/g,"&apos;")}'>
        <div class="g-img"><img src="assets/${g.image}" alt="${tr(g.title,lang)}" loading="lazy"><span class="g-cat mono">${u.galCategories[g.category]||g.category}</span></div>
        <div class="gallery-body">
          <h4>${tr(g.title, lang)}</h4>
          <div class="gallery-meta">${g.location} · ${g.year} · ${g.project}</div>
          <p>${tr(g.description, lang)}</p>
        </div>
      </article>
    `).join('');
    initReveal();
    bindLightboxTriggers();
  }

  /* ---------------- lightbox ---------------- */
  function bindLightboxTriggers(){
    $$('[data-lightbox]').forEach(el=>{
      el.addEventListener('click', ()=>{
        try{
          const info = JSON.parse(el.dataset.lightbox.replace(/&apos;/g,"'"));
          openLightbox(info);
        }catch(e){ /* noop */ }
      });
    });
  }
  function openLightbox({image, caption, meta}){
    $('#lightboxImg').src = `assets/${image}`;
    $('#lightboxImg').alt = caption || '';
    $('#lightboxCap').textContent = caption || '';
    $('#lightboxMeta').textContent = meta || '';
    $('#lightbox').classList.add('open');
  }
  function closeLightbox(){ $('#lightbox').classList.remove('open'); }

  /* ---------------- skills ---------------- */
  function renderSkills(){
    $('#skillsGrid').innerHTML = siteData.skillGroups.map(g=>`
      <div class="skill-panel"><h3>${tr(g.title,lang)}</h3><ul>${g.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>
    `).join('');
  }

  /* ---------------- education ---------------- */
  function renderEducation(){
    $('#eduGrid').innerHTML = siteData.education.map(e=>`
      <article class="edu-card reveal">
        <h3>${e.school}</h3>
        <div class="program">${tr(e.program, lang)}</div>
        <div class="period mono">${e.period}</div>
        <div class="note">${tr(e.note, lang)}</div>
      </article>
    `).join('');
    initReveal();
  }

  /* ---------------- leadership + achievements ---------------- */
  function renderLeadership(){
    $('#leadershipList').innerHTML = siteData.organizations.map(o=>`
      <div class="leadership-row">
        <h4>${o.name}</h4><span class="lr-period mono">${o.period}</span>
        <span class="lr-role">${tr(o.role, lang)}</span>
        <p>${tr(o.detail, lang)}</p>
      </div>
    `).join('');
  }
  function renderAchievements(){
    $('#achieveList').innerHTML = siteData.achievements.map(a=>`
      <div class="achieve-row"><div class="ay mono">${a.year}</div><div><h4>${tr(a.title,lang)}</h4><p>${tr(a.description,lang)}</p></div></div>
    `).join('');
  }

  /* ---------------- contact ---------------- */
  function renderContact(){
    const u = UI[lang];
    const p = siteData.profile;
    $('#contactActions').innerHTML = `
      <a href="mailto:${p.email}"><span>${u.email}</span><span>↗</span></a>
      <a href="https://wa.me/${p.phone}" target="_blank" rel="noopener"><span>${u.whatsapp}</span><span>↗</span></a>
      <a href="${p.linkedin}" target="_blank" rel="noopener"><span>${u.linkedin}</span><span>↗</span></a>
      <a href="${p.github}" target="_blank" rel="noopener"><span>${u.github}</span><span>↗</span></a>
      <a href="${p.resume}" download><span>${u.cv}</span><span>↓</span></a>
    `;
    $('#footerLinks').innerHTML = `
      <a href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${p.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${p.resume}" download>CV</a>
    `;
  }

  /* ---------------- interactions ---------------- */
  let observer;
  function initReveal(){
    if(observer) observer.disconnect();
    observer = new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), { threshold:.12 });
    $$('.reveal').forEach(el=>observer.observe(el));
  }

  function setupChrome(){
    $('#menuToggle').addEventListener('click', ()=>{
      const nav = $('#siteNav');
      nav.classList.toggle('open');
      $('#menuToggle').setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    $$('#siteNav a').forEach(a=>a.addEventListener('click', ()=>$('#siteNav').classList.remove('open')));
    addEventListener('scroll', ()=> $('#siteHeader').classList.toggle('scrolled', scrollY > 16));
    $('#langToggle').addEventListener('click', ()=>{
      lang = lang === 'en' ? 'id' : 'en';
      localStorage.setItem('af_lang', lang);
      renderAll();
    });
    $('#lightboxClose').addEventListener('click', closeLightbox);
    $('#lightbox').addEventListener('click', e=>{ if(e.target.id==='lightbox') closeLightbox(); });
    addEventListener('keydown', e=>{ if(e.key==='Escape') closeLightbox(); });

    const sections = $$('main section[id]');
    const navObs = new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){
        $$('#siteNav a').forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    }), { rootMargin:'-45% 0px -50%' });
    sections.forEach(s=>navObs.observe(s));
  }

  function renderAll(){
    applyStaticText();
    renderStats();
    renderAbout();
    renderLegend();
    renderMarkers();
    renderExperience();
    renderCaseStudies();
    renderGalleryFilters();
    renderGalleryGrid();
    renderSkills();
    renderEducation();
    renderLeadership();
    renderAchievements();
    renderContact();
    initReveal();
  }

  (async function init(){
    await loadData();
    initMap();
    setupChrome();
    renderAll();
  })();
})();

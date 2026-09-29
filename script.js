const guides = [
  { icon: '◌', title: 'Root Zone Management', description: 'Change requests, consent, technical requirements, and operational systems for the root zone.', tag: 'Root zone' },
  { icon: '◇', title: 'TLD Delegation & Transfers', description: 'Understand the path for delegating, transferring, retiring, or revoking a country-code TLD.', tag: 'Domains' },
  { icon: '◈', title: 'RDAP & Domain Data', description: 'Requirements for RDAP servers providing reliable domain name registration data.', tag: 'Domains' },
  { icon: '⌁', title: 'DNSSEC & Key Ceremonies', description: 'Explore root zone key signing ceremonies, roles, scheduling, and trusted representatives.', tag: 'Security' },
  { icon: '⌘', title: 'Protocol Parameters', description: 'Registration procedures, licensing terms, and the standards that support interoperability.', tag: 'Protocols' },
  { icon: '⊹', title: 'Number Resources', description: 'Guidance about internet number resource allocations and legacy IPv4 assignments.', tag: 'Numbers' },
  { icon: '◎', title: 'IDN Tables & Rulesets', description: 'Procedures for internationalized domain names and the IDN repository.', tag: 'Domains' },
  { icon: '▣', title: '.INT Domains', description: 'Eligibility information for intergovernmental treaty organization .INT domains.', tag: 'Domains' },
  { icon: '△', title: 'Abuse & Network Operations', description: 'Network abuse information, IP address issues, and DNS Blackhole service resources.', tag: 'Operations' }
];
const grid = document.querySelector('#guide-grid');
const search = document.querySelector('#search');
const noResults = document.querySelector('#no-results');
function render(filter = '') {
  const term = filter.trim().toLowerCase();
  const visible = guides.filter(g => `${g.title} ${g.description} ${g.tag}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(g => `<article class="guide"><div class="guide-icon">${g.icon}</div><h3>${g.title}</h3><p>${g.description}</p><a class="guide-link" href="#about">View resource →</a></article>`).join('');
  noResults.hidden = visible.length !== 0;
}
search.addEventListener('input', event => render(event.target.value));
render();

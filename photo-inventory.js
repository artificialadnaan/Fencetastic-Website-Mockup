// Google Drive photo inventory - curated best photos
// URL format: https://drive.google.com/thumbnail?id=FILE_ID&sz=w1200

const photos = {
  // === ROOT FOLDER (main project photos) ===
  fences_root: [
    { id: '1V7F8A3wU_tgG5ShHE4VKdkVZn3SSWxdi', desc: 'fence project' },
    { id: '1_0DjaLal6DmbVN8sRxZjDRFx547lU5Ws', desc: 'fence project' },
    { id: '1OWdgc3MaL74SfbTuCGKDRqAtLdU_CZZF', desc: 'fence project' },
    { id: '1_N6mBq_NQu4f6Z0UdvDJtMF14zwtY1vM', desc: 'fence project' },
    { id: '1bNQS2D6tp5X9UfXrs0HodZ_W8fcSiZBy', desc: 'fence project' },
    { id: '1l6b8w2K8QcNOGAeX5jwDW0Y-whkDpugv', desc: 'fence project' },
    { id: '16Ax8GCLOJglNUJc4EqWbvYTlLevS8eUZ', desc: 'fence project' },
    { id: '1in_IbZsb6CjIU7Kbb6hb-3MFev8mqFI7', desc: 'fence project' },
    { id: '1skd8DmrsWcSmjv8EXGxFI3my6dO7WcN8', desc: 'fence project' },
    { id: '1QO3gJWD2iIwSG-naTBlaCBE76NfYBMhO', desc: 'fence project' },
  ],
  
  // === FENCES SUBFOLDER ===
  fences: [
    { id: '1XbkiiOvuOxalNMMrX-3KoQFBDs5RH_MO', desc: 'wood fence installation' },
    { id: '1ABI1E_qughzGuJnubydudjwE4nXTnjjI', desc: 'cedar fence' },
    { id: '17k7JyOUJw1zjbjP5-tH9fCfi2lcnjDJI', desc: 'board on board fence' },
    { id: '1ulWbb3omkGG-ijJ0mxdulWks14lVFrCl', desc: 'fence with trim' },
    { id: '1jR7U1dKGFDqTXz1BWBdOrA6eV7TdbQnQ', desc: 'cedar fence detail' },
    { id: '1r2Jk1JXk5pOt2esdiLQdgfJMZUye1Ja4', desc: 'fence project' },
    { id: '121F2gdPzoZ97-5XJXkhx4qkPVCTOEI32', desc: 'board on board with trim' },
    { id: '120tEHT7dQQKMYM9z84Rrbr8fk2vIf0KX', desc: 'fence installation' },
    { id: '1_ZSIREP3p9W2YzcMPcTPrYrv1wksUh3I', desc: 'wood fence' },
    { id: '1Edqf7b1yw1qTF28STg_BZBfCejKw0ki9', desc: 'cedar fence with gate' },
    { id: '1EYrUcamrFcyGk2NbOGhsNdoA73iu_ws5', desc: 'fence craftsmanship' },
    { id: '1JS246JMvyZdta8L5F9UTU86l4uzs46gL', desc: 'Japanese cedar horizontal fence' },
    { id: '1TWEdqahXfxiVcr-aktU_zgYWhx7mON9B', desc: 'wood fence close up' },
  ],
  
  // === DECKS SUBFOLDER ===
  decks: [
    { id: '1kAnpvLlx0BHhYyyAbQ9-7YxhAM25e72f', desc: 'deck construction' },
    { id: '1HhSIEZa9jmrZ3BmElYKnUSSpL-WD6mvY', desc: 'deck installation' },
    { id: '15GsdaU4zy_9mLLyH5gGoum1fc32dHCew', desc: 'custom deck' },
    { id: '1LZV-vhZ7YS-ZETjmftqIPtAmHKOKgUN3', desc: 'deck detail' },
    { id: '1nwHijR4rwC92zxVfJBYlOkALCaS3IDTD', desc: 'outdoor deck' },
    { id: '1YUh08MlGpKOKNEku4nSVqD2e1x2HaN_j', desc: 'deck project' },
    { id: '1X2i9XadkYpGVzKOJTwilJv2UVdNsbuxC', desc: 'deck build' },
    { id: '1BY-mZOsrraNtdHZCr7IqRGyjYwuzxPds', desc: 'deck complete' },
    { id: '1Pa3u8z7rWHoySylFzMCD7tvsMcTuHSap', desc: 'finished deck' },
  ],
  
  // === STAIN JOBS SUBFOLDER ===
  stain: [
    { id: '1Z3IPAwC0fh0VM5_arBNDTVXcmQfczaZg', desc: 'fence stain before' },
    { id: '1jd5BhcgQ-hCG_xZO9T2IVGErJI83oliy', desc: 'fence staining' },
    { id: '1myqcbagHIGJsTgP_8Gviu0EpO14kAOTk', desc: 'stain application' },
    { id: '1drB_ozAkLyvgPvqg_s6U1xtUcoduWTPc', desc: 'stained fence' },
    { id: '1vpovlFSyvdMGNohxp9ZZJQcdPBG1F-OI', desc: 'fence stain result' },
    { id: '1BhrPy8oXQZh5lUtEDOKuwkvIF3X1lfJ3', desc: 'wood stain detail' },
    { id: '1y12YwaUYrp35rI5Tvrv6TzqezO8Fj_Po', desc: 'pressure wash result' },
    { id: '1v-Ifv6p5L9Qdto5EMxvbqbROHtaatAZD', desc: 'stain job' },
    { id: '1A5nX7AcI6ZIUvRMqho_sqn97ThonVSp_', desc: 'stained cedar' },
    { id: '1wFFuG2VTKzSwnThuWkbRXtNtokuL-a7D', desc: 'stain project' },
    { id: '1Qmc21WnIGRVI8Y5U5UfYoH7X3DdhaojB', desc: 'fresh stain' },
    { id: '1vmVNFguO7UYAJfaAvu5EprLlzd8mPrYS', desc: 'staining complete' },
    { id: '1HWT5hnUXNHa57p3Oi4VJkQlfnYfVPFXk', desc: 'finished stain' },
    { id: '1famfZqswle6CoLiCRGUwlRUqEBEbOTty', desc: 'wood defender stain' },
  ],
  
  // === WROUGHT IRON (real photo only) ===
  iron: [
    { id: '1YKoyIT8d9XHZiRcXmEEi12ic_00Cm50j', desc: 'wrought iron gate' },
  ],
};

// Generate URLs
const toUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

console.log('=== FENCE PHOTOS ===');
photos.fences.forEach(p => console.log(toUrl(p.id)));
console.log('\n=== DECK PHOTOS ===');
photos.decks.forEach(p => console.log(toUrl(p.id)));
console.log('\n=== STAIN PHOTOS ===');
photos.stain.forEach(p => console.log(toUrl(p.id)));
console.log('\n=== ROOT PHOTOS ===');
photos.fences_root.forEach(p => console.log(toUrl(p.id)));

// Also output direct file links from user's shared URLs
const userFiles = [
  '1V7F8A3wU_tgG5ShHE4VKdkVZn3SSWxdi',
  '1_0DjaLal6DmbVN8sRxZjDRFx547lU5Ws',
  '1OWdgc3MaL74SfbTuCGKDRqAtLdU_CZZF',
  '1_N6mBq_NQu4f6Z0UdvDJtMF14zwtY1vM',
  '1bNQS2D6tp5X9UfXrs0HodZ_W8fcSiZBy',
  '1l6b8w2K8QcNOGAeX5jwDW0Y-whkDpugv',
  '16Ax8GCLOJglNUJc4EqWbvYTlLevS8eUZ',
  '1in_IbZsb6CjIU7Kbb6hb-3MFev8mqFI7',
  '1htL6UWSUZsQrXchY_Vp_6fdG-r_HdW0W',
  '1Ng6GZJrK7X77uvBFJtXVxjO1njCZiDjL',
  '1TOR2fgSGZh_5pfvjMZXQdZtemreYB39w',
  '1-Ntig_nOGuvhwyYQEKRjkTHGYyW8T4tf',
  '1H78D9CvhMnR_EXDddsXQQucPZmVzUA9V',
  '1iJptB976ULd7hZx5ouxtL3-CHIAZ2DR4',
  '1FJKYT1-lThpvBXdZJlbgpcmTwCDd1Tjl',
  '1aJIZ-ONg_csujkq_HqrtvGwR3y6jeYbT',
  '1T6kiZj3VXnCowtapXkZCAEyeYqYU_YyL',
  '1Xzuv8eS9kbLXYvGR3q4cAntk-CTMZoCg',
  '1xy3aGn0Y9y5WeXqALhxRb6C2WTkQ_wJJ',
];

console.log('\n=== USER SHARED FILES ===');
userFiles.forEach(id => console.log(toUrl(id)));

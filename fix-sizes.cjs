const fs = require('fs');
const path = require('path');
const componentsDir = path.join('src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.astro'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/font-headline-lg-mobile md:font-headline-lg/g, 'font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight');
  content = content.replace(/class="font-headline-md text-on-surface/g, 'class="font-headline-md text-2xl md:text-3xl font-bold text-on-surface');
  content = content.replace(/class="font-headline-md text-headline-md text-on-surface/g, 'class="font-headline-md text-2xl md:text-3xl font-bold text-on-surface');
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('H2 and H3 sizes fixed');

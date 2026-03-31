// Run this in browser console to find overflow elements
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log('OVERFLOW:', el.scrollWidth, 'vs', document.documentElement.clientWidth, el.tagName, el.className.substring(0, 80));
  }
});

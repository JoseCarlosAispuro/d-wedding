const mix = require('laravel-mix')

mix
  .ts('src/js/app.tsx', 'public/js')
  .postCss('src/css/app.css', 'public/css', [require('tailwindcss')])
  .react()

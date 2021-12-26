const mix = require('laravel-mix')

mix
  .js('src/js/app.ts', 'public/js')
  .postCss('src/css/app.css', 'public/css', [require('tailwindcss')])
  .react()

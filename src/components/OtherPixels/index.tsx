import Script from "next/script";

export default function OtherPixels(){
   return(
      <>
         <Script id='gta-google' async  src="https://www.googletagmanager.com/gtag/js?id=AW-11270293549"></Script>
         <Script id='gta-google-config'>
            {
               `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'AW-11270293549');`
            }
         </Script>
         <Script id='google-tag-manager'>
            {
               `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-N4LPCVKK');`
            }
         </Script>
      </>
   )
}
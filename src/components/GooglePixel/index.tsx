import Script from "next/script";

export default function GooglePixel(){
   return(
      <>
         <Script id='gta-google' async  src="https://www.googletagmanager.com/gtag/js?id=AW-11111017760"></Script>
         <Script id='google-pixel'>
            {
               `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'AW-11111017760');`
            }
         </Script>
         <Script id='gtag-event'>
            {
               `gtag('event', 'conversion', {'send_to': 'AW-11111017760/bgyTCKfT8pAYEKDakrIp'});`
            }
         </Script>
      </>
   )
}
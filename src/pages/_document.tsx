import Document, {Html, Head, Main, NextScript} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            });
    
          const initialProps = await Document.getInitialProps(ctx);
          
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          };
        } finally {
          sheet.seal();
        }
      }


    render(){
        return(
            <Html>
                <Head>
                    <meta property="custom" content="Matheus" />
                </Head>

                <body>
                    <Main />
                </body>

                <NextScript/>
            </Html>
        )
    }
}
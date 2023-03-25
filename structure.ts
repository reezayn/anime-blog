/*
import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
    if(schemaType === 'post') {
        return S.document().views([
            S.view.form(),
            S.view
              .component(Iframe)
              .options({
                // Required: accepts an async function
                // or a string
                url: `${
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3001"
                }/api/preview`,
                // Optional: set the default size 
                defaultSize: 'desktop', // default `desktop`
                // Optional: add a remote button or reload on new document revision
                reload: {
                    button: true, //default `undefined`
                },
                // Optional: pass attributes to the underlying iframe element
                attributes: {},
              })
              .title('Preview'),
          ])
    }
}


*/

import { Helmet } from "react-helmet-async"

const Seo = ({
  title,
  description = "App web gratuita para registrar y analizar tu presión arterial. Registro y monitoreo gratuito con exportación a PDF.",
  keywords = "presión arterial, salud cardiovascular, registro médico, hipertensión, app salud, monitoreo gratuito, webapp, gratuita, bienestar"
}: {
  title?: string
  description?: string
  keywords?: string
}) => {

  const defaultTitle = "MiPresión - Registro de presión sanguínea por Jonatandb"
  const fullTitle = title ? title + " - MiPresión - Registro de presión sanguínea por Jonatandb" : defaultTitle

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta name="twitter:title" content={fullTitle} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

export default Seo
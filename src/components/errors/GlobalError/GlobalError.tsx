import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import styles from './GlobalError.module.css'

const GENERIC_TITLE = 'Algo salió mal'
const DESCRIPTION =
  'Se produjo un error inesperado. Podés volver al inicio e intentar de nuevo.'

export function GlobalError() {
  const error = useRouteError()

  const isRouteError = isRouteErrorResponse(error)
  const status = isRouteError ? error.status : 500
  const title =
    isRouteError && error.statusText ? error.statusText : GENERIC_TITLE

  return (
    <div className={styles.page}>
      <p className={styles.code}>{status}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{DESCRIPTION}</p>
      <Link to="/" className={styles.homeButton}>
        Volver al inicio
      </Link>
    </div>
  )
}

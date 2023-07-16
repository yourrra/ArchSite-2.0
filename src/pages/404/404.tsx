import classes from './404.module.css'

export function NotFound() {
  return (
    <div className="wrapper">
      <div className={classes.notFound__wrapper}>
        <div className={classes.notFound}>
          <h1>404</h1>
          <p>Извините произошла ошибка</p>
        </div>
      </div>
    </div>
  )
}

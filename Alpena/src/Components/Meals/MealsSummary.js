import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>La Mejor comida tradional de Salta a tu alcance</h2>
      <p>
        Elejí el mejor menú y sorprendete con el sabor típico del norte argentino, lo mismo que 
        allá pero acá.
      </p>
      <p>
        Todas nuestras comidas son preparadas con las míticas recetas ancestrales de nuestra tierra. 
      </p>
    </section>
  );
};

export default MealsSummary;
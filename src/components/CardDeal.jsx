import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h1 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor , purus in mattis as sed integer faucibus . Aliquet quis aliquit eget mauris tortor. C Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />

      </div>

    </section>
  )
}

export default CardDeal
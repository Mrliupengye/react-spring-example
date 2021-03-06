import { history } from 'umi';
import styles from './index.less';

const IndexPage = () => {
  return (
    <div>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/svg-example')}
      >
        svg example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/svg-animation')}
      >
        svg-animation
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/from-to-example')}
      >
        from to example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/state-example')}
      >
        state example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/interpolates-example')}
      >
        interpolates example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/usesprings-example')}
      >
        useSprings example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/usetrail-example')}
      >
        useTrail example
      </button>
      <button
        className={styles.comm_button}
        onClick={() => history.push('/usechain-example')}
      >
        useChain example
      </button>
      {/* <button
        className={styles.comm_button}
        onClick={() => history.push('/usetransition-example')}
      >
        useTransition example
      </button> */}
      <button
        className={styles.comm_button}
        onClick={() => history.push('/usetransition2-example')}
      >
        useTransition example
      </button>
      {/* <button
        className={styles.comm_button}
        onClick={() => history.push('/tween-one')}
      >
        tween-one
      </button> */}
    </div>
  );
};

export default IndexPage;

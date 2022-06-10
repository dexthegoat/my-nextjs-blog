import Image from 'next/image';

import classes from './Hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jianshuo.jpg"
          alt="An image showing Jianshuo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, my name's Jianshuo</h1>
      <p>I'm a Front-end Engineer</p>
    </section>
  );
}

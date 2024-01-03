import type { ReactNode } from 'react';

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <div className="mt-6 text-xl leading-9">{props.description}</div>
    </div>
    <div className="mt-8 shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };

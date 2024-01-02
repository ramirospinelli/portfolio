import type { ReactNode } from 'react';

type ICompanyProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
  date: string;
  role: string;
};

const Company = (props: ICompanyProps) => (
  <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="mb-4 w-36 rounded hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex flex-col items-start gap-y-2 md:flex-col ">
        <a className="hover:text-cyan-400" href={props.link}>
          <div className="mb-2 text-xl font-semibold">
            {props.name}, {props.role}
          </div>
        </a>

        <div className="mb-2 flex flex-wrap gap-2">{props.category}</div>
      </div>
      <p className="my-2 text-xs">{props.date}</p>
      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
  </div>
);

export { Company };

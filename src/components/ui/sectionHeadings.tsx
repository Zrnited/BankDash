export interface HeadingProps {
    text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <h1 className="font-semibold capitalize text-base text-[#343C6A] md:text-lg lg:text-xl">
      {text}
    </h1>
  );
}

import HeroLayout from "../_components/HeroLayout";
import SheetLayout from "../_components/SheetLayout";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <HeroLayout title="NEWS" sub="ニュース" />
      <SheetLayout>{children}</SheetLayout>
    </>
  );
}

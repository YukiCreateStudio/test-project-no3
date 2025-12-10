import Header from "../_components/Header";
import HeroLayout from "../_components/HeroLayout";
import SheetLayout from "../_components/SheetLayout";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }:Props) {
  return (
    <>
      <HeroLayout title="member" sub="メンバー"/>
      <SheetLayout>{children}</SheetLayout>
    </>
  )
}

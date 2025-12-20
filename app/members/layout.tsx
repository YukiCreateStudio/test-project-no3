import HeroLayout from "../_component/HeroLayout";
import SheetLayout from "../_component/SheetLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeroLayout title="Members" sub="メンバー" />
      <SheetLayout>{children}</SheetLayout>
    </section>
  );
}

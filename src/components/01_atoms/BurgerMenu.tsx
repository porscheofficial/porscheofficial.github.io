import { LinkButtonIconName } from "@porsche-design-system/components-react/ssr";
import { ButtonPure } from "./ButtonPure";

interface BurgerMenuProps {
  label?: string;
  icon?: LinkButtonIconName;
  theme?: "light" | "dark";
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  label = "Menu",
  icon = "menu-lines",
  theme = "dark",
}) => {
  return (
    <ButtonPure theme={theme} icon={icon}>
      {label}
    </ButtonPure>
  );
};

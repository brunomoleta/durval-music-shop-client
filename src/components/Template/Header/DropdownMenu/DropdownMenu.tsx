import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { brands, categories } from "../../../../services/database.ts";
import {
  DContent,
  DItem,
  DSeparator,
  DSubContent,
  DSubTrigger,
  ProfileIcon,
} from "../../../../styled-components/Header.styles.tsx";
import { nanoid } from "nanoid";
import {
  IconButton,
  MenuButton,
} from "../../../../styled-components/Button.styles.ts";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "react-feather";
import List from "../../../../assets/ui/List.svg";
import {IconSpan} from "../IconsHeader";

function DropdownMenuHeader() {
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton
        >
          <ProfileIcon src={List} alt="Categories" />
          <IconSpan>CATEGORIAS</IconSpan>
        </IconButton>
        {/*</DefaultButton>*/}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DContent sideOffset={8}>
          {categories.map(({ url, text }) => (
            <DItem key={nanoid()}>
              <MenuButton onClick={() => navigate(`/category/${url}`)}>
                {text}
              </MenuButton>
            </DItem>
          ))}
          <DSeparator />
          <DropdownMenu.Sub>
            <DSubTrigger>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "4px",
                  marginInline: "8px",
                }}
              >
                MARCAS
                <ChevronRight />
              </div>
            </DSubTrigger>
            <DropdownMenu.Portal>
              <DSubContent>
                {brands.map((brand) => (
                  <DItem key={nanoid()}>
                    <MenuButton onClick={() => navigate(`/brand/${brand}`)}>
                      {brand.toUpperCase()}
                    </MenuButton>
                  </DItem>
                ))}
              </DSubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropdownMenuHeader;

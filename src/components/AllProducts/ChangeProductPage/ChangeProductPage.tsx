import { RoundButton } from "../../../styled-components/Button.styles.ts";
import ArrowLeft from "../../../assets/ui/arrow-left.svg";
import ArrowRight from "../../../assets/ui/arrow-right.svg";
import { useProductContext } from "../../../providers/UserContext";
import { IFullProductContext } from "../../../types/product";

function ChangeProductPage() {
  const { page, productsPage, setPage } =
    useProductContext() as IFullProductContext;

  return (
    <>
      {page > 1 && (
        <RoundButton
          $positionLeft={true}
          onClick={() => setPage((page) => page - 1)}
        >
          <img
            src={ArrowLeft}
            title="produtos anteriores"
            alt="produtos anteriores"
          />
        </RoundButton>
      )}
      {productsPage.nextPage && (
        <RoundButton onClick={() => setPage((page) => page + 1)}>
          <img
            src={ArrowRight}
            title="próximos produtos"
            alt="próximos productos"
          />
        </RoundButton>
      )}
    </>
  );
}

export default ChangeProductPage;

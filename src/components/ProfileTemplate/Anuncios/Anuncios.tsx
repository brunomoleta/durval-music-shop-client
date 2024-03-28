import NotFound from "../../../assets/illustrations/Nothing-in-Cart.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useEffect } from "react";
import CreateAnuncioForm from "./Form/CreateAnuncioForm/CreateAnuncioForm.tsx";
import AnuncioCard from "./AnuncioCard/AnuncioCard.tsx";
import { IAnuncioContext } from "../../../types/anuncios";
import { useUserContext } from "../../../providers/hooks";
import { IUserContext } from "../../../types/user";
import { useAnuncioContext } from "../../../providers/hooks/";
import { H2 } from "../../../styled-components/Typography.styles.ts";
import Loader from "../../Loader";
import Modal from "../../Modal";
import {
  AddProfileItemBtn,
  ProfileContent,
  ResumeHeader,
} from "../../../styled-components/ProfileItem.style.ts";
import DashboardHeading from "../../DashboardHeading";

function Anuncios() {
  const {
    anuncios,
    isCreateAnuncioModalOpen,
    setIsCreateAnuncioModalOpen,
    getAllAnuncios,
  } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  useEffect(() => {
    getAllAnuncios();
  }, []);

  return (
    <>
      <ResumeHeader>
        <DashboardHeading text="anúncios" />

        <AddProfileItemBtn onClick={() => setIsCreateAnuncioModalOpen(true)}>
          <MdOutlineAddCircleOutline size="18" />
          Anúncio
        </AddProfileItemBtn>
      </ResumeHeader>

      <div>
        {isLoading ? (
          <Loader />
        ) : anuncios.length > 0 ? (
          <ProfileContent>
            {anuncios.map((anuncio) => (
              <AnuncioCard key={anuncio.id} anuncio={anuncio} />
            ))}
          </ProfileContent>
        ) : (
          <>
            <img alt="" src={NotFound} style={{ alignSelf: "center" }} />
            <H2>Nenhum produto anunciado.</H2>
          </>
        )}
      </div>

      <Modal
        title="Criar anúncio"
        open={isCreateAnuncioModalOpen}
        onOpenChange={setIsCreateAnuncioModalOpen}
        element={CreateAnuncioForm()}
      />
    </>
  );
}

export default Anuncios;

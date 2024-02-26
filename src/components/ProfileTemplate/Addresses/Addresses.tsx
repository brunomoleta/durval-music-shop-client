import NotFound from "../../../assets/illustrations/No-Order.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreateAddressForm from "./Form/CreateAddressForm";
import { useEffect } from "react";
import { AddressCard } from "./AddressCard";
import { useAddressContext } from "../../../providers/UserContext";
import { IAddressContext } from "../../../types/address";
import { useUserContext } from "../../../providers/UserContext";
import { IUserContext } from "../../../types/user";
import { H2 } from "../../../styled-components/Typography.styles.ts";
import Loader from "../../Loader";
import Modal from "../../Modal";
import {
  AddProfileItemBtn,
  ProfileContent,
  ResumeHeader,
} from "../../../styled-components/ProfileItem.style.ts";
import DashboardHeading from "../../DashboardHeading";

function Addresses() {
  const {
    addresses,
    isCreateAddressModalOpen,
    setIsCreateAddressModalOpen,
    getAllAddresses,
  } = useAddressContext() as IAddressContext;
  const { isLoading } = useUserContext() as IUserContext;

  const sortedAddresses =
    addresses && addresses.sort((a, b) => Number(b.name) - Number(a.name));

  useEffect(() => {
    getAllAddresses();
  }, []);

  return (
    <>
      <ResumeHeader>
          <DashboardHeading text="endereços" />
        <AddProfileItemBtn
          onClick={() => setIsCreateAddressModalOpen(!isCreateAddressModalOpen)}
        >
          <MdOutlineAddCircleOutline size="18" />
          Endereço
        </AddProfileItemBtn>
      </ResumeHeader>

      <div>
        {isLoading ? (
          <Loader />
        ) : addresses.length > 0 ? (
          <ProfileContent>
            {sortedAddresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </ProfileContent>
        ) : (
          <>
            <img alt="" src={NotFound} style={{ alignSelf: "center" }} />
            <H2>Nenhum endereço cadastrado.</H2>
          </>
        )}
      </div>

      <Modal
        title="Criar endereço"
        open={isCreateAddressModalOpen}
        onOpenChange={setIsCreateAddressModalOpen}
        element={CreateAddressForm()}
      />
    </>
  );
}

export default Addresses;

import { createContext, ReactNode, useState } from "react";
import { IAddress, IAddressContext, IAddressForm } from "../../types/address";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { IUserContext } from "../../types/user";
import { useUserContext } from "../hooks";

export const AddressContext = createContext({});

const AddressProvider = (props: { children: ReactNode }) => {
  const { setIsLoading } = useUserContext() as IUserContext;

  const [addresses, setAddresses] = useState<IAddress[]>([]);

  const [isCreateAddressModalOpen, setIsCreateAddressModalOpen] =
    useState<boolean>(false);

  const [isEditAddressModalOpen, setIsEditAddressModalOpen] =
    useState<boolean>(false);
  const [editingAddress, setEditingAddress] = useState<IAddress | null>(null);

  const [isDeleteAddressModalOpen, setIsDeleteAddressModalOpen] =
    useState<boolean>(false);

  async function createAddressRequest(formData: IAddressForm) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      setIsLoading(true);
      await api.post("/addresses", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Endereço "${formData.name}" cadastrado com sucesso!`);

      getAllAddresses();
    } catch (error) {
      console.log(error);
    } finally {
      setIsCreateAddressModalOpen(false);
      setIsLoading(false);
    }
  }

  async function getAllAddresses() {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);
    try {
      setIsLoading(true);
      const { data } = await api.get("/addresses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(data);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function editAddress(formData: IAddressForm, addressId: number) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      setIsLoading(true);
      await api.patch(`/addresses/${addressId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Endereço "${formData.name}" atualizado com sucesso!`);

      getAllAddresses();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsEditAddressModalOpen(false);
      setEditingAddress(null);
      setIsLoading(false);
    }
  }

  async function deleteAddress(address: IAddress) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      setIsLoading(true);
      await api.delete(`/addresses/${address.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Endereço "${address.name}" removido com sucesso!`);

      getAllAddresses();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsDeleteAddressModalOpen(false);
      setIsLoading(false);
    }
  }

  const values: IAddressContext = {
    addresses,
    isCreateAddressModalOpen,
    setIsCreateAddressModalOpen,
    createAddressRequest,
    getAllAddresses,
    isEditAddressModalOpen,
    setIsEditAddressModalOpen,
    editAddress,
    editingAddress,
    setEditingAddress,
    isDeleteAddressModalOpen,
    setIsDeleteAddressModalOpen,
    deleteAddress,
  };

  return (
    <AddressContext.Provider value={values}>
      {props.children}
    </AddressContext.Provider>
  );
};

export { AddressProvider };

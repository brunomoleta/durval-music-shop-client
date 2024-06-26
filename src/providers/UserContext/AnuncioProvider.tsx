import { createContext, ReactNode, useState } from "react";
import { IAnuncio, IAnuncioContext, IProductForm } from "../../types/anuncios";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { IUserContext } from "../../types/user";
import { useUserContext } from "../hooks";

export const AnuncioContext = createContext({});

const AnuncioProvider = (props: { children: ReactNode }) => {
  const [anuncios, setAnuncios] = useState<IAnuncio[]>([]);
  const { setIsLoading } = useUserContext() as IUserContext;

  const [isCreateAnuncioModalOpen, setIsCreateAnuncioModalOpen] =
    useState<boolean>(false);
  const [isEditAnuncioModalOpen, setIsEditAnuncioModalOpen] =
    useState<boolean>(false);
  const [editingAnuncio, setEditingAnuncio] = useState<IAnuncio | null>(null);
  const [isDeleteAnuncioModalOpen, setIsDeleteAnuncioModalOpen] =
    useState<boolean>(false);

  async function createAnuncioRequest(formData: IProductForm) {
    const { categories } = formData;

    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    const requestData = {
      ...formData,
      categories: categories.split(","),
    };

    try {
      setIsLoading(true);
      await api.post("/products", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Produto "${formData.name}" anunciado com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsCreateAnuncioModalOpen(false);
      setIsLoading(false);
    }
  }

  async function getAllAnuncios() {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);
    try {
      setIsLoading(true);
      const { data } = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAnuncios(data);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function editAnuncio(formData: IProductForm, anuncioId: number) {
    const { categories } = formData;

    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    const requestData = {
      ...formData,
      categories: categories.split(","),
    };

    try {
      setIsLoading(true);
      await api.patch(`/products/${anuncioId}`, requestData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Endereço "${formData.name}" atualizado com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsEditAnuncioModalOpen(false);
      setEditingAnuncio(null);
      setIsLoading(false);
    }
  }

  async function deleteAnuncio(anuncio: IAnuncio) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      setIsLoading(true);
      await api.delete(`/products/${anuncio.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Anúncio removido com sucesso!`);

      getAllAnuncios();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsDeleteAnuncioModalOpen(false);
      setIsLoading(false);
    }
  }

  const values: IAnuncioContext = {
    anuncios,
    isCreateAnuncioModalOpen,
    setIsCreateAnuncioModalOpen,
    createAnuncioRequest,
    getAllAnuncios,
    isEditAnuncioModalOpen,
    setIsEditAnuncioModalOpen,
    editAnuncio,
    editingAnuncio,
    setEditingAnuncio,
    isDeleteAnuncioModalOpen,
    setIsDeleteAnuncioModalOpen,
    deleteAnuncio,
  };

  return (
    <AnuncioContext.Provider value={values}>
      {props.children}
    </AnuncioContext.Provider>
  );
};

export { AnuncioProvider };

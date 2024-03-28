import { vi } from "vitest";

export const handleButtonClick = vi.fn();

export const useCartContextMock = vi.fn(() => ({
  useCartContext: () => ({
    addProductInCart: handleButtonClick,
  }),
}));

vi.mock("../../../providers/hooks", () => useCartContextMock);

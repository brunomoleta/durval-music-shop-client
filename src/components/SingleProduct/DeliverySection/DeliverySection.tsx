import {
  DivImgsDelivery,
  DivImgTextDelivery,
  DivImgTextShipping,
  ImgDelivery, ImgShipping,
  SpanDelivery, SpanShipping
} from "../ProductSection/styles.ts";
import Delivery from "../../../assets/ui/delivery.png";
import Shipping from "../../../assets/ui/shipping.png";

function DeliverySection() {
  return <DivImgsDelivery>
    <DivImgTextDelivery>
      <ImgDelivery src={Delivery} alt="Delivery icon" />
      <SpanDelivery>Entrega segura</SpanDelivery>
    </DivImgTextDelivery>
    <DivImgTextShipping>
      <ImgShipping src={Shipping} alt="Shipping icon" />
      <SpanShipping>Entrega em até 5 dias</SpanShipping>
    </DivImgTextShipping>
  </DivImgsDelivery>;
}

export default DeliverySection;

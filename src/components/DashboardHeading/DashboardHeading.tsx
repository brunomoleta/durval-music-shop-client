import { H1 } from "../../styled-components/Typography.styles.js";
import { upper } from "../../services/utils.ts";

function DashboardHeading({ text }: { text: string }) {
  return <H1>{upper(text)}</H1>;
}

export default DashboardHeading;

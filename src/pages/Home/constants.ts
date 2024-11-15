import { useIntl } from "react-intl";

export const useAnimationSequences = () => {
  const intl = useIntl();

  return [
    intl.formatMessage({ id: "page.home.sequence.developer" }),
    1000,
    intl.formatMessage({ id: "page.home.sequence.dataEngineer" }),
    1000,
    intl.formatMessage({ id: "page.home.sequence.uxUiDesigner" }),
    1000,
    intl.formatMessage({ id: "page.home.sequence.dataAnalyst" }),
    1000,
  ];
};

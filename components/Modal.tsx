// RECOIL
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

// TS INTERFACES
interface Props {}

const Modal: React.FC<Props> = (props) => {
  const {} = props;

  const [open, setOpen] = useRecoilState(modalState);

  if (!open) return null;

  return <div></div>;
};

export default Modal;


import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import ToastersStore from 'store/ToastersStore';


const ToasterHandler =()=> {
  const {toasters} = ToastersStore;
  const lastToast = toasters[toasters.length - 1];

  useEffect(()=> {
    if (!lastToast) {
      return true;
    } else if (lastToast.type === 'error') {
      toast.error(lastToast.massage);
    }
  }, [lastToast]);

  return <>
    <ToastContainer></ToastContainer>
  </>;
};

export default observer(ToasterHandler);


// import { observer } from 'mobx-react-lite';
// import { useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import ToastersStore from 'store/ToastersStore';
// import { IToasterHandler } from 'utils/interfaces';


// const ToasterHandler: React.FC = () => {
//   const { toasters } = ToastersStore;
//   const lastToast: IToasterHandler = toasters[toasters.length - 1];

//   useEffect(() => {
//     if (lastToast) {
//       if (lastToast.type === 'error') {
//         toast.error(lastToast.massage);
//         return toast.error(lastToast.massage);
//       }
//     }
//   }, [lastToast]);

//   return <>
//     <ToastContainer></ToastContainer>
//   </>;
// };

// export default observer(ToasterHandler);

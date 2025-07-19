import { RecoilRoot, useRecoilValue } from "recoil"
import { notifications, totalNotificationSelector } from "./atoms"
// import { useMemo } from "react";

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp () {
  const [networkCount, setNetworkCount] = useRecoilValue(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}










// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp () {
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   // const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
//   const messagingAtomCount = useRecoilValue(messagingAtom);
//   const notificationsAtomCount = useRecoilValue(notificationsAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   // // we can also use this but selector is better
//   // const totalNotificationCount = useMemo(() => {
//   //   return networkNotificationCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount
//   // }, [networkNotificationCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount])
  
//   return (
//     <>
//       <button>Home</button>

//       <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
//       <button>Jobs ({jobsAtomCount})</button>
//       <button>Messaging ({messagingAtomCount})</button>
//       <button>Notifications ({notificationsAtomCount})</button>

//       <button>Me ({totalNotificationCount})</button>

//       {/* <button onClick={() => {
//         setMessagingAtomCount(messagingAtomCount + 1);
//       }}>Me</button> */}
//     </>
//   )
// }

export default App


import PrivateRoutes from './utiils/PrivateRoutes';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AllUsers from './components/AllUsers';
import FacebookUser from './components/FacebookUser';
import GoogleUser from './components/GoogleUser';
import ItemPurchased from './components/ItemPurchased';
// import TotalWithdrawals from './components/ItemPurchased';
// import TotalReferrals from './components/TotalReferrals';
// import TodaysDeposite from './components/TodaysDeposite';
// import GuestUser from './components/GuestUser';
// import MonthlyDeposite from './components/MonthlyDeposite';
// import TodaysBouns from './components/TodaysBouns';
import MonthlyWinners from './components/MonthlyWinners';
import DailyWinners from './components/DailyWinners';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/facebook-users" element={<FacebookUser />} />
        <Route path="/google-users" element={<GoogleUser />} />
        <Route path="/item-purchased" element={<ItemPurchased/>} />
        {/* <Route path="/total-widthdrawals" element={<TotalWithdrawals />} />
        <Route path="/total-referrals" element={<TotalReferrals />} />
        <Route path="/todays-deposits" element={<TodaysDeposite />} />
        <Route path="/monthly-deposits" element={<MonthlyDeposite />} /> */}
        {/* <Route path="/todays-bonus" element={<TodaysBouns />} />
        <Route path="/guest-users" element={<GuestUser />} /> */}
        <Route path="/monthly-winners" element={<MonthlyWinners />} />
        <Route path="/daily-winners" element={<DailyWinners />} />
      </Route>
      <Route path="/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

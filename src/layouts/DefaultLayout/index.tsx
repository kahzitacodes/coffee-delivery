import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Header } from '../../components/Header';

export function DefaultLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
}
import { notFound } from 'next/navigation';

function NotFoundCatchAll() {
  notFound();
  return null;
}

export default NotFoundCatchAll;

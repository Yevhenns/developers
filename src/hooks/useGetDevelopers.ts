import { useEffect, useState } from 'react';
import { getDevelopers } from '../API/developers';

export const useGetDevelopers = () => {
  const [developers, setDevelopers] = useState<Developers | []>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [page, setPage] = useState(1);

  const showMore = () => {
    setPage(page + 1);
  };

  const setFirstPage = () => {
    getDevelopers(1).then(items => {
      if (items !== undefined) {
        setDevelopers(items.users);
        setTotalPages(items.total_pages);
      }
    });
  };

  useEffect(() => {
    getDevelopers(page).then(items => {
      if (items !== undefined) {
        setDevelopers(items.users);
        setTotalPages(items.total_pages);
      }
    });
  }, [page]);

  return { page, showMore, developers, totalPages, setFirstPage };
};

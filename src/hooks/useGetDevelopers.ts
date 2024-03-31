import { useEffect, useState } from 'react';
import { getDevelopers } from '../API/developers';
import { useDevelopersStore } from '../zustand/store';

export const useGetDevelopers = () => {
  const [developers, setDevelopers] = useState<Developers | []>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [page, setPage] = useState(1);

  const resStatus = useDevelopersStore(stete => stete.resStatus);

  const showMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getDevelopers(page).then(items => {
      if (items !== undefined) {
        setDevelopers(items.users);
        setTotalPages(items.total_pages);
      }
    });
    if (resStatus === 201) {
      getDevelopers(1).then(items => {
        if (items !== undefined) {
          setDevelopers(items.users);
          setTotalPages(items.total_pages);
        }
      });
    }
  }, [page, resStatus]);

  return { page, showMore, developers, totalPages };
};

import { useEffect, useState } from "react";

import { INITIAL_QUERY } from "#/constants/hooks";
import { Item, Query } from "#/interfaces";
import { getItemList } from "#/apis/getItemList";
import usePageSize from "./usePageSize";

const useItems = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<Query>(INITIAL_QUERY);
  const [bestItems, setBestItems] = useState<Item[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { showItemNum } = usePageSize();

  const loadItems = async (reset?: boolean) => {
    console.log("패치");
    setIsLoading(true);
    try {
      const resultData = await getItemList(query);
      if (reset) {
        setItems(resultData.list);
      } else {
        setItems((prev) => [...prev, ...resultData.list]);
      }
      setTotalCount(resultData.totalCount);
      setIsLoading(false);
    } catch (err) {}
  };
  useEffect(() => {
    const loadBestItems = async () => {
      setIsLoading(true);
      try {
        const resultData = await getItemList({
          page: 1,
          pageSize: 4,
          orderBy: "favorite",
        });
        setBestItems(resultData.list);
        setIsLoading(false);
      } catch (err) {}
    };
    loadBestItems();

    setQuery((prev) => ({
      ...prev,
      orderBy: "recent",
      pageSize: showItemNum.selling,
    }));
  }, []);

  useEffect(() => {
    loadItems(true);
  }, [query.orderBy]);

  useEffect(() => {
    loadItems(true);
  }, [query.page, showItemNum.selling]);

  return { items, totalCount, setQuery, isLoading, bestItems, showItemNum };
};
export default useItems;

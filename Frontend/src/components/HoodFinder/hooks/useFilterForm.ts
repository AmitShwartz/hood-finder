import { useCallback, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import useFormStore from "../../../hooks/server/stores/useFormStore";
import useFetchNeighborhoodSortOptions from "../../../hooks/server/useFetchNeighborhoodSortOptions";

const useFilterForm = () => {
  const {
    setAgeRange,
    setMaxDistance,
    setSortBy,
    maxDistance,
    ageRange,
    sortBy,
    hideModal,
  } = useFormStore();

  const { data } = useFetchNeighborhoodSortOptions();

  const initialValues = useMemo(
    () => ({
      maxDistance,
      ageRange,
      sortOrder: sortBy?.[0],
      sortField: sortBy?.[1],
    }),
    [maxDistance, ageRange, sortBy]
  );

  const [formValues, setFormValues] = useState(initialValues);

  const { fieldOptions, sortOrderOptions } = useMemo(() => {
    const fieldOptions = data?.fieldOptions.map((field) => ({
      label: field,
      value: field,
    }));
    const sortOrderOptions = data?.sortOptions.map((sortOrder) => ({
      label: sortOrder,
      value: sortOrder,
    }));
    return { fieldOptions, sortOrderOptions };
  }, [data]);

  const setFormValuesByKey = useCallback((key: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onSubmit = useCallback(() => {
    setMaxDistance(formValues.maxDistance);
    setAgeRange(formValues.ageRange);
    if (formValues.sortField && formValues.sortOrder)
      setSortBy([formValues.sortOrder, formValues.sortField]);

    hideModal();
  }, [formValues]);

  return {
    setFormValuesByKey,
    onSubmit,
    fieldOptions,
    sortOrderOptions,
    formValues,
    initialValues,
  };
};

export default useFilterForm;

const styles = StyleSheet.create({});

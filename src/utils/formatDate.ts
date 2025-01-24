const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {
    month: "short" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "numeric" as const,
  };
  const formatter = new Intl.DateTimeFormat("es-ES", options);
  return formatter.format(date);
};

export default formatDate
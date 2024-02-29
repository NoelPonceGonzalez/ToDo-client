const formatDatePart = (part) => {
    return part < 10 ? `0${part}` : part.toString();
  };
  
  const date = () => {
    const today = new Date();
    const day = formatDatePart(today.getDate());
    const month = formatDatePart(today.getMonth() + 1);
    const year = today.getFullYear();
  
    const dateActual = `${day}/${month}/${year}`;
  
    return dateActual;
  };
  
  export default date;
  
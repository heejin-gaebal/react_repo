import { useState } from 'react';

// 폼데이터 받는 js
function useFormDate(initState) {
  const [formData, setFormData] = useState(initState); //기본값 담기

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  return { formData, handleChange };
}

export default useFormDate;

import React from 'react';

const Homepage = () => {
  const { formData, handleChange, setFormData } = useForm({});

  const handleSubmit = () => {
    const fd = new FormData();
    fd.append('title', formData.title);
    fd.append('content', formData.content);
    fd.append('f', formData.f); //파일객체 꺼내오기
    const url = 'http://127.0.0.1:8080/api/board';
    const option = {
      method: 'POST',
      headers: {},
      body: fd,
    };
    fetch(url, option).then((resp) => resp.ok()); //응답의 상태코드확인해보기
  };

  const handleFileChange = (e) => {
    e.preventDefault;
    console.log(e.target.files[0]); //파일 객체 확인 | 리스트형[배열]
    const fileData = e.target.files[0];
    setFormData((prev) => {
      return { ...prev, f: fileData };
    });
  };

  return (
    <>
      <h1>파일업로드 연습</h1>
      <input type="text" name="title" onChange={handleChange} />
      <br />
      <textarea name="content" onChange={handleChange}></textarea>
      <br />
      <input type="file" multiple name="f" onChange={handleFileChange} />
      <br />
      <input type="button" onClick={handleSubmit} value={'제출하기'} />
    </>
  );
};

export default Homepage;

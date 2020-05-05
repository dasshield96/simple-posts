import React from 'react';
import Form, { useForm } from 'rc-field-form';
import PropTypes from 'prop-types';
import { FormField } from "../input";

const initialPostValues = {
  title: '',
  body: '',
  tags: '',
};

const tagsRegExp = /^([\wа-я0-9\s]+,)*([\wа-я0-9\s]+){1}$/i;

function CreatePostForm({ onSuccess }) {
  const [form] = useForm();

  const onFinish = (values) => {
    onSuccess({...values, tags: values.tags ? values.tags.split(', ') : values.tags});
    form.resetFields();
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={initialPostValues} className="col-lg-4">
      <div className="form-group">
        <FormField
          name="title"
          placeholder="Заголовок"
          rules={[{required: true, message: "Заголовок не может быть пустым"}]}
        />
      </div>
      <div className="form-group">
        <FormField
          name="body"
          placeholder="Запись"
          rules={[{required: true, message: "Запись не может быть пустой"}]}
        />
      </div>
      <div className="form-group">
        <FormField
          name="tags"
          placeholder="тег, еще тег"
          rules={[
            {required: true, message: "Без тегов нельзя"},
            {pattern: tagsRegExp, message: 'Через запятую c пробелом!'}
          ]}
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </Form>
  );
}

CreatePostForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default CreatePostForm;

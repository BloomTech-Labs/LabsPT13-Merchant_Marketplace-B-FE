import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const FormInput = props => {
  const {
    name,
    value,
    onChange,
    placeholder,
    labelId,
    type,
    Icon,
    styles,
  } = props;

  return (
    <>
      <label htmlFor={labelId}>{labelId}</label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={styles}
        addonAfter={Icon}
        suffix={
          <AudioOutlined
            style={{
              fontSize: 16,
              color: '#1890ff',
            }}
          />
        }
      />
    </>
  );
};

export default FormInput;

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
};

import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const EmployeeCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Nombre"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Cargo"
          name="position"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              { value: "employee", label: "Empleado" },
              { value: "manager", label: "Gerente" },
              { value: "admin", label: "Administrador" },
              { value: "shareholder", label: "Accionista" },
              { value: "supervisor", label: "Supervisor" },
              { value: "specialist", label: "Especialista" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};

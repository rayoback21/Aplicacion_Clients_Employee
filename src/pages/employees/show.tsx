import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const EmployeeShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Nombre"}</Title>
      <TextField value={record?.firstName} />
      <Title level={5}>{"Apellido"}</Title>
      <TextField value={record?.lastName} />
      <Title level={5}>{"Correo electrónico"}</Title>
      <TextField value={record?.email} />
      <Title level={5}>{"Cargo"}</Title>
      <TextField
        value={
          record?.position === "employee"
            ? "Empleado"
            : record?.position === "manager"
            ? "Gerente"
            : record?.position === "admin"
            ? "Administrador"
            : record?.position === "shareholder"
            ? "Accionista"
            : record?.position === "supervisor"
            ? "Supervisor"
            : record?.position === "specialist"
            ? "Especialista"
            : ""
        }
      />
    </Show>
  );
};

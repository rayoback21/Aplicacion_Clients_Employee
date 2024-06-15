import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const ClientShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />
      <Title level={5}>First Name</Title>
      <TextField value={record?.firstName} />
      <Title level={5}>Last Name</Title>
      <TextField value={record?.lastName} />
      <Title level={5}>Address</Title>
      <TextField value={record?.address} />
      <Title level={5}>City</Title>
      <TextField value={record?.city} />
      <Title level={5}>Postal Code</Title>
      <TextField value={record?.postalCode} />
      <Title level={5}>Phone Number</Title>
      <TextField value={record?.phoneNumber} />
      <Title level={5}>Email</Title>
      <TextField value={record?.email} />
    </Show>
  );
};

import {
    DeleteButton,
    EditButton,
    List,
    useTable,
  } from "@refinedev/antd";
  import { BaseRecord } from "@refinedev/core";
  import { Space, Table } from "antd";
  
  export const ClientList = () => {
    const { tableProps } = useTable({
      syncWithLocation: true,
    });
  
    return (
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title="ID" />
          <Table.Column dataIndex="firstName" title="First Name" />
          <Table.Column dataIndex="lastName" title="Last Name" />
          <Table.Column dataIndex="address" title="Address" />
          <Table.Column dataIndex="city" title="City" />
          <Table.Column dataIndex="postalCode" title="Postal Code" />
          <Table.Column dataIndex="phoneNumber" title="Phone Number" />
          <Table.Column dataIndex="email" title="Email" />
          <Table.Column
            title="Actions"
            dataIndex="actions"
            render={(_, record: BaseRecord) => (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    );
  };
  
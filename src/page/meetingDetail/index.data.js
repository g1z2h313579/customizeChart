const columns = [
  {
    title: "序号",
    dataIndex: "index",
    align: 'center'
  },
  {
    title: "时间",
    dataIndex: "time",
    align: 'center'
  },
  {
    title: "会议安排",
    dataIndex: "gear",
    align: 'center'
  },
];

const dataSource = [
  {
    key: 1,
    index: 1,
    time: "10:00 - 10:20",
    gear: "演示会议页面，进行5月经营情况汇报",
  },
  {
    key: 2,
    index: 2,
    time: "10:20 - 11:00",
    gear: "会议专题讨论————《XXXXXXXX》",
  },
  {
    key: 3,
    index: 3,
    time: "11:00 - 12:00",
    gear: "会议专题讨论————《XXXXXXXX》",
  },
  {
    key: 4,
    index: 4,
    time: "12:00 - 14:00",
    gear: "工作午餐",
  },
  {
    key: 5,
    index: 5,
    time: "14:00 - 16:00",
    gear: "会议专题讨论————《XXXXXXXX》",
  },
];

export { columns, dataSource };

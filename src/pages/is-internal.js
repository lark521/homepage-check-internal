const isInternal = () => {
  // 获取当前用户的 IP 地址
  const ip = window.location.hostname;

  // 判断 IP 地址是否属于内网网段
  const internalIpRanges = [
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
  ];
  return internalIpRanges.some((range) => range.includes(ip));
};

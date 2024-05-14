import React from 'react';

export default function RightMenu() {
  // 右侧菜单样式
  const RightMenuStyle: React.CSSProperties = {
    width: '94%',
    height: '96%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    padding: '4%',
    borderRadius: '1%',
    marginTop: '10%',
  };
  return <div style={RightMenuStyle}>RightMenu</div>;
}

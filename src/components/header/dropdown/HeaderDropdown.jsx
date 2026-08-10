import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from "react-icons/io";

// more
const items = [
  {
    key: '2',
    label: (
          <div className='block px-1 py-2 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl'>
            Distribute
          </div>
        ),
    children: [
      {
        key: '2-1',
        label: (
          <div className='block px-1 py-2 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl'>
            Distribute on Epic Games Store
          </div>
        ),
      },
      {
        key: '2-2',
        label: (
          <div className='block px-1 py-2 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl'>
            Developer Forums
          </div>
        ),
      },
      {
        key: '2-3',
        label: (
          <div className='block px-1 py-2 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl'>
            Documentation
          </div>
        ),
      },
      {
        key: '2-4',
        label: (
          <div className='block px-1 py-2 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl'>
            Learning
          </div>
        ),
      },
    ],
  },
];
const HeaderDropdown = () => (
  
  <Dropdown
    menu={{ items, expandIcon: (
      <IoIosArrowForward className="text-white/70 text-xs  mt-3.5" />
    ), }}
    popupRender={(menu) => (
      <div className="mt-1.5 bg-[#2b2b2f] rounded-[15px] overflow-hidden">
        {React.cloneElement(menu, {
      style: { background: 'transparent', boxShadow: 'none' },
    })}
      </div>
    )}
  >
    <a className='group hover:text-[#8b8b92]' onClick={e => e.preventDefault()}>
      <Space>
        More
        <IoIosArrowDown className="mr-3 mt-1 transition-transform duration-200 group-hover:rotate-180" />
      </Space>
    </a>
  </Dropdown>
);
export default HeaderDropdown;
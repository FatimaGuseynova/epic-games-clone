import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';

const HeaderDropdown1 = () => (
 <Dropdown
  trigger={["hover", "click"]}
  popupRender={() => (
    <div className="w-80 rounded-3xl font-semibold bg-gradient-to-br from-[#2b2b2f] to-[#555] p-3 shadow-2xl">
      <a className="block rounded-xl bg-zinc-600 px-4 py-3 !text-[#FEFEFE] hover:!bg-[#7d7d7d95]">
        Distribute on Epic Games Store
      </a>

      <a className="block px-4 py-3 !text-[#FEFEFE]  hover:!bg-[#7d7d7d95] rounded-xl">
        Developer Forums
      </a>

      <a className="block px-4 py-3 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl">
        Documentation
      </a>

      <a className="block px-4 py-3 !text-[#FEFEFE] hover:!bg-[#7d7d7d95] rounded-xl">
        Learning
      </a>
    </div>
  )}
>
  <a className='flex items-center group hover:text-[#8b8b92]'>Distribute  <IoIosArrowDown
                      className={`mr-3 mt-1 transition-transform duration-200 group-hover:rotate-180`}
                  /></a>
</Dropdown>
);
export default HeaderDropdown1;
import React, { createContext, useContext } from "react";

const TabContext = createContext<TabProps>({ currentTab: 0 });

export default function Tab({ currentTab, onChange, children }: TabProps) {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeadsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Item = ({ label, index }: { label: string; index: number }) => {
  const { currentTab, onChange } = useContext(TabContext);

  return (
    <div
      onClick={() => onChange(index)}
      className={`px-7 py-3 cursor-pointer ${
        currentTab === index ? "text-[#437D8E] border-b-2" : null
      }`}
    >
      {label}
    </div>
  );
};

Tab.Item = Item;

Tab.ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const ContentItem = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const context = useContext(TabContext);

  return context?.currentTab === index ? (
    <div className='contentitem'>{children}</div>
  ) : null;
};

Tab.ContentItem = ContentItem;

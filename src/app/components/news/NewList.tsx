'use client';
import Icons from '@/app/components/common/Icons';
import { newsSummaries, additionalNews } from '@/app/constants/newsdata';
import { title, k } from '@/app/constants/iconPath';
import React from 'react';

const NewsList = (): JSX.Element => {
  return (
    <div className="max-w-[1200px] mx-auto mt-24">
      <div className="flex items-center mb-4">
        <Icons name={title} />
        <h3 className="text-xl font-bold ml-2">{newsSummaries[0].title}</h3>
      </div>
      <div className="news-items p-6 border border-[#7a7a7a] rounded-[15px]">
        <ul className="list-none space-y-2">
          {newsSummaries[0].content.map((item, index) => (
            <li key={index} className="flex">
              <span className="font-bold">{item.title}</span>
              <span className="ml-2">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 max-w-[1200px] mx-auto">
        <ul className="space-y-4">
          {additionalNews.map((news, index) => (
            <li key={index} className="flex justify-between items-start pb-2">
              <span
                className="text-sm text-gray-500 text-left"
                style={{ width: '150px' }}
              >
                {news.date}
              </span>
              <span
                className="font-semibold text-gray-700 text-left"
                style={{ width: '400px' }}
              >
                {news.headline}
              </span>
              <span
                className="text-sm text-gray-500 text-left"
                style={{ width: '500px' }}
              >
                {news.summary}
              </span>
              <Icons name={k} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;

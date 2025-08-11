'use client';

import { useState } from 'react';
import { getLessons, getLessonCount } from '@/data/lessons';

export function CourseSection() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  
  const lessons = getLessons();
  const totalLessons = getLessonCount();

  const handleLessonClick = (index: number) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mt-44">
      {/* Course Main Headline */}
      <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Course</h2>
      
      {/* Course Subheadline */}
      <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
        Everything you need to become an AI builder
      </p>
      
      <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-gray-200">
        {/* Course Header */}
        <div className="px-8 py-8 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-2">AI Coding</h3>
          <p className="text-[#626262] text-lg">{totalLessons} lessons</p>
        </div>
        
        {/* Course Lessons */}
        <div>
          {lessons.map((lesson, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <div 
                className="px-8 py-6 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleLessonClick(index)}
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  {/* Badge above title on mobile */}
                  <div className="mb-2">
                    {lesson.status === "released" ? (
                      <span className="px-3 py-1 bg-green-50 text-[#2ECC71] text-sm font-medium rounded-md flex items-center space-x-2 w-fit">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Released</span>
                      </span>
                    ) : (() => {
                      // Find the next two lessons after the last released lesson
                      const releasedCount = lessons.filter(l => l.status === "released").length;
                      const isThisWeek = index >= releasedCount && index < releasedCount + 2;
                      
                      return isThisWeek ? (
                        <span className="px-3 py-1 bg-purple-50 text-[#6B2FC9] text-sm font-medium rounded-md w-fit">
                          This Week
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-50 text-[#F4B400] text-sm font-medium rounded-md w-fit">
                          Coming Soon
                        </span>
                      );
                    })()}
                  </div>
                  {/* Title and arrow */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      <span className="text-[#626262]">Lesson {lesson.number} –</span>{' '}
                      <span className="text-black">{lesson.title}</span>
                    </h4>
                    <svg 
                      className={`w-5 h-5 text-[#626262] transform transition-transform duration-300 ${
                        expandedLesson === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      <span className="text-[#626262]">Lesson {lesson.number} –</span>{' '}
                      <span className="text-black">{lesson.title}</span>
                    </h4>
                  </div>
                  <div className="flex items-center space-x-4">
                    {lesson.status === "released" ? (
                      <span className="px-3 py-1 bg-green-50 text-[#2ECC71] text-sm font-medium rounded-md flex items-center space-x-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Released</span>
                      </span>
                    ) : (() => {
                      // Find the next two lessons after the last released lesson
                      const releasedCount = lessons.filter(l => l.status === "released").length;
                      const isThisWeek = index >= releasedCount && index < releasedCount + 2;
                      
                      return isThisWeek ? (
                        <span className="px-3 py-1 bg-purple-50 text-[#6B2FC9] text-sm font-medium rounded-md">
                          This Week
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-50 text-[#F4B400] text-sm font-medium rounded-md">
                          Coming Soon
                        </span>
                      );
                    })()}
                    <svg 
                      className={`w-5 h-5 text-[#626262] transform transition-transform duration-300 ${
                        expandedLesson === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Expandable Description */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedLesson === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-[#626262] leading-relaxed">{lesson.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
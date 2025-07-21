"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Tooltip } from '@/components/ui/tooltip'

const Skills = () => {
  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <h1 className='text-4xl font-bold text-white mb-5'>Skills</h1>

      <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-">
        {
          data.map((skill, idx) => (
            <Tooltip key={idx}>
              <Badge color="gray" variant="default" className={`text-xs max-sm:text-[10px] py-1 px-2 cursor-pointer hover:bg-white/80 bg-white text-black`}>
                {skill}
              </Badge>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}


export default Skills;

const data: string[] = ["JavaScript", "TypeScript","Node.js", "Express,js", "Redis","Websockets","Docker", "AWS", "gRPC","MongoDB", "PostgreSQL", "MySQL","Zod","Git","Go","React","Next.js"];
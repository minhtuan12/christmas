'use client'
import { motion } from 'framer-motion'

export default function Content() {
    return (
        <motion.div
          className="mt-24 bg-white p-2 rounded-lg shadow-lg text-center max-w-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'Merienda, serif',
            fontOpticalSizing: 'auto',
            fontStyle: 'normal',
          }}
        >
          <h2 className="text-3xl font-bold text-red-600 mb-4 font-serif">Merry Christmas!</h2>

          <p className="text-green-700 mb-4">
            <i>Dear my @babe.na,</i>
          </p>
          <p className="text-green-700 text-[15px] mb-4 h-[(100vh_-_100px)] overflow-auto">
          Lần đầu đón Noel với nhau cũng gọi là có chút bỡ ngỡ đi, anh chúc mọi thứ đến với babi đều thuận lợi, cả học hành hay công việc. Chúc các mối quan hệ quanh em đều tốt, bớt mấy người toxic dùm, nhìn em stress với tủi thân anh cũng thấy tội lắm. Anh cũng rất vui khi thấy em bắt đầu dựa dẫm anh nhiều hơn, với cả sau mấy lần “tranh luận” thì anh chỉ thấy thương em hơn thôi ý. Thương những cái em đã trải qua, thương em cả những lúc anh làm em buồn nữa. Nên anh cũng chỉ mong là sẽ cố không mang lại mấy cái tiêu cực cho nhau nữa. Em có nói là em rất khó để bắt đầu một mối quan hệ, nên anh cũng mong em xem việc bước ra khỏi mối quan hệ đấy cũng không nên quá dễ dàng. So, again, let me be a part of your life, focus on becoming your best version, and i got your back. 
          </p>
          <div className='flex items-center gap-[5px] justify-center mt-[-10px] mb-[5px]'>Love you babe<img src="heart.svg"/></div>
          <p className="text-[#F72C5B] font-semibold">
            Your @tuniuoi, <br/>
            <i>tuniuoi</i>
          </p>
          <div className="mt-4 text-5xl flex justify-center items-center gap-[15px]">
            <img src="pic1.jpg" className='w-[60px] h-auto rounded-[10px]'/>
            <img src="pic2.jpg" className='w-[60px] h-auto rounded-[10px]'/>
            <img src="pic3.jpg" className='w-[60px] h-auto rounded-[10px]'/>
          </div>
        </motion.div>
      )
}

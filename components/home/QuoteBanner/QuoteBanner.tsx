import Image from 'next/image';

function QuoteBanner() {
    return (
        <div className='h-[260px] flex justify-center md:justify-between items-center'>
            <div className="relative w-[30%] h-[260]">
                <Image alt='' src='/left.svg' fill className=' hidden md:block' />
            </div>
            <div className='flex flex-col items-center'>
                <h1>با تخصص ما</h1>
                <h2 className='text-[#5E5E66]'>برند شما میدرخشد</h2>
            </div>
            <div className="relative w-[30%] h-[260]">
                <Image alt='' src='right.svg' fill className='hidden md:block' />
            </div>
        </div>
    )
}

export default QuoteBanner
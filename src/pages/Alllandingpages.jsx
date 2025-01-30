import React from 'react'
import Lpblock from '../components/Lpblock'
import { useNavigate } from 'react-router-dom';

const landingPages = [
  {
    id: 1,
    title: "Modern Business",
    image: "https://cdn.dribbble.com/userupload/17860359/file/original-5afe8c47a71f28ed26ae287cc5e6d20d.png?resize=1024x768&vertical=center",
    pageUrl: "/landing-pages/business.html"
  },
  {
    id: 2,
    title: "Tech Startup",
    image: "https://cdn.dribbble.com/userupload/17860359/file/original-5afe8c47a71f28ed26ae287cc5e6d20d.png?resize=1024x768&vertical=center",
    pageUrl: "/landing-pages/startup.html"
  },
  {
    id: 3,
    title: "Creative Agency",
    image: "https://cdn.dribbble.com/userupload/17992227/file/original-e57d1a4d5b049c5a7c070c68bc448129.png?resize=1024x768&vertical=center",
    pageUrl: "/landing-pages/agency.html"
  },
  {
    id: 4,
    title: "Creative Agency",
    image: "https://cdn.dribbble.com/userupload/17992227/file/original-e57d1a4d5b049c5a7c070c68bc448129.png?resize=1024x768&vertical=center",
    pageUrl: "/landing-pages/agency.html"
  }
];

const Alllandingpages = () => {
  const navigate = useNavigate();

  const handleBlockClick = (pageId) => {
    console.log("Hello buddy")
    navigate(`/preview/${pageId}`);
  };
  return (
    <div className='w-[98%] justify-between gap-10 flex flex-wrap  min-h-screen mt-10 ml-4'>
    {
    landingPages.map((page)=>(
      <div className=" w-[31%] rounded-2xl h-96 overflow-hidden" onClick={() => handleBlockClick(page.id)} key={page.id}>
      < Lpblock image={page.image} title={page.title} />
      </div>

    ))}
    </div>
  )
}

export default Alllandingpages

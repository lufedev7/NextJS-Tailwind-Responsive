import Image from 'next/image'
import ArrowsBacks from '../components/icon/ArrowsBacks'
import Styles from '../styles/formCreate.module.css'
import Logo from '../components/icon/logo'
export default function angular() {
  return (
    <div className={`${Styles.DivPrimary} bodys`} >
        <div className={`${Styles.DivContent}`}>

            <div className={`${Styles.DivBgImage}`} id='divBgImage'> </div>

            <div className={`${Styles.ContentForm}`}id='contentForm'>
                <div className={`${Styles.HeaderMobile} `}  id='HeaderMobile'>
                <div id='arrowBack'>
                    <button className={`${Styles.Buttonback}  buttonBack`} id='butonBack'>
                        <ArrowsBacks/>
                    </button>
                </div>
                <div className={`${Styles.Divlogo}`} id='Logo'>
                   <Logo className ='h-52'></Logo>
                </div>
                </div>
                <div className='bg-red-300  ' id='bodyForm'>
                    <div className='lg:columns-2 gap-3' id='form'>
                    <div className='ml-3'>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    <div className=''>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    <div className=''>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    <div className=''>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    <div className='grid  bg-green-600'>
                        <span>hola</span>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    <div className=''>
                       <input type="text"
                        className='w-[300px] mt-4'/>
                    </div>
                    </div>
                    <div className='' id='submi'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, {useState, useEffect} from 'react';
import userService from './services/user.service';

const Home = () => {
    const [content, setContent] = useState('');
    console.log('content', content)
    useEffect(()=> {
        userService.getPublicContent().then(
            (response) => {
                setContent(response.data)
            },
            (error) => {
                const _content = 
                    (error.response && error.response.data) ||
                    error.message || error.toString();
                setContent(_content);
            }
        )
    }, [])
    return(
        <div className="container">
            <div className="row content-justify">
                <div>
                    <h2 className="text-center"> Home {content}</h2>
                </div>
                <div>
                    <p>
                        BeConnected is a Translation and Localisation company offering online services to a global clientele. We operate from our offices in Oslo, Norway and Sofia, Bulgaria. We specialize in language services covering the Nordic and Eastern European languages. These languages include Norwegian, Danish, Swedish, Icelandic, Finnish, Bulgarian, Romanian, Russian, Turkish, Polish and Czech. We translate from English, German, French and Italian into these languages – and from these languages into English, German, French and Italian. We offer a wide range of services to meet your needs in in an ever-changing global market. 
                    </p>
                    <p>    
                        We also have the resources to handle all projects and deliver them on time regardless of their various scopes and requirements.
                        BeConnected operates 24/7 365 days a year, because the business world never sleeps.
                    </p>
                    <p>
                        BeConnected also works as a sub-contractor for other global translation companies. Why not work directly with our team of dedicated project coordinators? Our experienced staff can coordinate your project and needs. This means that you save valuable time, and you do not have to worry about the hassle of working with multiple contractors. You benefit from the talent, expertise and experience we offer to turn your idea into a superior product – on time and tailored to your specific requirements.
                    </p>
                </div>
            </div>
        </div>   
    );
}

export default Home;
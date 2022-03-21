import { ContactForm } from '../components/Forms';

const Contact = () => {
    return (
        <div className="py-16">
            <div className="container max-w-6xl">
                <h3 className="text-purple text-5xl mb-4 text-center font-PoiretOne font-bold capitalize">
                    contact
                </h3>
                <div className="">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;

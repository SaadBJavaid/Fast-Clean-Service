import {getServerSession} from "next-auth";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";

export const metadata = {
    title: "About Us - Fast Clean Service",
    description: "We are a mobile cleaning company specializing in steam cleaning the interior of cars at your location. Our team offers professional cleaning services for cars, motorcycles, and boats with advanced steam cleaning technology.",
    keywords: "About Fast Clean Service, mobile auto detailing, steam cleaning, car cleaning service, motorcycle cleaning, boat cleaning, professional auto care, mobile steam cleaning",
    canonical: "https://fastcleanservice.nl/over-ons/",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        type: "article",
        locale: "nl_NL",
        title: "About Us - Fast Clean Service",
        description: "We are a mobile cleaning company specializing in steam cleaning the interior of cars at your location. We clean cars, motorcycles, and boats with professional steam cleaning services.",
        url: "https://fastcleanservice.nl/over-ons/",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2018/07/20210516111139_IMG_4648-scaled-boost.jpg",
            width: 2560,
            height: 1707,
            alt: "Fast Clean Service team providing mobile auto detailing",
            type: "image/jpeg",
        },
        article: {
            publisher: "https://www.facebook.com/FastCleanServiceNL/",
            modifiedTime: "2023-03-13T22:02:08+00:00",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Fast Clean Service",
        description: "Learn more about Fast Clean Service, a professional mobile cleaning company that brings steam cleaning services for your car, motorcycle, or boat directly to your location.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2018/07/20210516111139_IMG_4648-scaled-boost.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://fastcleanservice.nl/over-ons/",
        url: "https://fastcleanservice.nl/over-ons/",
        name: "About Us - Fast Clean Service",
        isPartOf: {
            "@id": "https://fastcleanservice.nl/#website",
        },
        datePublished: "2018-07-04T14:34:18+00:00",
        dateModified: "2023-03-13T22:02:08+00:00",
        description: "We are a mobile cleaning company specializing in steam cleaning the interior of cars at your location. We clean cars, motorcycles, and boats with professional steam cleaning services.",
        breadcrumb: {
            "@id": "https://fastcleanservice.nl/over-ons/#breadcrumb",
        },
        inLanguage: "nl-NL",
        potentialAction: [
            {
                "@type": "ReadAction",
                target: ["https://fastcleanservice.nl/over-ons/"],
            },
        ],
    },
    additionalMetaTags: [
        { name: "application-name", content: "Fast Clean Service" },
        { name: "theme-color", content: "#0c7fcf" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        { property: "fb:app_id", content: "1492949054316243" },
    ],
    link: [
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "16x16", type: "image/png" },
        { rel: "icon", href: "https://fastcleanservice.nl/wp-content/uploads/2018/07/favicon.png", sizes: "32x32", type: "image/png" },
        { rel: "canonical", href: "https://fastcleanservice.nl/over-ons/" },
    ],
};


export default async function RootLayout({ children }) {
    const session = await getServerSession();

    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />
            {children}
            <div style={{ zIndex: 10, position: "relative" }}>
                <Footer />
            </div>
        </div>
    );
}

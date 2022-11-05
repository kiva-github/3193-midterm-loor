// assets
import charityWaterLogo from '../assets/charity-water-logo.png'
import feedingAmericaLogo from '../assets/feeding-america-logo.png'
import stJudeLogo from '../assets/st-jude-logo.png'
import doctorsWithoutBordersLogo from '../assets/doctors-without-borders-logo.png'
import americanRedCrossLogo from '../assets/american-red-cross-logo.png'
import unicefLogo from '../assets/unicef-logo.png'


export const organizations = [
    {
        title: "Charity: Water",
        id: "charity-water",
        image: {
            src: charityWaterLogo,
            alt: 'charity water logo'
        },
        founded: '2006',
        headquarters: 'New York, NY',
        description: {
            "p": "description about Charity: Water"
        }
    },
    {
        title: "Feeding America",
        id: "feeding-america",
        image: {
            src: feedingAmericaLogo,
            alt: 'feeding america logo'
        },
        founded: '1979',
        headquarters: 'Chicago, IL',
        description: {
            "p": "description about Feeding America"
        }
    },
    {
        title: "St. Jude's Children's Research Hospital",
        id: "st-jude",
        image: {
            src: stJudeLogo,
            alt: 'st jude hospital logo'
        },
        founded: '1960',
        headquarters: 'Memphis, TN',
        description: {
            "p": "description about St. Jude Children's Hospital Research"
        }
    },
    {
        title: "Doctors Without Borders",
        id: "doctors-without-borders",
        image: {
            src: doctorsWithoutBordersLogo,
            alt: 'doctors without borders logo'
        },
        founded: '1971',
        headquarters: 'Geneva, Switzerland',
        description: {
            "p": "description about Doctors Without Borders"
        }
    },
    {
        title: "American Red Cross",
        id: "american-red-cross",
        image: {
            src: americanRedCrossLogo,
            alt: 'american red cross logo'
        },
        founded: '1881',
        headquarters: 'Washington, D.C.',
        description: {
            "p": "description about American Red Cross"
        }
    },
    {
        title: "UNICEF",
        id: "unicef",
        image: {
            src: unicefLogo,
            alt: 'UNICEF'
        },
        founded: '1946',
        headquarters: 'New York, NY',
        description: {
            "p": "description about UNICEF"
        }
    }
]
import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
  const priceOptions =  [
        {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Open 5 days a week",
                "1 free fitness assessment",
                "Standard shower facilities",
                "Towel service (pay-per-use)",
                "Free parking (2 hours)"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes (up to 3 per week)",
                "Open 7 days a week",
                "Free water bottle",
                "Access to cardio zone",
                "1 free personal training session (per month)",
                "Towel service included",
                "Free parking (4 hours)"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 80,
            "features": [
                "Access to gym equipment",
                "Locker room access with premium amenities",
                "Unlimited group fitness classes",
                "Access to swimming pool and sauna",
                "Personal trainer once a month",
                "Open 7 days a week",
                "Free guest pass (1 per month)",
                "Priority access to new fitness classes",
                "Free sports drinks",
                "Yoga and Pilates included",
                "10% discount on gym merchandise",
                "Dedicated parking spot"
            ]
        },
        {
            "id": 4,
            "name": "VIP",
            "price": 120,
            "features": [
                "24/7 gym access",
                "Private locker room with luxury amenities",
                "Unlimited group fitness classes",
                "Access to swimming pool, sauna, and steam room",
                "Personal trainer (4 sessions per month)",
                "Custom diet and nutrition plan",
                "Free guest pass (2 per month)",
                "Priority booking for fitness and spa sessions",
                "Access to exclusive VIP lounge",
                "Free spa treatments (1 per month)",
                "Complimentary towels and sports drinks",
                "Unlimited parking",
                "Free access to member-only workshops",
                "Exclusive VIP events and challenges"
            ]
        }
    ]

    return (
        <div className='flex flex-col m-12 items-center justify-center'>
            <h2 className="text-5xl mb-6 text-white">Best Prices in the town</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
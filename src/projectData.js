import montyHall from './monty-hall.png';
import mapCluster from './map-cluster.png';
import gogogo from './gogogo.png';
import vendors from './vendors.png';
import qwertydvorak from './qwertydvorak.jpg';
import profithash1 from './Dashboard.PNG';
import profithash2 from './AccountSettings.PNG';
import profithash3 from './'

export default [
    {
        date: '12.02.17',
        name: 'Monty Hall Problem Simulator',
        image: montyHall,
        url: 'http://d28f7dh35mv2p1.cloudfront.net/',
        source: 'https://github.com/unicrontab/monty-hall-problem-simulator',
        description: `A simulation that tests the Monty hall problem.
            The simulator choses a door which is not opened, then one 
            is opened (that does not have the prize). 

            This simulator tests whether or not you should SWITCH 
            doors or stay at that point.
            `,
    },
    {
        date: '11.12.17',
        name: 'Map Clustering',
        image: mapCluster,
        url: 'https://d31enzgqnydvil.cloudfront.net/',
        source: 'https://github.com/unicrontab/map-clustering',
        description: `Using unsupervised machine learning, this
            project will take in any number of addresses, and cluster
            them on a map using configurable algorithms and tuning
            values.        
        `,
    },
    {
        date: '11.01.16',
        name: 'Go Go Go',
        image: gogogo,
        url: null,
        source: 'https://github.com/unicrontab/gogogo',
        description: `An ssh login manager/automator. This command-line
            utility allows you to quickly search and connect to many 
            ssh devices, securing passwords using strong PKI and an
            optional master password to connect to devices.        
        `,
    },
    {
        date: '12.05.17',
        name: 'Cyber Security Company Logos',
        image: vendors,
        url: null,
        source: 'https://github.com/unicrontab/cybersecurity-company-logos',
        description: `A quick and dirty page to display the top 500 
            cybersecurity company logos from a JSON data array.`,
    },
    {
        date: '04.07.14',
        name: 'Arduino Qwerty-To-Dvorak Converter',
        image: qwertydvorak,
        url: null,
        source: 'https://github.com/unicrontab/QWERTYtoDVORAK',
        description: `Code that allows an arduino with a USB shild to
        be used as a usb pass-through that will convert from Qwerty-to-Dvorak.
        
        Great if you are in and out of a datacenter, and all they have are
        qwerty keyboards.`,
    },
    {
        date: '05.01.2014-ish',
        name: 'Profit Hash',
        image: profithash1,
        url: 'https://photos.google.com/share/AF1QipNSMBjtvkf-0MkFxOgBbbOoxmxj2WXSNfSHCcrK6yq_mQXEcF2WTBjcNcozoJ7E1A/photo/AF1QipOr486pJNK8tIG55daBo4gKD7Z6k5KbLLGiSi6h?key=cm9ULTFONkh2X042ODhoN1BsMjNzcFpRQmxEZmxR',
        description: `An auto-switching alt coin mining pool site. It had hundreds of
        users globally and was frequently the most profitable auto-switching pool site
        measured from external sources.

        After bitcoin started dropping in price (ha ha) instead of just breaking even, I 
        called it quits.
        `,
    },
];

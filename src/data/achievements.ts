export interface ExtracurricularItem {
  id: string;
  title: string;
  organization: string;
  affiliation?: string;
  date: string;
  badge: string;
  credentialId?: string;
  image: string;
  description: string;
  category: "National Cadet Corps" | "Community & Social Service" | "Sports & Wellness";
}

export const extracurricularAchievements: ExtracurricularItem[] = [
  {
    id: "ncc-a-cert",
    title: "NCC 'A' Certificate (Air Wing - Grade 'B')",
    organization: "Ministry of Defence, Government of India",
    affiliation: "2 KAR (T) AIR SQN NCC | Karnataka & Goa Directorate",
    date: "24 Feb 2020",
    badge: "Air Wing Cadet",
    credentialId: "KAR A Cert AIR 2020 BB-4510",
    image: "/extracurricular/ncc-a-certificate.jpg",
    description: "Successfully completed military drill training, discipline exercises, leadership camps, and aeronautical orientation, passing the examination under the Ministry of Defence with Grade 'B'.",
    category: "National Cadet Corps"
  },
  {
    id: "nss-swachhata",
    title: "NSS Swachhata hi Seva 2024",
    organization: "National Service Scheme (NSS Cell, KSIT)",
    affiliation: "MYBharat, Ministry of Youth Affairs and Sports, Govt. of India",
    date: "27 Sep 2024",
    badge: "Active NSS Volunteer",
    image: "/extracurricular/nss-swachhata-hi-seva.jpg",
    description: "Actively participated in the nationwide community sanitation and civic awareness initiative organized by the NSS Cell in collaboration with the Government of India.",
    category: "Community & Social Service"
  },
  {
    id: "ncb-drug-awareness",
    title: "'Say Yes to Life, No to Drugs' Initiative",
    organization: "Narcotics Control Bureau (NCB)",
    affiliation: "Ministry of Home Affairs, Government of India",
    date: "06 Feb 2024",
    badge: "National Youth Pledge",
    credentialId: "8754993572",
    image: "/extracurricular/ncb-drug-awareness.jpg",
    description: "Official pledge and commitment towards championing drug abuse prevention, community awareness, and healthy youth living under the Narcotics Control Bureau.",
    category: "Community & Social Service"
  },
  {
    id: "red-cross-blood",
    title: "Voluntary Blood Donation Certificate of Appreciation",
    organization: "Indian Red Cross Society",
    affiliation: "Karnataka State Branch",
    date: "14 Nov 2024",
    badge: "Blood Donor (O+ve)",
    image: "/extracurricular/red-cross-blood-donation.jpg",
    description: "Conferred certificate of appreciation by the Indian Red Cross Society for voluntary blood donation to support medical emergencies and save precious lives.",
    category: "Community & Social Service"
  },
  {
    id: "smitam-drug-awareness",
    title: "Anti-Drugs Awareness Programme",
    organization: "Smitam NGO",
    affiliation: "Youth Drug-Free Community Drive",
    date: "30 Nov 2024",
    badge: "Social Welfare",
    image: "/extracurricular/anti-drugs-awareness.jpg",
    description: "Recognized for community involvement and dedication towards educating youth on substance abuse prevention during the community awareness campaign.",
    category: "Community & Social Service"
  },
  {
    id: "nisvaarth-5k",
    title: "NISVAARTH-2 5K RUN & Marathon Participation",
    organization: "Dept. of Electronics & Communication Engineering, KSIT",
    affiliation: "In association with IEEE Bangalore Section, WIE & Gleneagles BGS Hospital",
    date: "15 Jun 2024",
    badge: "Fitness & Social Cause",
    image: "/extracurricular/nisvaarth-2-5k-run.jpg",
    description: "Participated and completed the 5K Run for social causes, health awareness, and student athletic engagement organized by KSIT and IEEE student branches.",
    category: "Sports & Wellness"
  }
];

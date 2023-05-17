import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "postgresSQL",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "firebase",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABC1BMVEX////u7u//yijt7e7/oAH1fxf29vf6+vry8vP8/Pz39/f/zCj/ngD/oQD/mwDu7vH1ghj+wCb/xwD/yR//xCT0exf9z1Pv7er0eBX/yBjt8Pf4+//w7+b+rj7/pwD/mAD7jQD80Ff/sQD+7Mb3hxT9sR77lAz7oRf/8tL71HHr8Pvx6t79zkz+yzX6z1333J3569f9wGD8vT33z6D/rSn41p/+2YT5unr+tUf9/PHy2sX8zXr/1JH926n9x4/6umP+tDX51rX74rf/9dP69uX+pSzy5c732Jj7v1T2xpj94rn34sL7y2r8xVD+5a3+uVT95JP6w3P3lh//tF771nj6t2z5xn3+uC79q0cllgQbAAANyklEQVR4nO2de2ObOBLAbfz2GZQ1dVwgsds4Dyexk7RNfU1v0926btK95Lxtt7e73/+THDJICBhhHgLsHPNXK0NmfoxGGglJlEpEGpWyJZUGLSsTadKiOr2sRctoUZ0WNcmdlbwVlNb8XhAWhAVhQVgQFoQsYQv63S6rRDegEs6A1BWUSw1bWu0mkXqLlAFFdVrWsMtaDVrUBi5r+RW0s1RQqhBhnyIRxsFE2sxTtMWpCG16GfP8Iypw3FSOrYCaVimtiQTGAFLEENJbGQP4NYxV4I+hVlCoRVbgClKIMMiArSB0KYAIt96HawmDDHgahKn7MEhB4UMhhE/LhxvcH8ZX4OoPSU7TqDsClNGiNi1q+4ugy6IqcIrEKKDYzFNk08aA5w88ReD5s2ljDgqYn/8PxhYFYUFYEBaEBWFywtT7Q0gBLQpMeJL1h9BTpGWOdbQoOC+lRcFuClIAuMm501HgPN91Cqiz0868wyqInXm78lJGQdATiExobMvoKS6hcadvCWHMWnolD1/thTJgW8f4rztV5Q2KakAuhDF9OKxWO9f9ZggDcvdhPMKxUq1Wlbd6RAMyI4zRW9A/bf1/iQmrn/c4BuTWWzDvRogwLz2IsO9GiDTdl5VmK8LOG8N6q+K7LKkC952hFVDsxFmb/s8OJqxe208xZFKVftbG/E48GysxRufvLELl7coAf6jlnnknJbw6WgFWO/s3T5TwvWIRVpXbp05YHTxNQv1flBBH4hMkNF53CCGOxCdIqB9QQhyJm0iYrD8s6w6gKZs0q++8B3EEKAsqwmWNBQuovDWC7oyjINKdbJmwt2sj1odWn+h5/nm9XQuMBMYAUsQbW/zsqqWrPtE2IKKCjR0Bf3ARVuXQBuRCGMOHrV/chB3qxKdCuPjVQ3hNInEjCYMM4BEeVN1CI3EjCWP48HzoIaye3PgNGH/8uNgIwiADOIRvFS8hiUTGgPcDRbmeZ00oqD989BFWry0jnI7uE/Zz52SR8erL+DMlLeYy/doHiKfd3FMxVnPbeRVHQRjTYAKKDa+CJkXrEmP9s5/QmnZz3DSWreLhnRFdgb8K+xuLNMcW6O4EIOzgCXDHgG9WRZZfPG7h6ElfygBh9Zo1YEEjVb7aQsJ7CHA1AU4N+JOmBMqX7SM0fuuAiPt7iBiwcEbISnWxdYR7v8OEyhtKeOt0J2Ykbh/hF5iwOqCEA6ZUVsbBCnSE0EYRovMBDCi/uNStS/7tegTDL0EKUH8+6c4q4nsLqq3N/O43gJZRA1rIn5WSavru3LrEXY07nTFfAUK7XVXqXiBHAb0sMKVzCFyEQrK2B3/ORhBvdfMK9OB+BGYklrlZW/ulJmEZIzFZW2BFZAwgRWDm/TOXcHiELzv7jzdOO3cIVlAmgNpSdxQ4hP4YyWT0tMslXPWJaOxLeTq/G6ACVLYBJfUHsLAot9HT35ymFKPsnyP0wf+7MkKAAlQhgJJ60d8YH6IFlHczTuwDI4/jR0AB0imgJE3PN8aH6BOns8AiD48MMEyVK+RVgPq7DqDUPUcb48NbfiXF7ebXfbD4UfcoQDoLKGnz9Agj+tD4yG9osAyOwZFH9QG5FKD+hAWUtBltTBMRCugPm9+CfFiVawpIqHxzPUKkuwEldaIL6Q8FvBFpvQ4kvO7twITVO/avuWJwRbirh7JtDUGJeYpEor78ujkIJDys1cBqiocYjgLDC2g2pnSQ5SQ8sJssSW+1SZuXla7kpFfrfQedKCufSFvidPSsjKidRGdOY4t5UEMj79RqtR78DIavUBCgttwUwmUAoXzcMwlrh95J/5WYkYj4gBtECMwGO3JYWwkvEjEh6oOAknq6KYR/8Bsa2QasHcI/n4yRO1VzNzVERc6EjYC8W+7ZhL0j8PfhF73s6yaodIklORMugLyayHGNyCGnT7w64wJKXdKYiiGM3R/O4ZwMy1GPEvZOOJF4wQV0mppE/SGw/tQ5I6QR/NLDuo+fldIo5Dux80zlApqDYF3AClrq7LiroNEHLuHRDkPYO4aewTM+Hx4EW4vGc94zU+fNldKewib8DowiAwElaWIPEUMRpjc+POD5kIlCy4neehrsQSzjlAij+BAhheNDVxRi8Q0x1gJ25xvgw+YVz4VDD6AvEtcCmsN8PX8fNnlZqfy55yV0ReL6Korztg3woX7KIex4Ad1DjE4IQDNv2wTC/8JheOSNwlUkUieG8aApXQGEwCxHpHmam3cgoXztd6EpZO47nAdNwtVUTbJ5GgAiUta22Id9+BwCrB12ongQNzVuiDxmMcbwbDAQhatIPIriQTyjaNlJdOYxtngAJyh8fSEVOYIHcWaaPyGcdx/xAPFgPzyg2V0YuRM+QmEow1GIq+n3CB40ZbLInRCaK5WPeYCmPPtHFEJtnDshFIb8KKzVfooEKHVzJ2xDYch34U5EQLu7EDWLAfxul/GXDo4AwgMuYC8qoD2jmGC1ScU5zYw5oZUUtfxFzGX4f8bMT8ivo5E9aErXMNUAdvhPaGVMazMECbM2/U9/Q9PZ4QA+jwEodc/yXW3S/sVHaM/ji/Gg/SaYIXS3c2wVTmV8SLc3s4TCYtAiHKVBGNqH6M43RdjhRGE8D9rvunMkfO9raI44dTQmoKTO8vXhrZdQ5jQzcQEldXKeZxwy25tJMyMY0KymdyhHH+reFXnyd7CSJgCUulcJCRP1h7q3oRlCgHEbGduHM0PQCa3QMahAkeuEVsMDeAA1pDG7CSLqzAg+yDXCCa3Es+Hz0lGIzj6ZB63MNCAvrQTnpUnnaZaerbFAQxorVXNLnqMn94u1wYnfhUk9iGUvT0L3+nS/CxPG4ErUUX6E7tlgIApFeFDSvuZHuHBN0gBRKAIQdxf5EcrBLhQCKKm7N2T5W+aErrzb/0JUDKCZmd5QmqxXm7Drt+VDjwtFNDKWdBeJ3ltAbvI/HmbDh6PDmDBTiUcpeRATPlCd9ITWbDJv/VeHcOBJuQV09FTMxpQSClptEpKwz2yzUHppedAMxGkowhTGh2OZicLUPIibGuGEIX146RC6Vj+J9aAp0718fKi/of29/IKtpOJaUSJky2nGPtSd7c2uN76iPbjKTHPxYf8VIRy4olA4oKRdiiCMvjbx5i9KuJMqoDnMJzzZntB6rgB1VHwVlVZ5W4L1pYybImZtfZqz9VL1oIQ36iXI2pjfiWfDZd4GOXSHicJUPCg5WxGzHVsY9oI22Zm7ENvRM0K2ImZLSGaDB8/T9qCzFTFjwr89LkzNg6uNetkTkkN3lJ3UPWgSvsyDcG4taCNrEMWnaqxMr1D2hLervJts+0nTg1hGAggj9ofNN0qVeZuWMqC2RLH7w3ooafv+VVplpfL3TABNQoNjB/svUOK/XcMbSewZxLSrqLMVMcvVJi0chnIGjYwlU0JI7Eh/9NQf4oFvNh6U6FbELEfA+NCd1auYFDt6lnCUuQ/vlerBTlYepFsRsyQ0m9KTzDxIF3xnWUv/6ODVTxl5kDamGRIu9jt49VNWgOYwfxGXMGZ/OB7IO73MPIhlbBFG7w+dqZiybyrGmcRpltxTIGbebXb2WQJ252idaZSg3GAuKzFuIp5df0Jrpf5ROcwUUNLuTc0ZntDafBxmC2htRcxw9FT/K6tugso0W0I0yBpwtRUxS8KfAg4KSEM06TJjwr1ZN0M+VVrqejnbWQykL6daRn5Utd07ETNRQb0FkPBU9NJywj+0Q6Bok9GZrVX8Ca3A92rZE1pvZmrqbtSmsxvnSWd9QivSRz/SDUe1++PcSGHPjL+K8/bMoPJ8mmJVVSfzMirnuRvBFH1xn1ZVVbvLvt50VcRcToZEaO9CSoXxlH5eOFcfYsbSaCo8HDVtjKiGvAmxAYLDUZ1+bW3YV1hKi4uusKqqdi8WPgV5+9BiFAPYvViCCmISJukPbSEGNC5VAVVV1e5bHAVpntAKFPmPRm0YN/fTpFVV+3FlNCJ9T29NEcVO/D1gLPXSaJKod9SkcR0FKgDdZNchgEDg94BXRdiA+W7scFSly5sN/b6Fy4DGvRQrHM1BUjuUgtwJS6XxLEbPYQ6SQivInbBUeog6dNSk+0YUBbkTls4j5ePmIGkcUUHuhE29fBF6lkObPOiRFeROWEb9kFVV1S4XegwFkQnF9IfUAPN/6Gy+Pskxc9A9fU1GJfyE1pAraJv+y3wLXBena8LRbEEbSRSEWEFLnR098yazboGJ8eI0IAHQ1JnhVQBs9RV/Qmu8sQXPgEterqqqpwu/gk39DmmAAXr/EkwAtOn8DFCwqd8hDTRAH1/4wlGdXrYRpGALfVjGs1UP7nPX1e5LPM2UG6FoH5qi782mpK6qmnpxV+d80WpLfYj/vD6en0pdLBeXD2XEVbC1hHZjXsdf6KyjAAVCCFkCYJYj7jxN6GmUkN8DFjRPA+gQlbVxIRr+O1PM2pjfiWcz/Zht6goKwoKwICwIC0KRhPFOaOUa4M+L4ANUU1cQeEIrdDKq+4RWz2X0ZFTmANWoCoA7Q14GnNDaSHxCa7ykKmTWRjOqDfgesGMAv4aFHZ5t6/hwwwhT92GQgsKHQggLHwo1IBfCp9WWPv3+kMkI7AUarsTBV+RcxiQOq0vAO+tN4M5ABWay4r2zEXDnWgUUe1vz0pRPaA0wwB9quY8tCsKCsCAsCAvC5IRP9r1F4FNkrCNF2zG2YBVkRhh2OUtsQs5qk/8B098okSKwzqwAAAAASUVORK5CYII=",
    },
   
    {
      name: "socketIO",
      icon: "data:image/png;base64,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",
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Care Hospital",
      description:
        "Hospital management system thats allow the user to see all clinics in the hospital and doctors and book an appointment in available time and allows the doctors to see his schedule and he can cancel an appointment once the doctor cancel his appointment at a certain time the patient will receive notification as gmail message ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
      ],
      image:new URL('../assets/company/project4/1.png', import.meta.url).href
      ,
      source_code_link: "https://github.com/C7-gharaibehtasnim/MERAKI_Academy_Project_4",
    },
    {
      name: "Nigh",
      description:
        "Social media application allows the user to add post(image, vedio, text), Send friendship request,Adding comment content can be text ,image,emoji and gif also user can add Nested comment ,Chat a live chat and see online notifications and there is an admin dashbourd so can clearly see the users whos active or not can block users see numbers of post at certain time ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "Postgress",
          color: "pink-text-gradient",
        },
        {
          name: "socket-IO",
          color: "green-text-gradient",
        },
        {
          name: "mongoBD",
          color: "blue-text-gradient",
        },
      ],
      image:new URL('../assets/company/project5/8.png', import.meta.url).href,

      source_code_link: "https://github.com/gharaibehtasnim/MERAKI_Academy_Project_5",
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };
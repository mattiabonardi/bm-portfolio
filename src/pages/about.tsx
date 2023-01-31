import styles from "../styles/pages/About.module.css";
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className={styles.backContainer}></div>
      <div className={styles.container}>
        <div className={styles.profileImageWrapper}>
          <img src="/images/profile.png" className={styles.profileImage} />
          Berlin, 2022/02/22
        </div>
        <div className={styles.section}>
          <div className={styles.presentation}>
            I'm Mattia Bonardi and I’m from Italy. I believe that each of us
            must never set any limits to ourselves and that everyone must aspire
            to be the best version of themselves. This is my vision and it's the
            reason why I will always have the desire and the curiosity to learn
            something new and to abroaden my horizons thanks to the advices and
            experiences of others.
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <Skills />
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <Experience />
        </div>
        <div className={styles.section}>
          <h2 className={styles.contactTitle}>
            Feel free
            <br />
            to contact me
          </h2>
          <h2 className={styles.contactMail}>
            <span
              className={styles.mailLink}
              onClick={() => {
                window.open("mailto:mattiabonardi99@gmail.com");
              }}
            >
              mattiabonardi99@gmail.com
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}

const Experience = () => {
  const experienceData = [
    {
      company: "Smeup Lab",
      role: "Full Stack Developer",
      description:
        "Modernization, backend development, frontend development, deployment",
      period: {
        from: "2020/12",
        to: "current",
      },
    },
    {
      company: "Smeup R&D",
      role: "Backend Developer (internship)",
      description:
        "I developed a java microservice which allows to interpret the Smeup DSL languages",
      period: {
        from: "2020/09",
        to: "2020/12",
      },
    },
    {
      company: "Smeup R&D",
      role: "Backend Developer (internship)",
      description:
        "I developed a software for the control of a hydroponic station",
      period: {
        from: "2019/06",
        to: "2019/08",
      },
    },
    {
      company: "Jobs Academy",
      role: "ITS student",
      description: "Software Design & Web Development",
      period: {
        from: "2018/08",
        to: "2020/12",
      },
    },
  ];

  return (
    <div className={styles.experienceWrapper}>
      {experienceData.map((element, index) => {
        return (
          <div key={index} className={styles.experienceElement}>
            <div className={styles.experienceElementDescription}>
              {element.company} - {element.role} - {element.description}
            </div>
            <div className={styles.experienceElementDaterange}>
              {element.period.from} - {element.period.to}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const languages = ["typescript", "go", "javascript", "java", "c++", "sql", "php", "css", "html"];
  const backend = ["node", "gin", "vertx", "express", "cobra", "spring", "redis", "mongo", "mysql", "firebase", "as400"];
  const frontend = ["react", "vue", "vite", "wikijs", "electron", "three"];
  const deployments = ["aws", "docker", "heroku", "raspberry", "opensuse", "ubuntu", "nginx", "vmware"]

  const skills = languages.concat(backend, frontend, deployments);

  return (
    <div className={styles.skillsWrapper}>
      {
        skills.map((element, index) => {
          return (
              <Image key={index} alt={element} src={"/icons/" + element + ".svg"} width="50" height="50"/>
          )
        })
      }
    </div>
  )

}
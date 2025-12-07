export default function Portfolio() {
  const projects = [
    {
      title: "プロジェクト1",
      description: "React + Viteで作成したWebアプリケーション",
      link: "#"
    },
    {
      title: "プロジェクト2",
      description: "モダンなUIを持つポートフォリオサイト",
      link: "#"
    },
    {
      title: "プロジェクト3",
      description: "GitHub Pagesでホスティングされたサイト",
      link: "#"
    }
  ]

  return (
    <div className="page">
      <h1>ポートフォリオ</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">詳細を見る →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

import AchievementsSection from "../../components/dashboard-components/AchievementsSection.jsx";
import ExperiencesSection from "../../components/dashboard-components/ExperiencesSection.jsx";
import Header from "../../components/dashboard-components/Header";
import ProjectsSection from "../../components/dashboard-components/ProjectsSection.jsx";
import Sidebar from "../../components/dashboard-components/Sidebar.jsx";
import SkillsSection from "../../components/dashboard-components/SkillsSection.jsx";





const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header/>
        <div className="p-6">
          <SkillsSection />
        </div>
        <div className="p-6">
          <ProjectsSection />
        </div>
        <div className="p-6">
          <AchievementsSection />
          
        </div>
        <div className="p-6">
          <ExperiencesSection />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

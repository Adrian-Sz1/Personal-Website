
import { TECHNOLOGIES as T } from './technologies.js';
// TODO: Further rework is needed but will do for the time being
/**
 *  This function is quite slow O(n*m)
 */
export function sortTechnologies(technologies, technologiesObj = T) {
  const frameworks = technologies.filter(tech => Object.values(technologiesObj.FRAMEWORKS).includes(tech));
  const languages = technologies.filter(tech => Object.values(technologiesObj.LANGS).includes(tech));
  const databases = technologies.filter(tech => Object.values(technologiesObj.DATABASES).includes(tech));
  const buildTools = technologies.filter(tech => Object.values(technologiesObj.BUILD_TOOLS).includes(tech));
  const devopsTools = technologies.filter(tech => Object.values(technologiesObj.DEVOPS_TOOLS).includes(tech));
  const testing = technologies.filter(tech => Object.values(technologiesObj.TESTING).includes(tech));
  const monitoring = technologies.filter(tech => Object.values(technologiesObj.MONITORING).includes(tech));
  const architecture = technologies.filter(tech => Object.values(technologiesObj.ARCHITECTURE).includes(tech));
  const otherTools = technologies.filter(tech => Object.values(technologiesObj.OTHER).includes(tech));

  return [
    ...frameworks, 
    ...languages, 
    ...databases, 
    ...buildTools, 
    ...devopsTools,
    ...testing,
    ...monitoring,
    ...architecture, 
    ...otherTools,
    ...[]
    ];
}
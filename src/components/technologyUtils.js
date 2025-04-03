
import { TECHNOLOGIES as T } from './technologies.js';
// TODO: Further rework is needed but will do for the time being
/**
 *  This function is quite slow O(n*m)
 */
export function sortTechnologies(technologies) {
  const frameworks = technologies.filter(tech => Object.values(T.FRAMEWORKS).includes(tech));
  const languages = technologies.filter(tech => Object.values(T.LANGS).includes(tech));
  const databases = technologies.filter(tech => Object.values(T.DATABASES).includes(tech));
  const buildTools = technologies.filter(tech => Object.values(T.BUILD_TOOLS).includes(tech));
  const devopsTools = technologies.filter(tech => Object.values(T.DEVOPS_TOOLS).includes(tech));
  const testing = technologies.filter(tech => Object.values(T.TESTING).includes(tech));
  const monitoring = technologies.filter(tech => Object.values(T.MONITORING).includes(tech));
  const architecture = technologies.filter(tech => Object.values(T.ARCHITECTURE).includes(tech));
  const otherTools = technologies.filter(tech => Object.values(T.OTHER).includes(tech));

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
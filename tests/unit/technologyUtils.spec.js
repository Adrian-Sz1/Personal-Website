import { describe, it, expect } from 'vitest';
import { sortTechnologies } from '@/components/technologyUtils';

const mockTechnologies = {
  FRAMEWORKS: { VUE: 'Vue.js', REACT: 'React' },
  LANGS: { JAVASCRIPT: 'JavaScript', PYTHON: 'Python' },
  DATABASES: { MONGODB: 'MongoDB', SQL_SERVER: 'Microsoft SQL Server' },
  BUILD_TOOLS: { WEBPACK: 'Webpack', NPM: 'npm' },
  DEVOPS_TOOLS: { DOCKER: 'Docker', GIT: 'Git' },
  TESTING: { JEST: 'Jest', CYPRESS: 'Cypress' },
  MONITORING: { GRAFANA: 'Grafana', PROMETHEUS: 'Prometheus' },
  ARCHITECTURE: { MICROSERVICES: 'Microservices', MVVM: 'MVVM' },
  OTHER: { NODEJS: 'Node.js', TYPESCRIPT: 'TypeScript' },
};

describe('TechnologyUtils', () => {
  describe('sortTechnologies', () => {
    it('should be defined', () => {
      expect(sortTechnologies).toBeDefined();
    });
  
    it('should be a function', () => {
      expect(typeof sortTechnologies).toBe('function');
    });
  
    it('should return an array', () => {
      const technologies = ['Vue.js', 'React'];
      const sortedTechnologies = sortTechnologies(technologies, mockTechnologies);
      expect(Array.isArray(sortedTechnologies)).toBe(true);
    });
  });
  it('should handle an empty array', () => {
    const technologies = [];
    const sortedTechnologies = sortTechnologies(technologies, mockTechnologies);
    expect(sortedTechnologies).toEqual([]);
  });

  it('should handle a list of technologies', () => {
    const technologies = [
      'Vue.js',
      'Microservices',
      'Python',
      'Webpack',
      'MongoDB',
      'React',
      'Microsoft SQL Server',
      'npm',
      'Docker',
      'Jest',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Cypress',
      'Git',
      'Grafana',
      'Prometheus',
      'MVVM',
    ];
    const resultingOrder = sortTechnologies(technologies, mockTechnologies);
    const expectedOrder = [
        'Vue.js',
        'React',
        'Python',
        'JavaScript',
        'MongoDB',
        'Microsoft SQL Server',
        'Webpack',
        'npm',
        'Docker',
        'Git',
        'Jest',
        'Cypress',
        'Grafana',
        'Prometheus',
        'Microservices',
        'MVVM',
        'Node.js',
        'TypeScript',
    ];
    expect(resultingOrder).toEqual(expectedOrder)
  });
});